import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/store";
import {getGifsAC} from "./store/gifs-reducer";
const apiKey = "pium5ayLlX75gfIKmNYkuJx6DbczwilI"
// const search = "Hello"

function App() {

    const [gifSet,setGif] = useState<Array<any>>([])
    const gifs = useSelector<RootState,Array<any>>(state => state.gifs)
    const dispatch = useDispatch()

    console.log(gifs)
  // useEffect(() => {
  //   fetch(`api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=20&offset=0&q=${search}`)
  //       .then((data) => {
  //           return data.json()
  //           }
  //       )
  //       .then((result) => {
  //         console.log(result.data)})
  // },[])
    useEffect(() => {
        // axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=flex&limit=6`)
        //     .then((res) => {
        //         console.log(res.data.data)
        //         dispatch(getGifsAC(res.data.data))
        // })
        let response = fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=hello&limit=6`)
            .then((res) => {
                return res.json()
            })
            .then((value) => {
                dispatch(getGifsAC(value.data))
            })
    },[])



  return (
    <div className="App">
        {gifs.map((value) => {
            return <div key={value.id} style={{marginLeft:"10px"}}>
                <img src={value.images.fixed_height.url}/>
            </div>
        })}
    </div>
  );
}

export default App;