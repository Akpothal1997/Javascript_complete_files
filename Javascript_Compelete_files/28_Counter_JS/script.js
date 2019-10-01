let startButton = document.querySelector('#start-btn');
let spanTag = document.querySelector('#span');
let count = 0;

startButton.addEventListener('click',function() {
    setInterval(increaseCount,100);
});

// Increase count
let increaseCount = () => {
    let divTag = document.querySelector('#div-tag');
    count++;
    if(count <= 100){
        spanTag.innerText = `${count} %`;
        divTag.style.background = `linear-gradient(45deg,black,rgb(${count * 2.5},50,0)`;
    }
    else{
        spanTag.innerText = 'Over';
    }
};