import { Dispatch } from "react";

export type CurrencyObject = {
    name: string;
    symbol: string;
}

export type CountriesAllData = {
    name: {
        common: string,
        official: string
    }
    capital: string[],
    currencies: CurrencyObject,
    flag: string,
    languages: Object,
    population: number,
    region: string
}

export type CountriesDetailsData = {
    name: {
        common: string,
        official: string
    }
    capital: string[],
    currencies: CurrencyObject,
    flag: string,
    languages: Object,
    population: number,
    region: string,
    fifa: string
    continents: string[]
}

export type State = {
    data: CountriesAllData[],
    searchTerm: string,
    reset: boolean,
    modelActive: boolean,
    modelCountryName: string,
    detailsData: CountriesDetailsData[],
}

export type DetailsModalEvent = {
    modelActive: boolean,
    modelCountryName: string | undefined
}

export type Action = 
   { type: "SET_DATA", data: CountriesAllData[]}
|   { type: "SET_SEARCH_TERM", searchTerm: string}
|   { type: "RESET", reset: boolean}
|   { type: "DETAILS_MODEL", model: DetailsModalEvent}
|   { type: "DETAILS_MODEL_DATA", detailsData: CountriesDetailsData[]}


export type GridType = {
    flag: string;
    name: string;
    currency: string;
    language: string;
    population: number;
    region: string;
    capital: string;
}

export type CountriesAgGridProps = {
    data: CountriesAllData[];
    dispatch: Dispatch<Action>;
}

export type StateAndDispatcherPropsType = {
    state: State
    dispatch: Dispatch<Action>
}

export type DetailsItemType = {
    key: string,
    item: CountriesDetailsData
}