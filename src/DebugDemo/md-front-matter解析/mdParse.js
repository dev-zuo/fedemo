import { readFile, writeFile } from 'fs/promises';
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

try {
  // 读取 markdown 配置文件
  let fileBuffer = await readFile('src/md-it.md');
  let fileText = fileBuffer.toString() 

  // 读取 front matter 信息、支持 YAML/JSON
  let res = matter(fileText)
  let { content = '', data: config, isEmpty} = res || {}
  let htmlStr = md.render(content, {
    html: true,
    linkify: true,
    typographer: true,
    langPrefix:   'language-',  
  })
  console.log(config, htmlStr)
  let result = await writeFile('dist/test.html', htmlStr);
  console.log(result)

  // {
  //   content: '\n# title\nwoshineirong ',
  //   data: { title: 'Blogging Like a Hacker', lang: 'en-US' },
  //   isEmpty: false,
  //   excerpt: ''
  // }
} catch (err) {
  console.error(err);
}
