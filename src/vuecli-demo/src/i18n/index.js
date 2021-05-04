import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

/**
 * @description 根据模块、语言提取 messages
 * @param { Array } modules ["base", "user"]; // 模块数组
 * @param { Array } languages ["en", "zh-CN"]; // 语言数组
 * @returns { Object} messages
 */
function getMessages(modules, languages) {
  // 初始化 messages { en: {}, zh-CN: {}}
  let messages = {};
  languages.forEach(lang => {
    messages[lang] = {};
  });

  // 遍历模块，将内容添加到 messages.语言.上
  modules.forEach(moduleName => {
    languages.forEach(async lang => {
      // 加 try ... catch 防止语言文件缺失 import 报 error，影响执行
      try {
        let { default: obj } = await import("./" + `${moduleName}/${lang}.js`);
        // { en: { base: { } }, zh-CN: { base: {} }}
        !messages[lang][moduleName] && (messages[lang][moduleName] = {});
        Object.assign(messages[lang][moduleName], obj);
      } catch (e) {
        console.warn(e.message);
      }
    });
  });
  console.log(messages);
  return messages;
}

const modules = ["base", "user"]; // 模块数组
const languages = ["en", "zh-CN", "zh-TW"]; // 语言数组
let messages = getMessages(modules, languages);

const i18n = new VueI18n({
  locale: "zh-CN", // 设置默认语言环境
  // 在 vue template 的 {{}} 中，使用 $t('un') 即可拿到 un 属性指定的值
  // 不需要在 data() {} 中设置什么
  messages
  // messages: {
  //   en: {
  //     name: "Zhang san",
  //     hello: "hello world"
  //   },
  //   "zh-CN": {
  //     name: "张三",
  //     hello: "你好，世界"
  //   }
  // }
});

export default i18n;
