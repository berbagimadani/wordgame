
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
    const stringArray = splitText(string[1]);
    for(var i=0; i<stringArray.length; i++) {
        let letter = stringArray[i];
        console.log(letter);

        coordinates.push({
            letter,
            x: 2,
            y: i //Math.floor(Math.random() * 5) + 1
        });
    }
}

function vertical(i,j) {
    var x = j;
    var y = i;
    let xCor = coordinates[0].x ?? ''
    let yCor = coordinates[i] ?? '';
    let yCorNum = yCor.y ?? '';
    let letter = yCor.letter ?? '';
    //console.log(y, yCorNum )
    //console.log(i, j,  yCorNum, x, xCor);
    if( xCor==x && y  ) { 
        console.log(y, j,  yCorNum, x);
        //colors[y][j] = 'blue';
        //word[y][j] = letter;
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    splitListString();


    console.log(coordinates);

    var k  = 0;
    for (var i = 0; i < cols; i++) {  
        colors[i] = [];
        word[i] = [];
        for (var j = 0; j < rows; j++) {
            //colors[i][j] = random(255);
            
            vertical(i, j);

            // if(i==2&&j==2) { 
            //     colors[i][j] = 'blue';
            //     word[i][j] = 'R';
            // } else if(i==3&&j==1) { 
            //     colors[i][j] = 'blue';
            //     word[i][j] = 'E';
            // } else if(i==4&&j==0) { 
            //     colors[i][j] = 'blue';
            //     word[i][j] = 'D';
            // }

            fill( colors[i][j] ?? 51); 
            //fill(51) 
            rect(j*60, i*60, 60, 60);
            fill('red');
            textSize(32);
            text(word[i][j] ?? shuffledString[k], (j*60)+10, (i*60)+10, 50, 50);
            textSize(18);
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
