

let cursos = ['informatica', 'matematica','biologia','quimica', 'fisica']


cursos.indexOf('informatica')
console.log(cursos.indexOf('informatica'))
console.log(cursos)

cursos.join(',')
console.log(cursos.join(','))
console.log(cursos)

cursos.pop()
console.log(cursos.pop())
console.log(cursos)

cursos.shift()
console.log(cursos)

cursos[0] = 'enginharia informática'
console.log(cursos)

cursos.push('Gestão')
console.log(cursos)

if(cursos.indexOf('Gestão') > -1){
console.log('Este intem existe e tem a posicão ' + ' ' + cursos.indexOf('Gestão'))
}else{
    console.log("Não encontrado")
}

console.log(cursos)