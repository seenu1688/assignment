import React from 'react';
import './App.css';

 class App extends React.Component{
   state = {
     disabled:true
   }
  handleChange =  (e) =>{
    if(e.target.value.length>=5){
        this.setState({
          disabled:false

        });

    }
    else{
      this.setState({
        disabled:true
      });
    }


  }
    render(){
      return (
        <div className="App">
        <h1>Button Component Assignment</h1>
        <input type="text" placeholder="User Name" onChange={this.handleChange}/>
        <br/>
        <button disabled={this.state.disabled}>Submit</button><br/>
        <h2>default Button disabled, If User press any five characters the button will be enable</h2>
        
        </div>
      );  

    }
    
}

export default App;
