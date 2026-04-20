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

const relatorio = `
  <div style="background:#f9f9f9;border-radius:12px;padding:20px;box-shadow:0 2px 8px #ddd;">
    <h2 style="color:#2a7ae2;">Relatório de Cálculo 📊</h2>
    <p style="font-size:1.1em;"><span style="font-size:1.3em;">🏷️</span> <strong>Grupo de Cargo:</strong> ${grupoCargo}</p>
    <p style="font-size:1.1em;"><span style="font-size:1.3em;">💼</span> <strong>Categoria:</strong> ${categoria}</p>
    <p style="font-size:1.1em;"><span style="font-size:1.3em;">💰</span> <strong>Salário Base Mensal:</strong> R$ ${salario.toFixed(2)}</p>
    <p style="font-size:1.1em;"><span style="font-size:1.3em;">📅</span> <strong>Número de Meses Trabalhados:</strong> ${meses}</p>
    <hr style="margin:16px 0;">
    <div style="background:#eafaf1;border-radius:8px;padding:12px;margin-bottom:12px;">
      <p style="font-size:1.3em;color:#27ae60;font-weight:bold;">
        🎉 Valor Bruto do PPR Calculado: <span style="font-size:1.4em;">R$ ${resultado.toFixed(2)}</span>
      </p>
      <p style="font-size:1em;color:#34495e;">
        <span style="font-size:1.2em;">ℹ️</span> <strong>O valor bruto</strong> é o total antes dos descontos obrigatórios.<br>
        <span style="font-size:1.2em;">💸</span> <strong>Descontos possíveis:</strong>
        <ul style="margin:6px 0 0 18px;">
          <li>Taxa sindical (conforme acordo coletivo da filial)</li>
          <li>Imposto de Renda (aplicável para valores acima de R$ 8.214,40)</li>
        </ul>
        <span style="font-size:1.2em;">📝</span> Consulte o RH para simulação do valor líquido.
      </p>
    </div>
    <p style="font-size:0.95em;color:#e67e22;">
      <span style="font-size:1.2em;">⚠️</span> <em>Aviso:</em> Os descontos variam conforme regras da filial e legislação vigente.
    </p>
  </div>
`;
document.getElementById('relatorio').innerHTML = relatorio;
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


