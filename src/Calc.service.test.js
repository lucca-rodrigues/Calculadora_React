import React from 'react';
import ReactDom from 'react-dom';
import CalcService from './CalcService';

describe('test Calc Service', () => {
    const [Calculate] = CalcService();

    it('Garante que 1 + 4 seja 5', ()=>{
        let soma = Calculate(1, 4, '+');
        expect(soma).toEqual(5);
    })
});
