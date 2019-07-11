// CODE here for your Lambda Classes

// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```


class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

const nathan = new Person({
    name: 'Nathan',
    age: 28,
    location: 'Amherst'
});

console.log(nathan.speak());

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.language;
        this.catchPhrase = attr.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(studentObj, subject) {
        console.log(`${studentObj.name} receives a perfect score on ${subject}`);
    }
    affectGrade(student, num) {
        console.log(`${student.name}'s grade changed by ${num}`);
    }
}

const kieran = new Instructor({
    name: 'Kieran',
    age: 26,
    location: 'California',
    specialty: 'Game Dev',
    favLanguage: 'JavaScript',
    catchPhrase: 'Yeah, I love my music'
});

kieran.demo('JavaScript');
kieran.speak();

class Student extends Person {
    constructor (attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        this.grade = attr.grade;
    }

    listsSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate() {
        if(this.grade > 70) {
            console.log(`Congrats ${this.name}! You are ready to graduate!`);
        } else {
            console.log(`Not quite yet, let's keep learning!`);
        }
    }
}

const rose = new Student({
    name: 'Rose',
    age: 29,
    location: 'North Tonawanda',
    previousBackground: 'Retail',
    className: 'WEBPT8',
    favSubjects: ['HTML', 'JavaScript'],
    grade: 94 
});

rose.speak();
rose.sprintChallenge('JavaScript');
rose.graduate();


kieran.affectGrade(rose, -5);

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(studentObj, subject) {
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`)
    }
}

const joe = new ProjectManager ({
    name: 'Joe',
    age: 28,
    location: 'California',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'Git puns never get old',
    gradClassName: 'Wildcats',
    favInstructor: 'Bryan'
});

joe.speak();
joe.demo('JavaScript');
joe.standUp('lecture');