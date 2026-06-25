
export const hoursPerDay = 8
export function dayRate(ratePerHour) {
  return ratePerHour * hoursPerDay
}


export function daysInBudget(budget, ratePerHour) {
  let daliyRate = hoursPerDay * ratePerHour
  let totalDaysforWork = budget / daliyRate
  let rounded = Math.floor(totalDaysforWork)
  return rounded
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dailyRate = ratePerHour * hoursPerDay;

  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;

  const monthlyCost = 22 * dailyRate * (1 - discount);

  const total =
    fullMonths * monthlyCost +
    remainingDays * dailyRate;

  return Math.ceil(total);
}


