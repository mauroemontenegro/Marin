import { useParams } from "react-router-dom";
import {  useEffect, useState } from "react"
import style from './detail.css'
import { db } from "../../firebase/client"
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    const { itemId } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
        const productRef = doc(db, "products", itemId)
        getDoc(productRef)
            .then(snapshot => {
                if (snapshot.exists()) {
                    setData({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                }
            })
            .catch(error => console.log(error))
    }, [itemId])

    return(
         <ItemDetail data={data}/>
        ) 
}
export default ItemDetailContainer
