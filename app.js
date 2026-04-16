function calcularPPR() {
    const salario = parseFloat(document.getElementById('salario').value);
    const meses = parseInt(document.getElementById('meses').value);
    const categoria = document.getElementById('categoria').value;
    const grupoCargo = document.getElementById('grupoCargo').value;
    const filial = document.getElementById('filial').value;

    

    let resultado = 0; 

    if (categoria === "04") {
        if (grupoCargo === "01") {
            resultado = (((salario * 13.33) * meses) * (0.10  * 1.0506).toFixed(4) ) / 12;
        } else if (grupoCargo === "02" ) {
            resultado = (((salario * 13.33) * meses) * (0.20  * 1.0506).toFixed(4) ) / 12;
        } else if (grupoCargo === "03") {
            resultado = (((salario * 13.33) * meses) * (0.30  * 1.0506).toFixed(4) ) / 12;
        }

    } else if (categoria === "01" && filial === "02") {
        if (grupoCargo === "01") {
            resultado = (salario * meses * (0.10 * 1.0286).toFixed(4) * 13.33) / 12;
        } else if (grupoCargo === "02") {
            resultado = (salario * meses * (0.20 * 1.0286).toFixed(4) * 13.33) / 12;
        } else if (grupoCargo === "03") {
            resultado = (salario * meses * (0.30 * 1.0286).toFixed(4) * 13.33) / 12;
        }
    } else if (categoria === "01" && filial === "03") {
        if (grupoCargo === "01") {
            resultado = (salario * meses * (0.10 * 0.9247).toFixed(4) * 13.33) / 12;
        } else if (grupoCargo === "02") {
            resultado = (salario * meses * (0.20 * 0.9247).toFixed(4) * 13.33) / 12;
        } else if (grupoCargo === "03") {
            resultado = (salario * meses * (0.30 * 0.9247).toFixed(4) * 13.33) / 12;
        }
    } else if (categoria === "02" && filial === "03") {
        if (grupoCargo === "01") {
            resultado = (salario * meses * (0.10 * 1.0769).toFixed(4) * 13.33) / 12;
        } else if (grupoCargo === "02") {
            resultado = (salario * meses * (0.20 * 1.0769).toFixed(4) * 13.33) / 12;
        } else if (grupoCargo === "03") {
            resultado = (salario * meses * (0.30 * 1.0769).toFixed(4) * 13.33) / 12;
        }
    } else if (categoria === "03" && filial === "03") {
        if (grupoCargo === "01") {
            resultado = (salario * meses * (0.10 * 1.0026).toFixed(4) * 13.33) / 12;
        } else if (grupoCargo === "02") {
            resultado = (salario * meses * (0.20 * 1.0026).toFixed(4) * 13.33) / 12;
        } else if (grupoCargo === "03") {
            resultado = (salario * meses * (0.30 * 1.0026).toFixed(4) * 13.33) / 12;
        }
    }

    document.getElementById('resultado').innerText = `Valor Bruto: R$ ${resultado.toFixed(2)}
    Aviso Importante: O valor apresentado é bruto, ou seja, sem desconto de taxa sindical (Valor de acordo com o Acordo Coletivo da Filial) e Imposto de Renda (Para valores acima de R$ 8.214,40).`;

    const relatorio = `
                <h2>Relatório de Cálculo</h2>
                <p><strong>Grupo de Cargo:</strong> ${grupoCargo}</p>
                <p><strong>Categoria:</strong> ${categoria}</p>
                <p><strong>Salário Base Mensal:</strong> R$ ${salario.toFixed(2)}</p>
                <p><strong>Número de Meses Trabalhados:</strong> ${meses}</p>
            `;
            document.getElementById('relatorio').innerHTML = relatorio;
            document.getElementById('logo-container').style.display = 'block';
        
}

function limparCampos() {
    document.getElementById('filial').value = "";
    document.getElementById('categoria').value = "";
    document.getElementById('grupoCargo').value = "";
    document.getElementById('salario').value = "";
    document.getElementById('meses').value = "";
    document.getElementById('resultado').innerText = "Resultado: ";
    document.getElementById('logo-container').style.display = 'none';
}

function Voltar() { window.location.href = "https://diegofausto.github.io/calculadorascanpackers";
}