var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
        blockImage=Img;
        blockImage.scaleToWidth(700);
        blockImage.scaleToHeight(510);
        blockImage.set({
            top:0,
            left:0
        });
        canvas.add(blockImage);
    });
	
}

function sound(){
x.play();
}
