module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true, // { "env": { "es6": true } } 自动启用es6语法
    // 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
    // mocha - 添加所有的 Mocha 测试全局变量。
    node: true, // Node.js 全局变量和 Node.js 作用域。
    // jest - Jest 全局变量。
  },
  // extends 属性值可以省略包名的前缀 eslint-config-
  // 扩展一个流行的风格指南（比如，eslint-config-standard)  extends: "standard"
  // 配置名称 (比如 recommended) [,rekə'mendɪd] 被推荐的
  // "extends": "eslint:recommended",
  extends: ['plugin:prettier/recommended'],
  // 配置文件可以从基本配置扩展已启用的规则集
  // 该extends属性值为：
  // 指定配置的字符串（配置文件的路径，可共享配置的名称eslint:recommended或eslint:all）。
  // 字符串数组：每个其他配置都扩展了前面的配置
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    // "sourceType": "module"
    //  默认设置为 3，5（默认）， 你可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本。你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）或 2019 (same as 10)
  },
  rules: {
    // semi: ['off', 'always'],
    // quotes: ['error', 'single'],
    // // eqeqeq": "off",
    // // "curly": "error",
    // // enable additional rules
    // indent: ['error', 2],
    // // "linebreak-style": ["error", "unix"],
    // quotes: ['error', 'single'], // 单引号
    // semi: 'off', // 分号结尾
    // // override default options for rules from base configurations
    // // "comma-dangle": ["error", "always"],
    // // "no-cond-assign": ["error", "always"],
    // // disable rules from base configurations
    // 'no-console': 'off',
  },
}
// 默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。
// 如果你想要你所有项目都遵循一个特定的约定时，这将会很有用，但有时候会导致意想不到的结果。
// 为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 package.json 文件或者
// .eslintrc.* 文件里的 eslintConfig 字段下设置 "root": true。
// ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。

// elsint-plugin-react
// {
//   "plugins": [
//       "react"
//   ],
//   "extends": [
//       "eslint:recommended",
//       "plugin:react/recommended"
//   ],
//   "rules": {
//      "no-set-state": "off"
//   }
// }
