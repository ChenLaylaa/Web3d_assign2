var FilledMode = true;

createFilledMode();


document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;


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
}


}



	

