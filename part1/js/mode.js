"use strict"
//create a filled mode frog
function createFilledMode(enable_axes){


var torso_material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('penta.png')});
var pond_material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
var filled_scene = new THREE.Scene();
//var torso_material = new THREE.MeshBasicMaterial({color:0x00ff00});
var material = new THREE.MeshBasicMaterial({color:0x00ff00});
var eyes_material = new THREE.MeshBasicMaterial({color:0x000000});
init(filled_scene)
createFrog(material,eyes_material,torso_material,filled_scene);
createPond(pond_material,filled_scene);

if(enable_axes==false){
  filled_scene.traverse(hideAxes);

}

}

//create a Frame Mode frog
function createFrameMode(enable_axes) {
var pond_material = new THREE.MeshBasicMaterial( { color:0x0000ff } );
var frame_scene = new THREE.Scene();
var wir_torso_material = new THREE.MeshBasicMaterial({color:0xffd700,wireframe:true,wireframeLinewidth:100});
var wir_material = new THREE.MeshBasicMaterial({color:0xffd700,wireframe:true,wireframeLinewidth:200});
var wir_eyes_material = new THREE.MeshBasicMaterial({color:0x000000,wireframe:true,wireframeLinewidth:100});
init(frame_scene);
createFrog(wir_material,wir_eyes_material,wir_torso_material,frame_scene);
createPond(pond_material,frame_scene);

if(enable_axes==false){
 frame_scene.traverse(hideAxes);
}


}


//lighting material frog
function createLightingMode(enable_axes){
var pond_material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
var lighting_scene = new THREE.Scene();
var lam_torso_material = new THREE.MeshLambertMaterial({color:0x00ff00});
var lam_material = new THREE.MeshLambertMaterial({color:0xff9966});
var lam_eyes_material = new THREE.MeshLambertMaterial({color:0x000000});
init(lighting_scene);
//var light = new THREE.DirectionalLight(0xFFFAAD,0.7);
//light.position.set(0.02,0.05,0.06);
var light = new THREE.AmbientLight(0xff9966,0.5);
lighting_scene.add(light);
createFrog(lam_material,lam_eyes_material,lam_torso_material,lighting_scene);
createPond(pond_material,lighting_scene);

if(enable_axes==false){
lighting_scene.traverse(hideAxes);
}

}




//hide Axes
function hideAxes(object){

if(object.name == "axes"){

object.visible = false;
}

}
