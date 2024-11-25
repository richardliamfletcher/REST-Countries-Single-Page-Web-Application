import { mockCountriesAllData, mockCountriesDetailsData, mockState } from "./mocks";
import { reducer } from "./reducer";

test('Reducer SET_DATA returns correct value',  () => {
    const returnValue = reducer(mockState, {type: "SET_DATA", data: [mockCountriesAllData]});

    expect(returnValue).toStrictEqual({... mockState, data:[mockCountriesAllData]});
});

test('Reducer SET_SEARCH_TERM returns correct value',  () => {
    const returnValue = reducer(mockState, {type: "SET_SEARCH_TERM", searchTerm: "hello"});

    expect(returnValue).toStrictEqual({... mockState, searchTerm:"hello"});
});

test('Reducer RESET returns correct value',  () => {
    const returnValue = reducer(mockState, {type: "RESET", reset: true});

    expect(returnValue).toStrictEqual({... mockState, reset: true});
});

test('Reducer DETAILS_MODEL returns correct value',  () => {
    const returnValue = reducer(mockState, {type: "DETAILS_MODEL", model:{modelActive: true, modelCountryName: "spain"}});

    expect(returnValue).toStrictEqual({... mockState, modelActive: true, modelCountryName: "spain"});
});

test('Reducer DETAILS_MODEL_DATA returns correct value',  () => {
    const returnValue = reducer(mockState, {type: "DETAILS_MODEL_DATA", detailsData: [mockCountriesDetailsData]});

    expect(returnValue).toStrictEqual({... mockState, detailsData: [mockCountriesDetailsData]});
});