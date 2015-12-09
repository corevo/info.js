import { resolve } from './utils/resolvers';

export default function getFileContents(file, cb) {
    resolve(file, function(err, contents) {
        cb(err, contents);
    });
}
