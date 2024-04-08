"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function countWordsInFile(filename) {
    return new Promise((resolve, reject) => {
        fs_1.default.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            const words = data.split(/\s+/).filter(word => word.trim() !== '');
            resolve(words.length);
        });
    });
}
// Usage
const filename = "./dist/task3/data.txt";
countWordsInFile(filename)
    .then(wordCount => {
    console.log(`Total word count in ${filename}: ${wordCount}`);
})
    .catch(err => {
    console.error('Error reading file:', err);
});
