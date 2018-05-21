
var scene = new THREE.Scene();
var scene2 = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x404040, 1);
document.body.appendChild(renderer.domElement);

function createScene(scene){
 scene = new THREE.Scene();
}


//createFilledMode();
//createFrameMode();
/* **
function init(scene) {

renderer.render(scene,camera);

var controls = new THREE.TrackballControls(camera);
controls.addEventListener('change', render);

render(scene);
requestAnimationFrame(animate);
controls.update();

}**/

function init(scene){

render(scene);

var controls = new THREE.TrackballControls(camera);
controls.addEventListener('change', render);
animate();

function render(scene) {
    renderer.render(scene, camera);
}

function animate() {
    render(scene);
    requestAnimationFrame(animate);
    controls.update();
}

} 
