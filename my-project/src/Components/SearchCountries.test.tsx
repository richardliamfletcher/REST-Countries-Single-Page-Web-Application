import '@testing-library/jest-dom'
import { render, cleanup, screen } from '@testing-library/react';
import { mockState } from '../Utils/mocks';
import SearchCountries from './SearchCountries';
import userEvent from '@testing-library/user-event'


afterEach(cleanup);

const mockProps = { 
    dispatch: jest.fn(),
    state: mockState,
  };

test('Search Component Renders', () => {
    const { container } = render(<SearchCountries {...mockProps}/>)
    expect(container.firstChild).toBeDefined();
});

test('Search triggered on search', async () => {
    render(<SearchCountries {...mockProps}/>);

    await userEvent.click(screen.getByText('Search'));

    expect(mockProps.dispatch).toHaveBeenCalled();
});

test('Reset triggered on reset', async () => {
    render(<SearchCountries {...mockProps}/>)
    
    await userEvent.click(screen.getByText('Reset'));

    expect(mockProps.dispatch).toHaveBeenCalled();
});