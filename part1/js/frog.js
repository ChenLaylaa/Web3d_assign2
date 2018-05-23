"use strict"


function createTorso(material){

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






  //UV coordinates for texture mapping

 var UVs = [
	new THREE.Vector2(0,0.5),
    new THREE.Vector2(0.5-Math.cos(r72)*0.5,Math.sin(r72)*0.5+0.5),
	new THREE.Vector2(0.5+Math.cos(r36)*0.5,Math.sin(r36)*0.5+0.5),
	new THREE.Vector2(0.5+Math.cos(r36)*0.5,0.5-Math.sin(r36)*0.5),
    new THREE.Vector2(0.5-Math.cos(r72)*0.5,0.5-Math.sin(r72)*0.5),
	new THREE.Vector2(0.5,0.5)
];




 //set torso UV coordinates

var a = new Array(UVs[0],UVs[1],UVs[5]);
torso.faceVertexUvs[0].push(a);
a = new Array(UVs[1],UVs[5],UVs[2]);
torso.faceVertexUvs[0].push(a);
a = new Array(UVs[2],UVs[5],UVs[3]);
torso.faceVertexUvs[0].push(a);
a = new Array(UVs[3],UVs[5],UVs[4]);
torso.faceVertexUvs[0].push(a);
a = new Array(UVs[4],UVs[5],UVs[0]);
torso.faceVertexUvs[0].push(a);
a = new Array(UVs[0],UVs[1],UVs[5]);
torso.faceVertexUvs[0].push(a);
a = new Array(UVs[1],UVs[5],UVs[2]);
torso.faceVertexUvs[0].push(a);
a = new Array(UVs[2],UVs[5],UVs[3]);
torso.faceVertexUvs[0].push(a);
a = new Array(UVs[3],UVs[5],UVs[4]);
torso.faceVertexUvs[0].push(a);
a = new Array(UVs[4],UVs[5],UVs[0]);
torso.faceVertexUvs[0].push(a);

torso.uvsNeedUpdate = true;




  material.side = THREE.DoubleSide;
  var torso = new THREE.Mesh(torso, material);

  var axes = createAxes(10);
  torso.add(axes);
<<<<<<< HEAD


=======
  return torso;
>>>>>>> 242c8a8053083b64e871929f7f9217d8fc492f14
}

function createHead(material){

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

  var head = new THREE.Mesh(head, material);
  material.side = THREE.DoubleSide;

 // scene.add(head);

  var axes = createAxes(10);
  head.add(axes);

  head.position.set(1.309, 0, 0);
  return head;
}

//FLHip
function createFLHip(){
	var FLHip = new THREE.Object3D();
	  FLHip.name = "FLHip";
    return FLHip;

}

//FLUpLeg
function createFLUpLeg(material){
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
var FLUpLeg = new THREE.Mesh(FLUpLeg, material);
FLUpLeg.position.set(1.159, -0.35, -0.588);
FLUpLeg.rotation.z = -Math.PI/4;
 material.side = THREE.DoubleSide;
FLUpLeg.add(createAxes(10));
return FLUpLeg;

}

//FLKnee
function createFLKnee(){
var FLKnee = new THREE.Object3D();
  FLKnee.name = "FLKnee";
 return FLKnee;
}

//FLLowLeg
function createFLLowLeg(material){
  var r45 = (45 * Math.PI)/180;
  var FLLowLeg = new THREE.Geometry();
  FLLowLeg.vertices.push(new THREE.Vector3(-0.5,0,0));
  FLLowLeg.vertices.push(new THREE.Vector3(0,0,0.25));
  FLLowLeg.vertices.push(new THREE.Vector3(0.5,0,0));
  FLLowLeg.vertices.push(new THREE.Vector3(0,0,-0.25));
  FLLowLeg.vertices.push(new THREE.Vector3(0,0.25,0));
  FLLowLeg.vertices.push(new THREE.Vector3(0,-0.25,0));

  FLLowLeg.faces.push(new THREE.Face3(0,1,4));
  FLLowLeg.faces.push(new THREE.Face3(4,1,2));
  FLLowLeg.faces.push(new THREE.Face3(1,5,2));
  FLLowLeg.faces.push(new THREE.Face3(1,0,5));
  FLLowLeg.faces.push(new THREE.Face3(0,3,4));
  FLLowLeg.faces.push(new THREE.Face3(4,3,2));
  FLLowLeg.faces.push(new THREE.Face3(3,5,2));
  FLLowLeg.faces.push(new THREE.Face3(0,1,5));
 var FLLowLeg = new THREE.Mesh(FLLowLeg, material);
material.side = THREE.DoubleSide;
FLLowLeg.rotation.z = Math.PI/4;
FLLowLeg.position.set(0.5+0.5*Math.cos(r45), Math.cos(r45)*0.5, 0);
FLLowLeg.add(createAxes(10));
return FLLowLeg;
}

//FLAnkle
function createFLAnkle(){
var FLAnkle = new THREE.Object3D();
  FLAnkle.name = "FLAnkle";
return FLAnkle;
}

//FLFoot
function createFLFoot(material){
 var FLFoot = new THREE.Geometry();
  var v1 = new THREE.Vector3(0,0,0);
  var v2 = new THREE.Vector3(0.5,0,0.25);
  var v3 = new THREE.Vector3(0.5,0,-0.25);

  FLFoot.vertices.push(v1);
  FLFoot.vertices.push(v2);
  FLFoot.vertices.push(v3);

  FLFoot.faces.push( new THREE.Face3( 0, 1, 2 ) );
  FLFoot.computeFaceNormals();
<<<<<<< HEAD


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



=======
var FLFoot= new THREE.Mesh( FLFoot,  material);
 material.side = THREE.DoubleSide;
FLFoot.position.set(0.5,0,0)
FLFoot.add(createAxes(10));
return FLFoot;
>>>>>>> 242c8a8053083b64e871929f7f9217d8fc492f14
}

//FRHip
function createFRHip(){
var FRHip = new THREE.Object3D();
FRHip.name = "FRHip";
return FRHip;
}

//FRUpLeg
function createFRUpLeg(material){
var FRUpLeg = new THREE.Geometry();
FRUpLeg.vertices.push(new THREE.Vector3(-0.5,0,0));
FRUpLeg.vertices.push(new THREE.Vector3(0,0,0.25));
FRUpLeg.vertices.push(new THREE.Vector3(0.5,0,0));
FRUpLeg.vertices.push(new THREE.Vector3(0,0,-0.25));
FRUpLeg.vertices.push(new THREE.Vector3(0,0.25,0));
FRUpLeg.vertices.push(new THREE.Vector3(0,-0.25,0));

FRUpLeg.faces.push(new THREE.Face3(0,1,4));
FRUpLeg.faces.push(new THREE.Face3(4,1,2));
FRUpLeg.faces.push(new THREE.Face3(1,5,2));
FRUpLeg.faces.push(new THREE.Face3(1,0,5));
FRUpLeg.faces.push(new THREE.Face3(0,3,4));
FRUpLeg.faces.push(new THREE.Face3(4,3,2));
FRUpLeg.faces.push(new THREE.Face3(3,5,2));
FRUpLeg.faces.push(new THREE.Face3(0,1,5));

var FRUpLeg = new THREE.Mesh(FRUpLeg, material);
FRUpLeg.position.set(1.159, -0.35, 0.588);
FRUpLeg.rotation.z = -Math.PI/4;
material.side = THREE.DoubleSide;
FRUpLeg.add(createAxes(10));
return FRUpLeg;
}

//FRKnee
function createFRKnee(){
var FRKnee = new THREE.Object3D();
FRKnee.name = "FRKnee";
return FRKnee;
}

//FRLowLeg
function createFRLowLeg(material){
var r45 = (45 * Math.PI)/180;
var FRLowLeg = new THREE.Geometry();
FRLowLeg.vertices.push(new THREE.Vector3(-0.5,0,0));
FRLowLeg.vertices.push(new THREE.Vector3(0,0,0.25));
FRLowLeg.vertices.push(new THREE.Vector3(0.5,0,0));
FRLowLeg.vertices.push(new THREE.Vector3(0,0,-0.25));
FRLowLeg.vertices.push(new THREE.Vector3(0,0.25,0));
FRLowLeg.vertices.push(new THREE.Vector3(0,-0.25,0));

FRLowLeg.faces.push(new THREE.Face3(0,1,4));
FRLowLeg.faces.push(new THREE.Face3(4,1,2));
FRLowLeg.faces.push(new THREE.Face3(1,5,2));
FRLowLeg.faces.push(new THREE.Face3(1,0,5));
FRLowLeg.faces.push(new THREE.Face3(0,3,4));
FRLowLeg.faces.push(new THREE.Face3(4,3,2));
FRLowLeg.faces.push(new THREE.Face3(3,5,2));
FRLowLeg.faces.push(new THREE.Face3(0,1,5));

var FRLowLeg = new THREE.Mesh(FRLowLeg, material);
FRLowLeg.rotation.z = Math.PI/4;
FRLowLeg.position.set(0.5+0.5*Math.cos(r45), Math.cos(r45)*0.5, 0);
material.side = THREE.DoubleSide;
FRLowLeg.add(createAxes(10));
return FRLowLeg;

}

//FRAnkle
function createFRAnkle(){
var FRAnkle = new THREE.Object3D();
FRAnkle.name = "FRAnkle";
return FRAnkle;
}

//FRFoot
function createFRFoot(material){
var FRFoot = new THREE.Geometry();
var v1 = new THREE.Vector3(0,0,0);
var v2 = new THREE.Vector3(0.5,0,0.25);
var v3 = new THREE.Vector3(0.5,0,-0.25);

FRFoot.vertices.push(v1);
FRFoot.vertices.push(v2);
FRFoot.vertices.push(v3);

FRFoot.faces.push( new THREE.Face3( 0, 1, 2 ) );
FRFoot.computeFaceNormals();

var FRFoot= new THREE.Mesh( FRFoot,  material);
FRFoot.position.set(0.5, 0, 0);
material.side = THREE.DoubleSide;
FRFoot.add(createAxes(10));
return FRFoot;
}

//RLHip
function createRLHip(){
var RLHip = new THREE.Object3D();
RLHip.name = "RLHip";
return RLHip;
}


//RLUpLeg
function createRLUpLeg(material){
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
var RLUpLeg_obj = new THREE.Mesh(RLUpLeg, material);
RLUpLeg_obj.position.set(-1, 0, -0.5);
RLUpLeg_obj.rotation.y = pi/2;
material.side = THREE.DoubleSide;
RLUpLeg_obj.add(createAxes(10));
return RLUpLeg_obj;

}

//RLKnee
function createRLKnee(){
var RLKnee = new THREE.Object3D();
RLKnee.name = "RLKnee";
return RLKnee;
}

//RLLowLeg
function createRLLowLeg(material){
var pi = Math.PI;
var r45 = (45 * pi) /180;

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
var RLLowLeg_obj = new THREE.Mesh(RLLowLeg, material);
RLLowLeg_obj.rotation.z = -3*pi/4;
RLLowLeg_obj.position.set(0.5-Math.cos(r45)*0.5,-Math.cos(r45)*0.5,0);
material.side = THREE.DoubleSide;
RLLowLeg_obj.add(createAxes(10));
return RLLowLeg_obj;
}

//RLAnkle
function createRLAnkle(){
var RLAnkle = new THREE.Object3D();
RLAnkle.name = "RLAnkle";
return RLAnkle;
}

//RLFoot
function createRLFoot(material){
var r45 = (45 * Math.PI)/180;
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
var RLFoot_obj = new THREE.Mesh(RLFoot,material);
RLFoot_obj.rotation.z = -Math.PI/4;
RLFoot_obj.position.set(0.5-0.5*Math.cos(r45),Math.cos(r45)*0.5,0);
material.side = THREE.DoubleSide;
RLFoot_obj.add(createAxes(10));
return RLFoot_obj;
}

//RLTMT
function createRLTMT(){
var RLTMT = new THREE.Object3D();
RLTMT.name = "RLTMT";
return RLTMT;
}

//RLToes
function createRLToes(material){
var RLToes = new THREE.Geometry()
RLToes.vertices.push(new THREE.Vector3(0,0,0));
RLToes.vertices.push(new THREE.Vector3(0.5,0,0.25));
RLToes.vertices.push(new THREE.Vector3(0.5,0,-0.25));

RLToes.faces.push(new THREE.Face3(0,1,2));

var RLToes_obj = new THREE.Mesh(RLToes,material);
RLToes_obj.rotation.y = -Math.PI/2;
RLToes_obj.position.set(-0.5,0,0);
material.side = THREE.DoubleSide;
RLToes_obj.add(createAxes(10));
return RLToes_obj;
}

//RRHip
function createRRHip(){
var RRHip = new THREE.Object3D();
RRHip.name = "RRHip";
return RRHip;
}

//RRUpLeg
function createRRUpLeg(material){
var r45 = (45 * Math.PI)/180;
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
var RRUpLeg_obj = new THREE.Mesh(RRUpLeg, material);
material.side = THREE.DoubleSide;
RRUpLeg_obj.position.set(-1,0,0.5);
RRUpLeg_obj.rotation.y = Math.PI/2;
RRUpLeg_obj.add(createAxes(10));
return RRUpLeg_obj;

}

//RRKnee
function createRRKnee(){
var RRKnee = new THREE.Object3D();
RRKnee.name = "RRKnee";
return RRKnee;
}

//RRLowLeg
function createRRLowLeg(material){
var r45 = (45 * Math.PI)/180;
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
var RRLowLeg_obj = new THREE.Mesh(RRLowLeg, material);
material.side = THREE.DoubleSide;
RRLowLeg_obj.rotation.z = -Math.PI/4;
RRLowLeg_obj.position.set(Math.cos(r45)*0.5-0.5,-Math.cos(r45)*0.5,0);
RRLowLeg_obj.add(createAxes(10));
return RRLowLeg_obj;
}

//RRAnkle
function createRRAnkle(){
var RRAnkle = new THREE.Object3D();
RRAnkle.name = "RRAnkle";
return RRAnkle;
}

//RRFoot
function createRRFoot(material){
var r45 = (45 * Math.PI)/180;
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
var RRFoot_obj = new THREE.Mesh(RRFoot, material);
material.side = THREE.DoubleSide;
RRFoot_obj.rotation.z = Math.PI/4;
RRFoot_obj.position.set(0.5-Math.cos(r45)*0.5,-Math.cos(r45)*0.5,0);
RRFoot_obj.add(createAxes(10));
return RRFoot_obj;
}


//RRTMT
function createRRTMT(){
var RRTMT = new THREE.Object3D();
RRTMT.name = "RRTMT";
return RRTMT;
}

//RRToes
function createRRToes(material){
var RRToes = new THREE.Geometry()
RRToes.vertices.push(new THREE.Vector3(0,0,0));
RRToes.vertices.push(new THREE.Vector3(0.5,0,0.25));
RRToes.vertices.push(new THREE.Vector3(0.5,0,-0.25));

RRToes.faces.push(new THREE.Face3(0,1,2));
var RRToes_obj = new THREE.Mesh(RRToes, material);
material.side = THREE.DoubleSide;
RRToes_obj.rotation.y = -Math.PI/2;
RRToes_obj.position.set(-0.5,0,0);
RRToes_obj.add(createAxes(10));
return RRToes_obj;
}


function createLeftEye(material) {

var pi = Math.PI
var r30 = (30 * pi)/180

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



var LeftEye_obj = new THREE.Mesh(LeftEye,material)

LeftEye_obj.position.set(0.25,0,-0.19)

material.side = THREE.DoubleSide;


return LeftEye_obj;


}

function createRightEye(material){
var pi = Math.PI
var r30 = (30 * pi)/180
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

var RightEye_obj = new THREE.Mesh(RightEye,material)

RightEye_obj.position.set(0.25,0,0.19)
material.side = THREE.DoubleSide;
return RightEye_obj;
}


//create frog
function createFrog(material,eyes_material,torso_material,scene) {
var torso = createTorso(torso_material);
var head = createHead(material);
var lefteye = createLeftEye(eyes_material);
var righteye = createRightEye(eyes_material);
var flhip = createFLHip();
var flupleg = createFLUpLeg(material);
var flknee = createFLKnee();
var fllowleg = createFLLowLeg(material);
var flankle = createFLAnkle();
var flfoot = createFLFoot(material);
var frhip = createFRHip();
var frupleg = createFRUpLeg(material);
var frknee = createFRKnee();
var frlowleg = createFRLowLeg(material);
var frankle = createFRAnkle();
var frfoot = createFRFoot(material);
var rlhip = createRLHip();
var rlupleg = createRLUpLeg(material);
var rlknee = createRLKnee();
var rllowleg = createRLLowLeg(material);
var rlankle = createRLAnkle();
var rlfoot = createRLFoot(material);
var rltmt = createRLTMT();
var rltoes = createRLToes(material);
var rrhip = createRRHip();
var rrupleg = createRRUpLeg(material);
var rrknee = createRRKnee();
var rrlowleg = createRRLowLeg(material);
var rrankle = createRRAnkle();
var rrfoot = createRRFoot(material);
var rrtmt = createRRTMT();
var rrtoes = createRRToes(material);

rrtmt.add(rrtoes);
rrfoot.add(rrtmt);
rrankle.add(rrfoot);
rrlowleg.add(rrankle);
rrknee.add(rrlowleg);
rrupleg.add(rrknee);
rrhip.add(rrupleg);
rltmt.add(rltoes);
rlfoot.add(rltmt);
rlankle.add(rlfoot);
rllowleg.add(rlankle);
rlknee.add(rllowleg);
rlupleg.add(rlknee);
rlhip.add(rlupleg);
frankle.add(frfoot);
frlowleg.add(frankle);
frknee.add(frlowleg);
frupleg.add(frknee);
frhip.add(frupleg);
flankle.add(flfoot);
fllowleg.add(flankle);
flknee.add(fllowleg);
flupleg.add(flknee);
flhip.add(flupleg);
head.add(lefteye);
head.add(righteye);
torso.add(head);
torso.add(flhip);
torso.add(frhip);
torso.add(rlhip);
torso.add(rrhip);
scene.add(torso);


}
