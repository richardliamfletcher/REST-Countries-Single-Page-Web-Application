import { State, Action } from "./types"

export const reducer = (state: State, action: Action): State => {
    switch(action.type) {
        case "SET_DATA": 
            return {
                ...state,
                data: action.data
            }
        case "SET_SEARCH_TERM": 
            return {
                ...state,
                searchTerm: action.searchTerm
            }
        case "RESET": 
            return {
                ...state,
                reset: action.reset
            }
        case "DETAILS_MODEL": 
            return {
                ...state,
                modelActive: action.model.modelActive,
                modelCountryName: action.model.modelCountryName as string,
            }
        case "DETAILS_MODEL_DATA": 
            return {
                ...state,
                detailsData: action.detailsData,
            }
    }
}