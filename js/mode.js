function createFilledMode(){
var pond_material = new THREE.MeshBasicMaterial( { color: 0x0000ff } ); 
var filled_scene = new THREE.Scene();
var torso_material = new THREE.MeshBasicMaterial({color:0x00ff00});
var material = new THREE.MeshBasicMaterial({color:0x00ff00});
var eyes_material = new THREE.MeshBasicMaterial({color:0x000000});
init(filled_scene)
createFrog(material,eyes_material,torso_material,filled_scene);
createPond(pond_material,filled_scene);

}


function createFrameMode() {
var pond_material = new THREE.MeshBasicMaterial( { color:0x0000ff } ); 
var frame_scene = new THREE.Scene();
var wir_torso_material = new THREE.MeshBasicMaterial({color:0xffd700,wireframe:true,wireframeLinewidth:100});
var wir_material = new THREE.MeshBasicMaterial({color:0xffd700,wireframe:true,wireframeLinewidth:200});
var wir_eyes_material = new THREE.MeshBasicMaterial({color:0x000000,wireframe:true,wireframeLinewidth:100});
init(frame_scene);
createFrog(wir_material,wir_eyes_material,wir_torso_material,frame_scene);
createPond(pond_material,frame_scene);
}


function createBasicMode(){
var pond_material = new THREE.MeshBasicMaterial( { color: 0x0000ff } ); 
var basic_scene = new THREE.Scene();
var torso_material = new THREE.MeshBasicMaterial({color:0x00ff00});
var material = new THREE.MeshBasicMaterial({color:0x00ff00});
var eyes_material = new THREE.MeshBasicMaterial({color:0x000000});
init(basic_scene)
createFrog(material,eyes_material,torso_material,basic_scene);
createPond(pond_material,basic_scene);

}

//TODO
function createLightingMode(){
var pond_material = new THREE.MeshBasicMaterial( { color: 0x0000ff } ); 
var lighting_scene = new THREE.Scene();
var lam_torso_material = new THREE.MeshLambertMaterial({color:0xff9966});
var lam_material = new THREE.MeshLambertMaterial({color:0xff9966});
var lam_eyes_material = new THREE.MeshLambertMaterial({color:0x000000});
init(lighting_scene);
var light = new THREE.DirectionalLight('white');
light.position.set(0,20,10).normalize();
lighting_scene.add(light);
createFrog(lam_material,lam_eyes_material,lam_torso_material,lighting_scene);
createPond(pond_material,lighting_scene);

}
