import React from "react";

type propsType = {
    gifs:Array<any>
}

const Gifs = (
    {gifs}:propsType
) => {
    return (
        // <table className="table table-borderless">
        //     <thead>
        //     <tr>
        //         <th scope="col">#</th>
        //         <th scope="col">First</th>
        //         <th scope="col">Last</th>
        //         <th scope="col">Handle</th>
        //     </tr>
        //     </thead>
        //     <tbody>
        //     <tr>
        //         <th scope="row">1</th>
        //         <td>Mark</td>
        //         <td>Otto</td>
        //         <td>@mdo</td>
        //     </tr>
        //     <tr>
        //         <th scope="row">2</th>
        //         <td>Jacob</td>
        //         <td>Thornton</td>
        //         <td>@fat</td>
        //     </tr>
        //     <tr>
        //         <th scope="row">3</th>
        //         <td>@twitter</td>
        //     </tr>
        //     {gifs.map((items) => {
        //         return (
        //             <tr>
        //
        //             </tr>
        //         )
        //     })}
        //     </tbody>
        // </table>
        <div style={{margin:"0 auto",width:"80%",display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            {gifs.map((items) => {
                return (
                    <div key={items.id} style={{margin:"5px"}}>
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
