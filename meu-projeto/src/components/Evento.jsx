function Evento({numero}) {

    function meuEvento(){
        alert(` o evento ${numero} foi ativado`)
    }

    return (
        <>
            <p>Clique para disparar o evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}

export default Evento
