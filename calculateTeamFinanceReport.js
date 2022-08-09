const salaries = {
    Progger: { // specialization type 'Progger'
        salary: 1000, // salary after tax; should be integer; min: 100, max: 100000
        tax: '15%' // tax percent; presented as string with template `{tax}%` where 'tax' is integer; min: "0%", max: "99%"
    },
    Tester: {
        salary: 800,
        tax: '10%'
    },
    Designer: { salary: 600, tax: '30%' },
    Artist: { salary: 1500, tax: '15%' }
};

const team = [
    {
        name: 'Masha', // name of team member
        specialization: 'Progger' // specialization should be picked from `salaries` otherwise member should be ignored in report
    },
    { name: 'Vasya', specialization: 'Tester' },
    { name: 'Taras', specialization: 'Tester' },
    { name: 'Taras I', specialization: 'Tester' },
    { name: 'Tapas', specialization: 'Humor' },
    { name: 'Misha', specialization: 'Manager' },
    { name: 'Max', specialization: 'Designer' },
    { name: 'Vova', specialization: 'Designer' },
    { name: 'Leo', specialization: 'Artist' }
];

function calculateTeamFinanceReport(salaries, team) {
    const proffNames = Object.keys(salaries);//?
    let result = {};
    let totalResult = {};
    let totalBudgetTeam = 0;

    for (let arrayElement of team) {
        if (proffNames.includes(arrayElement.specialization))
            result[arrayElement.specialization] = (result[arrayElement.specialization] || 0) + 1;
    }

    totalResult['totalBudgetTeam'] = 0;

    Object.entries(result).forEach(([item, salary]) => {//?
        const eachSalary = salaries[item]['salary'];
        totalBudgetTeam += totalResult[`totalBudget${item}`] = (eachSalary + (eachSalary * parseInt(salaries[item]['tax'])) / 100) * salary;//?
    });//?

    totalResult['totalBudgetTeam'] = totalBudgetTeam;

    return totalResult//?
}

console.log(JSON.stringify(calculateTeamFinanceReport(salaries, team)))