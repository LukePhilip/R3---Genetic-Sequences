let gc_fasta;
let bg = 'lightslategray';
const nucleotides = ["A","C","G","T","U"];

// This function is for loading files. 
function preload() {
  // loadStrings is a P5 function
  gc_fasta = loadStrings('gc.fasta');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
}

function draw() {
  // The way I've done my solutions is as static drawings
  // so all the drawing is handled in response to key presses.
  // If you wanted something dynamic, you'd need to do that
  // here, or at least start it here. 
}

// This is a nifty way of handling key presses. 
// This object stores a key and a function name in the following 
// format:
// 'key': function_name
const problemDispatch = {
  //using a key to press to switch to all of the solutions of dna
  'q': problem_dna,
  'w': problem_rna,
  'e': problem_revc,
  'r': problem_hamm,
  't': problem_subs,

 
}

function keyPressed() {
  // This checks to see if this is a key we will respond to, 
  // then it repaints the canvas and calls the matching function
  if( key in problemDispatch ) {
    background(bg);
    problemDispatch[key]();
  }
}