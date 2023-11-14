import { createContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import styles from './item.css'
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/client";
import Item from "../Item/Item";


export const itemContext = createContext()

const ItemList = () => {

    const [data, setData] = useState([]);
    const { id } = useParams()

    useEffect(() => {

        const productRef = id ? query(
            collection(db, "products"),
            where("categoryId", "==", id)
        ) : collection(db, "products")

        getDocs(productRef)
            .then(snapshot => {
                setData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            }, [id])
            .catch(error => console.log(error))
    })

    return(
        <>
        {data.map((products, index)=> (<Item key={index} products={products} />))}
        </>
    )

}
export default ItemList