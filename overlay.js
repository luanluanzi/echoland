// 获取按钮和switch元素
const choiceButton = document.querySelector('.choice-button');
const switchElement = document.querySelector('.switch');
const closeModalButton = document.getElementById('closeModal');
const modalOverlay = document.getElementById('modalOverlay');

choiceButton.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

closeModalButton.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});
// 添加点击事件监听器
choiceButton.addEventListener('click', () => {
    switchElement.style.display = 'none'; // 点击后隐藏switch元素
    });