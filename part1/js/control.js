"use strict"
var enable_axes = true;
createFilledMode(enable_axes);

var filledMode = true;
var frameMode = false;
var lightingMode = false;

document.onkeydown = handleKeyDown;


function handleKeyDown(event){

switch (event.keyCode) {
   
     case 88:
		if(filledMode==true&&enable_axes==true&&frameMode==false&&lightingMode==false){
		enable_axes=false;
		createFilledMode(enable_axes);        
} 
	else if(filledMode==true&&frameMode==false&&enable_axes==false&&lightingMode==false){
		enable_axes=true;
		createFilledMode(enable_axes);
}  else if(frameMode==true&&filledMode==false&&enable_axes==true&&lightingMode==false){
      enable_axes=false;
	  createFrameMode(enable_axes);
} else if(frameMode==true&&filledMode==false&&enable_axes==false&&lightingMode==false){
	enable_axes=true;
    createFrameMode(enable_axes);
}else if(lightingMode==true&&filledMode==false&&frameMode==false&&enable_axes==true){
	enable_axes=false;
	createLightingMode(enable_axes);
}else if(lightingMode==true&&filledMode==false&&frameMode==false&&enable_axes==false){
	enable_axes=true;
	createLightingMode(enable_axes);
}

	break;


    case 77:
		if(filledMode==true&&frameMode==false&&lightingMode==false){
		createFrameMode(enable_axes);
        filledMode=false;
		frameMode=true;
}  else if(filledMode==false&&frameMode==true&&lightingMode==false) {
        createFilledMode(enable_axes);
		frameMode=false;
		filledMode=true;
} else if(filledMode==false&&frameMode==false&&lightingMode==true){
		lightingMode=false;
		frameMode=true;
		createFrameMode(enable_axes);
}
    break;


	case 76:
        if(filledMode==true&&frameMode==false&&lightingMode==false){
		lightingMode=true;
		filledMode=false;
		createLightingMode(enable_axes);
} else if(filledMode==false&&frameMode==false&&lightingMode==true){
		filledMode=true;
		lightingMode=false;
		createFilledMode(enable_axes);
} else if(filledMode==false&&frameMode==true&&lightingMode==false){
	lightingMode = true;
	frameMode = false;
	createLightingMode(enable_axes);
}
	
	break;
}


}
