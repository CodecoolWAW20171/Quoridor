
function make_div(class_name){
    let field = document.createElement("div");
    field.classList.add(class_name);
    return field;
}


function make_wider_row(area_number){
    let row = document.createElement("div");
    row.appendChild(make_div("move-area"));
    for(let i=0; i<area_number-1; i++){
        row.appendChild(make_div("fence-vertical"));
        row.appendChild(make_div("move-area"));
    }
    return row;
}


function make_narrower_row(area_number){
    let row = document.createElement("div");
    row.appendChild(make_div("fence-horizontal"));
    for(let i=0; i<area_number-1; i++){
        row.appendChild(make_div("fence-middle"));
        row.appendChild(make_div("fence-horizontal"));
    }
    return row;
}


function new_game(){

    let board = document.createElement("div");
    let boardSize = 9;

    make_wider_row(boardSize);
    for (let i=0; i<boardSize-1; i++){
        make_narrower_row(boardSize);
        make_wider_row(boardSize);
    }
    return board;
}


const content = document.getElementById("content");
content.innerHTML = new_game();