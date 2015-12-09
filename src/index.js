import path from 'path';
import resolve from './utils/resolver';

export default function getFileContents(file, cb) {
    let ext = path.extname(file);
    let name = path.basename(file, ext);
    resolve(file, ext, function(err, contents) {
        if (err) {
            cb(err);
        } else {
            cb(undefined, Object.assign({ name }, contents));
        }
    });
}
