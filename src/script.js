// Função responsável por ADICIONAR um carro
function adicionarCarro() {
  // Recuperando o valor do input de veículo pela ID input-veiculo
  const inputVeiculo = document.getElementById("input-veiculo").value;

  // Recuperando o valor do input de placa pela ID input-placa
  const inputPlaca = document.getElementById("input-placa").value;

  // Recuperando o valor do input de dono pela ID input-dono
  const inputDono = document.getElementById("input-dono").value;

  // Adicionando IF para verificar se algum campo não foi digitado
  if (!inputVeiculo || !inputDono || !inputPlaca) {
    return alert("Digite VEÍCULO, PLACA e DONO");
  }

  // Recuperando o elemento UL no nosso HTML
  const ul = document.querySelector("ul");

  // Criando o elemento LI que ira mostrar o veículo guardado
  const li = document.createElement("li");

  // Criando o botão de remover carro
  const botaoRemover =
    '<button onclick="liberarCarro(event)" class="liberar-carro">Liberar</button>';

  // Adicionando HTML com o botão de error
  li.innerHTML = `Veículo: ${inputVeiculo} | Placa: ${inputPlaca} | Dono: ${inputDono} ${botaoRemover}`;

  // Adicionando nosso item LI em nossa lista UL
  ul.appendChild(li);
}

// Função responsável por REMOVER um carro
function liberarCarro(event) {
  // Pegando o elemento LI através do event
  const li = event.target.parentElement;

  // Removendo elemento do HTML
  li.remove();
}
