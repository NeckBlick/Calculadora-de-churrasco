const gerarPdf = (dadosC, dadosB, dadosE ) => {
    const html = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lista de compra</title>
    </head>
    <style>
        th{
            font-size: 24px;
            font-weight: 600;
            padding: 0.5rem;
        }
        td{
            font-size: 18px;
            font-weight: 500;
        }
        td,tr{
            text-align: center;
        }
    </style>
    <body>
        <center>
            <h1>Lista de compra</h1>
            <table>
                <thead>
                <tr>
                    <th>Carne</th>
                    <th>Frango</th>
                    <th>Carne suina</th>
                    <th>Bebidas</th>
                    <th>Acompanhamentos</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    ${dadosC.map(item => (
                        `<td>${item.qntd} Kg de ${item.tipo}</td>`
                    ))}
                    <td>dsasdsa</td>
                    <td>dsasdsa</td>
                    <td>dsasdsa</td>
                    <td>dsasdsa</td>
                </tr>
                </tbody>
            </table>
        </center>
    </body>
    </html>
    `
}