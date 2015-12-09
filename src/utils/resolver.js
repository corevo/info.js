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
            cb(undefined, resolver.resolve);
        }
    });
}
