import React, { ReactNode } from "react";
import "./Popup.css"

interface PopupPropTypes {
    children: ReactNode;
}

const Popup: React.FC<PopupPropTypes> = ({ children }) => {
    return (
        <div className="popup">
            {children}
        </div>
    )
}

export default Popup;