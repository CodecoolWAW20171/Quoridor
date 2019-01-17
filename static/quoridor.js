var new_div_id = 1;
var first_pawn_id = 1;
var new_wall_id = 1;



function make_div(class_name){
    let field = document.createElement("div");
    field.classList.add(class_name);
    field.id = new_div_id;
    new_div_id++;
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





function place_wall(div_id){
    let wall_field = document.getElementById(div_id);
    if (wall_field.className in fence_class) {
        let wall = document.createElement("div");
        wall.classList.add("wall");
        wall.orientation = dir;
        wall.style.backgroundColor = color;
        wall.style.borderColor = color;
        wall.id = new_wall_id;
        new_wall_id++;
        if (wall_field.className in h_fence_class) {
            wall_field.appendChild(wall);
            let next_horizontal_field = document.getElementById(div_id + 1)
            next_horizontal_field.appendChild(wall);
            let last_horizontal_field = document.getElementById(div_id) + 2
            last_horizontal_field.appendChild(wall);
        }
        else if (wall_field.className in v_fence_class) {
            wall_field.appendChild(wall);
            let next_vertical_field = document.getElementById(div_id + 17)
            next_vertical_field.appendChild(wall);
            let last_vertical_field = document.getElementById(div_id + 34)
            last_vertical_field.appendChild(wall);
        }
    }
}


let content = document.getElementById("content");
content.appendChild(create_empty_board());


