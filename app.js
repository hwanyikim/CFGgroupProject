
$(document).ready(function () {
    $(".headingOne").hover(function () {
        $(this).html("Hello there!");
    }, function () {
        $(this).html("Click Here!");
    })
});

$(document).ready(function () {
    $(".companyHeadingOne").click(function () {
        $(".companyToggle").css("visibility", "visible");

    })
});

