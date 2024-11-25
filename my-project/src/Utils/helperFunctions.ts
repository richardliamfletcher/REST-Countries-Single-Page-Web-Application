export function getCurrencies(currencies: any): string{
    const objectKeys = Object.keys(currencies);
    let currenciesString: string = "";

    objectKeys.forEach((key, index)=>{
        currenciesString = index === 0 ? currencies[key].name : currenciesString + ", " + currencies[key].name;
    });
    return currenciesString;
}

export function getLanguages(languages: any): string{
    const objectKeys = Object.keys(languages);
    let languagesString: string = "";

    objectKeys.forEach((key, index)=>{
        languagesString = index === 0 ? languages[key] : languagesString + ", " + languages[key];
    });
    return languagesString;
}