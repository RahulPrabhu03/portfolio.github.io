   // Education
   var div = document.getElementById('main');
   var display = 0;

   function openTab() {
       if (display == 1) {
           div.style.display = 'block';
           div1.style.display = 'none';
           display = 0;
           
       }
       else {
           div.style.display = 'none';
           display = 1;
       }
   }

   // Skills
   var div1 = document.getElementById('main1');
   var display1 = 0;

   function openTab1() {
       if (display1 == 1) {
           div1.style.display = 'block';
           div.style.display = 'none';
           display1 = 0;
           
       }
       else {
           div1.style.display = 'none';
           display1 = 1;
       }
   }

var sidemenu=document.getElementById('sidemenu')
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

