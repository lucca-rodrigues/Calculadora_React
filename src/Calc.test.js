import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

describe('App', () =>{
  it('Renderia componentes sem erros', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Deve limpar o campo de numeros', () => {
    const {getByTestId, getByText} = render(<App />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('textNumbers')).toHaveValue('0');
  });

  it('Deve Somar 2 + 3', () => {
    const {getByTestId, getByText} = render(<App />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('textNumbers')).toHaveValue('5');
  });

  it('Deve Multiplicar 2 x 3', () => {
    const {getByTestId, getByText} = render(<App />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('textNumbers')).toHaveValue('6');
  });

  it('Deve Dividir 4 x 2', () => {
    const {getByTestId, getByText} = render(<App />);
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('textNumbers')).toHaveValue('2');
  });
  it('Deve Subtrair 8 - 2', () => {
    const {getByTestId, getByText} = render(<App />);
    fireEvent.click(getByText('8'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('textNumbers')).toHaveValue('6');
  });

  it('Deve Somar 8.5 + 2', () => {
    const {getByTestId, getByText} = render(<App />);
    fireEvent.click(getByText('8'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('textNumbers')).toHaveValue('10.5');
  });

})
