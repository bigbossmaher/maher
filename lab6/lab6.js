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
