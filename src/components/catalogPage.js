
import { baseUrl, API } from "../api.js";
import { addEventFavorite } from "../utils.js";

const getItemCard = (data) => {
    const item = document.createElement('div');
    item.className = "catalog-item";
    item.innerHTML = `<div class="catalog-body">

        <div class="add-to-favorite">
            <button class="favorite-btn ${data.like ? 'active' : ''}"></button>
        </div>

        <a href="#item?${data.id}">
            <div class="item-img">
                <img src="${baseUrl}${data.picture.path}" alt="${data.picture.alt}" />   
            </div>
            <div class="item-lable">
                ${data.name}
            </div>
            <span class="price">${data.price.currency === 'USD' ? '$' : ''}${data.price.value}</span>
        </a>
        </div>`

    addEventFavorite(item);
    return item;
};

const getCatalogSection = (items) => {
    let catalog = document.createElement('section');
    catalog.className = "catalog";

    items.forEach(item => {
        catalog.append(getItemCard(item));
    });
    return catalog;
};


export default async (searchParam) => {

    let response = await API.getItems();
    let items = response.content;

    if (searchParam) {
        let reg = new RegExp(searchParam, 'i');
        items = items.filter(item => reg.test(item.name));
    }

    if (items.length === 0) return 'No items found';

    return getCatalogSection(items);
}
