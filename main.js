function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/FHOWAbsTX/model.json", modelready);

}
function modelready(){
    classifier.classify(gotresults);

}

function gotresults(error , results){
    if(error){
        console.log(error);
        
    }
    else{
        console.log(results);
        random_r= Math.floor(Math.random() * 255)+1;
        random_g= Math.floor(Math.random() *255)+1;
        random_b= Math.floor(Math.random() *255)+1;
        document.getElementById("animal_sound_resul").innerHTML="detected voice is of- "+ results[0].label;
        document.getElementById("animal_sound_accuracy").innerHTML="dog- , cat- "+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("animal_sound_resul").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("animal_sound_accuracy").style.color="rgb("+random_r+","+random_g+","+random_b+")";

        img1=document.getElementById('R.jpeg');
        img2=document.getElementById('OIP.jped');
       

        if(results[0].label=="cat"){
           img1.src="R.jpeg";
           img2.src="OIP.jpeg";
          
        }
        else if(results[0].label=="dog"){
            img1.src="R.jpeg";
            img2.src="OIP.jpeg";
          
        }
       
    }
    
    
}
