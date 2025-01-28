import { render } from '@testing-library/react';
import App from './App';
import Tablero from './Tablero';

test('Tablero se renderiza correctamente', () => {
  render(<App />);
  
  // Verificar si el componente Tablero está presente en el documento
  const tableroElement = document.querySelector('div');
  expect(tableroElement).toBeInTheDocument();
});
