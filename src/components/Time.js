import { useState, useEffect } from "react";
import '../App.css';
import axios from "axios";


function Time(){
    const[quote, setquote] = useState('');
    const[week, setweek] = useState('');
    const getQuote = () => {
        axios.get('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
        .then(res => {
            console.log(res.data.datetime)
            setquote(res.data.datetime)
            setweek(res.data.day_of_week)
            
        }).catch(err => {
            console.log(err);
        })
    }
    var weekday=new Array(7);
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";
    weekday[0]="Sunday";
    
    var hour = quote.slice(11,13);
    var am = "";
    if(hour>=12){
        am = "PM";
    }
    else{
        am = "AM";
    }
    if (hour >= 12) {
            hour =  hour - 12;
            hour = "0"+hour;
            
    }
    else{
        hour = hour;
    }

    useEffect(() => {
        getQuote();
    }, []);
  
    window.addEventListener("beforeunload", (event) => {
        getQuote();
        console.log("API call before page reload");
    });
  
    window.addEventListener("unload", (event) => {
        getQuote();
        console.log("API call after page reload");
    });
    
    return(
        <div className="time">
            {/* <button onClick={getQuote}>Get Quote</button> */}
           {/* { getQuote()} */}
           {quote && <p style={{fontWeight:"bold"}}> 
           <span>{quote.slice(8,10)+" "+" "+weekday[week].slice(0,3)+ " "+quote.slice(0,4) +" : "} </span>
           <span style={{color:"blueviolet"}}>{hour}:</span>
          <span style={{color:"blueviolet"}}>{quote.slice(14,16)+" "} </span>
           <span style={{opacity:"0.3"}}>{am}</span>  
           </p>}
        </div>
    )
}

export default Time;



// {quote && <p style={{fontWeight:"bold"}}> 
//            { quote.slice(8,10)+" "+" "+weekday[week].slice(0,3)+ " "+quote.slice(0,4) +": "+ hour+":"+quote.slice(14,16)+" "+ am } 
//            </p>}



