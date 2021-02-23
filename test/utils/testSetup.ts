// import './runConcent';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
require('./runConcent')
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

// @ts-ignore
Enzyme.configure({ adapter: new Adapter() });
