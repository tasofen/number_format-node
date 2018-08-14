const fs = require("fs");
const data = require("./data.json");
const number_format = require("./../src/number-format.js");

var res = [];


data.forEach((item) => {
    for(var i=0; i<7; ++i) {
        res.push(number_format(item));
        res.push(number_format(item, i));
        res.push(number_format(item, i, ',', ' '));
    }
});

var json = JSON.stringify(res);

fs.writeFileSync("./res-node.json", json);