import '@testing-library/jest-dom'
import { DetailsModal } from './DetailsModal';
import { render, cleanup, screen } from '@testing-library/react';
import { mockState } from '../Utils/mocks';
import userEvent from '@testing-library/user-event';


afterEach(cleanup);

const mockProps = { 
    dispatch: jest.fn(),
    state: mockState,
  };

const localStorage = {
    setItem: jest.fn()
};

test('Details Modal Component Renders', () => {
    const { container } = render(<DetailsModal {...mockProps}/>)
    expect(container.firstChild).toBeDefined();
});

test('Details Modal Component Closes on Close', async () => {
    render(<DetailsModal {...mockProps}/>)
    
    await userEvent.click(screen.getByText('Close'));

    expect(mockProps.dispatch).toHaveBeenCalled();
});