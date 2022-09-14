function get_random_rgb_color() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}

const gridContainer = document.querySelector('.grid-container');

//
function generateGrid(size){
    if (size > 100 || isNaN(size) || size <= 0){
        alert("Enter a valid number");
        return;
    }

    deleteGrid();

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size*size; i++){
        const gridPixel = document.createElement("div");
        gridContainer.appendChild(gridPixel);
    }

    const gridPixels = gridContainer.querySelectorAll('div');
    gridPixels.forEach(pixel => pixel.addEventListener('mouseenter',() => coloringPixel(pixel)));
}

function deleteGrid() {
    gridContainer.innerHTML='';
}

function coloringPixel(e){
    const radioButtons = document.querySelectorAll('input[name="check"]')
    console.log(radioButtons);
    
    if (radioButtons[1].checked) {
        e.style.backgroundColor = get_random_rgb_color();
    } else if (radioButtons[2].checked) {
        if (e.style.backgroundColor === 'black'){
            e.style.opacity = parseFloat(e.style.opacity) + 0.1;
        } else {
            e.style.backgroundColor = 'black';
            e.style.opacity = 0.1;
        }
    } else {
        e.style.backgroundColor = 'black';
        e.style.opacity = 1
    }
}

const gridButton = document.querySelector('.grid-button').addEventListener('click', () => generateGrid(prompt('Enter the grid size: (1-100)')))


function main() {
    deleteGrid();
    generateGrid(16);
}

main();
