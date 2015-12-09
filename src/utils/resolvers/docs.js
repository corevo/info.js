import { getFileContents } from 'ochre-liberator';

module.exports = {
    resolve: getFileContents,
    types: ['doc', 'docx', 'txt', 'rtf', 'ppt', 'pptx', 'xls', 'xlsx']
};
