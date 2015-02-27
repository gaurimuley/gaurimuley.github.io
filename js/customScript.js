/// <reference path="jquery-1.11.1.min.js" />
$(document).ready(function () {
   

    var scrollAmount = 0;

    function getScrollAmt() {
        scrollAmount = $(document).scrollTop();
    }

    function setActiveNode(nodeNumber) {
        $('#nav a').removeClass('active');
        $('#nav a').eq(nodeNumber).addClass('active');
    }

    $(document).scroll(function () {

        getScrollAmt();

        if (scrollAmount > 0 && scrollAmount <= 767) {
            setActiveNode(0);

        } else if (scrollAmount > 767 && scrollAmount <= 1535) {
            setActiveNode(1);
        }
        else if (scrollAmount > 1535 && scrollAmount <= 2303) {
            setActiveNode(2);
        }
        else if (scrollAmount > 2303) {
            setActiveNode(3);
        }

    });

    $('#nav a').click(function () {
        $('#nav a').removeClass('active');
        $(this).addClass('active');
    });



});