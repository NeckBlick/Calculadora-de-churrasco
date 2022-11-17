import * as Print from 'expo-print'
import { shareAsync } from 'expo-sharing'

export  const GerarPdf = async  (dadosC, dadosB, dadosE ) => {
    const htmlpdf = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lista de compra</title>
    </head>
    <body>
        <center>
            <h1>Lista de compra</h1>
            <h1>Carnes:</h1>
            <ul>
            ${dadosC.map(item => (
                `<li>${item.qntd} Kg de ${item.tipo} - R$${item.precoFinal}</li>`
                `<ul>
                    ${item.tipos.map(items => (
                        `<li>${items.assado} - R$${items.total}</li>`
                    ))}
                </ul>
                `
            ))}
            </ul>
            <h1>Bebidas:</h1>
            <ul>
            ${dadosB.map(item => (
                `<li> ${item.litrosTotal}L de ${item.bebida} - R$${item.total}</li>`
            ))}
            </ul>
            <h1>Acompanhamentos:</h1>
            <ul>
            ${dadosE.map(item => (
                `<li>${item.qntdTotal} de ${item.tipo} - R$${item.precoFinal}</li>`
            ))}
            </ul>
        </center>
    </body>
    </html>
    `
	const file = await Print.printToFileAsync({
		html: htmlpdf,
		base64: false
	})
	await shareAsync(file.uri)
}