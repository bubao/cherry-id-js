<!--
 * @Description: 
 * @author: bubao
 * @Date: 2021-06-07 14:44:04
 * @LastEditors: bubao
 * @LastEditTime: 2021-06-29 13:26:03
-->

# 🌸 cherry-id

[![NPM version](https://img.shields.io/npm/v/cherry-id.svg)](https://www.npmjs.com/package/cherry-id) [![jaywcjlove/sb](https://jaywcjlove.github.io/sb/lang/chinese.svg)](README.cn.md)

## Introduction

The core algorithm copyright belongs to [yitter](https://github.com/yitter)

more:[https://github.com/yitter/IdGenerator](https://github.com/yitter/IdGenerator)

## USing cherry-id

```sh
npm i cherry-id
```

```js
const GenId = require('cherry-id');
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
