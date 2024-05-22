function enviarMensagem() {
  var numeroEnvio = document.getElementById("numeroEnvio").value;
  var numeroRecebimento = document.getElementById("numeroRecebimento").value;
  var mensagem = document.getElementById("mensagem").value;
  var data = document.getElementById("data").value;

  if (numeroEnvio === "" || numeroRecebimento === "" || mensagem === "" || data === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Verificar se a data é válida (a partir de 2024)
  var dataAtual = new Date();
  var dataSelecionada = new Date(data);

  if (dataSelecionada < dataAtual) {
    alert("Por favor, selecione uma data futura a partir de 2024.");
    return;
  }

  var mensagemFormatada = encodeURIComponent(mensagem);
  var url = "https://api.whatsapp.com/send?phone=" + numeroRecebimento + "&text=" + mensagemFormatada;

  // Programar o envio da mensagem para a data selecionada
  var diffEmMilissegundos = dataSelecionada.getTime() - dataAtual.getTime();
  setTimeout(function() {
    window.open(url, '_blank');
  }, diffEmMilissegundos);

  alert("Mensagem programada para ser enviada em " + data);
}

// Adicionando animação nas funções
document.addEventListener('DOMContentLoaded', function() {
  var inputs = document.querySelectorAll('input, textarea, button');
  inputs.forEach(function(input) {
    input.addEventListener('focus', function() {
      this.classList.add('focus-anim');
    });
    input.addEventListener('blur', function() {
      this.classList.remove('focus-anim');
    });
  });
});


  
  


