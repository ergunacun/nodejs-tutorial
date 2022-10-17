/*

local dependency: npm -i <package name>

global dependency: (sudo) npm i -g <package name>

creating package.json file: npm init or npm init -y
*/

const _ = require("lodash")

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)