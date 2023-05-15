import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

describe('Teste básico na tela de produtos', () => {
  test('Verifica se o primeiro produto foi renderizado', () => {
    render(<App />, {wrapper: BrowserRouter});
    const firstProduct = screen.getByText(/AirPods/i);
    expect(firstProduct).toBeInTheDocument();
  });
})
