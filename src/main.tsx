import WebGL from "three/examples/jsm/capabilities/WebGL"
import { App } from './App'
if (WebGL.isWebGL2Available()) {
    new App()
} else {
    alert('瀏覽器不支持webgl')
}