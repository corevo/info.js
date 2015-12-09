import { getFileContents } from 'ochre-liberator';

function getDocInfo(file, cb) {
    getFileContents(file, (err, contents) => {
        cb(err, { contents });
    });
}

module.exports = {
    resolve: getDocInfo,
    types: ['.doc', '.docx', '.txt', '.rtf', '.ppt', '.pptx', '.xls', '.xlsx']
};
