# GeekSchool

Join us as we create a new vision for education.

## The Problem

- Parents have a difficult time monitoring their children in school, contacting teachers, and keeping track of new assignments, tasks, or exams assigned to students.

- Teachers lack a place to keep all of the information that helps parents realize what their children do during the school day and makes the process easier for them in terms of time and effort.

- Children do not have a place to access their grades, tasks, notes, schedule, classes, and teachers.

## The Solution

- Creating a website that connects "Teachers," "Parents," and "Students" to improve communication between our three stakeholders and simplify the process for them.

- Each subject has a classroom on our website where teachers can publish various items that concern kids and their parents.

- We allowed the teacher to give the parent his contact information in case something new transpired.

- By doing all of that, we make the monitoring process simpler and more efficient for parents, kids, and teachers.

## Database

- [Database](https://drawsql.app/teams/renter/diagrams/parental).

![Screenshot from 2022-11-03 13-37-34](https://user-images.githubusercontent.com/77394697/199711833-c37a5069-f1ef-49d1-9bdb-b9a079d81888.png)

## User Stories

### Parent

- As a parent, I should be able to sing up as a parent.
- As a parent, I should be able to see all my children in my profile.
- As a parent, I should be able to see all the teachers of my children in my profile.
- As a parent, I should be able to access my children's profiles
- As a parent, I should be able to see my children's educational notes and information.
- As a parent, I should be able to reach out to teachers' contact information.

### Teacher

- As a teacher, I should be able to sign up as a teacher.
- As a teacher, I should be able to share my information to parents.
- As a teacher, I should be able to enter the children's grades, exams' dates, notes, feedback, assignments, add recommended resources, and answer questions.
- As a teacher, I should be able to create new class.
- As a teacher, I should be able to create new exam.
- As a teacher, I should be see the statistics of the assignments in the class.

### Student

- As a student, I should be sign up as a student.
- As a student, I should be access my class room
- As a student, I should be see my schedule, my grades, my assignments, my exams' dates and class questions.
- As a student, I should be ask questions on each class room.
- As a student, I should be submit assignments materials.

## User Journey

### User

- Once the user opens our platform, he will reach immediately the landing page.
- From the landing page, he can create an account as a parent, teacher, or student, he would choose the role that is the perfect match for him.
- If the user already has an account in our web application, he can login by hitting the login button.

### Parent

- As a parent, I should be able to access his profile where he will see a list of his children and a list of his children's teachers.
- When the parent clicks on one of his children's cards, he will be taken immediately to his child profile.
- As a parent, I should be able to find the teacher's contact information.
- As a parent, I should be able to see his children's profiles, and in which, he can see his classes, grades, schedule, reports, and health status.
- As a parent, I should be able to add the health status of my children.

### Teacher

- As a teacher, I should be able to see my profile which has my contact information, a list of my classroom, and a list of my students.
- As a teacher, I should be able to get to my class rooms once I click on each class card.
- As a teacher, I should be able to post new assignments, add grades for students, answer questions, see the statistics of my class assignments, see the feedback that is given to me, and post new announcements.
- As a teacher, I should be able to see the students profiles and access the information that is there.

### Student

- As a student, I should be able to access my profile, and see my grades, my schedule, and my classes.
- As a student, I should be able to access the class of each card I click.
- As a student, I should be able to see my assignments, announcements, add new feedback, recommended material, and ask new questions.

## Figma Design

- You can access the figma design from ***[HERE](https://www.figma.com/file/8RCGQ20fZiuodIQF8JZkjY/Parental?node-id=88%3A7044)***.

## How to Get the App Working on Your Local Machine

1- Clone this repository by typing `git clone https://github.com/CA-G12/GeekSchool.git`
2- Run `npm i` on the root directory to install the packages of the backend.
3- Navigate to client directory by typing the command `cd client/` and repeat step 2.

#### Database Setup

You should install `PostgreSQL`.

- After installing `PostgreSQL`, type `psql` in the terminal to open the postgres repl.
- To create a database, type the command `CREATE DATABASE -database name-;`.
- Then create a user for this DB by typing `CREATE USER -user name- WITH superuser password -password-`.
- After that `ALTER DATABASE -database name- OWNER TO -user name-;` to connect the database to the user you have created.
- Now you need to update your database with the schema and seed that waits for you, all you need to do is just typing `npm run dbSeed` which re-creates the database schema and also updates the database with the seed data.

#### Starting the App

- You can start the express server by writing `npm run dev` on the root directory.
- To start the react dev server, navigate to the client folder by typing `cd client/` and then `npm start`.

--> The port for the express server is `8080` and you can find the react dev server running on port `3000`, copy this link `http://localhost:3000` and paste it in the url bar in your browser to open the app.

## Technologies We Used

- ➡️ Node.js.
- ➡️ React.js.
- ➡️ Express.js
- ➡️ TypeScript.
- ➡️ PostgreSQL.
- ➡️ Sequelize.
- ➡️ Antd.
- ➡️ Eslint.
- ➡️ CSS3.

## Team Lead

OUr great mentor, ***[Raghad Mezied](https://github.com/Raghad-Mezied)***.

## Team Members

- ***[Aaya Al-Sharif](https://github.com/Aaya-Elsharief)***
- ***[Mahmoud Hammad](https://github.com/mahmoudhammad309)***
- ***[Basil Al-Sheikh](https://github.com/Bas-Shiekh)***
- ***[Mustafa Salem](https://github.com/moustf)***

## Useful Resources

- [Nodejs](https://nodejs.org/en/docs/).
- [Expressjs](https://expressjs.com/en/4x/api.html).
- [Reactjs](https://beta.reactjs.org/).
- [Postgresql](https://www.postgresqltutorial.com/).
- [Sequelize](https://sequelize.org/).
- [Ant Design](https://ant.design/).
- [React Router](https://reactrouter.com/en/main).
- [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html).
