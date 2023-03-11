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

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.Value;
    if(input.length) {
        result = availableKeywords.filter((keyword)=>{
          return Keywords.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result) {
    const content = results.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}