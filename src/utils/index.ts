/////////////////////////////////// Função para formatação de moedas de diferentes tipos
export const parseToBrl = (amount = 0) => {
  // Intl. é uma API nativa do JavaScript, parte do objeto global, - 'pt-BR' define o local e (idioma e formato regional)
  return new Intl.NumberFormat('pt-BR', {
    // style: 'currency' e currency: 'BRL' diz que o estilo é moeda e a moeda é Real brasileiro (BRL).
    style: 'currency',
    currency: 'BRL'
  }).format(amount) //.format(preco) aplica essa formatação ao número recebido.
}
