function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let imc = peso / (altura * altura);
    
    let mensaje = '';
    if (imc < 18.5) {
        mensaje = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        mensaje = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        mensaje = 'Sobrepeso';
    } else {
        mensaje = 'Obesidad';
    }
    
    document.getElementById('resultado').textContent = `Tu IMC es ${imc.toFixed(2)}. ${mensaje}`;
}
