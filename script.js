let player_state = 'run';
const state_choosed = document.getElementById('state');

state_choosed.addEventListener('change',(e)=>{
    player_state = e.target.value;
    console.log('Player_State: ', player_state)
});

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 200;
const CANVAS_HEIGHT = canvas.height = 200;

let counter = 1;
let animationFrames = 0;
let playerImage = new Image();
let player_height = 163;
let player_width = 128;
let player_x_position = 0;
let player_y_position = 0;
let animation_speed = 5;
let images_size = 6;


console.log('Player_State_Outside: ', player_state)


playerImage.src = 'styles/Images/human.png';

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(playerImage, player_x_position, player_y_position, player_width, player_height, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    console.log('Player_State_In_Function: ',player_state)
    if(player_state=='run'){
        player_y_position = player_height * 0;
        images_size = 6;
        animation_speed = 5;
    }else if(player_state=='walk'){
        player_y_position = player_height * 1;
        images_size = 6;
        animation_speed = 8;
    }else if(player_state=='jump'){
        player_y_position = player_height * 2;
        images_size = 4;
        animation_speed = 10;
    }

    if(animationFrames%animation_speed==0){
        if(counter>images_size){
            counter = 0;
            player_x_position = 0;
        }
        else{
            player_x_position = player_x_position + 128;
            counter++;
        }
    }
    animationFrames++;
    requestAnimationFrame(animate);
};
animate();