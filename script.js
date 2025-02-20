const gridContainer = document.querySelector('.grid-container');

function createGrid() {
    for (let i = 0; i < 4; i++) {
        let column = document.createElement('div');
        column.classList.add('grid-column');
        for (let j = 0; j < 4; j++) {
            let cell = document.createElement('div');
            cell.classList.add("grid-cell");
            cell.setAttribute("data-cell-opacity", 0.2);
            column.appendChild(cell);
        }

        gridContainer.appendChild(column);
    }
}

gridContainer.addEventListener("mouseenter", addCellColor, true);

function addCellColor(event) {
    let cell = event.target;

    if (cell.className === ("grid-cell")) {
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

createGrid();