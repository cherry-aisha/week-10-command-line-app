const fs = require('fs');

const manager = require('../lib/manager');
const intern = require('../lib/intern');
const engineer = require('../lib/engineer');

const pageBuilder = () => (managers, engineers, interns) => {

    //Open html template file
    let html = fs.readFileSync('./template/index.html', 'utf8');
    if (html)
    {
        //add managers to html
        let managerHtml = '';
        managers.forEach(manager => {
            managerHtml += `<div class="card">
                <div class="cardHeader">
                <h2>${manager.name}</h2>
                <p>Employee ID: ${manager.id}</p>
                <p>Email: <a href='mailto:${manager.email}">${manager.email}</p>
                <p>Office Number: ${manager.officeNumber}</p>
                </div>
            </div>`;
        })
                //add interns to html
                let internHtml = '';
                interns.forEach(intern => {
                    internHtml += `<div class="card">
                        <div class="cardHeader">
                        <h2>${intern.name}</h2>
                        <p>Employee ID: ${intern.id}</p>
                        <p>Email: <a href='mailto:${intern.email}">${intern.email}</p>
                        <p>School: ${intern.school}</p>
                        </div>
                    </div>`;
                })

                //add engineers to html
                let engineerHtml = '';
                engneer.forEach(engineer => {
                    engineerHtml += `<div class="card">
                        <div class="cardHeader">
                        <h2>${engineer.name}</h2>
                        <p>Employee ID: ${engineer.id}</p>
                        <p>Email: <a href='mailto:${engineer.email}">${engineer.email}</p>
                        <p>Github: <a href="${engineer.github}'s Github Repo"'https://github.com/${engineer.github}></p>
                        </div>
                    </div>`;
                })

            // Insert employee sections onto html page
            html = html.replace('<!---managers-->', managerHtml);
            html = html.replace('<!---engineers-->', engineerHtml);
            html = html.replace('<!---intern-->', internHtml);

            // Write to html
            fs.writeFileSync('./dist/team.html', html, 'utf8');

            console.log ('Team page built!');

        }
    }

    pageBuilder();