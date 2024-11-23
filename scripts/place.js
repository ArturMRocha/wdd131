// Função para calcular o fator de sensação térmica (wind chill)
function calculateWindChill(temp, windSpeed) {
    // Fórmula do Wind Chill (em graus Fahrenheit e milhas por hora)
    return (
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
}

// Função para verificar as condições e calcular ou exibir "N/A"
function displayWindChill() {
    // Valores estáticos para temperatura e velocidade do vento
    const temperature = 10; // Em Fahrenheit
    const windSpeed = 5; // Em mph

    // Condições para cálculo do Wind Chill
    const tempCondition = temperature <= 50; // <= 50°F
    const windCondition = windSpeed > 3; // > 3 mph

    let windChillValue = "N/A";
    if (tempCondition && windCondition) {
        windChillValue = calculateWindChill(temperature, windSpeed) + " °F";
    }

    // Atualizar o valor no DOM
    const windChillElement = document.querySelector(".weather ul li:nth-child(4)");
    if (windChillElement) {
        windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${windChillValue}`;
    }
}

// Função para configurar o rodapé com ano atual e data de modificação
function setupFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    const footerElement = document.querySelector(".footer");
    if (footerElement) {
        footerElement.innerHTML = `
            <p>&copy; ${currentYear} Arthur Menezes Rocha Rio De Janeiro</p>
            <p>Last Modification: ${lastModified}</p>
        `;
    }
}

// Inicializar as funções quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    displayWindChill();
    setupFooter();
});
