// 获取音频元素
const introMusic = document.getElementById('introMusic');
const backgroundMusic = document.getElementById('backgroundMusic');

// 默认先播放入场音乐
introMusic.play();

// 当入场音乐播放完毕时，切换到背景音乐
introMusic.addEventListener('ended', () => {
    backgroundMusic.play();
});
// 获取动画图片元素
const introImage = document.getElementById('introImage');

// 监听动画结束事件
introImage.addEventListener('animationend', () => {
    // 动画结束后，隐藏图片
    introImage.classList.add('hidden');
});
// 音乐开关控制逻辑
const musicBegin = document.querySelector('.music-toggle-button');
let isMusicPlaying = true;

function toggleMusic() {
    if (isMusicPlaying) {
        introMusic.pause();
        backgroundMusic.pause();
        musicBegin.style.backgroundImage = 'url("https://s3.bmp.ovh/imgs/2024/12/08/dfaf1536f43435de.png")'; // 音乐关闭图标
    } else {
        // 判断当前是否在播放入场音乐
        if (!introMusic.ended) {
            introMusic.play(); // 继续播放入场音乐
        } else {
            backgroundMusic.play(); // 播放背景音乐
        }
        musicBegin.style.backgroundImage = 'url("https://s3.bmp.ovh/imgs/2024/12/08/50c267f530f867fb.png")'; // 音乐开启图标
    }
    isMusicPlaying = !isMusicPlaying;
}