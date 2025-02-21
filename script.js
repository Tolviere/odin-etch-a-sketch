const gridContainer = document.querySelector('.grid-container');

gridContainer.addEventListener("mouseenter", addCellColor, true);

const form = document.querySelector('form');
const input = document.querySelector('input');

let canDraw = false;

gridContainer.addEventListener("mousedown", (e) => {
    canDraw = true;
    if (e.target.className === "grid-cell") addCellColor(e);
});

gridContainer.addEventListener("mouseup", () => {
    canDraw = false;
});

form.addEventListener('submit', e => {
   gridContainer.innerHTML = '';
   createGrid(+input.value); 
   e.preventDefault();
});

createGrid();
centerGrid();

function createGrid(size = 4) {

    if (Number.isNaN(size)){
        size = 4;
    }

    for (let i = 0; i < size; i++) {
        let column = document.createElement('div');
        column.classList.add('grid-column');

        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.classList.add("grid-cell");
            cell.setAttribute("data-cell-opacity", 0.2);

            if (size > 25) {
                cell.style.border = `1px solid black`;
                gridContainer.style.border = `1px solid black`;
            } else {
                cell.style.border = `2px solid black`;
                gridContainer.style.border = `2px solid black`;
            }

            column.appendChild(cell);
        }

        gridContainer.appendChild(column);
    }
}

function addCellColor(event) {
    let cell = event.target;

    if (canDraw && cell.className === ("grid-cell")) {
        cell.style.backgroundColor = `rgb(${getRandomColor()} / ${getCellOpacity(cell)}`;
    }
}

function getRandomColor() {
    return `${Math.random() * 255} ${Math.random() * 255} ${Math.random() * 255}`;
}

function getCellOpacity(cell) {
    cell.setAttribute("data-cell-opacity", cell.getAttribute("data-cell-opacity") * 1.1);
    return cell.getAttribute("data-cell-opacity");
}

function centerGrid() {
    const headerContainer = document.querySelector('.header-container');
    gridContainer.style = `margin-bottom: ${headerContainer.offsetHeight}px;`;
}
