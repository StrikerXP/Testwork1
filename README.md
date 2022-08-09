# Testwork - function for calculate Team Finance Report

The accounting department turned to the IT department with a request to help with the
financial report on the work of teams on the vendor side. It is known that the teams consist of
a different number of specialists in different categories. It is also known that each category of
specialists has its own fixed salary after taxes and this tax rate. Accounting must calculate
the cost of the services for each specialty and the entire team. Your team leader has
prepared a function template that will perform the task. You need to implement this function.
Please note that some important hints are described in the comments to the code examples.
Cancel changes
function calculateTeamFinanceReport(salaries, team)

where 'salaries' is an object with more information about salaries and taxes by specialist
categories; minimum specializations amount is 1, maximum up to 10; 

where 'team' is an array of objects represented by member of the team with name and
specialization; minimal team size is 1, maximum up to 100;

the function should return the report object following the next template

{

totalBudgetTeam: 3398, // total salaries with tax of entire team; should be integer
(truncate the fractional part after all calculations)

totalBudgetProgger: 1176, // total salaries with tax for all members by 'Progger'

specialization; should be integer (truncate the fractional part after all calculations)

totalBudgetTester: 2222, // total salaries with tax for all members by 'Tester'

specialization; should be integer (truncate the fractional part after all calculations)

}
