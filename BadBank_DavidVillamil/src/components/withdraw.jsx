import React, { useState } from "react";

//Estilos
import '../Styles/Deposit.css'
import '../Styles/withdraw.css'
import { FormCard } from "../context.jsx/context";

//Contextos


const Withdraw = ({balance,setBalance,addTrasaction}) => {

    const [withdrawAmount, setWithdrawAmount] = useState(0)
    const [Status, setStatus] = useState(false)  
    const [mensaje, setMensaje] = useState('') 
    

    function handleDeposit(e){
        const valor = e.currentTarget.value
        setWithdrawAmount(valor)

    }

    function handleClick(){
        const withdrawValue = parseFloat(withdrawAmount);

        function Mensaje(mensaje){
            setStatus(true)
            setMensaje(mensaje)
            
        }
        
        if (!isNaN(withdrawValue) && withdrawValue > 0 && balance - withdrawValue >= 0) {
            setBalance(prevBalance => prevBalance - withdrawValue);
            Mensaje('¡Retiro exitoso!')
            setTimeout(() => setStatus(false),2000)
            setTimeout(() => setMensaje(''),2000)
            addTrasaction({tipo: 'Retiro', monto: withdrawValue, balance: balance - withdrawValue})
        }else if(withdrawValue.toString().includes('-')){
            Mensaje('El valor no puede ser negativo')
            setStatus(false)
            setTimeout(() => setStatus(false),2000)
            setTimeout(() => setMensaje(''),2000)
        }else if(balance - withdrawValue < 0){
            Mensaje('No puedes retirar más de lo que tienes')
            setStatus(false)
            setTimeout(() => setStatus(false),2000)
            setTimeout(() => setMensaje(''),2000)
        }
    }

    return (
        
            <div className="contenedor-deposit">
                <FormCard
                    bgcolor = 'primary'
                    header = 'Withdraw'
                    body = {
                        <>
                            <div>
                                <h1>David Villamil</h1> <br />
                                <div className="contenedor-balance">
                                    <h6>Tu balance</h6>
                                    <h3>US $ {balance}</h3>
                                </div>
                                <h3>Withdraw</h3>
                                <h6>Escoge una suma</h6>
                                
                                <input type="number" value={withdrawAmount} onChange={handleDeposit}/>
                                <button className = 'btn'onClick={handleClick} disabled = {!withdrawAmount}style={{backgroundColor: '#dd3f51 ', color: 'white', marginTop: '10px'}}>Withdraw</button>
                                
                            </div>
                            {Status ? (
                                <h5 className="mensaje-retiro-exitoso">{mensaje}</h5>
                            ):(
                                <h5 className="mensaje-de-negacion">{mensaje}</h5>
                            )}
                            
                        </>
                    }
                >

                </FormCard>
            </div>
        
    )
}

export {Withdraw}