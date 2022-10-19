var canvas = new fabric.Canvas("myCanvas");
var imgObject = "";

function newImage(){
    fabric.Image.fromURL("img_lights.jpg", function(Img){
        imgObject=Img;
        imgObject.scaleToWidth(750);
        imgObject.scaleToHeight(500);
        imgObject.set({top:0, left:0});
        canvas.add(imgObject);
    });
}

function load(){
    newImage();
}