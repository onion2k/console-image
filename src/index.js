import imageToConsole from './console-image.js';

let img = document.createElement('img');
img.src = 'vangogh.jpg';
img.addEventListener('load', () => {

    let width = 20;
    let height = 20;

    imageToConsole(img, width, height).then(function(consoleImage){
        console.log.apply(console, consoleImage);
    })

});