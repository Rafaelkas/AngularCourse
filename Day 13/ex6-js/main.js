"use strict";
exports.__esModule = true;
var exam_1 = require("./exam");
console.log('hey');
var exam = new exam_1.Exam();
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
var answer1 = [0, 1, 2, 3];
var answer2 = [3, 2, 1, 0];
var answer3 = [1, 3, 2, 3];
console.log(answer1);
console.log(exam.grade(answer1));
console.log(answer2);
console.log(exam.grade(answer2));
console.log(answer3);
console.log(exam.grade(answer3));
