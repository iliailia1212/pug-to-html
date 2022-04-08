const fs = require('fs');
const path = 'C:\\project\\src\\components';

find(path).forEach(p => {
    console.log('pugToHtml', p.replace(path, ''));
});

function find(path) {
    const list = fs.readdirSync(path);
    return list.reduce((tmp, file) => {
        const p = path+'\\'+file;
        if(fs.statSync(p).isDirectory()) {
            tmp.push(...find(p));
        }
        else {
            tmp.push(p);
        }

        return tmp;
    }, []);
}
