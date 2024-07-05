const traceButton = document.getElementById('trace-button');
const traceIdInput = document.getElementById('trace-id');

  // 定义按钮点击事件的处理函数
traceButton.addEventListener('click', function() {
    // 获取输入框的值
    const traceId = traceIdInput.value;
    console.log('traceId:'+ traceId);
    $.ajax({
        url: 'trace',
        type: 'GET',
        data: {
            traceid: traceId
        }
    });
    });