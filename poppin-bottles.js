// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase

// Investment --- Total Bottles
//     10               15
//     20               35
//     30               55
//     40               75
//


function capsToBottles(caps) {
  return Math.floor(caps / 4);
}

function emptiesToBottles(empties) {
  return Math.floor(empties / 2);
}

function howManyBottles(investment) {

  // Hold our overall count of bottles.
  let totalBottlesRedeemed = 0;
  let totalFromCaps = 0;
  let totalFromEmpties = 0;

  // Counters for bottle redemption
  let freeBottles = 0;
  let caps = 0;
  let empties = 0;

  // Initial bottle purchase
  let firstPurchase = Math.floor(investment / 2);

  // Add initial purchase to counters.
  totalBottlesRedeemed += firstPurchase;
  caps += firstPurchase;
  empties += firstPurchase;

  // Redeem initial purchase to free bottles
  let freeFromCaps = capsToBottles(caps);
  let freeFromEmpties = emptiesToBottles(empties);
  totalFromEmpties += freeFromEmpties;
  totalFromCaps += freeFromCaps;

  freeBottles += (freeFromCaps + freeFromEmpties);

  caps -= (freeFromCaps * 4);
  empties -= (freeFromEmpties * 2);

  totalBottlesRedeemed += freeBottles;

  // Loop to use up free bottles
  while (freeBottles > 0) {

    caps += freeBottles;
    empties += freeBottles;
    freeBottles = 0;

    while (caps >= 4) {
      caps -= 4;
      freeBottles += 1;
      totalFromCaps += 1;
    }

    while (empties >= 2) {
      empties -= 2;
      freeBottles += 1;
      totalFromEmpties += 1;
    }
    totalBottlesRedeemed += freeBottles;
  }

console.log("TOTAL BOTTLES: ", totalBottlesRedeemed);
console.log("REMAINING BOTTLES: ", empties);
console.log("REMAINING CAPS: ", caps);
console.log("TOTAL EARNED: ");
console.log("  BOTTLES: ", totalFromEmpties);
console.log("  CAPS: ", totalFromCaps);
}

const investment = Number(process.argv[2]);

howManyBottles(investment);

