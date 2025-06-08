// boda fare calculation
// boda fare estimator
function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;
  const totalFare = baseFare + (distanceInKm * chargePerKm);

  //outcome results
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${distanceInKm * chargePerKm}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!");
}

const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
calculateBodaFare(Number(input));