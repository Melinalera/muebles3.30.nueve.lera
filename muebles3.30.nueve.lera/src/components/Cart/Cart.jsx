import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCartContext } from '../Context/CartContext';



const Cart = () => {
    const { cartList } = useContext(CartContext);
    const [conditional,setCondicional] = useState (false);
    const [dataForm,setDataForm] = useState({
        email: ' ',
        name: ' ',
        phone:''
    });
    
    const [idOrden,setOrden] = useState('');
    const compra = async (e) => {
        e.preventDefault()

        let orden = {}

        orden.buyer=dataForm//name, email,phone
       

        orden.Item = cartList.map (cartItem =>{
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.precio * cartItem.cantidad;
            const cantidad = cartItem.cantidad

            return {id, nombre,precio,cantidad}


        })
    }
    return (
        <>
            {cartList.length === 0 ? (
                <div
                
                >
                    <h2>Aún no agregaste productos al carrito</h2>
                    <Link to="/">
                        <button className="detail">Ir al catálogo</button>
                    </Link>
                </div>
            ) : (
                <>

                    {cartList.map(producto =><li key={producto.id}>{producto.name}</li>)}   
               
                </>
            )}
        </>
    );
};

export default Cart;