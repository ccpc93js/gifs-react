const { useReducer } = require("react")

const ACTIONS = {
    KEYWORD_UPDATE: 'KEYWORD_UPDATE',
    RATING_UPDATE: 'RATING_UPDATE'
}

const reducer = (state, action) =>{
    switch (action.type) {
        case ACTIONS.KEYWORD_UPDATE:
            return {
                ...state,
                keyword:action.payload,
                times: state.times + 1
            }       
            
        case ACTIONS.RATING_UPDATE:
            return {
                ...state,
                rating:action.payload,
            }  
    
        default:
            return state
    }

}

export default function useForm ({ initialKeyword = '', initialRating = 'g' } = {}){
    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating,
        times:0
    })
    const {keyword, rating, times} = state

    return  {
        keyword,
        rating,
        times,
        updateKeyword: (keyword) => {
            dispatch({type: ACTIONS.KEYWORD_UPDATE, payload: keyword})
        },
        updateRating: (rating) => {
            dispatch({type: ACTIONS.RATING_UPDATE, payload: rating})
        }
    }
}