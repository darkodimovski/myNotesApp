import { render, screen } from '@testing-library/react'
import App from '../../App';

import Search from '../Search';


test('should render search', () => {
    render(<Search />);
    const searchElement = screen.getByPlaceholderText(/Search.../i);
    expect(searchElement).toBeInTheDocument();
})


test('notes app title render', () => {
    render(<App />);
    const titleElement = screen.getByTestId('title');
    expect(titleElement).toBeInTheDocument();
})

