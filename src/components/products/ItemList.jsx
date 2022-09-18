import { Item } from "./Item"

export const ItemList = ({products}) => {
  return (
   <div className="row product-list">
      {
        products.map((product)=>(
          <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
            <Item {...product}/>
          </div>
        ))
      }
   </div> 
  )
}
