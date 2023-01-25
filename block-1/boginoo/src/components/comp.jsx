import { Divider } from "@mui/material";
import React from "react";
import { useState } from "react";
import "../Ap.css"

export const List = ({history}) => {
    
    return (
        <div className="listContainer">
            <div>
                {history.orignal}
            </div>
            <div>
                <a href={`http://localhost:3000/${history.short}`}>
                http://localhost:3000/{history.short}
                </a>
            </div>
            <Divider/>
        </div>
    )
}