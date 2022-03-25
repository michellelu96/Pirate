import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from '../componets/home';
import NewPirate from '../componets/NewPirate';
import PiratePage from '../componets/PiratePage';
const Main = () =>{
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/pirates' exact component={Home}/>
      <Route path='/pirate/new'  exact component={NewPirate}/>
      <Route path='/pirate/:id' exact component={PiratePage}/>
      <Route path ='/pirate/:name' exact component={PiratePage}/>
      <Redirect to="/pirates" />
    </Switch>
</BrowserRouter>
  );
}
export default Main;
