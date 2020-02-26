var titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

var pacientesLista = document.querySelectorAll('.paciente')

for(var i = 0; i < pacientesLista.length; i++){
  
  var paciente = pacientesLista[i]
  
  var tdPeso = paciente.querySelector('.info-peso')
  var tdAltura = paciente.querySelector('.info-altura')
  var tdImc = paciente.querySelector('.info-imc')

  var peso = parseFloat(tdPeso.textContent)
  var altura = parseFloat(tdAltura.textContent)

  var pesoEhValido = validaPeso(peso)
  var alturaEhValida = validaAltura(altura)


  if (!pesoEhValido) {
    tdImc.textContent = 'peso invalido'
    pesoEhValido = false
    paciente.classList.add('paciente-invalido')
  }

  if (!alturaEhValida) {
    tdImc.textContent = 'altura invalido'
    alturaEhValida = false
    paciente.classList.add('paciente-invalido')
  }

  if (pesoEhValido && alturaEhValida) {
    tdImc.textContent = calculaIMC(peso, altura)
  }
}

function validaPeso(peso){
  if (peso >= 0 && peso <= 1000){
    return true
  }else {
    return false
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3){
    return true
  } else {
    return false
  }
}
