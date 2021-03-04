function getAttributes()
{
 var href = document.querySelector("a").getAttributes("href");
 alert('The value of the href attribute of the link is : '+href);
 var hreflang = document.querySelector("a").getAttributes("hreflang");   
 alert('The value of the hreflang attribute of the link is : '+hreflang);
 var rel = document.querySelector("a").getAttributes("rel"); 
  alert('The value of the rel attribute of the link is : '+rel);
 var target = document.querySelector("a").getAttribute("target"); 
  alert('The value of the taget attribute of the link is : '+target);
 var type = document.getElementById("type"); 
  alert('The value of the type attribute of the link is : '+type); 
}