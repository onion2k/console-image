import imageToConsole from './console-image.js';

imageToConsole().then(function(consoleImage){
    console.log.apply(console, consoleImage);
})
