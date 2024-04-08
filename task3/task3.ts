import fs from 'fs';

function countWordsInFile(filename: string): Promise<number> {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
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
const filename = './task3/data.txt';
countWordsInFile(filename)
  .then(wordCount => {
    console.log(`Total word count in ${filename}: ${wordCount}`);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });
