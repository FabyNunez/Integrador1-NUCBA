const guardar = document.getElementById('nombre')

 const evento = ()=> {console.log('te desplazaste')}

guardar.addEventListener('click', evento)

const nombre = document.getElementById('nombre')

const evento2 = () => {
    console.log('nro de letras')
}

nombre.addEventListener('input', evento2)




