import * as  TH from 'three'
import { Vector2 } from 'three';
import fontJson from './font.json'
import { TextGeometry, TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry'
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls';
import { animateTime, BOX_WIDTH, cubeColors, insideCubeRatio, isDebugMode, isMobile, LEAST_VECTOR_LENGTH_TO_ROTATE } from './const'
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader';
type TDirection = "clockwise" | 'counterclockwise'
interface IDoRotate {
    axis: TAxis,
    direction: TDirection
    axisPosition: number
}
interface IPosition {
    x: number, y: number, z: number
}
interface IMouseCoord { x: number, y: number }
type TAxis = keyof IPosition
interface ITempContainerForMouseDown {
    mouseStartPosition?: IMouseCoord
    mouseTrackVector?: TH.Vector2
    axisOfTouchedFace?: TAxis
    positionOfTouchedCube?: IPosition
    mouseVectorLineObj?: TH.Line<TH.BufferGeometry, TH.LineBasicMaterial>
}
class MouseEventManager {
    raycaster: TH.Raycaster
    controls!: ArcballControls
    domEl: HTMLCanvasElement
    mouseXY: IMouseCoord
    render: () => void
    tempContainerForMouseDown!: ITempContainerForMouseDown
    constructor(
        private app: App, private getIsAnimating: () => boolean) {
        this.mouseXY = { x: 0, y: 0 }
        this.tempContainerForMouseDown = {}
        this.domEl = this.app.renderer.domElement
        this.raycaster = new TH.Raycaster();
        this.render = this.app.render.bind(this.app)
        this.initEventListener()
        this.initControl()
    }
    initControl() {
        this.controls = new ArcballControls(this.app.camera, this.domEl, this.app.scene)
        this.controls.enableZoom = false
        this.controls.addEventListener('change', this.render)
        this.stopControl()
        this.controls.setGizmosVisible(false)
    }
    getIntersectObjects(mouseCoord: IMouseCoord) {
        this.raycaster.setFromCamera(mouseCoord, this.app.camera)
        const objectInScene = this.app.scene.children
        return this.raycaster.intersectObjects(objectInScene, false);
    }
    getFirstClickedCube(intersectObjects: TH.Intersection<TH.Object3D<TH.Event>>[]) {
        if (intersectObjects.length === 0) {
            return null
        }
        for (let index = 0; index < intersectObjects.length; index++) {
            const item = intersectObjects[index];
            if (item?.object.name === 'cube') {
                return item.object
            }
        }
        return null
    }
    onMouseDown() {
        if (this.getIsAnimating()) {
            return
        }
        const mouseCoordInScene = { x: this.mouseXY.x, y: this.mouseXY.y }
        this.tempContainerForMouseDown.mouseStartPosition = mouseCoordInScene
        const intersectObjects = this.getIntersectObjects(mouseCoordInScene)
        if (intersectObjects.length === 0) {  // outside cube
            this.startControl()
            return
        }
        const clickedCube = this.getFirstClickedCube(intersectObjects)
        if (!clickedCube) {
            return
        }
        const cubePositionType = Cube.getCubePositionType(clickedCube.position)
        if (cubePositionType === 'center') {
            return
        }
        const axisOfTouchedFace = Cube.getAxisByPointPosition(intersectObjects[0].point)  //which face clicked, x , y, z
        this.tempContainerForMouseDown.axisOfTouchedFace = axisOfTouchedFace
        this.tempContainerForMouseDown.positionOfTouchedCube = clickedCube.position
        const bindDoCubeRotateWhenMouseUp = this.doCubeRotateWhenMouseUp.bind(this)
        if (isMobile) {
            this.domEl.addEventListener('touchend', bindDoCubeRotateWhenMouseUp, { once: true })
        } else {
            this.domEl.addEventListener('mouseup', bindDoCubeRotateWhenMouseUp, { once: true })
        }
    }
    doCubeRotateWhenMouseUp() {
        const mouseCoordInScene = { x: this.mouseXY.x, y: this.mouseXY.y }
        const { mouseTrackvector } =
            this.getMouseTrackVector(mouseCoordInScene, this.tempContainerForMouseDown.mouseStartPosition as IPosition)
        const rotateData = this.getCubeRotateData(mouseTrackvector)
        this.app.cube.doRotate(rotateData)
    }
    getCubeRotateData(mouseTrackvector: TH.Vector2) {
        const axisLineVectorToScreen = this.getAxisLineVectorToScreenVector(this.app.camera)
        const excludeAxis = this.tempContainerForMouseDown.axisOfTouchedFace
        const touchedCubePosition = this.tempContainerForMouseDown.positionOfTouchedCube as IPosition
        const targetAxisToRotate = this.getAxisToRotate(axisLineVectorToScreen, mouseTrackvector, excludeAxis as TAxis)
        const rotateData = {
            axis: targetAxisToRotate.axis,
            axisPosition: touchedCubePosition[targetAxisToRotate.axis],
            direction: targetAxisToRotate.direction
        } as IDoRotate
        return rotateData
    }
    getAxisToRotate(axisVector: {
        x: TH.Vector2;
        y: TH.Vector2;
        z: TH.Vector2;
    }, mouseTrackVector: TH.Vector2, excludeAxis: TAxis) {
        const dotData = [
            { axis: 'x', dotAbs: 0, cross: 0 },
            { axis: 'y', dotAbs: 0, cross: 0 },
            { axis: 'z', dotAbs: 0, cross: 0 }
        ] as { axis: TAxis, dotAbs: number, cross: number }[]
        const init = dotData
            .filter(d => d.axis !== excludeAxis) //axis of clicked face not rotate
            .map(item => {
                const dot = mouseTrackVector.dot(axisVector[item.axis])
                const dotAbs = Math.abs(dot)
                const cross = mouseTrackVector.cross(axisVector[item.axis])
                return {
                    axis: item.axis, dotAbs, cross
                }
            })
        const sortAbs = init.sort((item1, item2) => item1.dotAbs - item2.dotAbs) // find min abs of dot product => the most vertical axis
        const target = sortAbs[0]
        const axis = target.axis
        const direction = target.cross > 0 ? 'counterclockwise' : 'clockwise'
        return {
            axis,
            direction
        }
    }
    //TODO
    getAxisLineVectorToScreenVector(camera: TH.PerspectiveCamera) {
        const _fn = (vector: [number, number, number]) => {
            const v3 = new TH.Vector3(...vector).project(camera);
            const v2 = new TH.Vector2(v3.x, v3.y).normalize();
            return v2
        }
        return {
            x: _fn([1, 0, 0]),
            y: _fn([0, 1, 0]),
            z: _fn([0, 0, 1]),
        }
    }
    getMouseTrackVector(mouseEndPosition: IMouseCoord, mouseStartPosition: IMouseCoord) {
        const vector = new Vector2(
            mouseEndPosition.x - mouseStartPosition.x,
            mouseEndPosition.y - mouseStartPosition.y
        )
        return {
            mouseTrackvectorLength: vector.length(),
            mouseTrackvector: vector
        }
    }
    stopControl() {
        this.controls.enabled = false
    }
    startControl() {
        this.controls.enabled = true
    }
    setMousePosition(e: MouseEvent) {
        this.mouseXY = {
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: - (e.clientY / window.innerHeight) * 2 + 1,
        }
    }
    onMobileTouchDown(e: TouchEvent) {
        this.onMobileMoveTouch(e)
        this.onMouseDown()
    }
    onMobileMoveTouch(e: TouchEvent) {
        e.preventDefault();
        if (e.touches.length === 1) {
            const touch = e.touches[0]; // 取得第一個觸點
            this.mouseXY = {
                x: (touch.clientX / window.innerWidth) * 2 - 1,
                y: -(touch.clientY / window.innerHeight) * 2 + 1,
            };
        }
    }
    initEventListener() {
        const bindMouseDown = this.onMouseDown.bind(this)
        const bindStopControl = this.stopControl.bind(this)
        const bindSetMousePosition = this.setMousePosition.bind(this)

        const bindSetMobileTouchDown = this.onMobileTouchDown.bind(this)
        const bindSetMobileTouchPosition = this.onMobileMoveTouch.bind(this)
        if (isMobile) {
            this.domEl.addEventListener('touchstart', bindSetMobileTouchDown, { capture: false, passive: false });
            this.domEl.addEventListener('touchend', bindStopControl, false);
            this.domEl.addEventListener('touchmove', bindSetMobileTouchPosition, false);
        } else {
            this.domEl.addEventListener('mousedown', bindMouseDown, false);
            this.domEl.addEventListener('mouseup', bindStopControl, false)
            this.domEl.addEventListener('mousemove', bindSetMousePosition, false)
        }
    }
}
class Cube {
    insideCubeColor: TH.MeshBasicMaterial[]
    group: TH.Group
    animateCubeGroup?: TH.Group
    constructor(
        private scene: THREE.Scene,
        private setMixer: (mixer: TH.AnimationMixer) => void,
        private cleanMixer: (object: TH.Group) => void,
        private setIsAnimating: (status: boolean) => void,
    ) {
        this.group = new TH.Group()
        this.insideCubeColor = cubeColors.map(color => new TH.MeshBasicMaterial({ color }))
        this.initBox()
    }
    static zeroCountInPosition(position: IPosition) {
        const { x, y, z } = position
        let counter = 0
        if (z === 0) counter += 1
        if (y === 0) counter += 1
        if (x === 0) counter += 1
        return counter
    }
    static getAxisByPointPosition(position: IPosition) {
        const entry = Object.entries(position)
        entry.forEach(d => d[1] = Math.abs(d[1]))
        const findMax = entry.sort((p1, p2) => p2[1] - p1[1])
        return findMax[0][0] as TAxis
    }
    static getCubePositionType(position: IPosition) {
        const zeroCount = Cube.zeroCountInPosition(position)
        if (zeroCount === 3) {
            return 'center'
        }
        if (zeroCount === 2) {
            return 'face'
        }
        if (zeroCount === 1) {
            return 'side'
        }
        return 'corner'
    }
    createCell() {
        const geometry = new TH.BoxGeometry(BOX_WIDTH, BOX_WIDTH, BOX_WIDTH);
        const material = new TH.MeshBasicMaterial({ opacity: 0, transparent: true })
        const cube = new TH.Mesh(geometry, material);
        const insideCubeGeometry = new TH.BoxGeometry(BOX_WIDTH * insideCubeRatio, BOX_WIDTH * insideCubeRatio, BOX_WIDTH * insideCubeRatio);
        const insideCube = new TH.Mesh(insideCubeGeometry, this.insideCubeColor);
        insideCube.name = 'insideCube'
        cube.add(insideCube)
        return cube
    }
    doRotate(doRotateData: IDoRotate) {
        this.setIsAnimating(true)
        const targetCubeGroup = this.getCubeGroup(doRotateData.axis, doRotateData.axisPosition)
        if (targetCubeGroup === 'error') {
            this.setIsAnimating(false)
            return
        }
        this.animateRotate(targetCubeGroup, doRotateData.axis, doRotateData.direction)
    }
    fixPosition(position: IPosition) {
        const fixedPosition = [position.x, position.y, position.z]
            .map(axis => {
                if (0.5 < axis && axis <= 1.5) {
                    return 1
                } else if (-0.5 < axis && axis <= 0.5) {
                    return 0
                } else if (-1.5 <= axis && axis <= -0.5) {
                    return -1
                }
            })
        return {
            x: fixedPosition[0], y: fixedPosition[1], z: fixedPosition[2]
        } as IPosition
    }
    getFixedQuaternion(quat: TH.Quaternion) {
        const clone = quat.clone()
        const fixed = [clone.x, clone.y, clone.z, clone.w]
            .map(q => {
                if (0.8 < q && q <= 1) {
                    return 1
                } else if (0.6 <= q && q <= 0.8) {
                    return 0.707
                } else if (0.2 < q && q <= 0.6) {
                    return 0.5
                } else if (-0.2 < q && q <= 0.2) {
                    return 0
                } else if (-0.6 < q && q <= -0.2) {
                    return -0.5
                } else if (-0.8 < q && q <= -0.6) {
                    return -0.707
                } else if (-1 <= q && q <= -0.8) {
                    return -1
                }
            })
        return new TH.Quaternion(fixed[0], fixed[1], fixed[2], fixed[3])
    }
    animateRotate(cubeGroup: TH.Group, axis: TAxis, direction: TDirection) {
        const deg = (Math.PI / 2) * (direction === 'clockwise' ? -1 : 1)
        const mixer = new TH.AnimationMixer(cubeGroup)
        const time = [0, animateTime]
        const rotateVector = axis === 'x' ? new TH.Vector3(1, 0, 0) : axis === 'y' ? new TH.Vector3(0, 1, 0) : new TH.Vector3(0, 0, 1)
        const rotateQ = new TH.Quaternion().setFromAxisAngle(rotateVector, deg)
        const originQ = cubeGroup.quaternion
        const rotateKF = new TH.KeyframeTrack('.quaternion', time, [originQ.x, originQ.y, originQ.z, originQ.w, rotateQ.x, rotateQ.y, rotateQ.z, rotateQ.w])
        const clip = new TH.AnimationClip('rotateGroup', animateTime, [rotateKF])
        const action = mixer.clipAction(clip)
        this.setMixer(mixer)
        const whenFinished = () => {
            const arr = [] as TH.Object3D<TH.Event>[]
            cubeGroup.children.forEach(c => {
                const wp = c.getWorldPosition(new TH.Vector3())
                const { x, y, z } = this.fixPosition(wp)
                c.position.setX(x)
                c.position.setY(y)
                c.position.setZ(z)
                const wq = c.getWorldQuaternion(new TH.Quaternion())
                const fixedQ = this.getFixedQuaternion(wq)
                c.quaternion.x = fixedQ.x
                c.quaternion.y = fixedQ.y
                c.quaternion.z = fixedQ.z
                c.quaternion.w = fixedQ.w
                arr.push(c)
            })
            this.scene.add(...arr)
            this.cleanMixer(cubeGroup)
            this.scene.remove(cubeGroup)
            mixer.removeEventListener('finished', whenFinished)
            this.setIsAnimating(false)
        }
        mixer.addEventListener('finished', whenFinished)
        action.setLoop(TH.LoopOnce, 1)
        action.play()
    }
    getCubeGroup(axis: TAxis, axisCoord: number) {
        const group = new TH.Group()
        group.name = 'cubeGroup'
        this.scene.add(group)
        const arr = [] as TH.Object3D[]
        this.scene.children.forEach(item => {
            if (item.position[axis] === axisCoord && item.name === 'cube') {
                arr.push(item)
            }
        })
        if (arr.length !== 9) {
            return 'error'
        }
        arr.forEach(item => group.add(item))
        return group
    }
    initBox() {
        for (let z = 0; z < 3; z++) {
            for (let y = 0; y < 3; y++) {
                for (let x = 0; x < 3; x++) {
                    const cubeCell = this.createCell()
                    cubeCell.name = 'cube'
                    cubeCell.position.setX(x - 1)
                    cubeCell.position.setY(y - 1)
                    cubeCell.position.setZ(z - 1)
                    this.scene.add(cubeCell)
                }
            }
        }
    }
}
class AxisLine {  // for test
    xLine: TH.Line
    yLine: TH.Line
    zLine: TH.Line
    xChar: TH.Mesh<TextGeometry, TH.MeshBasicMaterial>
    yChar: TH.Mesh<TextGeometry, TH.MeshBasicMaterial>
    zChar: TH.Mesh<TextGeometry, TH.MeshBasicMaterial>
    constructor(
        private scene: TH.Scene) {
        const fontConfig: TextGeometryParameters = {
            font: new Font(fontJson),
            size: 1,
            height: 0.1
        }
        this.xChar = this.createChar('x', fontConfig)
        this.yChar = this.createChar('y', fontConfig)
        this.zChar = this.createChar('z', fontConfig)
        this.xLine = this.createLine('x')
        this.yLine = this.createLine('y')
        this.zLine = this.createLine('z')
    }
    createChar(char: 'x' | 'y' | 'z', fontConfig: TextGeometryParameters) {
        const color = (() => {
            if (char === 'x') {
                return 0x00ff00
            } else if (char === 'y') {
                return 0xff0000
            } else {
                return 0x0000ff
            }
        })()
        const textGeometry = new TextGeometry(char, fontConfig)
        textGeometry.center()
        const material = new TH.MeshBasicMaterial({ color });
        const mesh = new TH.Mesh(textGeometry, material);
        mesh.position.x = char === 'x' ? 5 : 0
        mesh.position.y = char === 'y' ? 5 : 0
        mesh.position.z = char === 'z' ? 5 : 0
        this.scene.add(mesh)
        return mesh
    }
    setCharsLookAtCamara(cameraRotation: TH.Euler) {
        this.xChar.setRotationFromEuler(cameraRotation)
        this.yChar.setRotationFromEuler(cameraRotation)
        this.zChar.setRotationFromEuler(cameraRotation)

    }
    createLine(axis: TAxis) {
        const points = []
        let color
        points.push(new TH.Vector3(0, 0, 0))
        switch (axis) {
            case 'x':
                color = 0x00ff00
                points.push(new TH.Vector3(5, 0, 0))
                break;
            case 'y':
                color = 0xff0000
                points.push(new TH.Vector3(0, 5, 0))
                break;
            case 'z':
                color = 0x0000ff
                points.push(new TH.Vector3(0, 0, 5))
                break;
        }
        const geometry = new TH.BufferGeometry().setFromPoints(points)
        const material = new TH.LineBasicMaterial({ linewidth: 1, color, opacity: 0 });
        const line = new TH.Line(geometry, material)
        this.scene.add(line)
        return line
    }
}
export class App {
    scene: TH.Scene
    camera: TH.PerspectiveCamera
    renderer: TH.WebGLRenderer;
    cube: Cube
    axisLine?: AxisLine
    clock: TH.Clock
    isAnimating: boolean
    mouseEventManager: MouseEventManager
    mixer?: TH.AnimationMixer
    constructor() {
        this.isAnimating = false
        this.clock = new TH.Clock()
        this.renderer = this.setInitRenderer()
        this.scene = this.setInitScene()
        this.camera = this.setInitCamera()
        this.appendDOM(this.renderer.domElement)
        this.mouseEventManager = this.setInitMouseEventManager()
        this.cube = this.setInitCube()
        this.axisLine = isDebugMode ? new AxisLine(this.scene) : undefined
        this.animate()
    }
    setInitMouseEventManager() {
        const bindIsAnimating = this.getIsAnimating.bind(this)
        const instance = new MouseEventManager(this, bindIsAnimating)
        return instance
    }
    setMixer(mixer: TH.AnimationMixer) {
        this.mixer = mixer
    }
    cleanMixer(object: TH.Object3D) {
        if (!this.mixer) {
            return
        }
        this.mixer.stopAllAction()
        this.mixer.uncacheRoot(object)
    }
    setIsAnimating(status: boolean) {
        this.isAnimating = status
    }
    getIsAnimating() {
        return this.isAnimating
    }
    animate() {
        const self = this
        requestAnimationFrame(() => {
            self.animate()
        });
        if (self.axisLine) {
            self.axisLine.setCharsLookAtCamara(self.camera.rotation)
        }
        self.render()
        if (self.mixer) {
            self.mixer.update(self.clock.getDelta())
        }
    }
    render() {
        this.renderer.render(this.scene, this.camera);
    }
    setInitCube() {
        const bindSetMixer = this.setMixer.bind(this)
        const bindCleanMixer = this.cleanMixer.bind(this)
        const bindSetIsAnimating = this.setIsAnimating.bind(this)
        return new Cube(this.scene, bindSetMixer, bindCleanMixer, bindSetIsAnimating)
    }
    setInitScene() {
        return new TH.Scene()
    }
    setInitCamera() {
        const camera = new TH.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 6
        camera.position.x = 6
        camera.position.y = 6
        camera.lookAt(this.scene.position)
        camera.updateMatrixWorld();
        return camera
    }
    setInitRenderer() {
        const renderer = new TH.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(new TH.Color(0xffffff))
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.listenResize()
        return renderer
    }
    appendDOM(domElement: HTMLCanvasElement) {
        document.body.appendChild(domElement);
    }
    listenResize() {
        window.addEventListener('resize', () => {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        })
    }
}