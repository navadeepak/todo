var divs=document.getElementById("middiv");
var input=document.getElementById("listcrt");
function crt(){
  var val=document.getElementById("savebut").value;
  var crtval=parseInt(val)+1;
  val=crtval;
  document.getElementById("savebut").value=val;
  var mdiv=document.getElementById("middiv");
  if(input.value===""){
    alert("Enter Work!");
    mdiv.style="display:none;";
  }
  else{
    mdiv.style="display:flex;";
    var crtitem=document.createElement("div");
    crtitem.className="divs1";
    var valofinp=input.value;
    crtitem.innerHTML=`<p class="crtvals">${valofinp}</p><button value="Done" onclick="wd(event)" class="butssss">Finished</button><button class="butssss rm" onclick='can(event)'>Remove</button>`;
    divs.append(crtitem);
  }
}
function can(event){
  event.target.parentElement.remove();
  var val=document.getElementById("savebut").value;
  var crtval=parseInt(val)-1;
  val=crtval;
  document.getElementById("savebut").value=val;
  if (val===0){
    document.getElementById("middiv").style="display:none";
  }
  else{
    document.getElementById("middiv").style="display:flex";
  }
}
function wd(event){
  // console.log(event.target.parentElement.firstChild);
  var a=event.target.parentElement.firstChild;
  // event.target.innerHTML="Undone";
  // console.log(event.target);
  if(event.target.value==="Done"){
    a.style="text-decoration: line-through;color:gray;";
    event.target.innerHTML="Undo";
    event.target.value="Undone";
    event.target.style="background-color:orange;";
    // console.log(event.target.innerHTML)
  }
  else if(event.target.value==="Undone"){
    a.style="text-decoration: none;";
    event.target.innerHTML="Finished";
    event.target.value="Done";
    event.target.style="background-color:green;";
    // console.log(event.target.innerHTML)
  }

}