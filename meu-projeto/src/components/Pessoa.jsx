import styles from './Pessoa.module.css'
const Pessoa = ({nome, idade, profissao, foto}) => {
    return (
        <div className={styles.pessoaContainer}>
            
            <img src={foto} alt={nome} className="pessoaContent" />
            <h2 className="pessoaContent">Nome:{nome}</h2>
            <p className="pessoaContent">Idade: {idade}</p>
            <p className="pessoaContent">Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa
