import fs from 'fs/promises';

// try {
//   const result = await fs.readFile(new URL('template.htm', import.meta.url), 'utf-8');
// } catch (err) {
//   console.log('ERR', err);
// }

process.on('uncaughtException', (err) => {
  console.log('About to crash; do this thing!', err);
});

const result = await fs.readFile(new URL('template.htm', import.meta.url), 'utf-8');
console.log('DONE');
