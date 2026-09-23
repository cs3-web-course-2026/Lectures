// 1. GLOBAL SCOPE
let globalVar = null;

function scopeShowcase() {
  // 2. FUNCTION SCOPE
  // Accessible anywhere inside this function
  var functionScoped = "I am function-scoped (var)";
  let functionLet = "I am function-scoped (let)";

  if (true) {
    // 3. BLOCK SCOPE (Inside { })
    var stillFunctionScoped = "I leaked out of the block!"; // var ignores blocks
    let blockScoped = "I am trapped in this IF block";     // let/const stay here
    const alsoBlockScoped = "Me too";

    console.log(blockScoped); // "I am trapped..." (Works)
  }

  // --- Checking the results outside the block ---
  console.log(stillFunctionScoped); // "I leaked..." (var is visible here!)
  
  try {
    console.log(blockScoped); 
  } catch (e) {
    console.log("blockScoped is NOT defined here"); // Error: let/const are block-scoped
  }

  console.log(globalVar); // "I am everywhere" (Global is accessible)
}

scopeShowcase();

// 4. ACCESS FROM OUTSIDE
try {
  console.log(functionScoped);
} catch (e) {
  console.log("functionScoped is NOT accessible outside the function");
}