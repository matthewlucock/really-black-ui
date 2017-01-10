const readFile = require("fs-readfile-promise");
const writeFile = require("fs-writefile-promise");
const less = require("less");

readFile("styles/customisable-styles.less", "utf8")
    .then(function(lessToParse) {
        lessToParse = lessToParse.replace(/@/g, "");
        return less.render(lessToParse);
    })
    .then(function(output) {
        return writeFile("styles/customisable-styles.css", output.css);
    });
