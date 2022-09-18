import { Item } from "./Item";

export default function ItemListContainer({ greeting }) {
  
  return (
    <>
      <h1 className="title">{ greeting }</h1>
      <section>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <Item />
          </div>
        </div>
      </section>
      
    </>
  )
}
