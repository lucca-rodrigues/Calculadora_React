import React from 'react';
import ReactDom from 'react-dom';
import CalcService from './CalcService';

describe('test Calc Service', () => {
    const [Calculate, ConcatNumber, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalcService();

    it('Garante que 1 + 4 seja 5', ()=>{
        let soma = Calculate(1, 4, SOMA);
        expect(soma).toEqual(5);
    });

    it('Garante que 1 - 4 seja -3', ()=>{
        let subtracao = Calculate(1, 4, SUBTRACAO);
        expect(subtracao).toEqual(-3);
    });
    it('Garante que 1 / 4 seja 0.25', ()=>{
        let divisao = Calculate(1, 4, DIVISAO);
        expect(divisao).toEqual(0.25);
    });
    it('Garante que 1 * 4 seja 4', ()=>{
        let multiplicacao = Calculate(1, 4, MULTIPLICACAO);
        expect(multiplicacao).toEqual(4);
    });

    it('Retorna 0', ()=>{
      let operacaoInvalida = Calculate(1, 4, '%');
      expect(operacaoInvalida).toEqual(0);
    })
});
