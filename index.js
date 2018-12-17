function leTriangle() {
    var sideone = document.getElementById("side1").value;
    var sidetwo = document.getElementById("side2").value;
    var sidethree = document.getElementById("side3").value;
    
    if (sideone===sidetwo && sideone===sidethree) {
     alert("This is an equilateral Triangle");
    }
    
    else if (sideone === sidetwo || sidetwo===sidethree|| sideone ===sidethree ){
     alert("This is an isosceles Triangle");
    }
    
    else if ( sideone +sidetwo >sidethree || sidetwo +sidethree >=sideone || sideone +sidethree <= sidetwo ) {
     alert("This is an scalene Triangle");
    }
    
    else 

    {
     alert("Not a Triangle! Please try again.");
    }

    if(sideOne === '' || sideTwo === '' || sideThree === '') {
      alert("Please enter three side lengths");
    }

}