//import 'reset-css'

import './scss/style.scss'
import catalogPage from "./components/catalogPage.js";
import itemPage from "./components/itemPage.js";

import { redirect, debounce } from "./utils.js";

export const updadtePage = (html) => {
    let render = document.getElementById('root');
    render.innerHTML = '';
    render.append(html);
}

function getRouteInfo() {
    const hash = location.hash ? location.hash.slice(1) : '';
    let [name, params] = hash.split('?');

    if (params) params = decodeURIComponent(params);

    return { name, params }
}

const handleHash = () => {
    const route = getRouteInfo();

    switch (route.name) {
        case 'catalog':
            catalogPage(route.params).then(html => updadtePage(html));

            break

        case 'item':
            itemPage(route.params).then(html => updadtePage(html));
            break

        default: redirect('catalog');
    }
}

const setSearchFormHandler = () => {
    let inputFind = document.getElementById('text-to-find');
    inputFind.addEventListener(
        "keyup",
        debounce(() => redirect('catalog', inputFind.value), 200)
    );
}

const init = () => {
    setSearchFormHandler();
    addEventListener('hashchange', handleHash);
    handleHash();
}

init();
