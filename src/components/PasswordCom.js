import React from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {RxDividerVertical} from "react-icons/rx";
import {BsBell} from "react-icons/rx";
import {IconContext} from "react-icons";
import '../App.css';


function PasswordCom(){
    return(
        <div className="">
            <div className="horizontal3">
                <div>
            <NotificationsNoneIcon style={{fontSize: "32px", marginBottom:"5px"}}/>
            </div>
            <div style={{marginLeft:"2px" , marginBottom:"80px"}}>
            <RxDividerVertical  style={{fontSize: "40px", marginBottom:"-10px"}} size="60px" color="grey" />   
            </div>
            <div >
                <img className="daveimg" src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c244980/virat-kohli.jpg" ></img>
            </div>
            <div>
                <p style={{fontWeight:"bold" , display:"flex", marginBottom:"-10px", marginLeft:"6px"}}>Dave</p>‎ 
            </div>
            </div>
            
        <div className="passfont">
            
            <p style={{opacity: 0.75}}>Password Combination:</p>
            <ul>
            <li>Password should be more than 8 characters.</li>
            <li>Password must Contain one Special characters($,@ etc) </li>
            <li>Password must Contain one Capital character</li>
            <li>Password must Contain one Small character</li>
            <li>Password must Contain integer value</li>
            </ul>  
        </div>
      
        </div>
    )
}

export default PasswordCom;