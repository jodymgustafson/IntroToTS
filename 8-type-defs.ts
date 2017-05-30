$(function ()
{
    // jQuery intellisense
    $("#content").text("Hello world");

    var canvas = document.getElementsByTagName("canvas"); // defined in lib.d.ts
    canvas.item(0).getContext("2d");
});