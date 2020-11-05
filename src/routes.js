import React from 'react';
import { BrowserRouter, Switch, Route,  Redirect } from 'react-router-dom'

// import CardPokemon from './Components/CardsResultado';
import Busca from './Pages/Busca';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Busca}/>
      <Route path="/result" component={Busca} />
      <Redirect from="*" to="/"/>
    </Switch>
  </BrowserRouter>
)

export default Routes;