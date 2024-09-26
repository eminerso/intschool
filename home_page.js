var card=document.getElementById('focus')
var node
var times=0

setInterval(focus,150)

function focus(){
    if(times<13){
if(card.lastChild){
var o=document.createElement("div")
var parent_width=node.offsetWidth
var width=parent_width-15
var r=Math.floor(Math.random()*256)
var g=Math.floor(Math.random()*256)
var b=Math.floor(Math.random()*256)
var rgb=`rgb(${r},${g},${b})`
o.style.border=`solid ${rgb} 2px`
o.style.width=width+"px"
o.style.height=width+"px"
o.style.display="flex"
o.style.alignItems="center"
o.style.justifyContent='space-around'
o.style.borderRadius="50%"
node.append(o)
if(node.lastChild){
    node.style.border="none"
}
node=o
times+=1
}

else{
var o=document.createElement("div")
node=o
card.append(node)
var parent_width=o.parentElement.offsetWidth
var width=parent_width-15
o.style.border="solid black 0.5px"
o.style.width=width+"px"
o.style.height=width+"px"
o.style.display="flex"
o.style.alignItems="center"
o.style.justifyContent='space-around'
o.style.borderRadius="50%"
}
}else{
        card.firstChild.remove()
        times=0
    }}




    // ///////////////////  slide //////////////////////////////////////////
    var left=document.getElementById("left");
    var right=document.getElementById("right");
   
var leftcont=document.getElementById("leftcont");
var leftvalue=window.getComputedStyle(leftcont)
var leftmatrix=new WebKitCSSMatrix(leftvalue.transform)
var leftimg1=document.getElementById("leftimg1");
var leftimgW=leftimg1.offsetWidth
   
   
var cont=document.getElementById("cont");
var value=window.getComputedStyle(cont)
var matrix=new WebKitCSSMatrix(value.transform)
var img1=document.getElementById("img1");
var imgW=img1.offsetWidth
console.log(matrix)
  

var rightcont=document.getElementById("rightcont");
var rightvalue=window.getComputedStyle(rightcont)
var rightmatrix=new WebKitCSSMatrix(rightvalue.transform)
var rightimg1=document.getElementById("rightimg1");
var rightimgW=rightimg1.offsetWidth



// ///////////////////////////////////////////////////////////////////////////////
left.addEventListener("click",()=>{

    if( leftmatrix.m41!==-1800){
        leftmatrix.m41-= 200
        leftcont.style.transform="translateX("+leftmatrix.m41+"px)" }
  
   else{ leftmatrix.m41=0
         leftcont.style.transform="translateX("+leftmatrix.m41+"px)"}
// ----------------------------------------------------------------------
 if(  matrix.m41!==-4050){
      matrix.m41-= imgW
      cont.style.transform="translateX("+matrix.m41+"px)" }

 else{ matrix.m41=0
       cont.style.transform="translateX("+matrix.m41+"px)"}
   // ---------------------------------------------------------------------
   if(rightmatrix.m41!==-1800){
      rightmatrix.m41-= 200
      rightcont.style.transform="translateX("+rightmatrix.m41+"px)" }

else{ rightmatrix.m41=0
      rightcont.style.transform="translateX("+rightmatrix.m41+"px)"}
    })
// ///////////////////////////////////////////////////////////////////////////////


 right.addEventListener("click",()=>{

    if( leftmatrix.m41===0){
        leftmatrix.m41= -1800
        leftcont.style.transform="translateX("+leftmatrix.m41+"px)" }
 
  else{
        leftmatrix.m41+=200
        leftcont.style.transform="translateX("+leftmatrix.m41+"px)"}

//---------------------------------------------------------------------
  if(  matrix.m41===0){
       matrix.m41= -4050
       cont.style.transform="translateX("+matrix.m41+"px)" }

 else{
       matrix.m41+=450
       cont.style.transform="translateX("+matrix.m41+"px)"}
//----------------------------------------------------------------
       if(rightmatrix.m41===0){
          rightmatrix.m41= -1800
          rightcont.style.transform="translateX("+rightmatrix.m41+"px)"}
 
  else{
        rightmatrix.m41+=200
        rightcont.style.transform="translateX("+rightmatrix.m41+"px)"}
    
    })





