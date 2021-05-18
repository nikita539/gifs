import React from "react";

const GifsApp = () => {




    return <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{display:"flex"}}>
            <input
                type="text"
                className="form-control"
                placeholder="find gifs"
                aria-label="Recipient's username" aria-describedby="button-addon2"
            />
            <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
            >Search
            </button>
        </div>
    </div>
}

export default GifsApp;
