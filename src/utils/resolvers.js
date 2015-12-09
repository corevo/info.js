import docsResolver from 'ochre-liberator';

const resolvers = {
    docs: {
        resolver: docsResolver,
        types: ['doc', 'docx', 'txt', 'rtf', 'ppt', 'pptx', 'xls', 'xlsx']
    }
}

function match(ext, cb) {
    let typeResolver = resolvers[Object.keys(resolvers).find(resolver => {
        if (resolvers[resolver].types.indexOf(ext) !== -1) {
            return true;
        }
        return false;
    })];

    let error;
    if (!typeResolver) {
        error = new Error('No resolver was found for file type ' + ext);
    }
    cb(error, typeResolver);
}

function getExtention(file) {
    let lastDot = file.lastIndexOf('.');

    if (lastDot === -1) {
        return '';
    } else {
        return file.substr(lastDot + 1);
    }
}

export default function resolve(file, cb) {
    match(getExtention(file), (err, resolver) => {
        if (err) {
            cb(err);
        } else {
            resolver.resolve(file, (error, contents) => {
                if (error) {
                    cb(err);
                } else {
                    cb(undefined, contents);
                }
            });
        }
    });
}
