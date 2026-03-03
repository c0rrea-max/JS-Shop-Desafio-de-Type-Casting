// Checkout Inteligente
// Simulação dos dados recebidos do formulário
let inputPreco = "125.50"; // String
let inputQtd = "3";        // String
let inputCupom = "true";   // String

// Conversão dos tipos
let preco = parseFloat(inputPreco); // Number
let qtd = parseInt(inputQtd);       // Number
let cupom = inputCupom === "true"; // Boolean

// Tratamento de erro para preço inválido
if (isNaN(preco)) {
    console.log("Erro: Preço inválido!");
} else {
    // Cálculo do subtotal
    let subtotal = preco * qtd;
    let desconto = cupom ? subtotal * 0.10 : 0;
    let total = subtotal - desconto;

    // Exibição formatada como moeda (R$)
    console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
    console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Total:    R$ ${total.toFixed(2)}`);
}

// Demonstração técnica dos métodos usados
console.log("parseFloat:", parseFloat(inputPreco));
console.log("parseInt:", parseInt(inputQtd));
console.log("Boolean casting:", inputCupom === "true");