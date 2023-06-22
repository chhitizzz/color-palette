const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-button");

const maxPaletteBoxes = 32;

const generatePalette = () => {
    for(let i = 0; i < maxPaletteBoxes ; i++){
            let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
            randomHex = `#${randomHex.padStart(6,"0")}`;
            console.log(randomHex);

            const color = doccument.createElement("li");
            color.classList.add("color");
            color.innerHTML = `<div class="react-box" style="background: ${randomHex}"></div>
            <span class="hex-value">${randomHex}</span>`;


    }
}

refreshBtn.addEventListener("click", generatePalette);