function calculateChaiIngredients(numberOfCups) {
    // Ingredient quantities per cup
    // Calculate total ingredients
    const water = 200 * numberOfCups;
    const milk = 50 * numberOfCups;
    const teaLeaves = 1 * numberOfCups;
    const sugar = 2 * numberOfCups;

    // Output results
    console.log(`Chai Ingredients for ${numberOfCups} cups:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (majani): ${teaLeaves} tablespoon`);
    console.log(`Sugar (sukari): ${sugar} teaspoons`);
    console.log("\nEnjoy your Chai Bora!");
}

// Prompt user for number of cups
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
calculateChaiIngredients(Number(input));



