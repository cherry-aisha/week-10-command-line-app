const fs = require('fs');

const pageGenerator = (managers, interns, engineers) => {

    //HTML Team Page Template
    let html = fs.readFileSync('./template/index.html', 'utf8');
    if (html) {
        //Add Managers if added through questions
        let managerHtml = '';
        managers.forEach(manager => {
            managerHtml += `<div class="team-card">
                <div class="teamCardH">
                <h2>${manager.getName()}</h2>
                <p>Employee ID: ${manager.getId()}</p>
                <p>Email: <a href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a></p>
                <p>Office Number: ${manager.getOfficeNumber()}</p>
                </div>
            </div>`;
        })
        //Add Engineers if added through questions
        let engineerHtml = '';
        engineers.forEach(engineer => {
            engineerHtml += `<div class="team-card">
                    <div class="teamCardH">
                    <h2>${engineer.getName()}</h2>
                    <p>Employee ID: ${engineer.getId()}</p>
                    <p>Email: <a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a></p>
                    <p>Github: <a href='https://github.com/${engineer.getGithub()}' target='_blank'>${engineer.getGithub()}'s Github Repo</a></p>
                    </div>
                </div>`;
        })
        //Add Interns if added through questions
        let internHtml = '';
        interns.forEach(intern => {
            internHtml += `<div class="team-card">
                <div class="teamCardH">
                <h2>${intern.getName()}</h2>
                <p>Employee ID: ${intern.getId()}</p>
                <p>Email: <a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a></p>
                <p>School: ${intern.getSchool()}</p>
                </div>
            </div>`;
        })

        // Employees added to HTML team page
        html = html.replace('<!---Managers-->', managerHtml);
        html = html.replace('<!---Engineers-->', engineerHtml);
        html = html.replace('<!---Interns-->', internHtml);

        console.log(html)
        // Write to html
        fs.writeFileSync('./dist/team.html', html, 'utf8');

        console.log('Team page built!');

    }
}
module.exports = pageGenerator;