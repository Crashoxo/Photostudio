
(function ($, window) {
    let isLike = false;
    let wallGp = {};

    // 取得貼文推數 & 是否推過貼文
    wallGp.getLikeCountAndStatus = function (url) {
        let vcode = getRandomVcode();

        $.ajax({
            type: 'GET',
            url: `https://wall.gamer.com.tw/api/link_post.php?url=${url}`,
            xhrFields: {
                withCredentials: true
            }
        }).done(function (resp) {
            if (resp.data) {
                $('.shareandmore .baha_btn-biglike').show();
                if (resp.data.isLike) {
                    $('.shareandmore .likebtn-img').addClass('is-active');
                    $('.shareandmore .backpic').addClass('is-click');
                    isLike = true;
                }
                $('.shareandmore .baha_btn-biglike p span').text(resp.data.like);
            }
        });
    }

    // 給推
    wallGp.like = async function (sn, url) {
        let data = {
            'url': url,
            'vcode': getRandomVcode()
        };

        if (isLike) {
            Dialogify.confirm('確定要取消推嗎？', {
                ok: function () {
                    data.d = 1;
                    gpAction(sn, data);
                },
                cancel: function () {
                    return;
                }
            });
        } else {
            gpAction(sn, data);
        }
    }

    function getRandomVcode() {
        let vcode = Cookies.get('ckAPP_VCODE');
        if (vcode != undefined) {
            return vcode;
        }

        vcode = '';
        for (let i = 0; i < 4; i++) {
            vcode += String(Math.floor(Math.random() * 10));
        }
        Cookies.set('ckAPP_VCODE', vcode, { domain: 'gamer.com.tw', path: '/', expires: 14 });
        return vcode;
    }

    function showMessage(message) {
        if (window.Dialogify) {
            window.Dialogify.alert(message);
        } else {
            alert(message);
        }
    }

    function gpAction(sn, data) {
        $.ajax({
            type: 'POST',
            url: 'https://wall.gamer.com.tw/api/link_post_like.php',
            xhrFields: {
                withCredentials: true
            },
            data: data
        }).done(function (resp) {
            if (resp.error) {
                if (resp.error.code == 401 && window.User) {
                    window.User.Login.requireLogin();
                } else {
                    showMessage(resp.error.message);
                }
            } else {
                $('.shareandmore .likebtn-img').toggleClass('is-active');
                $('.shareandmore .backpic').toggleClass('is-click');
                let countSpan = $('.shareandmore .baha_btn-biglike p span');
                let count = countSpan.text();
                if (!isLike) {
                    window.ga && window.ga('send', 'event', 'GNN', '推', sn);
                    countSpan.text(parseInt(count) + 1);
                    isLike = true;
                } else {
                    countSpan.text(parseInt(count) - 1);
                    isLike = false;
                }
            }
        });
    }

    window.WallGp = wallGp;
})(jQuery, window);
