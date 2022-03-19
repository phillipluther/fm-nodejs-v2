import { readFile, writeFile } from 'fs/promises';

const templatePath = new URL('template.html', import.meta.url);
const outputPath = new URL('rendered.html', import.meta.url);

let template = await readFile(templatePath, 'utf-8');

const data = {
  title: 'Learn NodeJS',
  body: 'This is the final HTML',
};

for (const [key, val] of Object.entries(data)) {
  template = template.replace(`{${key}}`, val);
}

await writeFile(outputPath, template);
