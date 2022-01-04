import Item from "./Item"

const List = () => {
    return (
        <>
           <h1>Lista</h1> 
           <ul>
               <Item marca="Renaut" ano_lancamento={1997}/>
               <Item marca="Ford" ano_lancamento={1989}/>
               <Item marca="Ferrari" ano_lancamento={1986}/>
               <Item marca="Chevrolet" ano_lancamento={1990}/>
               <Item />

           </ul>
        </>
    )
}

export default List
