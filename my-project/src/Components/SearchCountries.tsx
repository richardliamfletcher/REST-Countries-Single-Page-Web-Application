import { useEffect, useState } from "react";
import { StateAndDispatcherPropsType } from "../Utils/types";
import { restCountriesSearchApiRequest } from "../Utils/requests";

export default ({dispatch, state}: StateAndDispatcherPropsType) => {
    useEffect(() => {
      if(state.searchTerm) {
        restCountriesSearchApiRequest(state.searchTerm, dispatch);
      }
    },[state.searchTerm])

    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(item: any) {
      setSearchTerm(item.target.value);
      }
      async function searchNameLanguageCurrency(formData: React.FormEvent<HTMLFormElement>) {
        formData.preventDefault();

        dispatch({type:"SET_SEARCH_TERM", searchTerm: searchTerm})
      }

    return(
      <>
        <form className="search-countries-form" onSubmit={searchNameLanguageCurrency}>
          <input className="search-input" name="query" placeholder="Search a country name, currency or language" value={searchTerm} onChange={handleChange}/>
          <button type="submit">Search</button>
          <button onClick={() => {
          dispatch({type:"RESET", reset: !state.reset})
        }}>Reset</button>
        </form>
      </>
    );
}