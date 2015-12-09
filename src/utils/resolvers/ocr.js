import { getText } from 'ochre-visionmaker';

const lang = process.env.FILEJS_LANG || 'eng';

function extractText(file, cb) {
    getText(file, lang, (err, contents) => {
        cb(err, { contents });
    });
}

module.exports = {
    resolve: extractText,
    types: ['.jpg', '.jpeg', '.bmp', '.tif', '.tiff', '.png']
};
