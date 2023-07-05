"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static('./dist/client/'));
app.get('*', (req, res) => {
    res.sendFile('index.html', { root: './dist/client' });
});
app.get('/', (req, res) => {
    res.send();
});
app.get('/version', (req, res) => {
    res.send('Version 1.0');
});
app.listen(3000, () => {
    console.log('Server is listening on port 3000!');
});
