import { useState } from "react"

const Form = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
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
                    name="name"
                    onChange={(e)=> setName(e.target.value)}
                    />
            </div>
            <div>
            <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    id="password"
                    name="password"
                    onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Cadastrar" />
            </div>
          </form>
        </>
    )
}

export default Form
