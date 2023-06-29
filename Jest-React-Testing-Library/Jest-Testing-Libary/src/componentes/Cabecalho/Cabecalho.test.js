
// test("Primeiro teste", () => {

//     const numero = 10;
//     expect(numero).toBe(11)

// })

import { render, screen } from '@testing-library/react'
import Cabecalho from './index'

test("Deve renderizar o nome do usuário logado", () => {

    render(<Cabecalho/>)

    const nomeUsuario = screen.getByText('Joana Fonseca Gomes')

    expect(nomeUsuario).toBeInTheDocument()

})