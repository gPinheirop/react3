const Form = () => {

function cadastrarUsuario(e){
    e.preventDefault()
    console.log("usuario cadastrado")
}

    return (
        <>
          <h1>Meu cadastro:</h1>  
          <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text" 
                    placeholder="Digite o seu nome"
                    id="name"
                    name="name"/>
            </div>
            <div>
            <label htmlFor="passowrd">Senha:</label>
                <input
                    type="passowrd"
                    placeholder="Digite sua senha"
                    id="passowrd"
                    name="passowrd"/>
            </div>
            <div>
                <input type="submit" value="Cadastrar" />
            </div>
          </form>
        </>
    )
}

export default Form
