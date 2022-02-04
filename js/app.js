var _array=[];
var i , rand , n , score=0;
/*var x = document.getElementById("myAudio");*/
function new_turn(){
    /*x.play();*/
    document.getElementById("p1").innerHTML = "Score: " + score.toString();
    //get a random number from 0 to 15
    rand=Math.floor((Math.random() * 16));
    //get a random number from 0 to 5
    num=Math.floor((Math.random() * Math.min(score/200,5)));
    //get 2 or 4
    if(num==0){
        num=2;
    }else if(num==1){
        num=4;
    }else if(num==2){
        num=8;
    }else if(num==3){
        num=16;
    }else if(num==4){
        num=32;
    }else if(num==5){
        num=64;
    }
    //then put 2 in its cell
    if(_array[rand]<2){
        _array[rand]=num;
        document.getElementById(rand.toString()).textContent=num;
    }
    else{new_turn();}
    //colors
    for(i=0;i<16;i++){
        let target_element = document.getElementById(i.toString())
        
        if(_array[i]=="")
        {target_element.style.backgroundColor="#F8F9FA";}
        else if(_array[i]==2)
        {target_element.style.backgroundColor="#0D6EFD";}
        else if(_array[i]==4)
        {target_element.style.backgroundColor="#0D6EED";}
        else if(_array[i]==8)
        {target_element.style.backgroundColor="#0D6EDD";}
        else if(_array[i]==16)
        {target_element.style.backgroundColor="#0D6ECD";}
        else if(_array[i]==32)
        {target_element.style.backgroundColor="#0D6EBD";}
        else if(_array[i]==64)
        {target_element.style.backgroundColor="#0D6EAD";}
        else if(_array[i]==128)
        {target_element.style.backgroundColor="#0D6E9D";}
        else if(_array[i]==256)
        {target_element.style.backgroundColor="#0D6E8D";}
        else if(_array[i]==512)
        {target_element.style.backgroundColor="#0D6E7D";}
        else if(_array[i]==1024)
        {target_element.style.backgroundColor="#0D6E6D";}
        else if(_array[i]==2048)
        {target_element.style.backgroundColor="#0D6E5D";}
        else {target_element.style.backgroundColor = "#0D6E4D";}
    }

    document.getElementById(rand.toString()).style.backgroundColor="#009E9D";
}
function new_game(){
    score=0;
    //let all cells equal zero
    for(i=0;i<16;i++){
        _array[i]="";
        document.getElementById(i.toString()).textContent="";}
        new_turn();
    }
    function to_right(){
    for(var right=0;right<=12;right+=4)
    {
    for(i=right+2;i>=right;i--){
        for(n=i;n<right+3;n++){
        if(_array[n+1]<2){
            _array[n+1]=_array[n];
            _array[n]="";
            document.getElementById(n.toString()).textContent="";
            document.getElementById((n+1).toString()).textContent=_array[n+1];
        }
        if((_array[n+1]==_array[n])&(_array[n+1]>0)){
            _array[n+1]=_array[n] + _array[n+1];
            score += _array[n + 1];
            _array[n]="";
            document.getElementById(n.toString()).textContent="";
            document.getElementById((n+1).toString()).textContent=_array[n+1];
        }
        }
    }
    }
    new_turn();
    }
    function to_left(){
    for(var left=0;left<=12;left+=4){
    for(i=left;i<=left+3;i++){
        for(n=i;n>left;n--){
        if(_array[n-1]<2){
            _array[n-1]=_array[n];
            _array[n]="";
            document.getElementById(n.toString()).textContent="";
            document.getElementById((n-1).toString()).textContent=_array[n-1];
        }
        if((_array[n-1]==_array[n])&(_array[n-1]>0)){
            _array[n-1]=_array[n] + _array[n-1];
            score += _array[n - 1];
            _array[n]="";
            document.getElementById(n.toString()).textContent="";
            document.getElementById((n-1).toString()).textContent=_array[n-1];
        }
        }
    }
    }
    new_turn();
    }
    function to_top(){
    for(var top=0;top<=3;top++){
    for(i=top;i<=top+12;i+=4){
        for(n=i;n>top;n-=4){
        if(_array[n-4]<2){
            _array[n-4]=_array[n];
            _array[n]="";
            document.getElementById(n.toString()).textContent="";
            document.getElementById((n-4).toString()).textContent=_array[n-4];
        }
        if((_array[n-4]==_array[n])&(_array[n-4]>0)){
            _array[n-4]=_array[n] + _array[n-4];
            score += _array[n - 4];
            _array[n]="";
            document.getElementById(n.toString()).textContent="";
            document.getElementById((n-4).toString()).textContent=_array[n-4];
        }
        }
    }
    }
    new_turn();
}
function to_down(){
    for(var down=0;down<=3;down++){
    for(i=down+12;i>=down;i-=4){
        for(n=i;n<down+12;n+=4){
        if(_array[n+4]<2){
            _array[n+4]=_array[n];
            _array[n]="";
            document.getElementById(n.toString()).textContent="";
            document.getElementById((n+4).toString()).textContent=_array[n+4];
        }
        if((_array[n+4]==_array[n])&(_array[n+4]>0)){
            _array[n+4]=_array[n] + _array[n+4];
            score += _array[n + 4];
            _array[n]="";
            document.getElementById(n.toString()).textContent="";
            document.getElementById((n+4).toString()).textContent=_array[n+4];
        }
        }
    }
    }
    new_turn();
}




window.onload=function(){

const domain = "https://api-and-websockets.herokuapp.com";
let saveScoreBtn = document.querySelector("#b1");
        saveScoreBtn.onclick = async () => {
            console.log("start saving the score")
            let board_name = document.querySelector("#h2").value
            let board_pass = document.querySelector("#h2").value
            let score = document.querySelector("#h1").value
            let score_name = document.querySelector("#t1").value
            let url = domain + "/api/save_score/"
            let data = await fetch(url , {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    "board": board_name,
                    "password": board_pass,
                    "score": parseInt(score),
                     // you have to send data with the right datatype
                    "name": score_name
                })
            })
            document.getElementById("div1").style.display="block";
            document.getElementById("div2").style.display="block";
            document.getElementById("div3").style.display="block";
            document.getElementById("div4").style.display="block";
            document.getElementById("form").style.display="none";
            let name = document.querySelector("#h2").value;
            build_board(name);
        }



let showBtn = document.querySelector("#r1")
        let build_board = async (name) => {
            let url = domain + `/api/get_scores/${name}/` // you can change this to "https://api-and-websockets.herokuapp.com/api/get_scores"
            console.log(url);
            let data = await fetch(url)
            data = await data.json()            
            let container = document.querySelector("#leaderboard")
            container.innerHTML = `<h1 class="text-center">Leaderboard</h1>
            <div class="row">
                <button class="btn btn-primary" id="r1">Refresh</button>
            </div>
            <div class="row mt-3">
                <div class="col-3 container-md p-1 bg-light text-dark">
                    <p>Rank</p>
                </div>
                <div class="col-5 container-md p-1 bg-light text-dark">
                    <p>Name</p>
                </div>
                <div class="col-4 container-md p-1 bg-light text-dark">
                    <p>Score</p>
                </div>
            </div>`
            var i=0;
            for (item of data){
                if( item.score < 69696969){
                    i++;
                    tag = `<div class="row border rounded mt-1 mb-2" id="user${i}" data-aos="fade-right">
                    <div class="col-3 p-1 text-dark" id='ranks'>
                        <p>${i}</p>
                    </div>
                    <div class="col-5 p-1 text-dark" id='names'>
                        <p>${item.name}</p>
                    </div>
                    <div class="col-4 p-1 text-dark" id='scores'>
                        <p>${item.score}</p>
                    </div>
                    <span class="sale"></span>
                </div>`
                    container.innerHTML += tag
                }
            }
            
        }
        
        showBtn.addEventListener("click", ()=>{
            let name = document.querySelector("#h2").value;
            build_board(name);
        } )
        let name = document.querySelector("#h2").value;
        build_board(name);


var myElement = document.getElementById("div1");
myElement.addEventListener("touchstart", startTouch, false);
myElement.addEventListener("touchmove", moveTouch, false);

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
};

function moveTouch(e) {
    if (initialX === null) {
    return;
}

if (initialY === null) {
    return;
}

var currentX = e.touches[0].clientX;
var currentY = e.touches[0].clientY;

var diffX = initialX - currentX;
var diffY = initialY - currentY;

if (Math.abs(diffX) > Math.abs(diffY)) {
// sliding horizontally
if (diffX > 0) {
    // swiped left
    to_left();
} else {
    // swiped right
    to_right();
}  
} else {
// sliding vertically
if (diffY > 0) {
    // swiped up
    to_top();
} else {
    // swiped down
    to_down();
}  
}

initialX = null;
initialY = null;

e.preventDefault();
};}




document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        to_top();
    }
    else if (e.keyCode == '40') {
        to_down();
    }
    else if (e.keyCode == '37') {
        to_left();
    }
    else if (e.keyCode == '39') {
        to_right();
    }

}



function send_score(){
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="none";
    document.getElementById("div3").style.display="none";
    document.getElementById("div4").style.display="none";
    document.getElementById("form").style.display="block";
    document.getElementById("h1").value=score;
}


function save(){
    localStorage.setItem("board", JSON.stringify(_array));
    localStorage.setItem("score", score);
    alert("Saved successfully.");
}

function load(){
    if(localStorage.getItem("board")){
        _array = JSON.parse(localStorage.getItem("board"));
        score = parseInt(localStorage.getItem("score"));
        document.getElementById("p1").innerHTML = "Score: " + score.toString();
        for(var i=0;i<_array.length;i++){
            document.getElementById(i).textContent = _array[i];
        }
        for(i=0;i<16;i++){
            let target_element = document.getElementById(i.toString())
            if(_array[i]=="")
            {target_element.style.backgroundColor="#F8F9FA";}
            else if(_array[i]==2)
            {target_element.style.backgroundColor="#0D6EFD";}
            else if(_array[i]==4)
            {target_element.style.backgroundColor="#0D6EED";}
            else if(_array[i]==8)
            {target_element.style.backgroundColor="#0D6EDD";}
            else if(_array[i]==16)
            {target_element.style.backgroundColor="#0D6ECD";}
            else if(_array[i]==32)
            {target_element.style.backgroundColor="#0D6EBD";}
            else if(_array[i]==64)
            {target_element.style.backgroundColor="#0D6EAD";}
            else if(_array[i]==128)
            {target_element.style.backgroundColor="#0D6E9D";}
            else if(_array[i]==256)
            {target_element.style.backgroundColor="#0D6E8D";}
            else if(_array[i]==512)
            {target_element.style.backgroundColor="#0D6E7D";}
            else if(_array[i]==1024)
            {target_element.style.backgroundColor="#0D6E6D";}
            else if(_array[i]==2048)
            {target_element.style.backgroundColor="#0D6E5D";}
            else {target_element.style.backgroundColor = "#0D6E4D";}
        }
    }else{
        alert("There is no saved game.");
    }
}