function leTriangle() {
    var side1 = parseInt(prompt("Enter the side of SIDE1"));
    var side2 = parseInt(prompt("Enter the side of SIDE2"));
    var side3 = parseInt(prompt("Enter the side of SIDE3"));
    
    if (side1=== side2&& side2 === side3) {
     alert("This is an equilateral Triangle");
    }
    
    else if {else if (side1 === side2|| side2===side3|| side1===side3 )
     alert("This is an isosceles Triangle");
    }
    
    else if ( side1+side2 >side3 || side2+side3 >=side1 || side1 +side3 <= side2 ) {
     alert("This is an scalene Triangle");
    }
    
    else {
     alert("Not a Triangle! Please try again.");
    }
    