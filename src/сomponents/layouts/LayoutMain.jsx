import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import React from 'react';
import ItemPage from '../../pages/item/ItemPage';
import CatalogPage from '../../pages/catalog/CatalogPage';
import Header from '../header/Header';
import styles from './index.module.scss'


const LayotMain = () => {


    const history = useHistory();

    return <div className={styles.wrapper}>
        <Header history={history} />
        <Switch>
            <Route path='/catalog/' render={() => <CatalogPage />} />
            <Route path='/item/:userId' render={() => <ItemPage />} />
            <Redirect from="/" to="/catalog" />
            <Route path='*' render={() => <div>404 not found</div>} />
        </Switch>

    </div>

}


export default LayotMain;
