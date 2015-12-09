import docsResolver from 'ochre-liberator';

const resolvers = {
    docs: {
        resolver: docsResolver,
        types: ['doc', 'docx', 'txt', 'rtf', 'ppt', 'pptx', 'xls', 'xlsx']
    }
}

export default function match(ext) {
    let typeResolver = resolvers[Object.keys(resolvers).find(resolver => {
        if (resolvers[resolver].types.indexOf(ext) !== -1) {
            return true;
        }
        return false;
    })];

    if (typeResolver) {
        return typeResolver.resolver;
    } else {
        return new Error('No resolver was found for file type ' + ext);
    }
}
