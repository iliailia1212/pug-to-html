const fs = require('fs');
const path = 'C:\\Users\\iliai\\IdeaProjects\\ragemp-gui\\src\\components';

find(path).forEach(path => {
    console.log('pugToHtml', path);
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
