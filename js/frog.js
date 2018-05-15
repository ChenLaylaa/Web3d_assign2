/*
 * cube.js
 * A simple Three.js program which draws a cube
 */

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x404040, 1);
document.body.appendChild(renderer.domElement);

//frog scene graph
createTorso();
createHead();
createFLLeg();
createFRLeg();

render();

var controls = new THREE.TrackballControls(camera);
controls.addEventListener('change', render);
animate();

function render() {
    renderer.render(scene, camera);
}

function animate() {
    render();
    requestAnimationFrame(animate);
    controls.update();
}

function createTorso(){

  //torso
  var torso = new THREE.Geometry();
  var pi = Math.PI;
  var r36 = (36 * pi) / 180;
  var r72 = (72 * pi) / 180;


  //vertices of torso
  torso.vertices.push(new THREE.Vector3(-1,0,0));
  torso.vertices.push(new THREE.Vector3(- Math.cos(r72),0,Math.sin(r72)));
  torso.vertices.push(new THREE.Vector3(Math.cos(r36),0, Math.sin(r36)));
  torso.vertices.push(new THREE.Vector3(Math.cos(r36),0,- Math.sin(r36)));
  torso.vertices.push(new THREE.Vector3(- Math.cos(r72),0,- Math.sin(r72)));
  torso.vertices.push(new THREE.Vector3(0,0.5,0));
  torso.vertices.push(new THREE.Vector3(0,-0.5,0));



  //faces of torso
  torso.faces.push(new THREE.Face3(0,1,5));
  torso.faces.push(new THREE.Face3(1,2,5));
  torso.faces.push(new THREE.Face3(2,3,5));
  torso.faces.push(new THREE.Face3(3,4,5));
  torso.faces.push(new THREE.Face3(0,4,5));
  torso.faces.push(new THREE.Face3(0,1,6));
  torso.faces.push(new THREE.Face3(1,2,6));
  torso.faces.push(new THREE.Face3(2,3,6));
  torso.faces.push(new THREE.Face3(3,4,6));
  torso.faces.push(new THREE.Face3(0,4,6));

  var material = new THREE.MeshBasicMaterial({color:0x00ff00});
  var torso = new THREE.Mesh(torso, material);
  material.side = THREE.DoubleSide;
  scene.add(torso);

  var axes = createAxes(10);
  torso.add(axes);

}

function createHead(){

  //head
  var head = new THREE.Geometry();
  head.vertices.push(new THREE.Vector3(-0.5,0,0));
  head.vertices.push(new THREE.Vector3(0,0,0.25));
  head.vertices.push(new THREE.Vector3(0.5,0,0));
  head.vertices.push(new THREE.Vector3(0,0,-0.25));
  head.vertices.push(new THREE.Vector3(0,0.25,0));
  head.vertices.push(new THREE.Vector3(0,-0.25,0));

  //faces for head
  head.faces.push(new THREE.Face3(0,1,4));
  head.faces.push(new THREE.Face3(4,1,2));
  head.faces.push(new THREE.Face3(1,5,2));
  head.faces.push(new THREE.Face3(1,0,5));
  head.faces.push(new THREE.Face3(0,3,4));
  head.faces.push(new THREE.Face3(4,3,2));
  head.faces.push(new THREE.Face3(3,5,2));
  head.faces.push(new THREE.Face3(0,1,5));

  var material = new THREE.MeshBasicMaterial({color:0x00ff00});
  var head = new THREE.Mesh(head, material);
  material.side = THREE.DoubleSide;

  scene.add(head);

  var axes = createAxes(10);
  head.add(axes);

  head.position.set(1.309, 0, 0);

}

function createFLLeg(){

  //front left leg
  var FLUpLeg = new THREE.Geometry();
  FLUpLeg.vertices.push(new THREE.Vector3(-0.5,0,0));
  FLUpLeg.vertices.push(new THREE.Vector3(0,0,0.25));
  FLUpLeg.vertices.push(new THREE.Vector3(0.5,0,0));
  FLUpLeg.vertices.push(new THREE.Vector3(0,0,-0.25));
  FLUpLeg.vertices.push(new THREE.Vector3(0,0.25,0));
  FLUpLeg.vertices.push(new THREE.Vector3(0,-0.25,0));

  //faces for FLUpLeg
  FLUpLeg.faces.push(new THREE.Face3(0,1,4));
  FLUpLeg.faces.push(new THREE.Face3(4,1,2));
  FLUpLeg.faces.push(new THREE.Face3(1,5,2));
  FLUpLeg.faces.push(new THREE.Face3(1,0,5));
  FLUpLeg.faces.push(new THREE.Face3(0,3,4));
  FLUpLeg.faces.push(new THREE.Face3(4,3,2));
  FLUpLeg.faces.push(new THREE.Face3(3,5,2));
  FLUpLeg.faces.push(new THREE.Face3(0,1,5));

  //front left knee
  var FLLowLeg = new THREE.Geometry();
  FLLowLeg.vertices.push(new THREE.Vector3(-0.5,0,0));
  FLLowLeg.vertices.push(new THREE.Vector3(0,0,0.25));
  FLLowLeg.vertices.push(new THREE.Vector3(0.5,0,0));
  FLLowLeg.vertices.push(new THREE.Vector3(0,0,-0.25));
  FLLowLeg.vertices.push(new THREE.Vector3(0,0.25,0));
  FLLowLeg.vertices.push(new THREE.Vector3(0,-0.25,0));

  //faces for FLLowLeg
  FLLowLeg.faces.push(new THREE.Face3(0,1,4));
  FLLowLeg.faces.push(new THREE.Face3(4,1,2));
  FLLowLeg.faces.push(new THREE.Face3(1,5,2));
  FLLowLeg.faces.push(new THREE.Face3(1,0,5));
  FLLowLeg.faces.push(new THREE.Face3(0,3,4));
  FLLowLeg.faces.push(new THREE.Face3(4,3,2));
  FLLowLeg.faces.push(new THREE.Face3(3,5,2));
  FLLowLeg.faces.push(new THREE.Face3(0,1,5));

  //front left foot
  var FLFoot = new THREE.Geometry();
  var v1 = new THREE.Vector3(0,0,0);
  var v2 = new THREE.Vector3(0.5,0,0.25);
  var v3 = new THREE.Vector3(0.5,0,-0.25);

  FLFoot.vertices.push(v1);
  FLFoot.vertices.push(v2);
  FLFoot.vertices.push(v3);

  FLFoot.faces.push( new THREE.Face3( 0, 1, 2 ) );
  FLFoot.computeFaceNormals();


  var material = new THREE.MeshBasicMaterial({color:0x00ff00});
  var FLUpLeg = new THREE.Mesh(FLUpLeg, material);
  var FLLowLeg = new THREE.Mesh(FLLowLeg, material);
  var FLFoot= new THREE.Mesh( FLFoot,  material);


  FLUpLeg.position.set(1.159, -0.35, -0.588);
  FLLowLeg.position.set(2, -0.70, -0.588);
  FLFoot.position.set(2.5, -0.70,-0.588);


  FLUpLeg.rotation.z = -0.785;

  material.side = THREE.DoubleSide;
  //material.wireframe = true;

  scene.add(FLUpLeg);
  scene.add(FLLowLeg);
  scene.add(FLFoot);



  FLUpLeg.add(createAxes(10));
  FLLowLeg.add(createAxes(10));
  FLFoot.add(createAxes(10));

}

function createFRLeg(){

//front right leg
var FRUpLeg = new THREE.Geometry();
FRUpLeg.vertices.push(new THREE.Vector3(-0.5,0,0));
FRUpLeg.vertices.push(new THREE.Vector3(0,0,0.25));
FRUpLeg.vertices.push(new THREE.Vector3(0.5,0,0));
FRUpLeg.vertices.push(new THREE.Vector3(0,0,-0.25));
FRUpLeg.vertices.push(new THREE.Vector3(0,0.25,0));
FRUpLeg.vertices.push(new THREE.Vector3(0,-0.25,0));

//faces for right leg
FRUpLeg.faces.push(new THREE.Face3(0,1,4));
FRUpLeg.faces.push(new THREE.Face3(4,1,2));
FRUpLeg.faces.push(new THREE.Face3(1,5,2));
FRUpLeg.faces.push(new THREE.Face3(1,0,5));
FRUpLeg.faces.push(new THREE.Face3(0,3,4));
FRUpLeg.faces.push(new THREE.Face3(4,3,2));
FRUpLeg.faces.push(new THREE.Face3(3,5,2));
FRUpLeg.faces.push(new THREE.Face3(0,1,5));

//front left knee
var FRLowLeg = new THREE.Geometry();
FRLowLeg.vertices.push(new THREE.Vector3(-0.5,0,0));
FRLowLeg.vertices.push(new THREE.Vector3(0,0,0.25));
FRLowLeg.vertices.push(new THREE.Vector3(0.5,0,0));
FRLowLeg.vertices.push(new THREE.Vector3(0,0,-0.25));
FRLowLeg.vertices.push(new THREE.Vector3(0,0.25,0));
FRLowLeg.vertices.push(new THREE.Vector3(0,-0.25,0));

//faces for FRLowLeg
FRLowLeg.faces.push(new THREE.Face3(0,1,4));
FRLowLeg.faces.push(new THREE.Face3(4,1,2));
FRLowLeg.faces.push(new THREE.Face3(1,5,2));
FRLowLeg.faces.push(new THREE.Face3(1,0,5));
FRLowLeg.faces.push(new THREE.Face3(0,3,4));
FRLowLeg.faces.push(new THREE.Face3(4,3,2));
FRLowLeg.faces.push(new THREE.Face3(3,5,2));
FRLowLeg.faces.push(new THREE.Face3(0,1,5));

//front left foot
var FRFoot = new THREE.Geometry();
var v1 = new THREE.Vector3(0,0,0);
var v2 = new THREE.Vector3(0.5,0,0.25);
var v3 = new THREE.Vector3(0.5,0,-0.25);

FRFoot.vertices.push(v1);
FRFoot.vertices.push(v2);
FRFoot.vertices.push(v3);

FRFoot.faces.push( new THREE.Face3( 0, 1, 2 ) );
FRFoot.computeFaceNormals();


var material = new THREE.MeshBasicMaterial({color:0x00ff00});
var FRUpLeg = new THREE.Mesh(FRUpLeg, material);
var FRLowLeg = new THREE.Mesh(FRLowLeg, material);
var FRFoot= new THREE.Mesh( FRFoot,  material);


FRUpLeg.position.set(1.159, -0.35, 0.588);
FRLowLeg.position.set(2, -0.70, 0.588);
FRFoot.position.set(2.5, -0.70, 0.588);


FRUpLeg.rotation.z = -0.785;

material.side = THREE.DoubleSide;
//material.wireframe = true;

scene.add(FRUpLeg);
scene.add(FRLowLeg);
scene.add(FRFoot);



FRUpLeg.add(createAxes(10));
FRLowLeg.add(createAxes(10));
FRFoot.add(createAxes(10));

}
