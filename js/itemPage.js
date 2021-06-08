import { baseUrl, API } from "./api.js";
import { addEventCounter, addEventFavorite } from "./common.js";

const getItemSection = (data) => {
    const item = document.createElement('section');
    item.className = "details";

    item.innerHTML = `<div class="details-img">
                    <img src="${baseUrl}${data.picture.path}" alt="${data.picture.alt}" />             
                </div>

                <div class="description">
                    <h2>${data.name}</h2><p>${data.info}</p> <h3>${data.description}</h3> <p>${data.details}</p>

                    <form class="add-to-card">
                        <span class="price">${data.price.currency === 'USD' ? '$' : ''}${data.price.value}</span>
                        
                        <div class="quantity">
                            <button class="minus-btn"><img class="icon-img" src="./img/remove.svg" alt="add" /> </button>
                            <input id="countValue" type="text" value="1">
                            <button class="plus-btn" type="submit" > <img class="icon-img" src="./img/add.svg" alt="add" /> </button>
                        </div>
                        
                        <div class="add-btn">
                            <button> Add to cart </button>
                        </div>

                        <div class="add-to-favorite">
                            <button class="favorite-btn ${data.like ? 'active' : ''}"></button>
                        </div>
                    </form>
                </div>`

    addEventFavorite(item);
    addEventCounter(item);

    return item;
};

export default async (id) => {
    const response = await API.getItem(id);
    const item = response.content;
    return getItemSection(item);
}