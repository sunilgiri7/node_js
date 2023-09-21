// Local dependency -> Use it only in this particular project
// npm i <package_name>

// Global dependencies -> use it in any project
// npm install <package_name>

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)