const fs = require('fs');
const Engineer = require('../lib/Engineer');

const pageGenerator = (Managers, Engineers, Interns) => {

    //HTML Team Page Template
    let html = fs.readFileSync('./template/index.html', 'utf8');
    if (html) {
        //Add Managers if added through questions
        let ManagerHtml = '';
        Managers.forEach(Manager => {
            ManagerHtml += `<div class="team-card">
                <div class="teamCardH">
                <h2>${Manager.getName()}</h2>
                <p>Employee ID: ${Manager.getId()}</p>
                <p>Email: <a href='mailto:${Manager.getEmail()}'>${Manager.getEmail()}</a></p>
                <p>Office Number: ${Manager.getOfficeNumber()}</p>
                </div>
            </div>`;
        })
        //Add Engineers if added through questions
            let EngineerHtml = '';
            Engineers.forEach(Engineer => {
                EngineerHtml += `<div class="team-card">
                    <div class="teamCardH">
                    <h2>${Engineer.getName()}</h2>
                    <p>Employee ID: ${Engineer.getId()}</p>
                    <p>Email: <a href='mailto:${Engineer.getEmail()}'>${Engineer.getEmail()}</a></p>
                    <p>Github: <a href='https://github.com/${Engineer.getGithub()}' target='_blank'>${Engineer.getGithub()}'s Github Repo</a></p>
                    </div>
                </div>`;
            })
        //Add Interns if added through questions
        let InternHtml = '';
        Interns.forEach(Intern => {
            InternHtml += `<div class="team-card">
                <div class="teamCardH">
                <h2>${Intern.getName()}</h2>
                <p>Employee ID: ${Intern.getId()}</p>
                <p>Email: <a href='mailto:${Intern.getEmail()}'>${Intern.getEmail()}</a></p>
                <p>School: ${Intern.getSchool()}</p>
                </div>
            </div>`;
        })

        // Employees added to HTML team page
        html = html.replace('<!---Managers-->', ManagerHtml);
        html = html.replace('<!---Engineers-->', EngineerHtml);
        html = html.replace('<!---Interns-->', InternHtml);


        console.log(html)
        // Write to html
        fs.writeFileSync('./dist/team.html', html, 'utf8');

        console.log('Team page built!');

    }
}
module.exports = pageGenerator;