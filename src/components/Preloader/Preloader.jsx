import React from "react";
import './Preloader.css'

export default function Preloader({ isLoading }) {
    return (
        <div class={isLoading? "holder holder_visible" : "holder"}>
            <div class="preloader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}