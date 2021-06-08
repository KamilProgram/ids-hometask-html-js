export const addEventFavorite = (nodeHtml) => {
    const likeBtn = nodeHtml.querySelector(".favorite-btn");
    likeBtn.onclick = (e) => {
        e.target.classList.toggle('active');
    }

}

export const addEventCounter = (nodeHtml) => {
    const subBtn = nodeHtml.querySelector(".minus-btn");
    const addBtn = nodeHtml.querySelector(".plus-btn");
    const inputCount = nodeHtml.querySelector('#countValue');

    subBtn.onclick = (e) => {
        if (inputCount.value > 0) inputCount.value--;
    }
    addBtn.onclick = (e) => {
        if (inputCount.value < 100) inputCount.value++;
    }
}

export const redirect = (url, searchParam) => {
    document.location.href = `#${url}${searchParam ? '?' + searchParam : ''}`;
}