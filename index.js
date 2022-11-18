var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var finalWords = [];
var wordFormed = "";
var boxSelected = [];
var GRID_X = 5;
var GRID_Y = 8;
var dictionary = [];
var largestWordTillNow = "";
var valid_word_list;
 
isAlreadyFormed = (word) =>{
    for(var i = 0 ; i < finalWords.length ; i++){
        if(finalWords[i] === word) return true;
    }
    return false;
} 

//shuffle the list of Alphabets
function shuffle(s) {
    var arr = s.split('');           // Convert String to array
    
    arr.sort(function() {
      return 0.5 - Math.random();
    });  
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
}
 

//grid logic
grid = () =>{

    //updating characters to fill all boxes
    var lettersCount = GRID_X * GRID_Y;
    for(var i = 27; i < lettersCount ;){
        alphabets += alphabets;
        i += 26; //26 letters we have
    }
    //grid formation logic
    var container = document.createElement("div");
    container.className = "container";
    var shuffledString = shuffle(alphabets);
    var k = 0;
    for (var i=0; i < GRID_Y; i++) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;
        for (var j=0; j < GRID_X; j++) {
            var box = document.createElement("div");
            box.className = "box";
            box.id = "box" + j;
            box.number = k;
            box.style.width = (100/GRID_X)+'%';
            box.setAttribute('selected', 'false');
            //box.innerHTML = shuffledString[k];
            box.innerHTML = k;
            box.setAttribute('onclick','letterSelected(this)');
            row.appendChild(box);
            k++;
        }
        container.appendChild(row);
    }
    var main = document.getElementById('gameContainer');
    main.appendChild(container);
}
 
window.onload = grid();
//populateDictionary(english_word_list);



var coords = [[], []];
const x = 0;
const y = 1;

/*
  Generate X coords
*/
for (var i = -1.8; i < 2; i += 0.4) {
  let c = Math.round(i * 10) / 10;
  coords[x].push(c);
  if(c + 0.2 == 0) coords[x].push(0);
}

/*
  Generate Y coords
*/
for (var i = -1.8; i < 2; i += 0.4) {
  let c = Math.round(i * 10) / 10;
  coords[y].push(c);
  if(c + 0.2 == 0) coords[y].push(0);
}

console.log(coords);
