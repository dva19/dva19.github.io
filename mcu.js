const main = document.querySelector('.main');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yesBtn');
const noBtn = document.querySelector('.noBtn');

const mainRect = main.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I know, right';
})

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (mainRect.height - noBtnRect.height)) + 1;
    const j = Math.floor(Math.random() * (mainRect.width - noBtnRect.width)) + 1;

    noBtn.style.top = i + 'px';
    noBtn.style.left = j + 'px';

})


