const resolvers = require('require-all')(__dirname + '/resolvers');

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

export default function resolve(file, ext, cb) {
    match(ext, (err, resolver) => {
        if (err) {
            cb(err);
        } else {
            resolver.resolve(file, (err, contents) => {
                if (err) {
                    cb(err);
                } else {
                    cb(undefined, contents);
                }
            });
        }
    });
}
