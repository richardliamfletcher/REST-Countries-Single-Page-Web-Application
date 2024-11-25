import { Dispatch } from "react";
import { Action } from "./types";

export async function restCountriesNameApiRequest(url: string, dispatch: Dispatch<Action>) {
    try {
        const response = await fetch(url);
        const result = await response.text();
        const parsedResult = JSON.parse(result);
        if(parsedResult.length > 0) {
          dispatch({ type:"DETAILS_MODEL_DATA" , detailsData: parsedResult})
        }
      } catch (error) {
        console.error(error);
      }
}

export async function restCountriesSearchApiRequest(searchTerm: string, dispatch: Dispatch<Action>) {
    const nameUrl = `https://restcountries.com/v3.1/name/${searchTerm}`;
    const countryUrl = `https://restcountries.com/v3.1/currency/${searchTerm}`;
    const languageUrl = `https://restcountries.com/v3.1/lang/${searchTerm}`;
    let parsedResult=[];

    try {
        const response = await fetch(nameUrl);
        if(response.ok) {
            const result = await response.text();
            const nameParsedResult = JSON.parse(result);
            parsedResult.push(nameParsedResult);
        } else {
            throw new Error(`Response status: ${response.status}`);
        }
    } catch (error) {
        console.error(error);
    }
    try {
        const response = await fetch(countryUrl);
        if(response.ok) {
            const result = await response.text();
            const countryParsedResult = JSON.parse(result);
            parsedResult = countryParsedResult;
        }
        else {
            throw new Error(`Response status: ${response.status}`);
        }
    } catch (error) {
        console.error(error);
    }
    try {
        const response = await fetch(languageUrl);
        if(response.ok) {
            const result = await response.text();
            const languageParsedResult = JSON.parse(result);
            parsedResult.push(languageParsedResult);
        }
        else {
            throw new Error(`Response status: ${response.status}`);
        }
    } catch (error) {
        console.error(error);
    }
    if(parsedResult.length > 0) {
        dispatch({ type:"SET_DATA" , data: parsedResult})
    }
}

export async function restCountriesApiRequest(url: string, dispatch: Dispatch<Action>) {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const result = await response.text();
            const parsedResult = JSON.parse(result);
            if(parsedResult.length > 0) {
              dispatch({ type:"SET_DATA" , data: parsedResult})
            }
        }        
        else {
            throw new Error(`Response status: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
}