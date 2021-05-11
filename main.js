var canvas= new fabric.Canvas("my_canvas")
var block_image_height=30;
var block_image_width=30;
var player_x=10;
var player_y=10;
var player_object="";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {

        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top:player_y,left:player_x})
        canvas.add(player_object);
        
    } );
}

function new_image(get_image) {

    fabric.Image.fromURL(get_image,function (Img) {

        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({top:player_y,left:player_x});
        canvas.add(block_image_object);
    })
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);

    if (e.shiftKey==true&&keypress=="80") {
        console.log("P and Shift pressed together")
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        console.log("Height+10|Width+10");
        document.getElementById("Current_width").innerHTML=block_image_width;
        document.getElementById("Current_Height").innerHTML=block_image_height;
    }

    if (e.shiftKey==true&&keypress=="77") {
        console.log("M and Shift pressed together")
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        console.log("Height-10|Width-10")
        document.getElementById("Current_width").innerHTML=block_image_width;
        document.getElementById("Current_Height").innerHTML=block_image_height;
    }

    if (keypress=="40") {
        down();
        console.log("Down arrow pressed");
    }

    if (keypress=="39") {
        right();
        console.log('Right arrow pressed');
    }

    if (keypress=='38') {
        up();
        console.log('Up arrow pressed');
    }

    if (keypress=='37') {
        left();
        console.log('Left arrow pressed');
    }

    if (keypress=='70') {
        new_image("ironman_face.png");
        console.log('f pressed');
    }

    if (keypress=='66') {
        new_image('spiderman_body.png');
        console.log("b pressed");
    }

    if (keypress=='76') {
        new_image('hulk_legs.png');
        console.log('r was pressed');
    }

    if (keypress=='82') {
        new_image('thor_right_hand.png');
        console.log('L was pressed');
    }

    if (keypress=='72') {
        new_image('captainamerica_left_hand.png');
        console.log('h was pressed');
    }
    if (keypress=='80') {
        player_update();
        console.log('P was pressed')
    }

    function up() {
        if (player_y>=10) {
            player_y=player_y-block_image_height;
            console.log('x=' + player_x,'|y= ' + player_y);
            player_update();
            canvas.remove(player_object);
        }
    }

    function down() {

        if (player_y<=450) {
            player_y=player_y+block_image_height;
            console.log('x= '+player_x,'|y= '+player_y);
            player_update();
            canvas.remove(player_object);
        }
    }

    function right() {

        if (player_x<=800) {
            player_x=player_x+10;
            console.log('x= '+player_x,'|y= '+player_y);
            player_update();
            canvas.remove(player_object);
        }
    }

    function left() {

        if (player_x>=10) {
            player_x=player_x-10;
            console.log('x= '+player_x,'|y= '+player_y);
            player_update();
            canvas.remove(player_object);
        }
    }

    

}

    
