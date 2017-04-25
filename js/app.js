$(document).ready(function() {
    var text = ["[Show Tiebreakers]", "[Hide Tiebreakers]"];
    var i = 1;

    $(".toggler").click(function(){
        $('.tb').toggle();
        $(this).text(text[i]);
        if (i) i--;
        else i++;
    });
});