import docsResolver from 'ochre-liberator';

const resolvers = {
    docs: {
        resolver: docsResolver,
        types: ['doc', 'docx', 'txt', 'rtf', 'ppt', 'pptx', 'xls', 'xlsx']
    }
}

function match(ext) {
    let resolver = Object.keys(resolvers).find(resolver => {
        if (resolver.types.indexOf(ext)) {
            return true;
        }
    });

    if (resolver) {
        return resolver.resolver;
    } else {
        return new Error('No resolver was found for file type ' + ext);
    }
}
