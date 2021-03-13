
$(document).ready(function(){
    var count=0
    $("img").click(function(){
        count++;
        let y = $(this).attr("src");
        let x = $(this).attr("alt-src");

        $(this).attr("alt-src", y);//computer is literally changing the altsource to ninja and source to ninja cat ie via temp variable
        $(this).attr("src", x);// not just changing the positions like in an object

    })
})