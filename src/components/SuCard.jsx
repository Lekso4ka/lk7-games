import { useState } from "react";

export default ({n, content}) => {
    const setStep = (e) => {

    }
    return <div className="card" onClick={setStep}>
        {content}
        <span className="card-index">{n}</span>
    </div>
}