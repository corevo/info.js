#! /usr/bin/env node

import getFileContents from './index';

getFileContents(process.argv[2], (err, contents) => {
    if (err) {
        console.error(err);
    } else {
        console.log(contents);
    }
});
