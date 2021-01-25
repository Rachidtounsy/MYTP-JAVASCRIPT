  
  // var menuItme=document.getElementById("menu").getElementsByTagName("li");
  var menuItme=document.querySelectorAll("#menu li");
  var headLine=document.getElementById("text");
 // var headLine=document.querySelector("#text");
  var btn=document.getElementById("zar");
var myMune=document.getElementById("menu");
var counter=1;

/*
   for( i=0;i<menuItme.length;i++)
   {
    //   menuItme[i].innerHTML=" bonjour";
      menuItme[i].addEventListener("click",selectItem);
   }
   */

  myMune.addEventListener("click",selectItem);
   function selectItem(n)
   {
       //alert("ok");
      // headLine.innerHTML="Hello World";
       if(n.target.nodeName=="li")
       {
        headLine.innerHTML=n.target.innerHTML;

        for (i=0;i<menuItme.length;i++)
        {
            menuItme[i].classList.remove("selected");
        }
        n.target.classList.add("selected");
       };
   }

   btn.addEventListener("click",newItem);
   function newItem()
{
    /*
    headLine.innerHTML="Hello World 2";
    btn.innerHTML="Click me";
    menuItme[0].innerHTML="bonjour Rachid";
  */
   myMune.innerHTML += " <li> سطر جديد  " +counter+ " </li>  ";
  
   counter++;


}
















