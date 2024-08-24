// Lấy tham chiếu đến các phần tử HTML mà chúng ta sẽ tương tác
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// Định nghĩa một hàm sự kiện để xử lý khi nút được bấm
const handleClick = () => {
    message.textContent = 'You clicked the button!';
};

// Gán hàm sự kiện vào sự kiện 'click' của nút
button.addEventListener('click', handleClick);