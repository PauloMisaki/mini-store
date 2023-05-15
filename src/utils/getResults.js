// Função pode ser utilizada para mostrar os resultados de um redux-form na tela
// usando um sleep para simular assincronicidade de um página da web
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  window.alert(`Usuário digitou:\n\n${JSON.stringify(values, null, 2)}`);
});
