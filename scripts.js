document.getElementById('btn').addEventListener('click', function () {
    const planta = parseInt(document.getElementById('planta').value);
    const alcool = parseInt(document.getElementById('alcool').value);

    let p10 = planta*10;
    let mac = ((p10-(p10*0.25))-alcool);
    let fil = p10*0.25;

    document.getElementById('maceracao').textContent = mac + ' ml'
    document.getElementById('filtragem').textContent = fil + ' ml'
    
})