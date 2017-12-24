import React from 'react';

class Test extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:''
        }
    }

    render(){
        return(
            <div>
                <h6>{this.state.name}</h6>
                <input type="text" value={this.state.name} onChange={this.changeHandle.bind(this)}/>
                <button onClick={this.clickHandle.bind(this)}>login</button>
            </div>
        )
    }

    changeHandle(e){
        this.setState({
            name:e.target.value
        });
    }

    clickHandle(){
        const name = this.state.name;
        const prarentCHandle = this.props.prarentCHandle;
        prarentCHandle(name);
    }
}

export default Test;