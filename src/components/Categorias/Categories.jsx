import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import style from './categorias.css'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/client";



const Categories = () => {
    
    const [data, setData] = useState([]);
    const {id}= useParams('')

    const nombreCategoria = ["Remeras" , "Musculosas" , "Shorts", "Buzos"];
    useEffect(() => {

    const productRef = id ? query(
            collection(db, "products"), 
            where("categoryId", "==" , id )
    ) : collection(db , "products")

    getDocs(productRef)
    .then(snapshot =>{
        setData(snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})))
    })
    }, [id])
    return(
        <>
        {nombreCategoria.map((categoryId, index)=>( <NavLink to={`/category/${categoryId}`} key={index}><button className="btn-cat">{categoryId}</button></NavLink>))}
        </>
    )
        

}
export default Categories