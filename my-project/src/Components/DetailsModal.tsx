import { useEffect } from "react"
import { restCountriesNameApiRequest } from "../Utils/requests";
import { CountriesDetailsData, DetailsItemType, StateAndDispatcherPropsType } from "../Utils/types";
import { getCurrencies, getLanguages } from "../Utils/helperFunctions";

function DetailsItems(items: DetailsItemType) {
    const { item } = items;
    const { name, flag, currencies, languages, population, region, capital, continents, fifa } = item;
    return (
        <>
            <div>
                Name: {name.common}
            </div>
            <div>
                Flag: {flag}
            </div>
            <div>
                Currencies: {getCurrencies(currencies)}
            </div>
            <div>
                Languages: {getLanguages(languages)}
            </div>
            <div>
                Population: {population}
            </div>
            <div>
                Region: {region}
            </div>
            <div>
                Capital: {capital? capital[0] : "No Capital"}
            </div>
            <div>
                Continent: {continents[0]}
            </div>
            <div>
                Fifa Abbriviation: {fifa}
            </div>
        </>
    )
}



export function DetailsModal({state, dispatch}: StateAndDispatcherPropsType) {
    useEffect(()=> {
        const nameUrl = `https://restcountries.com/v3.1/name/${state.modelCountryName}`;
        restCountriesNameApiRequest(nameUrl, dispatch);  
    },[state.modelCountryName])

    function addToFavouritesHandler() {
        const currentFavourites = localStorage.getItem("Favourites");
                let newFavourites;
                if(currentFavourites) {
                    newFavourites = currentFavourites + ", " + state.modelCountryName;
                } else {
                    newFavourites = state.modelCountryName;
                }
                localStorage.setItem("Favourites", newFavourites);
    }
    
    return(
        <div className="details-modal">
            <h2>
                Country Details
            </h2>
            <div className="details-items">
                {
                    state.detailsData.length > 0 ? 
                        state.detailsData.map((item: CountriesDetailsData) => {
                            return(<DetailsItems key={item.name.common} item={item}></DetailsItems>)
                        }) 
                        : 
                        "No details at the moment sorry"
                }
            </div>
            <button onClick={addToFavouritesHandler}>
                Add To Favourites
            </button>
            <button onClick={()=> { dispatch({type: "DETAILS_MODEL", model: { modelActive: false, modelCountryName: ""}})}}>
                Close
            </button>
        </div>
    )
}