

"use strict";
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
createBLLeg();
createBRLeg();
createEyes();

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
 //material.wireframe = true;
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

  FLUpLeg.name = "FLUpLeg";


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

  //front leg joints
  //var FLHip = new THREE.Object3D();
  //FLHip.add(FLUpLeg);
  //FLHip.name = "FLHip";
  //FLHip.rotation.z = Math.PI / 6;

  var material = new THREE.MeshBasicMaterial({color:0x00ff00});
  var FLUpLeg = new THREE.Mesh(FLUpLeg, material);
  var FLLowLeg = new THREE.Mesh(FLLowLeg, material);
  var FLFoot= new THREE.Mesh( FLFoot,  material);


  FLUpLeg.rotation.z = -0.785;
  FLLowLeg.name = "FLLowLeg";


  FLUpLeg.position.set(1.159, -0.35, -0.588);
  FLLowLeg.position.set(2, -0.70, -0.588);
  FLFoot.position.set(2.5, -0.70,-0.588);


  material.side = THREE.DoubleSide;
  //material.wireframe = true;

  scene.add(FLUpLeg);
  scene.add(FLLowLeg);
  scene.add(FLFoot);


  FLUpLeg.add(createAxes(10));
  FLLowLeg.add(createAxes(10));
  FLFoot.add(createAxes(10));


  var FLHip = new THREE.Object3D();
  FLHip.name = "FLHip";
  FLHip.add(FLUpLeg);
  scene.add(FLHip);
  //FLHip.add(createAxes(10));

  var FLKnee = new THREE.Object3D();
  FLKnee.name = "FLKnee";


  FLKnee.add(FLHip);
  FLKnee.add(FLLowLeg);

  scene.add(FLKnee);
  //FLKnee.add(createAxes(10));

  var FLAnkle = new THREE.Object3D();
  FLAnkle.name = "FLAnkle";

  FLAnkle.add(FLKnee);
  FLAnkle.add(FLFoot);

  scene.add(FLAnkle);
  //FLAnkle.add(createAxes(10));

  document.onkeydown = handleKeyDown;

function handleKeyDown(event)
{
  switch (event.keyCode) {
  case 37:
        FLAnkle.rotation.z += 1 * Math.PI / 180;

      break;
  case 39:
        FLAnkle.rotation.z -= 1 * Math.PI / 180;
      break;
  }
}
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

//front right foot
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

var FRHip = new THREE.Object3D();
FRHip.name = "FRHip";
FRHip.add(FRUpLeg);
scene.add(FRHip);
//FLHip.add(createAxes(10));

var FRKnee = new THREE.Object3D();
FRKnee.name = "FRKnee";


FRKnee.add(FRHip);
FRKnee.add(FRLowLeg);

scene.add(FRKnee);
//FLKnee.add(createAxes(10));

var FRAnkle = new THREE.Object3D();
FRAnkle.name = "FRAnkle";

FRAnkle.add(FRKnee);
FRAnkle.add(FRFoot);

scene.add(FRAnkle);
//FLAnkle.add(createAxes(10));

document.onkeydown = handleKeyDown;

function handleKeyDown(event)
{
switch (event.keyCode) {
case 37:
      FRAnkle.rotation.z +=  1 * Math.PI / 180;

    break;
case 39:
      FRAnkle.rotation.z -= 1 * Math.PI / 180;
    break;
}
}

}


//BLLeg
function createBLLeg() {

var pi = Math.PI;
var r45 = (45 * pi) /180;



//RLUpLeg
var RLUpLeg = new THREE.Geometry()
RLUpLeg.vertices.push(new THREE.Vector3(-0.5, 0, 0));
RLUpLeg.vertices.push(new THREE.Vector3(0, 0, 0.25));
RLUpLeg.vertices.push(new THREE.Vector3(0.5, 0, 0));
RLUpLeg.vertices.push(new THREE.Vector3(0, 0, -0.25));
RLUpLeg.vertices.push(new THREE.Vector3(0, 0.25, 0));
RLUpLeg.vertices.push(new THREE.Vector3(0, -0.25, 0));

RLUpLeg.faces.push(new THREE.Face3(0, 1, 4));
RLUpLeg.faces.push(new THREE.Face3(1, 2, 4));
RLUpLeg.faces.push(new THREE.Face3(3, 2, 4));
RLUpLeg.faces.push(new THREE.Face3(0, 3, 4));
RLUpLeg.faces.push(new THREE.Face3(0, 1, 5));
RLUpLeg.faces.push(new THREE.Face3(1, 2, 5));
RLUpLeg.faces.push(new THREE.Face3(3, 2, 5));
RLUpLeg.faces.push(new THREE.Face3(0, 3, 5));


//RLLowLeg
var RLLowLeg = new THREE.Geometry()
RLLowLeg.vertices.push(new THREE.Vector3(-0.5, 0, 0));
RLLowLeg.vertices.push(new THREE.Vector3(0, 0, 0.25));
RLLowLeg.vertices.push(new THREE.Vector3(0.5, 0, 0));
RLLowLeg.vertices.push(new THREE.Vector3(0, 0, -0.25));
RLLowLeg.vertices.push(new THREE.Vector3(0, 0.25, 0));
RLLowLeg.vertices.push(new THREE.Vector3(0, -0.25, 0));

RLLowLeg.faces.push(new THREE.Face3(0, 1, 4));
RLLowLeg.faces.push(new THREE.Face3(1, 2, 4));
RLLowLeg.faces.push(new THREE.Face3(3, 2, 4));
RLLowLeg.faces.push(new THREE.Face3(0, 3, 4));
RLLowLeg.faces.push(new THREE.Face3(0, 1, 5));
RLLowLeg.faces.push(new THREE.Face3(1, 2, 5));
RLLowLeg.faces.push(new THREE.Face3(3, 2, 5));
RLLowLeg.faces.push(new THREE.Face3(0, 3, 5));

//RLFoot
var RLFoot = new THREE.Geometry()
RLFoot.vertices.push(new THREE.Vector3(-0.5, 0, 0));
RLFoot.vertices.push(new THREE.Vector3(0, 0, 0.25));
RLFoot.vertices.push(new THREE.Vector3(0.5, 0, 0));
RLFoot.vertices.push(new THREE.Vector3(0, 0, -0.25));
RLFoot.vertices.push(new THREE.Vector3(0, 0.25, 0));
RLFoot.vertices.push(new THREE.Vector3(0, -0.25, 0));

RLFoot.faces.push(new THREE.Face3(0, 1, 4));
RLFoot.faces.push(new THREE.Face3(1, 2, 4));
RLFoot.faces.push(new THREE.Face3(3, 2, 4));
RLFoot.faces.push(new THREE.Face3(0, 3, 4));
RLFoot.faces.push(new THREE.Face3(0, 1, 5));
RLFoot.faces.push(new THREE.Face3(1, 2, 5));
RLFoot.faces.push(new THREE.Face3(3, 2, 5));
RLFoot.faces.push(new THREE.Face3(0, 3, 5));

//RLToes
var RLToes = new THREE.Geometry()
RLToes.vertices.push(new THREE.Vector3(0,0,0));
RLToes.vertices.push(new THREE.Vector3(0.5,0,0.25));
RLToes.vertices.push(new THREE.Vector3(0.5,0,-0.25));

RLToes.faces.push(new THREE.Face3(0,1,2));


var material = new THREE.MeshBasicMaterial({color:0x00ff00});
var RLUpLeg_obj = new THREE.Mesh(RLUpLeg, material);
var RLLowLeg_obj = new THREE.Mesh(RLLowLeg, material);
var RLFoot_obj = new THREE.Mesh(RLFoot,material);
var RLToes_obj = new THREE.Mesh(RLToes,material);

RLUpLeg_obj.position.set(-1, 0, -0.5);
RLLowLeg_obj.position.set(-1, -Math.cos(r45)*0.5, -1+Math.cos(r45)*0.5);
RLFoot_obj.position.set(-1,-Math.cos(r45),-1.5+Math.cos(r45));
RLToes_obj.position.set(-1,-Math.cos(r45),-2+Math.cos(r45));



RLUpLeg_obj.rotation.y = pi/2;
RLLowLeg_obj.rotation.y = pi/2;
RLLowLeg_obj.rotation.z = pi/2;
RLLowLeg_obj.rotation.x = -pi/4;
RLFoot_obj.rotation.y = pi/2;

material.side = THREE.DoubleSide;

scene.add(RLUpLeg_obj);
scene.add(RLLowLeg_obj);
scene.add(RLFoot_obj);
scene.add(RLToes_obj);

RLUpLeg_obj.add(createAxes(10));
RLLowLeg_obj.add(createAxes(10));
RLFoot_obj.add(createAxes(10));
RLToes_obj.add(createAxes(10));

var RLHip = new THREE.Object3D();
RLHip.name = "RLHip";
RLHip.add(RLUpLeg_obj);
scene.add(RLHip);
//RLHip.add(createAxes(10));

var RLKnee = new THREE.Object3D();
RLKnee.name = "RLKnee";


RLKnee.add(RLHip);
RLKnee.add(RLLowLeg_obj);

scene.add(RLKnee);
//RLKnee.add(createAxes(10));

var RLAnkle = new THREE.Object3D();
RLAnkle.name = "RLAnkle";

RLAnkle.add(RLKnee);
RLAnkle.add(RLFoot_obj);

scene.add(RLAnkle);
//RLAnkle.add(createAxes(10));

var RLTMT = new THREE.Object3D();
RLTMT.name = "RLTMT";

RLTMT.add(RLAnkle);
RLTMT.add(RLToes_obj);

scene.add(RLTMT);


}

//BRLeg
function createBRLeg(){

var pi = Math.PI
var r45 = (45 * pi)/180


//RRUpLeg
var RRUpLeg = new THREE.Geometry()
RRUpLeg.vertices.push(new THREE.Vector3(-0.5, 0, 0));
RRUpLeg.vertices.push(new THREE.Vector3(0, 0, 0.25));
RRUpLeg.vertices.push(new THREE.Vector3(0.5, 0, 0));
RRUpLeg.vertices.push(new THREE.Vector3(0, 0, -0.25));
RRUpLeg.vertices.push(new THREE.Vector3(0, 0.25, 0));
RRUpLeg.vertices.push(new THREE.Vector3(0, -0.25, 0));

RRUpLeg.faces.push(new THREE.Face3(0, 1, 4));
RRUpLeg.faces.push(new THREE.Face3(1, 2, 4));
RRUpLeg.faces.push(new THREE.Face3(3, 2, 4));
RRUpLeg.faces.push(new THREE.Face3(0, 3, 4));
RRUpLeg.faces.push(new THREE.Face3(0, 1, 5));
RRUpLeg.faces.push(new THREE.Face3(1, 2, 5));
RRUpLeg.faces.push(new THREE.Face3(3, 2, 5));
RRUpLeg.faces.push(new THREE.Face3(0, 3, 5));

//RRLowLeg
var RRLowLeg = new THREE.Geometry()
RRLowLeg.vertices.push(new THREE.Vector3(-0.5, 0, 0));
RRLowLeg.vertices.push(new THREE.Vector3(0, 0, 0.25));
RRLowLeg.vertices.push(new THREE.Vector3(0.5, 0, 0));
RRLowLeg.vertices.push(new THREE.Vector3(0, 0, -0.25));
RRLowLeg.vertices.push(new THREE.Vector3(0, 0.25, 0));
RRLowLeg.vertices.push(new THREE.Vector3(0, -0.25, 0));

RRLowLeg.faces.push(new THREE.Face3(0, 1, 4));
RRLowLeg.faces.push(new THREE.Face3(1, 2, 4));
RRLowLeg.faces.push(new THREE.Face3(3, 2, 4));
RRLowLeg.faces.push(new THREE.Face3(0, 3, 4));
RRLowLeg.faces.push(new THREE.Face3(0, 1, 5));
RRLowLeg.faces.push(new THREE.Face3(1, 2, 5));
RRLowLeg.faces.push(new THREE.Face3(3, 2, 5));
RRLowLeg.faces.push(new THREE.Face3(0, 3, 5));

//RRFoot
var RRFoot = new THREE.Geometry()
RRFoot.vertices.push(new THREE.Vector3(-0.5, 0, 0));
RRFoot.vertices.push(new THREE.Vector3(0, 0, 0.25));
RRFoot.vertices.push(new THREE.Vector3(0.5, 0, 0));
RRFoot.vertices.push(new THREE.Vector3(0, 0, -0.25));
RRFoot.vertices.push(new THREE.Vector3(0, 0.25, 0));
RRFoot.vertices.push(new THREE.Vector3(0, -0.25, 0));

RRFoot.faces.push(new THREE.Face3(0, 1, 4));
RRFoot.faces.push(new THREE.Face3(1, 2, 4));
RRFoot.faces.push(new THREE.Face3(3, 2, 4));
RRFoot.faces.push(new THREE.Face3(0, 3, 4));
RRFoot.faces.push(new THREE.Face3(0, 1, 5));
RRFoot.faces.push(new THREE.Face3(1, 2, 5));
RRFoot.faces.push(new THREE.Face3(3, 2, 5));
RRFoot.faces.push(new THREE.Face3(0, 3, 5));

//RRToes
var RRToes = new THREE.Geometry()
RRToes.vertices.push(new THREE.Vector3(0,0,0));
RRToes.vertices.push(new THREE.Vector3(0.5,0,0.25));
RRToes.vertices.push(new THREE.Vector3(0.5,0,-0.25));

RRToes.faces.push(new THREE.Face3(0,1,2));

var material = new THREE.MeshBasicMaterial({color:0x00ff00});
var RRUpLeg_obj = new THREE.Mesh(RRUpLeg, material);
var RRLowLeg_obj = new THREE.Mesh(RRLowLeg, material);
var RRFoot_obj = new THREE.Mesh(RRFoot, material);
var RRToes_obj = new THREE.Mesh(RRToes, material);

//material.wireframe = true;
material.side = THREE.DoubleSide;

RRUpLeg_obj.position.set(-1,0,0.5);
RRLowLeg_obj.position.set(-1,-Math.cos(r45)*0.5,1-Math.cos(r45)*0.5);
RRFoot_obj.position.set(-1,-Math.cos(r45),1.5-Math.cos(r45));
RRToes_obj.position.set(-1,-Math.cos(r45),2-Math.cos(r45));

RRUpLeg_obj.rotation.y = pi/2;
RRLowLeg_obj.rotation.y = pi/2;
RRLowLeg_obj.rotation.x = 3*pi/4;
RRFoot_obj.rotation.y = pi/2;

scene.add(RRUpLeg_obj);
scene.add(RRLowLeg_obj);
scene.add(RRFoot_obj);
scene.add(RRToes_obj);
RRUpLeg_obj.add(createAxes(10));
RRLowLeg_obj.add(createAxes(10));
RRFoot_obj.add(createAxes(10));
RRToes_obj.add(createAxes(10));


var RRHip = new THREE.Object3D();
RRHip.name = "RRHip";
RRHip.add(RRUpLeg_obj);
scene.add(RRHip);
//RRHip.add(createAxes(10));

var RRKnee = new THREE.Object3D();
RRKnee.name = "RRKnee";


RRKnee.add(RRHip);
RRKnee.add(RRLowLeg_obj);

scene.add(RRKnee);
//RRKnee.add(createAxes(10));

var RRAnkle = new THREE.Object3D();
RRAnkle.name = "RRAnkle";

RRAnkle.add(RRKnee);
RRAnkle.add(RRFoot_obj);

scene.add(RRAnkle);
//RRAnkle.add(createAxes(10));

var RRTMT = new THREE.Object3D();
RRTMT.name = "RRTMT";

RRTMT.add(RRAnkle);
RRTMT.add(RRToes_obj);

scene.add(RRTMT);

}

function createEyes(){

var pi = Math.PI
var r30 = (30 * pi)/180

//LeftEye
var LeftEye = new THREE.Geometry()
LeftEye.vertices.push(new THREE.Vector3(0,0,0.1));
LeftEye.vertices.push(new THREE.Vector3(-0.1,0,0));
LeftEye.vertices.push(new THREE.Vector3(0,0,-0.1));
LeftEye.vertices.push(new THREE.Vector3(0.1,0,0));
LeftEye.vertices.push(new THREE.Vector3(0,0.1,0));
LeftEye.vertices.push(new THREE.Vector3(0,-0.1,0));

LeftEye.faces.push(new THREE.Face3(0,1,4));
LeftEye.faces.push(new THREE.Face3(2,1,4));
LeftEye.faces.push(new THREE.Face3(2,3,4));
LeftEye.faces.push(new THREE.Face3(3,4,0));
LeftEye.faces.push(new THREE.Face3(0,1,5));
LeftEye.faces.push(new THREE.Face3(2,1,5));
LeftEye.faces.push(new THREE.Face3(2,3,5));
LeftEye.faces.push(new THREE.Face3(0,3,5));

//RightEye
var RightEye = new THREE.Geometry()
RightEye.vertices.push(new THREE.Vector3(0,0,0.1));
RightEye.vertices.push(new THREE.Vector3(-0.1,0,0));
RightEye.vertices.push(new THREE.Vector3(0,0,-0.1));
RightEye.vertices.push(new THREE.Vector3(0.1,0,0));
RightEye.vertices.push(new THREE.Vector3(0,0.1,0));
RightEye.vertices.push(new THREE.Vector3(0,-0.1,0));

RightEye.faces.push(new THREE.Face3(0,1,4));
RightEye.faces.push(new THREE.Face3(2,1,4));
RightEye.faces.push(new THREE.Face3(2,3,4));
RightEye.faces.push(new THREE.Face3(3,4,0));
RightEye.faces.push(new THREE.Face3(0,1,5));
RightEye.faces.push(new THREE.Face3(2,1,5));
RightEye.faces.push(new THREE.Face3(2,3,5));
RightEye.faces.push(new THREE.Face3(0,3,5));


var material = new THREE.MeshBasicMaterial({color: 0x000000});
var LeftEye_obj = new THREE.Mesh(LeftEye,material)
var RightEye_obj = new THREE.Mesh(RightEye,material)

LeftEye_obj.position.set(Math.cos(r30)+0.75,0,-0.19)
RightEye_obj.position.set(Math.cos(r30)+0.75,0,0.19)

material.side = THREE.DoubleSide;


scene.add(LeftEye_obj);
scene.add(RightEye_obj);
}

scene.add(createAxes(10));
