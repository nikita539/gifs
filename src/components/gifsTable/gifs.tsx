import React from "react";

type propsType = {
    gifs:Array<any>
}

const style = {
    stylesForDiv:{
        margin:"0 auto",
        width:"80%",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        backgroundColor:"black"
    },
    stylesForDivOnReturn:{
        margin:"5px"
    }
}

const Gifs = (
    {gifs}:propsType
) => {
    return (
        <div style={{margin:"0 auto",
            width:"80%",
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center",
            backgroundColor:"black"}}>
            {gifs.map((items) => {
                return (
                    <div key={items.id} style={style.stylesForDivOnReturn}>
                        <img src={items.images.fixed_height.url}/>
                    </div>
                )
            })}
        </div>
    )
}

// margin: 0 auto;
// width: 80%;
// display: flex;
// flex-wrap: wrap;
// justify-content: center;

export default Gifs;
