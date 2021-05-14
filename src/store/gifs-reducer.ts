type actionType = {
    type:"GET-GIFS"
    gifs:Array<any>
}

export const gifsReducer = (state:Array<any> = [],action:actionType) => {
    switch (action.type){
        case "GET-GIFS":
            state = action.gifs
            return [...state]
        default:
            return [...state]
    }
}

export const getGifsAC = (gifs:Array<any>) => {
    return {
        type:"GET-GIFS",
        gifs:gifs
    }
}