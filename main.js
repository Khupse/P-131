 img="";
 status="";
 object =[];

function setup()
{
  canvas = createCanvas(380,380);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(380,380);
 video.hide();
 objectDetector = ml5.objectDetector('cocossd', modelLoaded);
 document.getElementById("status").innerHTML = "Status : Detecting Objects";
}


function modelLoaded()
{
  console.log("Model Loaded !")
  status = true;
  objectDetector.detect(video , gotResults);
}

function gotResults(error, results)
{
  if (error){
   
    console.log(error);
  }
    console.log(results);
    object = results;
}


function draw()
{
image(video , 0, 0, 380, 380);

if( status = "")
{
  r = random(255);
  g = random(255);
  b = random(255);
  objectDetector.detect(video,gotResult);

  for (i = 0; i < object.length; i++ )
  {
     document.getElementById("status").innerHTML = "Status : Object Detected";
     document.getElementById("number_of_objects").innerHTML = "Number Of Object Detected are :"+object.length;
     fill ("r,g,b");
     percent= floor(objects[i].confidence * 100 );
     text (object[i].label +""+ percent + "%" , object[i].x + 15, object[i].y + 15 );
     noFill();
     stoke("r,g,b");
     rect (object[i].x, object[i].y, object[i].height, object[i].width);




  }
}
//fill ("#FFF0000");
//text("Dog", 45, 75);
//noFill();
//stroke("#FFF0000");
//rect (30, 60, 450, 350);

//fill("#FFF0000")
//text("Cat", 320, 120);
//noFill();
//stroke("#FFF0000");
//rect (300, 90, 270, 320);

}


function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = " Status : Detecting Object";  
}
