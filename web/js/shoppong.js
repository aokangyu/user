window.onload = function () {
    var wrap = document.getElementById('wrap');
    var img1 = document.getElementById('Image1');
    var img2 = document.getElementById('Image2');
    img2.style.display = "none";
    var s = true;
    // ���岢�����Զ����ź���
    timer = setInterval(autoPlay, 2000);

    // ��껮����������ʱֹͣ�Զ�����
    wrap.onmouseover = function () {
        clearInterval(timer);

    }

    // ����뿪��������ʱ������������һ��
    wrap.onmouseout = function () {
        timer = setInterval(autoPlay, 2000);
    }


    function autoPlay() {
        if (s) {
            img1.style.display = "none";
            img2.style.display = "block";
            s = false;
        }
        else {
            img2.style.display = "none";
            img1.style.display = "block";
            s = true;
        }

    }



};