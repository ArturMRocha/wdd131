// Atualiza o ano atual no rodapé
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Atualiza a data da última modificação no rodapé
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;