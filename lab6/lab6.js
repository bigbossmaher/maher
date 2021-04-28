var i=0;
var intervalID;
    
function printAndIncrement()
{
    // Stop interval procedure when "var i" reach to 100.

    if (i > 100)
    {
        clearInterval(intervalID);
        return;
    }

    console.log(i);
    i++;
 }
    
 intervalID = setInterval(printAndIncrement, 1000);
