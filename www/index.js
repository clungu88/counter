var boton=document.getElementById("boton");
boton.onclick=function() {
  var cnt=document.getElementById("contor");
  var crtCnt =parseInt(cnt.innerHTML);
  crtCnt++;
  cnt.innerHTML=crtCnt;
}