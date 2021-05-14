import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/store";
import {getGifsAC} from "./store/gifs-reducer";
import Gifs from "./components/gifsTable/gifs";
import Searcher from "./components/searcher/searcher";
const apiKey = "pium5ayLlX75gfIKmNYkuJx6DbczwilI"

function App() {

    const gifs = useSelector<RootState,Array<any>>(state => state.gifs)
    const dispatch = useDispatch()



    const styles = {
        stylesForDiv:{
            width:"100%",
            height:"200px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }
    }


    const  responseOnServer =  async (valueForSearch:string) => {

        let q = valueForSearch.trim().toLowerCase()

        let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=50`)
            .then((res) => {
                return res.json()
            })
            .then((value) => {
                dispatch(getGifsAC(value.data))
            })
    }



  return (
      <div className="App">
            <div style={styles.stylesForDiv}>
                <Searcher onClick={responseOnServer}/>
            </div>
            <Gifs gifs={gifs}/>
      </div>
  );
}

export default App;
