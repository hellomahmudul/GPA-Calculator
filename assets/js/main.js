/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle','nav-bar','body-pd','header')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

function calculateGPA() {
    // Get input values
    var ce1 = parseFloat(document.getElementById("ce1").value);
    var ge1 = parseFloat(document.getElementById("ge1").value);
    var ce2 = parseFloat(document.getElementById("ce2").value);
    var ge2 = parseFloat(document.getElementById("ge2").value);
    var cc1 = parseFloat(document.getElementById("cc1").value);
    var gc1 = parseFloat(document.getElementById("gc1").value);
    var cc2 = parseFloat(document.getElementById("cc2").value);
    var gc2 = parseFloat(document.getElementById("gc2").value);
    var cc2 = parseFloat(document.getElementById("cc2").value);
    var gc2 = parseFloat(document.getElementById("gc2").value);
    var aut1 = parseFloat(document.getElementById("aut1").value);
    var aug1 = parseFloat(document.getElementById("aug1").value);
    var cm1 = parseFloat(document.getElementById("cm1").value);
    var gm1 = parseFloat(document.getElementById("gm1").value);
    var cp1 = parseFloat(document.getElementById("cp1").value);
    var gp1 = parseFloat(document.getElementById("gp1").value);
    var ch1 = parseFloat(document.getElementById("ch1").value);
    var gh1 = parseFloat(document.getElementById("gh1").value);

    // Repeat for other courses

    // Replace the following lines with your actual GPA calculation logic
    // Your GPA calculation logic goes here
    var calculatedGPA =
      (ce1 * ge1 +
        ce2 * ge2 +
        cc1 * gc1 +
        cc2 * gc2 +
        cm1 * gm1 +
        cp1 * gp1 +
        ch1 * gh1 +
        aut1 * aug1) /
      (ce1 + ce2 + cc1 + cc2 + cm1 + cp1 + ch1 + aut1);
   

    // Display results
    var resultContainer = document.getElementById("resultContainer");
    resultContainer.style.display = "block";
    resultContainer.innerHTML =
      "<p>Your 1st Semester GPA is :<br> <strong>" +
      calculatedGPA.toFixed(2) +
      "</strong></p>";
    // Repeat for displaying course results
  }