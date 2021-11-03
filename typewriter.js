const sentence = "hello there from lighthouse labs";
let j = 0
for (let i = 0; i < sentence.length ; i++) {
    
       // console.log(char)
      
    
    j++
    setTimeout(() => {
        if(i == (sentence.length -1)){
            console.log(sentence.charAt(i))
            return
           }
    process.stdout.write(sentence.charAt(i));
}, 1000+(50 * j)) // <= 1s delay to make it noticeable. Can dial it down later.
//console.log("\n")
//console.log("\n")}

}
console.log("\n")
 
  
