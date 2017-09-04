/**
 * Created by Administrator on 2017/9/4.
 */<script type="text/javascript">
        // 静态内容加载完毕后执行
        // window.onload
    $(function () {
        // response 代表服务器的响应
        $.getJSON('test', function (res) {
            console.log(res)
            $('#xiangying').text(res.message)
        })
        $('#account').on('blur', function () {
            $('#message').text('')
            $.ajax({
                // 后端接口的地址
                url: 'checkAccount',
                // 请求的方法
                type: 'post', // get, post. put, delete, patch, options
                // 发送给后端的数据
                data: {account: $('#account').val()},
                // 后端返回数据的类型
                dataType: 'json', // text html xml
                // 通讯成功触发的回调函数
                success: function (res) {
                    console.log(res)
                    if (res.message == 'ERROR') {
                        $('#message').text('账号已存在')
                    } else {
                        $('#message').text('账号可用')
                    }
                },
                // 通讯失败触发的回调函数
                error: function (XMLHttpRequest, status, response) {},
                // 无论通讯成功或失败都会触发的回调函数
                complete: function (reponse, status, XHR) {}
            })
        })
    })
    </script>
