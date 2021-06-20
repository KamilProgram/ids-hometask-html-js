/* import './App.scss'; */
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Component } from 'react';
import ItemPage from '../../pages/item/ItemPage';
import CatalogPage from '../../pages/catalog/CatalogPage';
import Header from '../header/Header';
import styles from './index.module.scss'


class LayotMain extends Component {

    render() {
        const HeaderWithRouter = withRouter(Header);

        return <div className={styles.wrapper}>
            <HeaderWithRouter />
            <Switch>
                <Route path='/catalog/:filter?' render={() => <CatalogPage />} />
                <Route path='/item/:userId' render={() => <ItemPage />} />
                <Redirect from="/" to="/catalog" />
                <Route path='*' render={() => <div>404 not found</div>} />
            </Switch>

        </div>
    }
}


export default LayotMain;
