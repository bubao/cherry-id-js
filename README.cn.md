<!--
 * @Description: 
 * @author: bubao
 * @Date: 2021-06-07 14:44:04
 * @LastEditors: bubao
 * @LastEditTime: 2021-06-15 13:44:15
-->

# 🌸 cherry-id

[![NPM version](https://img.shields.io/npm/v/cherry-id.svg)](https://www.npmjs.com/package/cherry-id) [![jaywcjlove/sb](https://jaywcjlove.github.io/sb/lang/english.svg)](README.md)

## 介绍

核心算法版权属于 [yitter](https://github.com/yitter)

项目更多介绍参照：[https://github.com/yitter/IdGenerator](https://github.com/yitter/IdGenerator)

## 使用

```js
const GenId = require('..');
const genid = new GenId({ WorkerId: (process.argv[2] || 1) - 0 });

(() => {
  console.time("Test Run");
  const HSet = new Set();
  for (let index = 0; index < 500000; index++) {
    HSet.add(genid.NextId());
  }
  console.timeEnd("Test Run");
  console.log([...HSet.values()].join("\n"))
  console.log(HSet.size);
})();
```
