window.onscroll = function() {
  scroll_check()
};

function scroll_check() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("top-button").style.display = "block";
    } else {
        document.getElementById("top-button").style.display = "none";
    }
}

function goto_top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}