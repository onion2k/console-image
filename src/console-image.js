import toHex from './toHex';

export default function imageToConsole(img, w, h) {

    let promise = new Promise(function(resolve,reject){

        let s = '';
        let cols = [];

        let c = document.createElement('canvas');
            c.width  = w;
            c.height = h;

        let ctx = c.getContext('2d');
            ctx.drawImage(img,1,1,w-2,h-2);

        let phex = '';

        for (let y = 0; y < h; y++) {
            if (y > 0) { s += '\n'; }
            for (let x = 0; x < w; x++) {
                let col = ctx.getImageData(x, y, 1, 1).data;
                let hex = "rgba(" + col[0] +","+ col[1] +","+ col[2] +","+ col[3]+")";
                if (hex != phex) {
                    phex = hex;
                    s += '%c  ';
                    cols.push('background-color:'+hex+';');
                } else {
                    s += '  ';
                }
            }
        }

        cols.unshift(s);
        resolve(cols);

    });

    return promise;

}