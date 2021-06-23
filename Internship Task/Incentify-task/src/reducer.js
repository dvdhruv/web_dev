export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQD-Vl3uGqUpVLYXiNPi490WQBbFZ2ReUV-eAmZGgVCkZOhFM59v5zfM0yUBRxX1GtTcpzMrEChttUScF75ABiRkBOBxxGmhL76VDUW5dBcXW-3lwPPKxcPsMROpm7aLzilyxjHwqacEzJ3xFxomgh3LU0cqTLXyfzzpZYBRkKdc3NPj",

}

const reducer = (state, action) => {
console.log(action);

    switch (action.type) {
        case 'SET_USER': 
        return {
            ...state, 
            user: action.user
        };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
        };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
        };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
        };

        default:
            return state;
    }
}

export default reducer;