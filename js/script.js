const rainyDaysAPI = "https://api.noroff.dev/api/v1/rainy-days";

const getJacketText = document.querySelectorAll(".jacketText");

async function getJackets(){
    const response = await fetch(rainyDaysAPI);
    const result = await response.json();

    return result;
}


async function displayJackets(){
    const jackets = await getJackets();
    const jacketContainer = document.querySelector(".jackets-box");

    for(let i = 0; i < jackets.length; i++){
        const jacket = jackets[i];

        if(jacket.onSale) {
            const jacketDiv = document.createElement("div");
            jacketDiv.classList.add("jacket-image-box");

            const image = document.createElement("img");
            image.src = jacket.image;
            image.alt = jacket.description;

            const jacketTitle = document.createElement("p");
            jacketText.classList.add("jacket-title");
            jacketText.innerHTML = `${jacket.title}${jacket.price}`;
        }
    }
}
displayJackets();

