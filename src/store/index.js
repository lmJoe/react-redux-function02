import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);//创建store的时候把reducer传给creatStore这个方法
export default store;