// import { run } from 'concent';
// import models from '../../src/models';
// import { act } from 'react-dom/test-utils';
const { run } = require('concent');
const models = require('../../src/models');
const { act } = require('react-dom/test-utils');

run(models, {
  alwaysRenderCaller: true,
  log: false, // jest执行时，不打印concent内部的日志输出
  act, // 配合jest执行setState时能触发组件重渲染，see https://reactjs.org/docs/test-utils.html#act
});
