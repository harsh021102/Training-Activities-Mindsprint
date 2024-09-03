import { useDispatch } from "react-redux"


export default function ItemsList() {
    const items=[{id:1,name: 'laptop',price:56},{id:2,name: 'phone',price:56},{id:3,name: 'car',price:599},]
    const dispatch = useDispatch();
    return (
        <div>
            {
                items.map(item=>(
                    <div className="col" key={item.id}>
                        <h3>{item.name}</h3>
                        <h3>{item.price}</h3>
                        <button onClick={()=>dispatch({
                            type: 'ADD_ITEM',payload: item,
                        })}>Add to cart</button>
                    </div>
                ))
            }
        </div>
    )
}
