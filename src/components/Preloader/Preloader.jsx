import React from "react";
import './Preloader.css'

export default function Preloader({ isLoading }) {
    return (
        <div className={isLoading? "holder holder_visible" : "holder"}>
            <div className="preloader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}