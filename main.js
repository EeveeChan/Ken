var array = ["diego lugano","rogerio ceni","raí","Müller","zetti"]
var i = 1

function eusouobotão(){
 
 document.getElementById("eusoubotão").style.backgroundColor="#69ACAF"
document.getElementById("sp").innerHTML=array[i]
  i++
  if(i==5){i=0}
}
