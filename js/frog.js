
//init the scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//frog scene graph

//torso
var torso = new THREE.Geometry();
var pi = Math.PI;
var r36 = (36 * pi) / 180;
var r72 = (72 * pi) / 180;
//vertices of torso
torso.vertices.push(new THREE.Vector3(Math.cos(r36),0,Math.sin(r36)));
torso.vertices.push(new THREE.Vector3(-Math.cos(r72),0,Math.sin(r72)));
torso.vertices.push(new THREE.Vector3(-1,0,0));
<<<<<<< HEAD
torso.vertices.push(new THREE.Vector3(- Math.cos(r72),0,- Math.sin(r72)));
torso.vertices.push(new THREE.Vector3(- Math.cos(Math.cos(r36),0,- Math.sin(r36))));
=======
torso.vertices.push(new THREE.Vector3(-Math.cos(r72),0,-Math.sin(r72)));
torso.vertices.push(new THREE.Vector3(Math.cos(r36),0,-Math.sin(r36)));
>>>>>>> 808a4bde22009e5e3aff4397cb5035dda3c2ecc9
torso.vertices.push(new THREE.Vector3(0,0.5,0));
torso.vertices.push(new THREE.Vector3(0,-0.5,0));
//faces of torso
torso.faces.push(new THREE.Face3(1,0,5));
torso.faces.push(new THREE.Face3(0,4,5));
torso.faces.push(new THREE.Face3(4,3,5));
torso.faces.push(new THREE.Face3(3,2,5));
torso.faces.push(new THREE.Face3(2,1,5));
torso.faces.push(new THREE.Face3(1,0,6));
torso.faces.push(new THREE.Face3(0,4,6));
torso.faces.push(new THREE.Face3(4,3,6));
torso.faces.push(new THREE.Face3(3,2,6));
torso.faces.push(new THREE.Face3(2,6,1));

//head
var head = new THREE.Geometry();
head.vertices.push(new THREE.Vector3(-0.5,0,0));
head.vertices.push(new THREE.Vector3(0,0,0.25));
head.vertices.push(new THREE.Vector3(0.5,0,0));
head.vertices.push(new THREE.Vector3(0,0,-0.25));
head.vertices.push(new THREE.Vector3(0,0.25,0));
head.vertices.push(new THREE.Vector3(0,-0.25,0));

//faces for diamond
head.faces.push(new THREE.Face3(0,1,4));
head.faces.push(new THREE.Face3(4,1,2));
head.faces.push(new THREE.Face3(1,5,2));
head.faces.push(new THREE.Face3(1,0,5));
head.faces.push(new THREE.Face3(0,3,4));
head.faces.push(new THREE.Face3(4,3,2));
head.faces.push(new THREE.Face3(3,5,2));
head.faces.push(new THREE.Face3(0,1,5));



var material = new THREE.MeshBasicMaterial({color:0x00ff00});
var object = new THREE.Mesh(torso, material);
var object2 = new THREE.Mesh(head, material);

object2.position.x = 1.309;

scene.add(object)
scene.add(object2)

var axes = new THREE.AxesHelper(5);
var axes2 = new THREE.AxesHelper(5);
object.add(axes);
object2.add(axes2);




camera.position.z = 5;

//render the scene
renderer.render(scene,camera);
