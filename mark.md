1. setState();
 - 接收两个参数({} | (preState,props)=>{返回一个对象} , ()=>{在这里可以拿到最新的state(也就是前面的函数执行之后的state)})

2. state 保存当前组件事例的状态
3. props 接收外面传进来的值, 当然内部也可通过一些方式初始化设置,属性不能被组建自己更改, 但是可以通过父组件主动重新渲染的方式传入新的props
  - 用法: 把参数放在标签属性当中, 所有的属性都会作为组件的props对象的键值.
  - 如果是剪头函数创建的组件 , 需要通过函数的参数来接收props
  - CustomComponent.defaultProps = {
    color:'blue'
  }// 用来设定组件的默认值 似乎是构造函数的静态属性
  - static defaultProps = {
    color:'blue'
  }
  - prop-type 类型检查 react分离出来的类型检查库

4. dangerouslySetHtml 将字符串渲染成html元素
   - <div dangerouslySetInnerHTML={{__html:this.state.content}}></div> 