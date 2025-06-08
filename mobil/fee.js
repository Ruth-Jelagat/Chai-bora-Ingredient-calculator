// transaction fee estimation
function estimateTransactionFee(amountToSend) {
  const percentageFee = 0.015;
  const minFee = 10;
  const maxFee = 70;
  let fee = amountToSend * percentageFee;

  if (fee < minFee) {
    fee = minFee;
      }
      else if (fee > maxFee) {
      fee = maxFee;
  }

  const totalDebited = amountToSend + fee;

  // output results
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log("\nSend Money Securely!");
}

const input = prompt("Unatuma Ngapi? (KES):");
estimateTransactionFee(Number(input));