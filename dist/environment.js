"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientInfo = void 0;
function clientInfo() {
    var version = require('../package.json').version;
    var name = require('../package.json').name;
    return name + "/" + version;
}
exports.clientInfo = clientInfo;
