function drawCounts(counts) {
  strings = {whole:''};
  for( const n in counts ) {
    if( n != "U" ) {
      const string = `${n}: ${counts[n]} `;
      strings.whole += string;
      strings[n] = string;
    }
  }
  strings.whole = strings.whole.trim();
  adjustTextSizeToWidth(strings.whole, width)

  let x = 10;
  let y = height/4;
  for( let n of ["A","C","G","T"] ) {
    fill(colorTable[n]);
    text(strings[n],x,y);
    x += textWidth(strings[n]);
  }  
}

function printRNAStringWithColor(string,x,y) {
  let = xOffset = 0;
  for(let i = 0; i < string.length; i++) {
    const currentChar = string.charAt(i);
    if(currentChar === "U") {
      fill("PeachPuff");
    }
    else {
      fill("HoneyDew")
    }
    text(currentChar,x+xOffset,y);
    xOffset += textWidth( currentChar );
  }
}

function adjustTextSizeToWidth( string, maxWidth ) {
  let ts = height*0.15; 
  textSize(ts);
  while( 20 + textWidth(string) > maxWidth ) {
    ts -= 1;
    textSize(ts);
  }
  while( 20 + textWidth(string) < maxWidth ) {
    ts += 1;
    textSize(ts);
  }
}

function pieChart( x, y, r, counts ) {
  const total = Object.values(counts).reduce((sum,current) => sum + current);
  let startAngle = 0;
  for( const n in counts ) {
    const theta = 2*PI*counts[n]/total;
    const endAngle = startAngle + theta;
    fill(colorTable[n]);
    arc( x,y,r,r,startAngle, endAngle);
    startAngle = endAngle;
  }
}

function drawDNAString(string,x,y,width) {
  const s = width/string.length;
  noStroke();
  for( let i = 0; i < string.length; i++ ) {
    fill(colorTable[string.charAt(i)]);
    square(x + i * s, y, s);
  }
}

const colorTable = {
  A: 'LightSteelBlue',
  C: 'Linen',
  G: 'Plum',
  T: 'HoneyDew',
  U: 'PeachPuff'
}