const compareImages = require('resemblejs/compareImages');
const fs = require("mz/fs");
const path = require('path')

async function getDiff(){
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: 'movement',
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: ['nothing', 'less', 'antialiasing', 'colors', 'alpha'],
    };

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    const img1 = '1521274749146'
    const img2 = '1521273980886'
    const data = await compareImages(
        await fs.readFile(path.join(__dirname, `screenshots/${img1}.png`)),
        await fs.readFile(path.join(__dirname, `screenshots/${img2}.png`)),
        options
    );

    await fs.writeFile(path.join(__dirname, `diff/${img1}-${img2}.png`), data.getBuffer());
}

getDiff();