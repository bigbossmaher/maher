/* exercice 1 

1/ Global : creation
LE{ makeArmy : fn , outer : null , TDZ : army }

/ makeArmy()
LE{ TDZ : shooters , argumets:{length:0} , outer:global 
	shooters : [ function(){alert(i)}
	i : 0}
/ while look
LE{shooter : anonymous : fn , outer : makeArmy


*/



// ex  2
var i=0;
var intervalID;
    
function printAndIncrement()
{

    if (i > 100)
    {
        clearInterval(intervalID);
        return;
    }

    console.log(i);
    i++;
 }
    
 intervalID = setInterval(printAndIncrement, 1000);
