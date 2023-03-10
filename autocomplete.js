let availableKeywords = [
    'Html',
    'CSS',
    'Cool tutorial',
    'Web design tutorial',
    'JavaScript',
    'Where to learn to code online',
    'Where to learn web design',
    'How to create a website',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById(".input-box");

inputBox.onkeyupdate = function() {
    let result = [];
    let input = inputBox.Value;
    if(input.length) {
        result = availableKeywords.filter();
    }
}