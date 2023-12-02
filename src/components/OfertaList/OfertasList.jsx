import {  useEffect, useState } from "react"
import styles from '../ItemList/item.css'
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/client";
import Item from "../Item/Item";


// export const itemContext = createContext()

const OfertasList = () => {

    const [data, setData] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        
        const productRef = id ? query(
            collection(db, "ofertas"),
            where("categoryId", "==", id)
        ) : collection(db, "ofertas")

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
export default OfertasList