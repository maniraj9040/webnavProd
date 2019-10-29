$(document).ready(function() {


    var chatbotIframe = document.getElementById("chatbot");
    chatbotIframe.style.border = "0";
    chatbotIframe.allowTransparency = "true";


    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    var webkit = !!ua.match(/WebKit/i);
    var iOSSafari = iOS && webkit && !/(Chrome|CriOS|OPiOS)/.test(ua);

    $(document).on('click', '.chatImgWrapper', function(e) {
        e.preventDefault();
        if (iOSSafari) {
            window.location.href = ' https://webnav.herokuapp.com/nav/chatopen';

        } else {
            var openChatBtn = document.getElementById('openChatBtn');
            // console.log('chatbtn elemengt: '+openChatBtn)
            chatbotIframe.src = " https://webnav.herokuapp.com/nav/chatopen";

            chatbotIframe.style.display = "block";
            $('.divIframeChat,.divIframeChat .close').fadeIn(500);
            $('.closingchat').fadeIn(500);
            // openChatBtn.style.display = 'none';
            $('.chatImgWrapper').hide();
        }
        return false;
    });

    // $(document).on('click', '.divIframeChat .close', function() {
    //     $('.divIframeChat,.divIframeChat .close').fadeOut(500);
    // });

    console.log('href: ' + window.location.href.indexOf("aha-show"));
    if (window.location.href.indexOf("aha-show") > -1) {
        $('.chatImgWrapper').trigger('click');
        $('.divIframeChat, #chatbot').show();
    }
    // $(window).on('load', function() {
    //     $('.chatImgWrapper').addClass('active');
    // });

    $(document).on('click', '.closingchat', function(e) {
        console.log("closing/minimizing chat");
        $('.divIframeChat,.divIframeChat .close').fadeOut(500);
        $('.closingchat').fadeOut(500);

        $('.chatImgWrapper').fadeIn(500);

    });




});