import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Extrato from './index'

test("Deve renderizar uma lista de transações", () => {

    const trasacoes = [
        {
            transacao: 'Depósito',
            valor: 100
        },
    ];
    
    render(<Extrato transacoes={trasacoes}/>)
    const lista = screen.getByRole("listitem")
    expect(lista).toBeInTheDocument()

})