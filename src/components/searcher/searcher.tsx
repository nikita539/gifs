import React, {ChangeEvent,useContext} from "react";
import {context} from "../../store/context";


type propsType = {
    onClick:(q:string) => void
}

const styles = {
    stylesForDiv: {
        display:"flex",
        width:"400px"
    }
}

const Searcher = (
    {onClick}:propsType
) => {


    // hooks
    let [value,setValue] = React.useState('')

    // functions
    const onChangeHandler = (value:ChangeEvent<HTMLInputElement>) => {
        setValue(value.currentTarget.value)
    }
    const onClickHandler = () => {
        onClick(value)
        setValue("")
    }

    return <div style={styles.stylesForDiv}>

        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="find gifs"
                aria-label="Recipient's username" aria-describedby="button-addon2"
                onChange={ onChangeHandler }
                value={value}
            />
                <button
                    className="btn btn-primary"
                    type="button"
                    id="button-addon2"
                    onClick={ onClickHandler }
                >Search</button>
        </div>

    </div>
}


export default Searcher
