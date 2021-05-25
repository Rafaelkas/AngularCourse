import { Exam } from "./exam";

console.log('hey');

let exam = new Exam();

exam.addQuestion({
    caption: 'How many legs does a spider have?',
    answers: [
        'Seven',
        'Eight',
        'Nine',
        'Ten'
    ], 
    correctIndex: 1
});

exam.addQuestion({
    caption: 'What colors are the stars on the American flag?', 
    answers: [
        'Pink', 
        'Orange', 
        'Green', 
        'White'
    ], 
    correctIndex: 3
});

exam.addQuestion({
    caption: 'How many planets are in our solar system?', 
    answers: [
        'Seven',
        'Nine',
        'Eight',
        'Ten'
    ], 
    correctIndex: 2
});

exam.addQuestion({
    caption: 'What is the color of a school bus?', 
    answers: [
        'Orange', 
        'Brown', 
        'Yellow', 
        'White'
    ], 
    correctIndex: 3
});

exam.print();

let answer1 = [0, 1, 2, 3];
let answer2 = [3, 2, 1, 0];
let answer3 = [1, 3, 2, 3]

console.log(answer1);
console.log(exam.grade(answer1));

console.log(answer2);
console.log(exam.grade(answer2));

console.log(answer3);
console.log(exam.grade(answer3));