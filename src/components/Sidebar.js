import React from "react";
import logoimg from '../Images/logo.png';
import '../App.css';
import {BsFillPersonLinesFill} from "react-icons/bs";
import {FiSettings} from "react-icons/fi";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';



function IconLabelButtons() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }

  return (

      <Button sx={{
        fontFamily: 'sans-serif', fontSize: "12px",
      }}  style={{color: "black", backgroundColor: "white", padding: "10px 45px 10px 45px", textTransform: 'none'}} 
      variant="contained"
      onClick={handleClick}
      startIcon={<LogoutIcon style={{paddingBottom: "2px"}}/>} >
        Logout
      </Button>
   
  );
}

function Sidebar(){
    return(
       <div className="parent">
        <div className="vertical">
            <img className="logo" src={logoimg} alt="logo.png"/>
            <div className="master horizontal"> 
            <BsFillPersonLinesFill className="icon"/>
            <p className="a">Master</p>
            </div>
            <div className="setting horizontal">
                <FiSettings className="icon"/>
                <p className="b">Manage</p>
            </div>
            <div className="btn">
                <IconLabelButtons/>
               
            </div>
            <div className="botom">
                <p>|** Change password</p>
            </div>
            </div>
        </div>
        
    )

}

export default Sidebar;