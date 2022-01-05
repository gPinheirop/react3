import { useState } from "react"

const Condicional = () => {

    const[email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }
    function limparEmail(){
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre seu E-mail</h2>
            <form>
                <label htmlFor="E-mail"></label>
                <input
                    type="email" 
                    placeholder="Digite seu e-mail"
                    onChange={(e)=>setEmail(e.target.value)}    
                />
                <button 
                    onClick={enviarEmail}
                    type="submit"
                >Enviar e-mail</button>
                {userEmail &&(
                    <div>
                        o email do usuário é: {userEmail}
                        <button onClick={limparEmail}>Limpar E-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional
