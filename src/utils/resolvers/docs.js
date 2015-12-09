import docsResolver from 'ochre-liberator';

module.exports = {
    resolve: docsResolver.getFileContents,
    types: ['doc', 'docx', 'txt', 'rtf', 'ppt', 'pptx', 'xls', 'xlsx']
};
