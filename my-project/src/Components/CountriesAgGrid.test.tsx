import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react';
import { mockCountriesAllData } from '../Utils/mocks';
import { CountriesAgGrid } from './CountriesAgGrid';


afterEach(cleanup);

const mockProps = { 
    dispatch: jest.fn(),
    data: [mockCountriesAllData],
  };

test('Ag-grid Renders', () => {
    const { container } = render(<CountriesAgGrid {...mockProps}/>)
    expect(container.firstChild).toBeDefined();
});