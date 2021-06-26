import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import ProductPage from '../../pages/product/ProductPage';
import CatalogPage from '../../pages/catalog/CatalogPage';
import Header from '../header/Header';
import styles from './index.module.scss'


const LayoutMain = () => {
    return <div className={styles.wrap}>
        <Header />
        <Switch>
            <Route path='/catalog/:userId' render={() => <ProductPage />} />
            <Route path='/catalog/' render={() => <CatalogPage />} />
            <Redirect exact from="/" to="/catalog" />
            <Route path='*' render={() => <div>404 not found</div>} />
        </Switch>
    </div>
}


export default LayoutMain;
