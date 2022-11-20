
var cols = 8;
var rows = 6;
var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var colors = [];
var word = [];
var string = ['RED', 'GREEN', 'YELLOW', 'BLUE', 'PURPLE'];
const coordinates = [];

//shuffle the list of Alphabets
function shuffleText(s) {
    var arr = s.split('');           // Convert String to array
    
    arr.sort(function() {
      return 0.5 - Math.random();
    });  
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
}

function splitText(s) {
    var arr = s.split('');           
    // arr.sort(function() {
    //   return Math.random();
    // });  
    s = arr.join('');
    return s;
}
 
//updating characters to fill all boxes
var lettersCount = rows * cols;
for(var i = 0; i < lettersCount ;){
    alphabets += alphabets;
    i += 26; 
}

var shuffledString = shuffleText(alphabets);

function splitListString() {
    const stringArray = splitText(string[0]);
    
    var ranY = Math.floor(Math.random() * (cols-stringArray.length)) + 1;
    var ranX = Math.floor(Math.random() * rows) + 1;

    for(var i=0; i<stringArray.length; i++) {
        let letter = stringArray[i]; 

        coordinates.push({
            letter,
            x: ranX-1,
            y: i + ranY
        });
    }
}

//console.log(Math.floor(Math.random() * 3) + 1)

function vertical(i,j) {
    var x = j;
    var y = i;
    let xCor = coordinates[j] ?? ''
    let yCor = coordinates[i] ?? '';
    let yCorNum = yCor.y ?? '';
    let xCorNum = xCor.x ?? '';
    let letter = yCor.letter ?? ''; 
    
    for (let i = 0; i < coordinates.length; i++) {
        //console.log(coordinates[i].y)
        if(x==0&&y==coordinates[i].y) { 
            console.log(coordinates[i].y, coordinates[i].x, coordinates[i].letter)
            colors[coordinates[i].y][coordinates[i].x] = 'blue'; 
            word[coordinates[i].y][coordinates[i].x] = coordinates[i].letter;
        }    
    }
    
    // if(x==0&&y==0) { 
    //     colors[0][0] = 'blue'; 
    // }
    // if(x==0&&y==1) { 
    //     colors[1][0] = 'blue'; 
    // }
    // if(x==0&&y==2) { 
    //     colors[2][0] = 'blue'; 
    // }
    // if(x==0&&y==3) {
    //     colors[3][0] = 'blue'; 
    // }
    // if(x==0&&y==4) {
    //     colors[4][0] = 'blue'; 
    // }
    // if(x==0&&y==5) {
    //     colors[5][0] = 'blue'; 
    // }
    // if(x==0&&y==6) {
    //     colors[6][0] = 'blue'; 
    // }
    // if(x==0&&y==7) {
    //     colors[7][0] = 'blue'; 
    // }
 
    //console.log(y, j,  yCorNum, x);
    //colors[y][j] = 'blue';
    //word[y][j] = letter; 

    //console.log(y, j,  yCorNum, x);
    //colors[y][j] = 'blue';
    //word[y][j] = letter; 

}

function setup() {
    createCanvas(windowWidth, windowHeight);

    splitListString();

    console.log(coordinates);

    var k  = 0;
    for (var i =0; i < cols; i++) {  
        colors[i] = [];
        word[i] = [];
        for (var j = 0; j < rows; j++) {
            //colors[i][j] = random(255);
            
            vertical(i, j);

            fill( colors[i][j] ?? 51); 
            //fill(51) 
            rect(j*60, i*60, 60, 60);
            fill('red');
            textSize(32);
            text(word[i][j] ?? shuffledString[k], (j*60)+10, (i*60)+10, 50, 50);
            textSize(15);
            fill('#eee')
            text(i+','+j, (j*60)+20, (i*60)+30, 50, 50);

            //console.log(k)
            k++;
        }
    } 
}

function draw() {
    // background(220);

    // //console.log(shuffledString)
    // var k = 0;
    // for (var i = 0; i < cols; i++) {  
    //     for (var j = 0; j < rows; j++) {
            
    //         fill(colors[i][j]); 
    //         //fill(51) 
    //         rect(j*60, i*60, 50, 50);
    //         fill('red');
    //         textSize(32);
    //         text(word[i][j] ?? shuffledString[k], (j*60)+10, (i*60)+10, 50, 50);

    //         k++;
    //     } 
    // } 
}
