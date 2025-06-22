const employees = [
  { name: "Jerry", hourlyRate: 21, hoursWorked: 36 },
  { name: "Tuan", hourlyRate: 19, hoursWorked: 44 },
  { name: "Emily", hourlyRate: 18, hoursWorked: 50 }
];

function calculateBasePay(rate, hours) {
  const regularHours = Math.min(hours, 40);
  return rate * regularHours;
}
