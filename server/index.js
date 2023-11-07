"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs = __importStar(require("fs"));
const server_1 = __importDefault(require("react-dom/server"));
const single_test_component_1 = require("../src/components/single-test/single-test.component");
const PORT = 3777;
const app = (0, express_1.default)();
/*app.get('/', (req, res) => {
    res.send('Hello World dd!')
})*/
app.get(/\.(js|css|map|ico)$/, express_1.default.static(path_1.default.resolve(__dirname, '../build')));
app.use('*', (req, res) => {
    // читаем файл `index.html`
    let indexHTML = fs.readFileSync(path_1.default.resolve(__dirname, '../build/index.html'), {
        encoding: 'utf8',
    });
    let appHTML = server_1.default.renderToString((0, jsx_runtime_1.jsx)(single_test_component_1.SingleTestComponent, {}));
    // заполняем элемент '#app' содержимым из 'appHTML'
    indexHTML = indexHTML.replace('<div id="root"></div>', `<div id="app">${appHTML}</div>`);
    // устанавливаем заголовок и статус
    res.contentType('text/html');
    res.status(200);
    return res.send(indexHTML);
});
console.log('server starting on port', PORT);
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map