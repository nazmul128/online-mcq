import React from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';


import Home from './Pages/Home/Home/Home';
import Html from './Pages/Home/Html/Html';
import Css from './Pages/Home/Css/Css';
import Details from './Pages/Home/Details/Details';

function App() {
  return (
    <div className="App">
     <Home></Home>
     <BrowserRouter>
     <Switch>
       <Route path='/details'>
     <Details></Details>
       </Route>
       <Route path='/html'>
      <Html></Html>
       </Route>
       <Route path='/css'>
      <Css></Css>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
