$(document).ready(function() {
    $("div").click(function() {
        let prevDiv = $(this).prev();
        if (prevDiv.length > 0) {
            prevDiv.css("background-color", "green");
            $("div").not(prevDiv).css("background-color", "");
        } else {
            $(this).css("background-color", "green");
            alert("Je suis la première div");
        }
    });
});
