var new_div_id = 1;
var first_pawn_id = 1;
var new_wall_id = 1;
var top_pawn_div_id = "9";
var bottom_pawn_div_id = "297";
var horisontal_value = 1;
var vetrical_val = 17;



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


function createPawn(div_id, color){
    let player_field = document.getElementById(div_id);
    let player_pawn = document.createElement("div");
    let prefix = "Pawn#";
    player_pawn.classList.add("pawn");
    player_pawn.style.backgroundColor = color;
    player_pawn.style.borderColor = color;
    player_pawn.id = prefix + first_pawn_id;
    first_pawn_id++;
    player_field.appendChild(player_pawn);
}


/*function place_wall(div_id){
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
}*/
function place_wall(event){
    console.log("bottom has been clicked")
}
 /*   let wall_field = document.getElementById(div_id);
    
        if(wall_field.class == "fence-horizontal"){
            document.getElementById(div_id).class.replace(class+"Selected")
            document.getElementById(div_id + horizontal_val).className.replace(class+"Selected")
            document.getElementById(div_id+(2*horizontal_val)).className.replace(class+"Selected")

            }else if(wall_field.class == "fence-vertical"){
            document.getElementById(div_id).class.replace(class+"Selected")
            document.getElementById(div_id+vetrical_val).class.replace(class+ "Selected")
            document.getElementById(div_id+(2*vetrical_val)).class.replace(class+ "Selected")
        };

    }
*/
function addEventListenerWalls(){
    var num_of_divs = 289
    for(let i=1;i<=num_of_divs;i=i+1){
        let wall_field = document.getElementById(i);
        if (wall_field.className === "fence-horizontal"
            || wall_field.className === "fence-vertical"){
            wall_field.addEventListener("click",place_wall)
        }
    }

}

    





let content = document.getElementById("content");
content.appendChild(create_empty_board());
createPawn(top_pawn_div_id, "#86ff4e");
createPawn(bottom_pawn_div_id, "#c000bf");
addEventListenerWalls();