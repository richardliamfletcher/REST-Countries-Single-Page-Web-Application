import { CountriesAllData, CountriesDetailsData, State } from "./types";

export const mockCountriesAllData: CountriesAllData = {
    name: {
        common: "England",
        official: "England",
    },
    capital: ["London"],
    currencies: {
        name: "Pound",
        symbol: "£",
    },
    flag: "flag",
    languages: { ENG: "English"},
    population: 300,
    region: "Europe",
}

export const mockCountriesDetailsData: CountriesDetailsData = {
    name: {
        common: "England",
        official: "England",
    },
    capital: ["London"],
    currencies: {
        name: "Pound",
        symbol: "£",
    },
    flag: "flag",
    languages: { ENG: "English"},
    population: 300,
    region: "Europe",
    fifa: "ENG",
    continents: ["Europe"]
}

export const mockState: State = {
    data: [mockCountriesAllData],
    searchTerm: "",
    reset: false,
    modelActive: true,
    modelCountryName: "Spain",
    detailsData: [mockCountriesDetailsData],
}