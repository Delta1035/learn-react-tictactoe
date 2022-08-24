import { Component } from "react";

export default class Welcome extends Component {
  constructor() {
    super()
    this.state = {
        name:'react',
        isLiked:false,
        content:'<div>来自react将字符串转化为dom元素</div>'
    }
  }

  handleClick(){
    console.log(this);
    
    // this.setState({
    //     isLiked:!this.state.isLiked
    // })

    this.setState((preState,props)=>{
        console.log('props',props);
        console.log('修改之前的state',this.state);
        return {
            isLiked:!preState.isLiked
        }
    },()=>{
        // 因为setState 是异步操作, 所以想要拿到最新的state, 需要在这里
        console.log('这里是最新的state',this.state);
    })
  }

  render() {
    return (
      <>
        <div>
            <div dangerouslySetInnerHTML={{__html:this.state.content}}></div>
          <h1>欢迎来到{this.state.name}的世界</h1>
          <button onClick={()=>this.handleClick()}> {this.state.isLiked ? "❤取消" : "🖤收藏"} </button>{" "}
        </div>
      </>
    );
  }
}
