 // All...
// http://rosalind.info/problems/dna/
// http://rosalind.info/problems/rna/
// http://rosalind.info/problems/revc/
// http://rosalind.info/problems/hamm/
// One...
// http://rosalind.info/problems/subs/
// http://rosalind.info/problems/prot/
// http://rosalind.info/problems/gc/
const DNA_STRING_FOR_dna = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC";
const DNA_STRING_FOR_rna = "GATGGAACTTGACTACGTAAATT" ;
const DNA_STRING_FOR_revc = "AAAACCCGGT";
const DNA_STRING_1_FOR_hamm = "GAGCCTACTAACGGGAT";
const DNA_STRING_2_FOR_hamm = "CATCGTAATGACGGCCT";
const DNA_STRING_FOR_subs = "GATATATGCATATACTT";
const DNA_SUBSTRING_FOR_subs = "ATAT";
const RNA_STRING_FOR_prot = "AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA";

function problem_dna() {
  // this line is actually the solution to the problem
  let counts = nucleotideCountsOf(DNA_STRING_FOR_dna);
  // this is all drawing code...
  drawDNAString(DNA_STRING_FOR_dna,0,0,width);
  drawCounts(counts);
  pieChart(width/2, height/2, width/4, counts);
}

function problem_rna() {
  adjustTextSizeToWidth(DNA_STRING_FOR_rna,width);
  //use existing code from dna, but adjust to use for rna
  drawDNAString(DNA_STRING_FOR_rna,0,height/3,width);
  text(DNA_STRING_FOR_rna,0,height/4)
  //create titles above the lines to identify what dna and rna is
  text("DNA String:",0,height/8)
  text("RNA String:",0,height/1.75)

  let rna = rnaTranscription(DNA_STRING_FOR_rna);
  drawDNAString(rna,0,height/1.35,width);
    printRNAStringWithColor(rna,0,height/1.5)
  
}

function problem_revc() {
  //setup
  fill("plum")
  adjustTextSizeToWidth(DNA_STRING_FOR_revc,width);
  text(DNA_STRING_FOR_revc,0,height/4,width);
  fill("peachpuff")
  //Here I will use an array to reverse the code
  let str = Array.from(revcTranscription(DNA_STRING_FOR_revc)).reverse().join("")
  adjustTextSizeToWidth(str,width);
  text(str,0,height/1.6)
  //now the strings
  drawDNAString(DNA_STRING_FOR_revc,0,0,width);
  const DNA_STRING_FOR_revcTranscribed = "ACCGGGTTTT";
  drawDNAString(DNA_STRING_FOR_revcTranscribed,0,height/1.4,width);

}

function problem_hamm() {
  drawDNAString(DNA_STRING_1_FOR_hamm,0,0,width);
  adjustTextSizeToWidth(DNA_STRING_1_FOR_hamm,width);
  text(DNA_STRING_1_FOR_hamm,0,height/6);
  drawDNAString(DNA_STRING_2_FOR_hamm,0,height/3,width);
  adjustTextSizeToWidth(DNA_STRING_2_FOR_hamm,width);
  text(DNA_STRING_2_FOR_hamm,0,height/2);
  fill("plum")
  text("Hamming Distance:",0,height/1.4)

  //now finding hamming distance
  const hamm1 = DNA_STRING_1_FOR_hamm;
  const hamm2 = DNA_STRING_2_FOR_hamm;
  const hammingdistance = (hamm1 = "", hamm2 = "") => {
    if(hamm1.length !== hamm2.length)
      return 0;
  }
  let distance = 0
    for(let i = 0; i < hamm1.length; i += 1) {
      if (hamm1[i] !== hamm2[i]) {
        distance += 1;
      }
    }
    text(distance,0,height/1.2)
}

function problem_subs() {
//design setup(colors and titles) the usual
fill("plum");
text("DNA String:",0,height/8);
fill("lightsteelblue");
adjustTextSizeToWidth(DNA_STRING_FOR_subs,width);
text(DNA_STRING_FOR_subs,0,height/4);
fill("plum");
text("DNA Substring:",0,height/2.5);
fill("lightsteelblue");
text(DNA_SUBSTRING_FOR_subs,0,height/2);
fill("plum");
text("Location:", 0,height/1.4);
//Using the IndexOf to find the location of the Substring
let string = DNA_STRING_FOR_subs
let substring = DNA_SUBSTRING_FOR_subs
let startIndex = -1;
let indices = [];
//i wanted to use while here
while(string.indexOf(substring,startIndex + 1)>-1) {
  
  startIndex = string.indexOf(substring,startIndex+1)
  indices.push(startIndex+1);
}
  fill("lightsteelblue");
  text(indices.concat(),0,height/1.25)
}

function problem_prot() {

}

function problem_gc() {

}