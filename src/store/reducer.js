//是一个纯函数
//设定初始值
const defaultState = {
  inputValue:'',
  list: [],
}
export default (state = defaultState, action) => {
  //获取到来自组件中更改store的值的方法做判断
  if(action.type === 'change_input_value'){
    const newState = JSON.parse(JSON.stringify(state));//深拷贝
    newState.inputValue= action.value;
    return newState;
  }
  if(action.type === 'add_item'){
    const newState = JSON.parse(JSON.stringify(state));//深拷贝
    newState.list.push(newState.inputValue);
    newState.inputValue = '';//首先清空
    return newState;
  }
  if(action.type === 'delete_item'){
    const newState = JSON.parse(JSON.stringify(state));//深拷贝
    newState.list.splice(action.index,1);//删除下标
    return newState;
  }
  return state;
}