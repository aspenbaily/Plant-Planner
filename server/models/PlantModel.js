const fs = require('fs'); // file system module
const path = require('path');

const plantsJson = path.join(__dirname, '../data/plants.json');

function list() {
    return JSON.parse(fs.readFileSync(plantsJson));
}
module.exports = {
    list
}