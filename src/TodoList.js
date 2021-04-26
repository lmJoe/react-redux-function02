import React, { Component } from 'react';
import { connect } from 'react-redux';//connect是react-redux提供的核心api
//当前todolist只是一个ui组件，不负责任何业务逻辑，此时可以写为一个无状态组件，可以有效提升代码性能，没有任何周期函数，也 不会生成真正组件的实例
const TodoList = (props) => {
  const { inputValue,changeInputValue,handleClick,handleDelete,list } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue}/>
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item,index)=>{
            return <li onClick={handleDelete} key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
const mapStateTopProps = (state) => {
  //取出state中的数据
  return {
    inputValue:state.inputValue,
    list:state.list,
  }
}
//store.dispatch,props  把store.dispatch方法挂载在props方法中，可以使用this.props.~ 来改变state中的值,如this.props.changeInputValue ，此处的changeInputValue为一个卸载mapDispatchToProps中的方法
const mapDispatchToProps = (dispatch) =>{ //接收了一个dispatch的方法，这个方法就是store.dispatch的方法
  return {
    changeInputValue(e){//调用dispatch的方法来改变数据
      console.log(e.target.value)
      const action = {
        type:'change_input_value',
        value:e.target.value,
      }
      dispatch(action);//利用dispatch的方法后，需要到reducer.js中，对export default中做判断处理
    },
    //往数组中增加一个元素
    handleClick(){
      const action = {
        type:'add_item',
      }
      dispatch(action);
    },
    //删除数组中的某一个元素
    handleDelete(){
      const action = {
        type:'delete_item',
      }
      dispatch(action);
    }
  }
}
export default connect(mapStateTopProps,mapDispatchToProps)(TodoList);//connect()让TodoList的组件和store做连接
//connect(a,b)
//在做连接的时候需要一个规则，这个规则在mapStateTopProps中（意思：把store里面的数据映射给这个组件，变成组件的props）,mapStateTopProps函数中的state就是store的数据,如果想要对store数据做修改，使用mapDispatchToProps
//此处TodoList是一个UI组件，在使用connect把数据和业务逻辑相结合时，返回的内容就是一个容器组件；