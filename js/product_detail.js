const productContainer = document.querySelector(".purchase-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://api.noroff.dev/api/v1/rainy-days/" + id;

async function callApi() {
    try {
        const response = await fetch(url);
        const result = await response.json(); // Assuming the API returns a single item

        createHtml(result);

    } catch (error) {
        productContainer.innerHTML = message("error", error);
    }
}
callApi();

function createHtml(result) {
    productContainer.innerHTML =`<div class="women-product-box">
                                    <img alt="${result.title}" class="jacket-image" src="${result.image}">
                                </div>
                                <div class="purchase-info">
                                    <p>Item : ${result.title}</p>
                                    <p>Price : ${result.title} $</p>
                                    <p>Size : M</p>
                                    <p>Quantity : </p>
                                </div>`;
}