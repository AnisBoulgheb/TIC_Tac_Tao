let end=false

let circle_cpt=0
let x_cpt=0

document.getElementById("o_result").textContent = circle_cpt;
document.getElementById("x_result").textContent = x_cpt;

let item1 = document.getElementById("1");
let item2 = document.getElementById("2");
let item3 = document.getElementById("3");
let item4 = document.getElementById("4");
let item5 = document.getElementById("5");
let item6 = document.getElementById("6");
let item7 = document.getElementById("7");
let item8 = document.getElementById("8");
let item9 = document.getElementById("9");
let rest=document.getElementById("rest");
rest.onclick=function(){
  end=false;
  remove(item1);
  remove(item2);
  remove(item3);
  remove(item4);
  remove(item5);
  remove(item6);
  remove(item7);
  remove(item8);
  remove(item9);
 for (let i = 0; i < 3; i++) {
     for (let j = 0; j < 3; j++)  {
       matrix[i][j]=-1
     }
  
}

document.querySelector(".win").remove();
}

let player=1
function check (item,player){
  switch (item) {
    case item1:
      matrix[0][0]=player
      break;
    case item2:
      matrix[0][1] = player;
      break;
    case item3:
        matrix[0][2] = player;
      break;
    case item4:
        matrix[1][0] = player;
      break;
    case item5:
        matrix[1][1] = player;
      break;
    case item6:
        matrix[1][2] = player;
      break;
    case item7:
        matrix[2][0] = player;
      break;  
    case item8:
        matrix[2][1] = player;
      break;
    case item9:
        matrix[2][2] = player;
      break; 
           
        }
  console.log(matrix)

  }


function clic(item1) {
  if (player == 1 && !item1.hasAttribute("notpossible") && !end) {
    let o = document.createElement("img");
    o.setAttribute("src", "./image/circle-svgrepo-com.svg");
    item1.setAttribute("notpossible", "");
    o.style.width = "65px";
    o.style.height = "65px";
    item1.appendChild(o);
    check(item1, player);
    result(matrix)
    player = 0;
    document.getElementById("o_result").textContent = circle_cpt;
document.getElementById("x_result").textContent = x_cpt;

  } else if (player == 0 && !item1.hasAttribute("notpossible") && !end) {
    let x = document.createElement("img");
    x.setAttribute("src", "./image/x-symbol-svgrepo-com.svg");
    item1.setAttribute("notpossible", "");
    x.style.width = "50px";
    x.style.height = "50px";
    item1.appendChild(x);
    check(item1, player);
    result(matrix)
    player = 1;
    document.getElementById("o_result").textContent = circle_cpt;
document.getElementById("x_result").textContent = x_cpt;
  }
}
function remove(item1) {
  // Remove the attribute if it exists
  if (item1.hasAttribute("notpossible")) {
    item1.removeAttribute("notpossible");
  }

  // Remove the first <img> child if it exists
  let img = item1.querySelector("img");
  if (img) {
    item1.removeChild(img);
  }
 
}

item1.onclick = function () {
  clic(item1);
};
item2.onclick = function () {
  clic(item2);
};
item3.onclick = function () {
  clic(item3);
};
item4.onclick = function () {
  clic(item4);œ
};
item5.onclick = function () {
  clic(item5);
};
item6.onclick = function () {
  clic(item6);
};
item7.onclick = function () {
  clic(item7);
};
item8.onclick = function () {
  clic(item8);
};
item9.onclick = function () {
  clic(item9);
};
let matrix = [];
for (let i = 0; i < 3; i++) {
  matrix[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix[i][j] = -1; // Example values
  }
}


function result(matrix){
  for(let i=0; i<3;i++){//the same line
    if (matrix[i][0]==matrix[i][1] && matrix[i][1]==matrix[i][2] && matrix[i][1]!==-1){
      end=true;
      if (matrix[i][1]==0){
        console.log("X is the winner");
    let winner=document.createElement("div")
    winner.textContent = "X win";
    winner.className = "win";
    let container = document.getElementById("main");
    container.appendChild(winner);
    x_cpt++
  } else {
    console.log("O is the winner");
    let winner = document.createElement("div");
    winner.textContent = "O win";
    winner.className = "win";
    let container = document.getElementById("main");
    container.appendChild(winner);
    circle_cpt++
    }

  }}
      for (let i = 0; i < 3; i++) {//the same colone
        if (
          matrix[0][i] == matrix[1][i] &&
          matrix[1][i] == matrix[2][i] &&
          matrix[2][i] !== -1
        ) {
          end = true;
          if (matrix[i][1] == 0) {
          console.log("X is the winner");
          let winner=document.createElement("div")
          winner.textContent = "X win";
          winner.className = "win";
         let container = document.getElementById("main");
         container.appendChild(winner);
         x_cpt+=1
        } else {
          console.log("O is the winner");
          let winner = document.createElement("div");
          winner.textContent = "O win";
          winner.className = "win";
          let container = document.getElementById("main");
          container.appendChild(winner);
          circle_cpt+=1;

          }
        }
      }
        if (matrix[0][2]==matrix[1][1] && matrix[1][1]==matrix[2][0] && matrix[1][1]!==-1){//left to right
          end = true;
          if (matrix[1][1] == 0) {
            console.log("X is the winner");
            let winner=document.createElement("div")
            winner.textContent = "X win";
            winner.className = "win";
            let container = document.getElementById("main");
            container.appendChild(winner);
            x_cpt++;
          } else {
            console.log("O is the winner");
            let winner = document.createElement("div");
            winner.textContent = "O win";
            winner.className="win"
            let container = document.getElementById("main");
            container.appendChild(winner);
            circle_cpt++;
            console.log(circle_cpt);
          }
}
      if (
        matrix[0][0] == matrix[1][1] &&//right to left
        matrix[1][1] == matrix[2][2] &&
        matrix[1][1] !== -1
      ) {
        end = true;
            if (matrix[1][1] == 0) {
              console.log("X is the winner");
              let winner = document.createElement("div");
              winner.textContent = "X win";
              winner.className="win"
             let container = document.getElementById("main");
             container.appendChild(winner);
              x_cpt+=1;
            } else {
              console.log("O is the winner");
              let winner = document.createElement("div");
              winner.textContent = "O win";
              winner.className="win"
              document.body.appendChild(winner);
              let container = document.getElementById("main");
              container.appendChild(winner)
              circle_cpt+=1;
              console.log(circle_cpt)

            }
            let drow_cpt=0;
            let drow =true;
            for (let i = 0; i < 3; i++){
              for (let j = 0; j < 3; j++){
                  if (matrix[i][j]==-1){
                    drow=false;
                    drow_cpt+=1;
                  }
              }
            }
            if (drow_cpt==0){
              let winner = document.createElement("div");
              winner.textContent = "Draw";
              winner.className = "win";
              document.body.appendChild(winner);

            }
            console.log(drow)
            console.log(drow_cpt)
                }
}
