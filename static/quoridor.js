

function make_div(class_name){
    let field = document.createElement("div");
    field.classList.add(class_name);
    field.id = new_div_id;
    new_div_id++
    return field;
}

function make_wider_row(area_number){
    let row = document.createElement("div");
    row.appendChild(make_div("move-area"));
    for(let i=0; i<area_number-1; i++){
        row.appendChild(make_div("fence-vertical"));
        row.appendChild(make_div("move-area"));
    }
    row.appendChild(make_div("position-reset"));
    return row;
}

function make_narrower_row(area_number){
    let row = document.createElement("div");
    row.appendChild(make_div("fence-horizontal"));
    for(let i=0; i<area_number-1; i++){
        row.appendChild(make_div("fence-middle"));
        row.appendChild(make_div("fence-horizontal"));
    }
    row.appendChild(make_div("spacer"));
    return row;
}

function create_empty_board(){

    let board = document.createElement("div");
    let boardSize = 9;
    board.appendChild(make_wider_row(boardSize));
    for (let i=0; i<boardSize-1; i++){
        board.appendChild(make_narrower_row(boardSize));
        board.appendChild(make_wider_row(boardSize));

    }

    return board;
}




var new_div_id = 1
let content = document.getElementById("content");
content.appendChild(create_empty_board());

    //tutaj dodanie gracza
//297
    let top_pawn_div_id = "9";
    let bottom_pawn_div_id = "297";

function createPawn(div_id, color){
    let player_field = document.getElementById(div_id);
    let player_pawn = document.createElement("div");
    player_pawn.classList.add("pawn");
    player_pawn.style.backgroundColor = color;
    player_pawn.style.borderColor = color;
    player_field.appendChild(player_pawn);
}

createPawn(top_pawn_div_id, "#86ff4e");
createPawn(bottom_pawn_div_id, "#c000bf");
