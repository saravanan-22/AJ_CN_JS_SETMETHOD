console.table (`first letter   &   Second letter`); 

const fruits = new Set(["Apple", "Orange", "Banana", "Mango"]);

fruits.forEach(fruit => {

    let firstLetter = fruit.charAt(0);
    let lastLetter = fruit.charAt(fruit.length -1);
    
    document.write(`    First letter of ${fruit}:  ${firstLetter}  :`);
    document.write(`    Last letter of  ${fruit}:  ${lastLetter} :`);
    console.table(`    ${firstLetter.padEnd(20)}${lastLetter}        = ${fruit}` );
    // console.log(`First letter of ${fruit}: ${firstLetter}\tLast letter of ${fruit}: ${lastLetter}`);
    
    // console.table(`    First letter of ${fruit}:  ${firstLetter}`);
   
    // console.table(`    Last letter of  ${fruit}:  ${lastLetter}`);
    
});