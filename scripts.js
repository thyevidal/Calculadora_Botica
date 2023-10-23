document.getElementById('btn').addEventListener('click', function () {
    const planta = parseInt(document.getElementById('planta').value);
    const alcool = parseInt(document.getElementById('alcool').value);
    const percentual = parseFloat(document.getElementById('percentual').value);

    //colocar o percentual no formato decimal
    let percent = percentual/100
    //calcula o total de planta
    let peso_planta_total = planta*10;
    //calcula a quantidade percentual de planta
    let porcetagem_planta = peso_planta_total*percent;

    //calculo da maceraçao e filtragem
    let maceracao = ((peso_planta_total-porcetagem_planta)-alcool);
    let filtragem = porcetagem_planta;

    document.getElementById('maceracao').textContent = maceracao + ' ml'
    document.getElementById('filtragem').textContent = filtragem + ' ml'
    
})