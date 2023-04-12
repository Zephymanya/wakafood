import { Inter } from 'next/font/google'
import { api } from '@/utils/api'
import { useState } from 'react';

console.log(api);

// console.log(api);

export default function Home() {

const [element, setElement]=useState([]);

const panier=(produit)=>{
  setElement([...element, produit])
}

function addTopanier(produit) {
  let product = api.find(p => p.id === produit.id);
  element.push(product);
  return element;
}
const supprimer=(produit)=>{
  const supprimerElement=element.filter((item)=> item.id !==produit.id)
  setElement( supprimerElement);
}

const CalculeTotal=()=>{
let total=0;
element.forEach(item => {
  const produit=api.find((prod)=>prod.id===item.id);
  console.log(produit);
  total+=produit.price * item.quantity;
});
return total;
}



  return (
  <div>
{
  element.map((item)=>( 
    <div key={item.id}>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <button onClick={() => addTopanier(item)}>Ajout produit</button>
        <button onClick={() => addTopanier(item)}>supprimer le produit</button>
    </div>
  ))

}
  </div>
  )
}
