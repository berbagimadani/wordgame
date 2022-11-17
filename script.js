
var cols = 8;
var rows = 6;
var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var colors = [];
var word = [];
var string = ['RED', 'GREEN', 'YELLOW', 'BLUE', 'PURPLE'];

//shuffle the list of Alphabets
function shuffle(s) {
    var arr = s.split('');           // Convert String to array
    
    arr.sort(function() {
      return 0.5 - Math.random();
    });  
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
}
 
//updating characters to fill all boxes
var lettersCount = rows * cols;
for(var i = 0; i < lettersCount ;){
    alphabets += alphabets;
    i += 26; 
}

var shuffledString = shuffle(alphabets);

function moveText(rect, x, y, num) {

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < cols; i++) {  
        colors[i] = [];
        word[i] = [];
        for (var j = 0; j < rows; j++) {
            colors[i][j] = random(255);
            
            if(i==2&&j==2) { 
                colors[i][j] = 'blue';
                word[i][j] = 'R';
            } else if(i==3&&j==1) { 
                colors[i][j] = 'blue';
                word[i][j] = 'E';
            } else if(i==4&&j==0) { 
                colors[i][j] = 'blue';
                word[i][j] = 'D';
            }

        }
    } 
}

function draw() {
    background(220);

    //console.log(shuffledString)
    var k = 0;
    for (var i = 0; i < cols; i++) {  
        for (var j = 0; j < rows; j++) {
            
            fill(colors[i][j]);
            // fill('green');
            // rect(j*60, i*60, 50, 50);
            // if(i==0&&j==4) { 
            //     fill('black'); 
            //     text('R', (j*60)+10, (i*60)+10, 50, 50);
            // } 
            // else if(i==1&&j==3) {
            //     fill('#bbb');
            //     text('E', (j*60)+10, (i*60)+10, 50, 50);
            // }
            // else if(i==2&&j==2) {
            //     fill('#fff');
            //     text('D', (j*60)+10, (i*60)+10, 50, 50);
            // }
            // else {
            //     fill(51) 
            //     rect(j*60, i*60, 50, 50);
            //     fill('red');
            //     textSize(32);
            //     text(shuffledString[k], (j*60)+10, (i*60)+10, 50, 50);
            // }

            //fill(51) 
            rect(j*60, i*60, 50, 50);
            fill('red');
            textSize(32);
            text(word[i][j] ?? shuffledString[k], (j*60)+10, (i*60)+10, 50, 50);

            k++;
        } 
    } 
}
