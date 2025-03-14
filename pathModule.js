const path = require('node:path');

const a = path.basename('C:\\temp\\myfile.html');
// Returns: 'C:\\temp\\myfile.html'

const b = path.win32.dirname('C:\\temp\\myfile.html');
const b2 = path.win32.extname('C:\\temp\\myfile.html');
// Returns: '.html'

const c = path.win32.basename('C:\\foo.HTML', '.html');
// Returns: 'foo.HTML'

const d = path.dirname('/foo/bar/baz/asdf/quux');

const e = path.extname(__filename)

console.log(a);
console.log(b);
console.log(b2);
console.log(c);
console.log(d);
console.log(e);