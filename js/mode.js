function createFilledMode(){
var filled_scene = new THREE.Scene();
var torso_material = new THREE.MeshBasicMaterial({color:0x00ff00});
var material = new THREE.MeshBasicMaterial({color:0x00ff00});
var eyes_material = new THREE.MeshBasicMaterial({color:0x000000});
init(filled_scene)
createFrog(material,eyes_material,torso_material,filled_scene);

}


function createFrameMode() {
var frame_scene = new THREE.Scene();
var wir_torso_material = new THREE.MeshBasicMaterial({color:0x00ff00,wireframe:true,wireLinewidth:100});
var wir_material = new THREE.MeshBasicMaterial({color:0x00ff00,wireframe:true,wireLinewidth:100});
var wir_eyes_material = new THREE.MeshBasicMaterial({color:0x000000,wireframe:true,wireLinewidth:100});
init(frame_scene);
createFrog(wir_material,wir_eyes_material,wir_torso_material,frame_scene);
}


function createBasicMode(){
var basic_scene = new THREE.Scene();
var torso_material = new THREE.MeshBasicMaterial({color:0x00ff00});
var material = new THREE.MeshBasicMaterial({color:0x00ff00});
var eyes_material = new THREE.MeshBasicMaterial({color:0x000000});
init(basic_scene)
createFrog(material,eyes_material,torso_material,basic_scene);

}

//TODO
function createLightingMode(){
var lighting_scene = new THREE.Scene();
var torso_material = new THREE.MeshBasicMaterial({color:0x006400});
var material = new THREE.MeshBasicMaterial({color:0x006400});
var eyes_material = new THREE.MeshBasicMaterial({color:0x000000});
init(lighting_scene);
createFrog(material,eyes_material,torso_material,lighting_scene);


}
