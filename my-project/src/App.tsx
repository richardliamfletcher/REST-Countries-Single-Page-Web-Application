import { Reducer, useEffect, useReducer, lazy } from 'react'
import './App.css'
const SearchCountries = lazy(() => import ('./Components/SearchCountries'));
import { Action, State } from './Utils/types';
import { reducer } from './Utils/reducer';
import { CountriesAgGrid } from './Components/CountriesAgGrid';
import { restCountriesApiRequest } from './Utils/requests';
import { DetailsModal } from './Components/DetailsModal';

const url = 'https://restcountries.com/v3.1/all?fields=name,flag,population,region,capital,currencies,languages';

function App() {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, 
  { 
    data: [], 
    searchTerm: "", 
    reset: false, 
    modelActive: false, 
    modelCountryName: "", 
    detailsData: []
  });

  useEffect(() => {
    restCountriesApiRequest(url, dispatch);
  },[state.reset])

  return (
    <>
    <SearchCountries state={state} dispatch={dispatch}/>
    {
      state.data ? <CountriesAgGrid data={state.data} dispatch={dispatch}></CountriesAgGrid> : "Loading..."
    }
    {
      state.modelActive ? <DetailsModal state={state} dispatch={dispatch}></DetailsModal> : null
    }
    <div>
      <h3>
        Favourites
      </h3>
      <div>
        {
          localStorage.getItem("Favourites")
        }
      </div>
    </div>
    </>
  )
}

export default App
