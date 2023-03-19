import * as  TH from 'three'
import { Vector2 } from 'three';
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls';
import { BOX_WIDTH, cubeColors, insideCubeRatio, LEAST_VECTOR_LENGTH_TO_ROTATE } from './const'
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
class RotateClip {
    static angle() {
        return Math.PI / 2
    }
    static byYAxis() {
        const axis = new TH.Vector3(0, 1, 0)
        const position = new TH.Vector3().applyAxisAngle(axis, this.angle())
        const rotate = new TH.Quaternion().setFromAxisAngle(axis, this.angle())
        const positionKF = new TH.VectorKeyframeTrack('.position', [0, 1], [])
        // const rotateKF = 
    }
}
class MouseEventManager {
    raycaster: TH.Raycaster
    controls!: ArcballControls
    domEl: HTMLCanvasElement
    mouseXY: IMouseCoord
    render: () => void
    tempContainerForMouseDown!: ITempContainerForMouseDown
    constructor(
        private app: App) {
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
        this.controls.addEventListener('change', this.render)
        this.controls.enabled = false
        this.controls.setGizmosVisible(false)
    }
    getIntersectObjects(mouseCoord: IMouseCoord) {
        this.raycaster.setFromCamera(mouseCoord, this.app.camera)
        const objectInScene = this.app.scene.children
        return this.raycaster.intersectObjects(objectInScene, false);
    }
    // createMouseVectorLineObj(startMouseCoord: IMouseCoord) {
    //     const points = [
    //         new TH.Vector2(startMouseCoord.x, startMouseCoord.y),
    //         new TH.Vector2(startMouseCoord.x, startMouseCoord.y)]
    //     const geometry = new TH.BufferGeometry().setFromPoints(points)
    //     const material = new TH.LineBasicMaterial({ linewidth: 511, color: new TH.Color(0xffff12) });
    //     const line = new TH.Line(geometry, material)
    //     this.app.scene.add(line)
    //     this.render()
    //     // console.log(124)
    //     return line
    // }
    // setLinePoints(e: MouseEvent) {
    //     const start = this.tempContainerForMouseDown.mouseStartPosition as IMouseCoord
    //     const end = { x: this.mouseXY.x, y: this.mouseXY.y }
    //     const line = this.tempContainerForMouseDown.mouseVectorLineObj as TH.Line<TH.BufferGeometry, TH.LineBasicMaterial>
    //     line.geometry.setFromPoints([new TH.Vector2(start.x, start.y), new TH.Vector2(end.x, end.y)])
    //     this.render()
    // }
    onMouseDown(e: MouseEvent) {
        const mouseCoordInScene = { x: this.mouseXY.x, y: this.mouseXY.y }
        this.tempContainerForMouseDown.mouseStartPosition = mouseCoordInScene
        // this.tempContainerForMouseDown.mouseVectorLineObj = this.createMouseVectorLineObj(mouseCoordInScene)
        // const self = this
        // const bindSetLinePoints = this.setLinePoints.bind(this)
        // this.domEl.addEventListener('mousemove', bindSetLinePoints)
        // this.domEl.addEventListener('mouseup', () =>
        //     self.domEl.removeEventListener('mousemove', bindSetLinePoints), { once: true })
        // this.domEl.addEventListener('mouseup', () =>
        //     this.tempContainerForMouseDown.mouseVectorLineObj?.removeFromParent()
        //     , { once: true })

        const intersectObjects = this.getIntersectObjects(mouseCoordInScene)
        if (intersectObjects.length === 0) {  // outside cube
            this.controls.enabled = true
            return
        }
        const clickedCube = intersectObjects[0].object
        const cubePositionType = Cube.getCubePositionType(clickedCube.position)
        if (cubePositionType === 'center') {
            return
        }
        const axisOfTouchedFace = Cube.getAxisByPointPosition(intersectObjects[0].point)  //which face clicked, x , y, z
        this.tempContainerForMouseDown.axisOfTouchedFace = axisOfTouchedFace
        this.tempContainerForMouseDown.positionOfTouchedCube = clickedCube.position
        // this.domEl.addEventListener('mousemove', bindDoCubeRotateWhenMouseUp)
        // this.domEl.addEventListener
        const bindDoCubeRotateWhenMouseUp = this.doCubeRotateWhenMouseUp.bind(this)
        this.domEl.addEventListener('mouseup', bindDoCubeRotateWhenMouseUp, { once: true })
    }
    doCubeRotateWhenMouseUp() {
        const mouseCoordInScene = { x: this.mouseXY.x, y: this.mouseXY.y }
        const { mouseTrackvector, mouseTrackvectorLength } =
            this.getMouseTrackVector(mouseCoordInScene, this.tempContainerForMouseDown.mouseStartPosition as IPosition)
        // if (mouseTrackvectorLength < LEAST_VECTOR_LENGTH_TO_ROTATE) {
        //     console.log('not pass least vector length')
        //     return
        // }
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
    // getAxisToRotate(axisVector: {
    //     x: TH.Vector2;
    //     y: TH.Vector2;
    //     z: TH.Vector2;
    // }, mouseTrackVector: TH.Vector2, excludeAxis: TAxis) {
    //     const dotData = [
    //         { axis: 'x', dotAbs: 0, abs: 0 ,sin:0},
    //         { axis: 'y', dot: 0, abs: 0 ,sin:0},
    //         { axis: 'z', dot: 0, abs: 0 ,sin:0}
    //     ] as { axis: TAxis, dot: number, abs: number ,sin:number}[]
    //     const init = dotData
    //         .map(d => {
    //             const _d = d
    //             _d.dot = mouseTrackVector.dot(axisVector[d.axis])
    //             _d.abs = Math.abs(d.dot)
    //             return _d
    //         })
    //     console.log('rotateData',init.map)
    //     const filterExcludeAxis = init.filter(d => d.axis !== excludeAxis) //axis of clicked face not rotate
    //     const sortAbs = filterExcludeAxis.sort((d1, d2) => d1.abs - d2.abs) // find min abs of dot product => the most vertical axis
    //     const target = sortAbs[0]
    //     const decideDirection = (_target: typeof target) => {
    //         const _direction = _target.dot < 0 ? 'clockwise' : 'counterclockwise'
    //         if (_target.axis === 'z') {
    //             _direction === 'clockwise' ? 'counterclockwise' : 'clockwise'
    //         }
    //         return _direction
    //     }
    //     return {
    //         axis: target.axis,
    //         direction: decideDirection(target)
    //     }
    // }

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
    setMousePosition(e: MouseEvent) {
        this.mouseXY = {
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: - (e.clientY / window.innerHeight) * 2 + 1,
        }
    }
    initEventListener() {
        const bindDown = this.onMouseDown.bind(this)
        const bindStopControl = this.stopControl.bind(this)
        const bindSetMousePosition = this.setMousePosition.bind(this)
        this.domEl.addEventListener('mousedown', bindDown, false);
        this.domEl.addEventListener('mouseup', bindStopControl, false)
        this.domEl.addEventListener('mousemove', bindSetMousePosition, false)
    }
}
class Cube {
    insideCubeColor: TH.MeshBasicMaterial[]
    group: TH.Group
    constructor(private scene: THREE.Scene, private render: () => void) {
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
    doRotate(doRotateData: IDoRotate) { //TODO
        const targetCubeArray = this.getCubeList(doRotateData.axis, doRotateData.axisPosition)
        this.doRotateByCubeArray(targetCubeArray, doRotateData.axis, doRotateData.direction) //step2
        this.render()
    }
    doRotateAnimation(cubeGroup: TH.Object3D<TH.Event>[], axis: TAxis, direction: TDirection) {
        // const tracks = new TH.QuaternionKeyframeTrack('rotate2')
        const clip = new TH.AnimationClip('rotate', 3000,)

    }
    fixPosition(position: IPosition) {
        const fixedPosition = [position.x, position.y, position.z]
            .map(axis => {
                if (axis < 0.000001 && axis > -0.000001) {
                    return 0
                } else if (axis > 0.0999999 && axis < 1.001111) {
                    return 1
                } else if (axis < -0.0999999 && axis > -1.001111) {
                    return -1
                }
            })
        return {
            x: fixedPosition[0], y: fixedPosition[1], z: fixedPosition[2]
        } as IPosition
    }
    doRotateByCubeArray(cubeGroup: TH.Object3D<TH.Event>[], axis: TAxis, direction: TDirection) {
        const deg = (Math.PI / 2) * (direction === 'clockwise' ? -1 : 1)
        switch (axis) {
            case 'z':
                cubeGroup.forEach(c => {
                    c.applyMatrix4(new TH.Matrix4().makeRotationAxis(new TH.Vector3(0, 0, 1), deg))
                    const newPosition = this.fixPosition(c.position)
                    c.position.x = newPosition.x
                    c.position.y = newPosition.y
                    c.position.z = newPosition.z
                })
                break;
            case 'y':
                cubeGroup.forEach(c => {
                    c.applyMatrix4(new TH.Matrix4().makeRotationAxis(new TH.Vector3(0, 1, 0), deg))
                    const newPosition = this.fixPosition(c.position)
                    c.position.x = newPosition.x
                    c.position.y = newPosition.y
                    c.position.z = newPosition.z
                })
                break;
            case 'x':
                cubeGroup.forEach(c => {
                    c.applyMatrix4(new TH.Matrix4().makeRotationAxis(new TH.Vector3(1, 0, 0), deg))
                    const newPosition = this.fixPosition(c.position)
                    c.position.x = newPosition.x
                    c.position.y = newPosition.y
                    c.position.z = newPosition.z
                })
                break;
        }
    }
    getCubeList(axis: TAxis, axisCoord: number) {
        const array = [] as TH.Object3D<TH.Event>[]
        this.scene.children.forEach(obj => {
            if (obj.position[axis] === axisCoord && obj.name === 'cube') {
                array.push(obj)
            }
        })
        return array
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
class AxisLine {
    xLine: TH.Line
    yLine: TH.Line
    zLine: TH.Line
    constructor(
        private scene: TH.Scene,) {
        this.xLine = this.createLine('x')
        this.yLine = this.createLine('y')
        this.zLine = this.createLine('z')
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
        const material = new TH.LineBasicMaterial({ linewidth: 1, color });
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
    mouseEventManager: MouseEventManager
    constructor() {
        this.renderer = this.setInitRenderer()
        this.scene = this.setInitScene()
        this.camera = this.setInitCamera()
        this.appendDOM(this.renderer.domElement)
        this.cube = this.setInitCube()
        this.mouseEventManager = new MouseEventManager(this)
        // this.axisLine = new AxisLine(this.scene)
        this.animate()
    }
    animate() {
        const self = this
        requestAnimationFrame(self.animate);
        self.render()
    }
    render() {
        this.renderer.render(this.scene, this.camera);
    }
    setInitCube() {
        return new Cube(this.scene, this.render.bind(this))
    }
    setInitScene() {
        return new TH.Scene()
    }
    setInitCamera() {
        const camera = new TH.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 5
        camera.position.x = 5
        camera.position.y = 5
        camera.lookAt(this.scene.position)
        camera.updateMatrixWorld();
        return camera
    }
    setInitRenderer() {
        const renderer = new TH.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(new TH.Color(0xffffff))
        renderer.setSize(window.innerWidth, window.innerHeight);
        return renderer
    }
    appendDOM(domElement: HTMLCanvasElement) {
        document.body.appendChild(domElement);
    }
}