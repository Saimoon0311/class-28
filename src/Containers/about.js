import React from 'react'
import {Link} from "react-router-dom";


class About extends React.Component{
gotohome=()=>{
    this.props.history.push('/')
}
    render(){
        return(
            <div>
            <h1>About page</h1>
<button onClick={this.gotohome}>Goto Home</button>
            </div>
        )
    }
}


export default About;