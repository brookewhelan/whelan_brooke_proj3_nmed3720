var vidcapture, ctracker, drawcanvas;

let symmetry = 6;
let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;


function setup() {
    var cnv = createCanvas(windowWidth / 2, windowHeight / 2);
    angleMode(DEGREES);
    cnv.parent("p5canvas");
background(255);
    


    //START OF NOT MY CODE

    // Creating the save button for the file
    saveButton = createButton('save');
    saveButton.mousePressed(saveFile);

    // Creating the clear screen button
    clearButton = createButton('clear');
    clearButton.mousePressed(clearScreen);

    
    // Setting up the slider for the thickness of the brush
    sizeSlider = createSlider(1, 32, 4, 0.1);

    //END OF NOT MY CODE




    //p5 method for creating a video stream
    vidcapture = createCapture(VIDEO);
    vidcapture.size(vidcapture.width * 2, vidcapture.height * 3);
    vidcapture.hide()

    //starting the tracker
    ctracker = new clm.tracker()
    ctracker.init();
    ctracker.start(vidcapture.elt)

    //just for testing
    drawcanvas = document.getElementById('defaultCanvas0');

}

//START OF NOT MY CODE

// Save File Function
function saveFile() {
    save('My-Nose-Drew-This.jpg');
}

// Clear Screen function
function clearScreen() {
    background(255);
}

// Full Screen Function
function screenFull() {
    let fs = fullscreen();
    fullscreen(!fs);

    //END OF NOT MY CODE

}

function draw() {

    translate(width / 2, height / 2);

    var positions = ctracker.getCurrentPosition()



    // NOT MY CODE
    if (positions) {


        if (positions) {
            let mx = positions[62][0] - width / 2;
            let my = positions[62][1] - height / 2;
            let pmx = positions[62][0] - width / 2;
            let pmy = positions[62][1] - height / 2;
            color('#e6b4ac');

            if (positions) {
                for (let i = 0; i < symmetry; i++) {
                    rotate(angle);
                    let sw = sizeSlider.value();
                    stroke(59, 57, 69);
                    strokeWeight(sw);
                    line(mx, my, pmx, pmy,);
                    push();
                    scale(1, -1);
                    line(mx, my, pmx, pmy);
                    pop();
                    
                }
            }
        }
    }
}
