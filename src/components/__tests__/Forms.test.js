import { render, screen, cleanup } from '@testing-library/react'
import Form from '../Form';



test('should render Form component', () => {
    render(<Form />);
    const formElement = screen.getByTestId('form-1');
    expect(formElement).toBeInTheDocument();
})