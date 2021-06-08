import catalogPage from "./catalogPage.js";
import { redirect } from "./common.js";
import itemPage from "./itemPage.js";


export const updadtePage = (html) => {
    let render = document.getElementById('render');
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

const findItems = (e) => {
    e.preventDefault();
    let input = document.getElementById('text-to-find');
    redirect('catalog', input.value);
}

const init = () => {
    let formSearch = document.getElementById('form');
    formSearch.addEventListener('submit', findItems);
    addEventListener('hashchange', handleHash);
    handleHash();
}

init();
