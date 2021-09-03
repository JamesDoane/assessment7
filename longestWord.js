function longWord(arrWords){
    let wordLength = 0
    for(let i = 0 ; i<arrWords.length; i++){
        if(arrWords[i].length > wordLength){
            wordLength = arrWords[i].length
        }
    }
    return wordLength
}


console.log(longWord(["the","age","of","men","is","over"]))
console.log(longWord(["monitor","cpu","gpu","mouse","keyboard"]))
console.log(longWord(["couch","office","bed","desk","dresser"]))
console.log(longWord(["obnoxious",'unbelievble',"unsightly","dramticized","idealized",'photogeneticist','homogenized']))

//This is the only one I got under O(n^2), clocking in at O(n) runtime complexity.