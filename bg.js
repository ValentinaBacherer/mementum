const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpeg`;
    image.classList.add('bgImage');
    body.prepend(image);
    
}

function genRandom(){
    const bgNum = Math.floor(Math.random() * IMG_NUMBER);
    return bgNum;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
