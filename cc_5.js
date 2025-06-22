const employees = [
  { name: "Jerry", hourlyRate: 21, hoursWorked: 36 },
  { name: "Tuan", hourlyRate: 19, hoursWorked: 44 },
  { name: "Emily", hourlyRate: 18, hoursWorked: 50 }
];

function calculateBasePay(rate, hours) {
  const regularHours = Math.min(hours, 40);
  return rate * regularHours;
}

function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(hours - 40, 0);
  return overtimeHours * rate * 1.5;
}

function calculateTaxes(grossPay) {
  return grossPay * 0.85; // deduct 15%
}

function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const netPay = calculateTaxes(grossPay);

  return {
    name: employee.name,
    basePay: basePay.toFixed(2),
    overtimePay: overtimePay.toFixed(2),
    grossPay: grossPay.toFixed(2),
    netPay: netPay.toFixed(2)
  };
}