import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import { CountriesAgGridProps, CountriesAllData, DetailsModalEvent, GridType } from '../Utils/types';
import { getCurrencies, getLanguages } from '../Utils/helperFunctions';

export function CountriesAgGrid({data, dispatch}: CountriesAgGridProps) {
    let rowData;

    if(data?.length > 1) {
        rowData = data.map((country: CountriesAllData) => {
            return {
                flag: country.flag,
                name: country.name.common,
                currency: getCurrencies(country.currencies),
                language: getLanguages(country.languages),
                population: country.population,
                region: country.region,
                capital: country.capital? country.capital[0] : "no capital",
            };
        });
    }

    const colDefs: ColDef<GridType>[] = [
        { field: "flag", width: 70 },
        { field: "name" },
        { field: "currency" },
        { field: "language" },
        { field: "population" },
        { field: "region" },
        { field: "capital" },
    ];

    return (
        <div
            className="ag-theme-quartz"
            style={{ height: 500, width: 1300 }}
        >
            <AgGridReact<GridType>
                rowData={rowData}
                columnDefs={colDefs}
                onRowClicked={(event)=>{ 
                    const model: DetailsModalEvent = { 
                        modelActive: true,
                        modelCountryName: event.data?.name
                    }
                    dispatch({type: "DETAILS_MODEL", model}); 
                }}
            />
        </div>
    );
}