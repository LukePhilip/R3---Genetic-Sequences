Genetic Sequences
=================
An important concept is that data can be represented in a variety of different ways. Take, for instance, a sequence of DNA. If we wanted to work with such a thing on a computer, how should we represent it? An obvious way is to simply use strings made up of only 'A', 'C', 'G', and 'T' characters, but is that the best way? It depends, likely, on the intended use. It certainly isn't the most efficient way. 4 different things can be represented with only two bits:

|Nucleotide|Binary Representation|
|---|---|---|
|Adenine|00|
|Cytosine|01|
|Guanine|10|
|Thymine|11|

So to store a human genetic sequence (3 billion base pairs) as bits one would need 6 billion bits which is roughly 716MB. If we instead chose to store that sequence as a string, we would need a string with a length of 3 billion characters, each of which occupies 16 bits which works out to be roughly 5722MB. Peptide chains are also made of nucleotides, but there is a shortcut to encoding them to 20 different proteins. We'd need 5 bits to encode a protein that would normally take 6. Saving 1 bit might not seem like a lot, but these are the sorts of decisions engineers have to make. 

Of course, just packing in information into bits is only one part (and a little soulless, wouldn't you agree?) of representing information. What if we, instead, chose to interpret the bits as pixels or sound? 

For this project, I am asking you to complete a few of the bioinformatics challenges found on [Project Rosalind](http://rosalind.info/problems/tree-view/). I've provided a general template here to help you structure the assignment. Most of the problems are actually pretty straight-forward string manipulations which can completed using the methods of [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). Some particularly helpful ones are:

|String Function|Short Description|
|---|---|
|`charAt`|returns the character at the 0-based index|
|`indexOf`|returns the 0-based index of a particular string. You can even use it to start the search at a given location in the string.| 
|`replaceAll`|replaces all instances of one character with another|

You might also find some of the "higher order" [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) functions useful. These functions each take a function that is applied to every element in the array. 

|Array Function|Short Description|
|---|---|
|`forEach`|does something for each element in the array|
|`filter`|returns a new array which consists of all elements that match the given function| 
|`map`|returns a new array which performs a transfomration on each element in an array|
|`reduce`|performs some function on every element in the array and returns a single value|

Finally, some other functions you may find useful, both are part of the [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) class

|Function|Short Description|
|---|---|
|`Object.keys`|returns an array of all keys of an object|
|`Object.values`|returns an array of all values in an object|

It should be noted, though, that loops and string concatenation will get you through all of these challenges. 

**Most importantly** is how you represent this information. I'd like you to be thoughtful and creative about the representations of your solutions. 