import Button from "./Button"

function Evento() {

    function meuEvento(){
        alert(` o evento foi ativado`)
    }

    function segundoEvento(){
        console.log("ativando o segundo evento")
    }

    return (
        <>
            <p>Clique para disparar o evento</p>
            <Button 
                text="Primeiro Evento"
                event={meuEvento}/>
            <Button 
                text="Segundo evento"
                event={segundoEvento}
            />
        </>
    )
}

export default Evento
