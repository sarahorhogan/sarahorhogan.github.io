function newStyle() {
    let newColor = '';
    let newFont = ''; 
    let x = Math.floor(Math.random()*7); 
    switch (x){
      case 0:
        newColor = 'red';
        newFont = 'Times New Roman'; 
        break;
      case 1: 
        newColor = 'blue';
        newFont = 'Florence, cursive'; 
        break;
      case 2:
        newColor = 'yellow';
        newFont = 'Verdana';
        break; 
      case 3:
        newColor= 'purple';
        newFont = 'Courier New';
        break
      case 4:
        newColor = 'cyan';
        newFont = 'Georgia'; 
        break;
      case 5:
          newColor = 'maroon';
          newFont = 'Palatino';
          break;
      case 6: 
          newColor = 'lime';
          newFont = 'Impact';
          break;
    }
    var elem = document.getElementById('title');
    elem.style.color = newColor;
    elem.style.fontFamily = newFont; 
  }

  function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  