import React from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from './config/firebase.js'
// import React, { Component } from 'react';

// class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       todo:["saimoon","nabeel","ghous"],
//       value :"",
//     }
//   }
//   // add_todo=()=>{
//   //   this.state.todo.push(this.state.value)
//   //   this.setState({
//   //     todos:this.state.todo
//   //   })
//   add_todo=()=>{
//     this.setState({
//       todos:[...this.state.todo,this.state.value],
//       value:""
//     })
//   }
//   delete_todo=(index)=>{
// this.state.todo.splice(index,1)
// this.setState({
//   todo: this.state.todo
// })

//   }
//   edit_todo=(index)=>{
//     var up_value=prompt("Enter value")
//      this.state.todo[index]=up_value
//      this.setState({
//       todo: this.state.todo
//     })
//     }
//   render(){
//     let (todo,value)=this.state;
//     return(
//       <div>
//         <input value={value} onChange={(e)=>this.setState({value:e.target.value})} type="text" placeholder="Enter words"/>
//         <button onClick={this.add_todo}>Add Item</button>
//         <ul>
//           {todos.todo.map((v,i)=>{
//             return <li key ={i}>{v}
//              <button onClick={()=>this.edit_todo(i)}>Edit</button>     
//              <button onClick={()=>this.delete_todo(i)}>Delete</button>
//              </li>
//           })}
//           </ul>  
//       </div>
//     )
//   }
// }






// class App extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       todo:[{title:"saimoon",edit:false},{title:"ahmed",edit:false}],
//       value :"",
//       // edit_value:""
//     }
//   }
//   // add_todo=()=>{
//   //   this.state.todo.push(this.state.value)
//   //   this.setState({
//   //     todos:this.state.todo
//   //   })
//   add_todo=()=>{
//     let obj ={title:this.state.value}
//     firebase.database().ref("/").child("todo").push(obj)
//     this.setState({
//       todo:[...this.state.todo,obj],
//       value:""
//     })

//   }
//   delete_todo=(index)=>{
// this.state.todo.splice(index,1)
// this.setState({
//   todo: this.state.todo
// })

//   }
//   edit_todo=(index,val)=>{
//     this.state.todo[index].edit=true
//     this.setState({
//       todo: this.state.todo
//     })  
//     }
//     handleChange=(e,index)=>{
//  this.state.todo[index].title=e.target.value
//  this.setState({
//   todo: this.state.todo
// })      
// }
// todo_update =(index)=>{
//   this.state.todo[index].edit=false
//     this.setState({
//       todo: this.state.todo
//     })  
// }
//   render(){
//     let {todo,value}=this.state;
//     return(
//       <div>
//         <input value={value} onChange={(e)=>this.setState({value:e.target.value})} type="text" placeholder="Enter words"/>
//         <button onClick={this.add_todo}>Add Item</button>
//         <ul>
//           {this.state.todo.map((v,i)=>{
//             return <li key ={i}>
//               {v.edit? <input value={v.title} onChange={(e)=>this.handleChange(e,i)} type="text"/> :v.title}
//             {v.edit?             
//              <button onClick={()=>this.todo_update(i)}>Update</button> :     
//             <button onClick={()=>this.edit_todo(i,v.title)}>Edit</button>  
//             }   
//              <button onClick={()=>this.delete_todo(i)}>Delete</button>
//              </li>
//           })}
//           </ul>  
//       </div>
//     )
//   }
// }





// ROUTING



import Approuter from './config/router'

class App extends React.Component{
    render(){
        return(
          <Approuter/>
        )
    }
}












export default App;
