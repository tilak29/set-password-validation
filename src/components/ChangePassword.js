import React from "react";
import '../App.css';
import Time from "./Time";
import Validate from "./Validate";

function ChangePassword(){
    return(
        <div>
        <div>
            <p className="goodeve">Good Evening, <span className="dave">Dave.</span></p>
            </div>
            <div>
                <Time/>
            
            </div>
            <div>
                <p className="chanpass">|** Change Password</p>
            </div>
            {/* <Forms className="form"/> */}
            <Validate className="form"/>
        </div>
    )
}

export default ChangePassword;