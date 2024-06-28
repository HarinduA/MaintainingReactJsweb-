//import React,{ useState } from 'react';
import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { click } from '@testing-library/user-event/dist/click';

class App extends Component {
  state ={
    count:0
  }


  clickme = () =>{
    this.setState({count:this.state.count + 2})
  }

  render(){
    return(
      <div>
        <h1>Click Time {this.state.count}</h1>
        <button onClick={this.clickme}>Click Me</button>
      </div>
    )
  }
}

export default App;







/*
export const App = () =>{
  
  const [count /* count represent state , inccount/*inncount represent setState] = useState(0)

  /*return(
    <div>
        <h1> click button {count} </h1>
        <button onClick={() => {inccount(count+2)}}>Click Me</button>
    </div>
  );
} */

