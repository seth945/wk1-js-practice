function calculateNetSalary(basicSalary, benefits) {
    const taxBrackets = [
        { upperLimit: 24000, rate: 0.1 },  // 10% for income up to 24,000
        { upperLimit: 48000, rate: 0.15 }, // 15% for income between 24,001 and 48,000
        { upperLimit: 120000, rate: 0.2 }, // 20% for income between 48,001 and 120,000
        { upperLimit: 240000, rate: 0.25 }, // 25% for income between 120,001 and 240,000
        { upperLimit: Infinity, rate: 0.3 }, // 30% for income above 240,000
    ];


    const nhifDeduction = basicSalary >= 10000


    const nssfDeduction = basicSalary * 0.06;


    const grossSalary = basicSalary + benefits;

    // PAYE (Tax)
    let tax = 0;
    let remainingIncome = grossSalary;
    

    for (let bracket of taxBrackets) {
        if (remainingIncome > bracket.upperLimit) {
            tax += bracket.upperLimit * bracket.rate;
            remainingIncome -= bracket.upperLimit;
        } else {
            tax += remainingIncome * bracket.rate;
            break;
        }
    }

    // Total deductions: Tax + NHIF + NSSF
    const totalDeductions = tax + nhifDeduction + nssfDeduction;

    // Net Salary: Gross Salary - Total Deductions
    const netSalary = grossSalary - totalDeductions;

    // Output results
    console.log(`Basic Salary: ${basicSalary}`);
    console.log(`Benefits: ${benefits}`);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE Tax: ${tax}`);
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    console.log(`NSSF Deduction: ${nssfDeduction}`);
    console.log(`Total Deductions: ${totalDeductions}`);
    console.log(`Net Salary: ${netSalary}`);
}