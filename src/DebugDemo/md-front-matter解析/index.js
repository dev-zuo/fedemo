import { readFile } from 'fs/promises';
import matter from 'gray-matter'

try {
  // 读取 markdown 配置文件
  let fileBuffer = await readFile('src/test-json.md');
  let fileText = fileBuffer.toString() 

  // 读取 front matter 信息、支持 YAML/JSON
  let res = matter(fileText)
  console.log(res)
  
  // {
  //   content: '\n# title\nwoshineirong ',
  //   data: { title: 'Blogging Like a Hacker', lang: 'en-US' },
  //   isEmpty: false,
  //   excerpt: ''
  // }
} catch (err) {
  console.error(err);
}
