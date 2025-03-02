import MobileDetect from "mobile-detect"

export const BOX_WIDTH = 1
export const BOX_INTERVAL = 0.02
export const cameraPosition = {
    x: 0, y: 0, z: 0
}
export const LEAST_VECTOR_LENGTH_TO_ROTATE = 0.2
export const tempRotateVectorLength = 0
export const cubeColors = [
    0xEB0046, 0x4600F5, 0x00ACDB, 0x00F517, 0xDB6500, 0xEBD900]
export const insideCubeRatio = 0.95
export const animateTime = 0.2
export const isMobile = (() => {
    const md = new MobileDetect(window.navigator.userAgent);
    return md.mobile() !== null
})()
export const isDebugMode = (() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('debug') === 'true'
})()