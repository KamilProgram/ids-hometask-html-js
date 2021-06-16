import './App.scss';
import CatalogContainer from "./сomponents/Catalog/CatalogContainer";
import ItemCardContainer from "./сomponents/ItemCard/ItemCardContainer";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import HeaderContainer from './сomponents/Header/HeaderContainer';
import { Component } from 'react';

class App extends Component {
  render() {
    return <div className="wrapper">
      <BrowserRouter>
        <HeaderContainer />
        <Switch>
          <Route path='/catalog/:filter?' render={() => <CatalogContainer />} />
          <Route path='/item/:userId' render={() => <ItemCardContainer />} />
          <Redirect from="/" to="/catalog" />
          <Route path='*' render={() => <div>404 not found</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  }
}


export default App;
