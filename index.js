function leTriangle() {
    var sideone = document.getElementById("side1").value;
    var sidetwo = document.getElementById("side2").value;
    var sidethree = document.getElementById("side3").value;

    var chastine=[' this is Equilateral','this is Isosceles','this is Scalene'];

    if (sideone <= 0 || sidetwo <= 0 || sidethree <= 0)  {
        alert("Please Enter number in those valid sides");
    }
 
    if (sideone===sidetwo && sideone===sidethree) {
     alert(chastine[0]);
    }
 
    else if (sideone === sidetwo || sidetwo===sidethree|| sideone ===sidethree ){
     alert(chastine[1]);
    }
 
    else if ( sideone +sidetwo >sidethree || sidetwo +sidethree >=sideone || sideone +sidethree >sidetwo ) {
     alert(chastine[2]);
    }
 
    
 
    if(sideOne === '' || sideTwo === '' || sideThree === '') {
        alert("Please enter three side lengths");
      }
 
 }