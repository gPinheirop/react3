const Saudacao = ({nome}) => {

    function gerarSaudacao(algumNome){
        return nome && `Saudações ${nome}`
    }

    return <>{gerarSaudacao(nome)}</>
    // a impresão do nome é realizada após o teste lógico onde que verifica se o mesmo possui conteúdo e após isso imprime a string após o "&&"
}

export default Saudacao
