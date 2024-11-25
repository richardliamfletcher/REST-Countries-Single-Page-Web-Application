import { getCurrencies, getLanguages } from "./helperFunctions";

test('Details Modal Component Closes on Close',  () => {
    const currency = getCurrencies({CHF: {name: "Swiss franc", symbol: "Fr." }});

    expect(currency).toBe("Swiss franc")
});

test('Details Modal Component Closes on Close',  () => {
    const languages = getLanguages({fra: 'French'});

    expect(languages).toBe("French")
});