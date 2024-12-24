
        // 保存 HTML 内容
const storedHTML = `
<div id="app">
    <img id="profileImage" src="https://s3.bmp.ovh/imgs/2024/12/01/8ccf3c7dba9a53a8.png" alt="Profile" onclick="showProfilePopup()">
    <img id="loginImage" src="https://s3.bmp.ovh/imgs/2024/12/08/104474125de65ee0.png" alt="Login" onclick="showLoginBox()">
    
    <div id="profilePopup" class="popup hidden">
        <img id="popupImage" src="https://s3.bmp.ovh/imgs/2024/12/05/27f21633b90593e5.png" alt="Popup">
        <img id="confirmImage" src="https://s3.bmp.ovh/imgs/2024/12/22/39d838651725ca7a.png" alt="Confirm" onclick="hideProfilePopup()">
    </div>

    <div id="loginBox" class="popup hidden">
        <img id="loginBoxImage" src="https://s3.bmp.ovh/imgs/2024/12/22/71b1b537817b44bc.png" alt="Login Box">
        <div class="inputs">
            <input type="text" id="username" placeholder="Username" value="admin">
            <input type="password" id="password" placeholder="Password" value="123456">
        </div>
        <img id="loginConfirmButton" src="https://s3.bmp.ovh/imgs/2024/12/22/39d838651725ca7a.png" alt="Login" onclick="handleLogin()">
    </div>

    <div id="overlay" class="hidden"></div>

    <div id="errorPopup" class="popup hidden">
        <p>Incorrect username or password!</p>
        <button onclick="hideErrorPopup()">Close</button>
    </div>
</div>
`;
            // 在页面加载时插入HTML内容
            document.getElementById('container').innerHTML = storedHTML;
        const loggedInProfileImage = 'https://s3.bmp.ovh/imgs/2024/12/22/5c84d8b309c21fad.png';
        const loginButtonImage = 'https://s3.bmp.ovh/imgs/2024/12/08/104474125de65ee0.png';
        const logoutButtonImage = 'https://s3.bmp.ovh/imgs/2024/12/22/a9ee44adafdfd3e1.png';

        // 检查是否已经登录
        let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

        // 页面加载时初始化
        window.onload = function() {
            if (isLoggedIn) {
                document.getElementById('profileImage').src = loggedInProfileImage;
                document.getElementById('loginImage').src = logoutButtonImage;
                document.getElementById('loginImage').onclick = handleLogout;
            } else {
                document.getElementById('profileImage').src = 'https://s3.bmp.ovh/imgs/2024/12/01/8ccf3c7dba9a53a8.png';
                document.getElementById('loginImage').src = loginButtonImage;
                document.getElementById('loginImage').onclick = showLoginBox;
            }
        };

        // 弹出个人资料框
        function showProfilePopup() {
            document.getElementById('profilePopup').classList.remove('hidden');
            document.getElementById('overlay').classList.remove('hidden');
        }

        // 隐藏个人资料框
        function hideProfilePopup() {
            document.getElementById('profilePopup').classList.add('hidden');
            document.getElementById('overlay').classList.add('hidden');
        }

        // 显示登录框
        function showLoginBox() {
            document.getElementById('loginBox').classList.remove('hidden');
            document.getElementById('overlay').classList.remove('hidden');
        }

        // 处理登录逻辑
        function handleLogin() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'admin' && password === '123456') {
                alert('Login Successful!');
                isLoggedIn = true;

                // 更新登录状态并存储在localStorage中
                localStorage.setItem('isLoggedIn', 'true');

                // 更新UI
                document.getElementById('profileImage').src = loggedInProfileImage;
                document.getElementById('loginImage').src = logoutButtonImage;
                document.getElementById('loginImage').onclick = handleLogout;

                hideLoginBox();
            } else {
                showErrorPopup();
            }
        }

        // 处理登出逻辑
        function handleLogout() {
            isLoggedIn = false;

            // 清除登录状态
            localStorage.setItem('isLoggedIn', 'false');

            // 更新UI
            document.getElementById('profileImage').src = 'https://s3.bmp.ovh/imgs/2024/12/01/8ccf3c7dba9a53a8.png';
            document.getElementById('loginImage').src = loginButtonImage;
            document.getElementById('loginImage').onclick = showLoginBox;

            alert('Logged out successfully.');
        }

        // 隐藏登录框
        function hideLoginBox() {
            document.getElementById('loginBox').classList.add('hidden');
            document.getElementById('overlay').classList.add('hidden');
        }

        // 显示错误弹窗
        function showErrorPopup() {
            document.getElementById('errorPopup').classList.remove('hidden');
            document.getElementById('overlay').classList.remove('hidden');
        }

        // 隐藏错误弹窗
        function hideErrorPopup() {
            document.getElementById('errorPopup').classList.add('hidden');
            document.getElementById('overlay').classList.add('hidden');
        }