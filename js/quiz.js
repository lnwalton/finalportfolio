function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("button" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("What year was the first Academy Awards ceremony held?", ["1924", "1929","1935", "1941"], "1929"),
    new Question("What organization is responsible for the Academy Awards?", ["Screen Actors Guild", "American Film Institute", "Academy of Motion Picture Arts and Sciences", "American Academy of Stage and Screen"], "Academy of Motion Picture Arts and Sciences"),
    new Question("What two actresses tied for Best Actress at the 1968 Academy Awards?", ["Joanne Woodward & Vanessa Redgrave", "Liza Minnelli & Genevieve Bujold","Katharine Hepburn & Barbra Streisand", "Anne Bancroft & Audrey Hepburn"], "Katharine Hepburn & Barbra Streisand"),
    new Question("What year were the Oscars first broadcast in color?", ["1951", "1956", "1961", "1966"], "1966"),
    new Question("What company has been employed by the Academy since 1934 to tabulate Oscar votes and ensure the secrecy of results?", ["Ernst & Young", "J.P. Morgan", "Lehman Brothers", "PricewaterhouseCoopers"], "PricewaterhouseCoopers"),
    new Question("What was the first film to win Academy Awards for Best Picture, Best Director, Best Actor, Best Actress, and Best Screenplay?", ["One Flew Over the Cuckoo's Nest", "Gone with the Wind", "It Happened One Night", "Silence of the Lambs"], "It Happened One Night"),
    new Question("What movie won the very first Academy Award for Best Picture?", ["Citizen Kane", "All Quiet on the Western Front", "Wings", "The Circus"], "Wings"),
    new Question("What new award category was added to the Academy Awards in 2001?", ["Foreign Language Film", "Best Assistant Director", "Best Animated Feature", "Best Song"], "Best Animated Feature"),
    new Question("Who was the first actor/actress to win four Academy Awards?", ["Katharine Hepburn", "Jack Nicholson", "Meryl Streep", "Marlon Brando"], "Katharine Hepburn"),
    new Question("Who hosted or co-hosted the Academy Awards 18 times during his career?", ["Billy Crystal", "Bob Hope", "Johnny Carson", "Chris Rock"], "Bob Hope")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();