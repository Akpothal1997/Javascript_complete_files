// SMS App
let textAreaBox = document.querySelector('#text-area');
let charCount = 100;
textAreaBox.addEventListener('keyup',function() {
   let textEnteredLength = textAreaBox.value.length;
   let spanTag = document.querySelector('#span');
   spanTag.innerText = charCount - textEnteredLength;
});

// Likes App
let likes = 0;
let disLikes = 0;
let total = 0;
let likesButton = document.querySelector('#likes-btn');
likesButton.addEventListener('click',function() {
    likes++;
    total++;
    document.querySelector('#likes-count').innerText = likes;
    document.querySelector('#total').innerText = total;
});

let disLikesButton = document.querySelector('#dislikes-btn');
disLikesButton.addEventListener('click',function() {
    disLikes++;
    total++;
    document.querySelector('#dislikes-count').innerText = disLikes;
    document.querySelector('#total').innerText = total;
});