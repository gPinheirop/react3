const OutraLista = ({itens}) => {
    return (
        <>
            <h3>Lista</h3>
            {itens.length > 0 ?(
                itens.map((item, index)=> (
                    <p key={index}> {item}</p>
            ))) : (
                <p>Não há itens na lista</p>
            )}
            {/* esse comando realiza um teste lógico visando validar a presença de um conteúdo na props itens e caso o mesmo esteja vazio irá ser retornado o paragrafo informando que não há itens na lista. */}
        </>
    )
}

export default OutraLista
