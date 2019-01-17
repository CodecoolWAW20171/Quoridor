const top_pawn_div_id = "9";
const bottom_pawn_div_id = "297";

function createPawn(div_id, color, pawn_id){
    let pawn = document.createElement("div");
    pawn.classList.add("pawn");
    pawn.style.backgroundColor = color;
    pawn.style.borderColor = color;
    pawn.id = pawn_id;
    pawn.setAttribute("draggable", "true");
    pawn.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
        console.log("Started to drag the element.");
};
    let player_field = document.getElementById(div_id);
    player_field.appendChild(pawn);
}


createPawn(top_pawn_div_id, "#86ff4e", "topPawn");
createPawn(bottom_pawn_div_id, "#c000bf", "bottomPawn");


let moveAreas = document.getElementsByClassName("move-area");
for(let moveArea of moveAreas) {
    console.log(moveArea);
    moveArea.ondragover = function (event) {
        event.preventDefault();
    };

    moveArea.ondrop = function (event) {
        event.preventDefault();
        let data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
        console.log("The p element was dropped");
    };
}