import React from "react";
import { useState } from "react";
import "./App.css"

export const List = ({ text, list, setList, index }) => {
    const [checked, setChecked] = useState(false);
    return (
        <div className="listContainer">
            <input className="check" type={"checkbox"} value={checked} onChange={(e) => {
                setChecked(e.target.checked);
            }} />
            <div style={{
                textDecoration: checked ? 'line-through' : 'none'
            }}>{text}</div>
            <button className="del" onClick={() => {
                setList(list.filter((_, i) => i !== index));
            }}>🗑</button>
        </div>
    )
}