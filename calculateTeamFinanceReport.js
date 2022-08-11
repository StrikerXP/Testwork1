const salaries = {
    Progger: { // specialization type 'Progger'
        salary: 1000, // salary after tax; should be integer; min: 100, max: 100000
        tax: '15%' // tax percent; presented as string with template `{tax}%` where 'tax' is integer; min: "0%", max: "99%"
    },
    Tester: {salary: 800, tax: '10%'},
    Designer: {salary: 600, tax: '30%'},
    Artist: {salary: 1500, tax: '15%'}
};

const team = [
    {
        name: 'Masha', // name of team member
        specialization: 'Progger' // specialization should be picked from `salaries` otherwise member should be ignored in report
    },
    {name: 'Vasya', specialization: 'Tester'},
    {name: 'Taras', specialization: 'Tester'},
    {name: 'Taras I', specialization: 'Tester'},
    {name: 'Tapas', specialization: 'Humor'},
    {name: 'Misha', specialization: 'Manager'},
    {name: 'Max', specialization: 'Designer'},
    {name: 'Vova', specialization: 'Designer'},
    {name: 'Leo', specialization: 'Artist'}
];

function calculateTeamFinanceReport(salaries, team) {
    const proffNames = Object.keys(salaries);
    let result = {};
    result['totalBudgetTeam'] = 0;

    team.filter(fromSalaries => proffNames.includes(fromSalaries.specialization))
        .map(arrayElement => {
            let specialization = arrayElement.specialization
            if (proffNames.includes(specialization)) {
                let formula = Object.values(salaries[specialization]).reduce((prev, acc) => prev + (prev * parseInt(acc)) / 100);
                result[`totalBudget${specialization}`] = (result[`totalBudget${specialization}`] || 0) + formula;
                result['totalBudgetTeam'] += result[`totalBudget${specialization}`];
            }
        })

    return result//?.
}

console.log(JSON.stringify(calculateTeamFinanceReport(salaries, team)))//?.