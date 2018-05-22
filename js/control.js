var FilledMode = true;
var BasicMode = true;
var showAxes = true;

createFilledMode();


document.onkeydown = handleKeyDown;


function handleKeyDown(event){

switch (event.keyCode) {
    case 77:
        if (FilledMode == true){
		createFrameMode();

		FilledMode = false;
}
else {
     createFilledMode();
     FilledMode = true;
}
        break;

    case 76:
		if(BasicMode == true && FilledMode == false){
	createBasicMode();
    BasicMode = false;
}else {

 createLightingMode();
 BasicMode = true;
 FilledMode = false;
}

break;

  case 88:
  if(showAxes == true){
    hideAxes();
    showAxes = false;

  }else{

    createShowAxes();
    showAxes = true;
  }

break;


}


}
