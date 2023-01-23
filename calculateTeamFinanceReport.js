const salaries1 = {
    Manager: {salary: 1000, tax: "10%"},
    Designer: {salary: 600, tax: "30%"},
    Artist: {salary: 1500, tax: "15%"},
}

const team1 = [
    {name: "Misha", specialization: "Manager"},
    {name: "Max", specialization: "Designer"},
    {name: "Vova", specialization: "Designer"},
    {name: "Leo", specialization: "Artist"},]


const salaries2 = {
    TeamLead: {salary: 1000, tax: "99%"},
    Architect: {salary: 9000, tax: "34%"},
}

const team2 = [
    {name: "Alexander", specialization: "TeamLead"},
    {name: "Gaudi", specialization: "Architect"},
    {name: "Koolhas", specialization: "Architect"},
    {name: "Foster", specialization: "Architect"},
    {name: "Napoleon", specialization: "General"},
]


function calculateTeamFinanceReport(salaries, team) {
    // get 'name' salaries report
    const proffNames = Object.keys(salaries);
    // final result variable
    let result = {};
    // variable for 'totalBudgetTeam'
    result['totalBudgetTeam'] = 0;

    // filter team members that are present in 'team'
    team.filter(specializationName => proffNames.includes(specializationName.specialization))//?
        .forEach(arrayElement => {
                // get specialization name
                let specialization = arrayElement.specialization
                Object.values(salaries[specialization])
                    // calculating report
                    .reduce((prev, acc) => {
                        // prev = 'salary' as integer; acc = 'tax' is integer;
                        let formula = prev + (prev * parseInt(acc)) / 100;
                        result[`totalBudget${specialization}`] = (result[`totalBudget${specialization}`] || 0) + formula;//?
                        result['totalBudgetTeam'] += formula;
                    })
            }
        )
    return result
}

const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
const financeReport2 = calculateTeamFinanceReport(salaries2, team2)

console.log(JSON.stringify(financeReport1))
console.log(JSON.stringify(financeReport2))
