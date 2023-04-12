import { Inter } from 'next/font/google'
import { api } from '@/utils/api'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

const [element, setElement]=useState([]);

const addTopanier=(produit)=>{
  setElement([...element, produit])
}

const supprimer=(produit)=>{
  const supprimerElement=element.filter((item)=> item.id !==produit.id)
  setElement( supprimerElement);
}

const CalculeTotal=()=>{
let total=0;
element.forEach(item => {
  const produit=api.find((prod)=>prod.id===item.id);
  total+=produit.price;
});


return total;
}

console.log(element);
  return (
  <div  className={styles.content_principal}>
     
     <div>
{
  api.map((item)=>( 
    <div key={item.id} className={styles.produits}>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <button onClick={() => addTopanier(item)}>Ajout produit</button>
    </div>
  ))
}
 </div>

 <div>
<h2>Ici le panier</h2>

  {
  element.map((prod)=>(
    <div key={prod.id} className={styles.panier}>
       <p>{prod.name}</p>
      <p>{prod.price}</p>
      <p>{prod.image}</p>
      <button onClick={() => supprimer(prod)}>supprimer</button>
      </div>
     
    ))
  }
 </div>

 <h2>Total:{CalculeTotal()} </h2>
  </div>
  )
}
