function nucleotideCountsOf(string) {
  return nucleotides.reduce( (counts,n) => {
    counts[n] = Array.from(string).filter( char => char === n).length
    return counts;
  }, {}) 
}

function rnaTranscription(string) {
  //using "replace all" to replace T's with U's
  return string.replaceAll('T', 'U');
}
function revcTranscription(string) {
  //have to add intermediate variables so the reverse is not reversed more times i want it to be
  return string.replaceAll("A","x").replaceAll("T","A").replaceAll("x","T");
  return string.replaceAll("C", "y").replaceAll("G", "C").replaceALl("y", "G");
}
