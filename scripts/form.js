// Matriz de produtos fornecida
const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
  ];
  
  // Preenchendo o campo "Nome do Produto" dinamicamente
  document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
  
    if (productSelect) {
      products.forEach((product) => {
        const option = document.createElement("option");
        option.value = product.id; // Valor do produto
        option.textContent = `${product.name} (Avaliação Média: ${product.averagerating})`;
        productSelect.appendChild(option);
      });
    } else {
      console.error("Elemento 'product' não encontrado.");
    }
  });
  