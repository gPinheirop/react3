import PropTypes from 'prop-types'


const Item = ({marca, ano_lancamento}) => {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}
Item.propTypes = {
    marca: PropTypes.string.isRequired ,
    ano_lancamento: PropTypes.number
    // validação à nivel de pogramador
}
Item.defaultProps ={
    marca: "faltou a marca",
    ano_lancamento: 0
}

export default Item
