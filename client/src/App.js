import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
//import TobuyInput from './components/TobuyInput';
//import TobuyItem from './components/TobuyItem';
import Login from "./components/Login";
//import Database from "./utils";
import Nav from "./components/Nav";
import Lists from "./pages/Lists";



const App = () => ( 
<Router>


  <div>
    <Nav />
    <Route path="/login" exact component={Login} />

      <Switch>
     
      <Route exact path="Header" component={Header} />
      <Route exact path="/lists" components={Lists} />

    </Switch> 
    
  </div>
 </Router> 

);


export default App;

//<Route path="/login" exact component={Login} />
// export default App;
// const App extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       tobuys: [
//         {id: 0, text: "Make a functioning app"},
//         {id: 1, text: "Make an app that functions"},
//         {id: 2, text: "get anything working really"}
//       ],
//       nextId: 3
//     };

//     this.addTobuy = this.addTobuy.bind(this);
//     this.removeTobuy = this.removeTobuy.bind(this);
//   }

//   addTobuy(tobuyText) {
//     let tobuy = this.state.tobuy.slice();
//     tobuy.push({id: this.state.nextId, text: tobuy});
//     this.setState({
//       tobuy: tobuy,
//       nextId: ++this.state.nextId
//     });
//   }

//   removeTobuy(id) {
//     this.setState({
//         tobuy: this.state.tobuy.filter((tobuy, index) => tobuy.id !== id)
//       });
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="tobuywrapper">
//           <Header />
          
//           <TobuyInput tobuyText="" addTobuy={this.addTobuy} />
//           <ul>
//             {
//               this.state.tobuys.map((tobuy) => {
//                 return <TobuyItem tobuy={tobuy} key={tobuy.id} id={tobuy.id} removeTobuy={this.removeTobuy}/>
//               })
//             }
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }


// export default App;