import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";



import '../Navbar.css'
import { Popup } from "../popups/Loginpopup";

const Navbar = () => {

    const [showPopUpHome,setShowPopUpHome] = useState(false)
    const [showPopupLogin,setShowPopupLogin] = useState(false)
    const [showPopUpCreateAccount,setShowPopupCreateAccount] = useState(false)
    const [showPopUpDeposit,setShowPopUpDeposit] = useState(false)
    const [showPopUpWithdraw, setShowPopUpWithdraw] = useState(false)
    const [showPopUpAlldata, setShowPopUpAlldata] = useState(false)
    const [timer,setTimer] = useState(null)


    
    function mostrarPopup(setShowPopUp) {
        setShowPopUp(true);
    }

    function ocultarPopup(setShowPopUp) {
        clearTimeout(timer);
        setShowPopUp(false);
    }
    
    function mouseEnElemento(setShowPopUp) {
        const nuevoTimer = setTimeout(() => mostrarPopup(setShowPopUp), 3000);
        setTimer(nuevoTimer);
    }
    
    function mouseFueraElemento(setShowPopUp) {
        ocultarPopup(setShowPopUp);
    }

    return (
        <>
            <nav className = "navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div> 
                        <NavLink to={'/'} className="BadBank-title">
                            <div className="navbar-brand">BadBank</div>
                        </NavLink>
                    </div>
                    
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            
                            <NavLink to={'/home'} className="NavLink-navbar">
                                <div className="nav-NavLink" aria-current="page" onMouseOver={() => mouseEnElemento(setShowPopUpHome)} onMouseOut={() => mouseFueraElemento(setShowPopUpHome)}>Home</div>
                                {showPopUpHome && (
                                    <div className="contenedor-hermano">here you can go to the bank's home page</div> 
                                )}
                            </NavLink>

                            <NavLink to={'/login'} className="NavLink-navbar">
                                <div className="nav-NavLink" aria-current="page" onMouseOver={()=> mouseEnElemento(setShowPopupLogin)} onMouseOut={()=> mouseFueraElemento(setShowPopupLogin)}>login</div>
                                {showPopupLogin && (
                                    <div className="contenedor-hermano">here you can login into your account</div> 
                                )}
                            </NavLink>
                                
                            <NavLink to={'/createaccount'} className="NavLink-navbar">
                                <div className="nav-NavLink" onMouseOver={() => mouseEnElemento(setShowPopupCreateAccount)} onMouseOut={() => mouseFueraElemento(setShowPopupCreateAccount)}>Create Account</div> 
                                {showPopUpCreateAccount && (
                                    <div className="contenedor-hermano">Here you can create a new checking account and start enjoing our really bad service</div> 
                                )}       
                            </NavLink>
                            
                            <NavLink to={'/deposit'} className="NavLink-navbar">
                                <div className="nav-NavLink" onMouseOver={() => mouseEnElemento(setShowPopUpDeposit)} onMouseOut={() => mouseFueraElemento(setShowPopUpDeposit)}>Deposit</div>
                                {showPopUpDeposit && (
                                    <div className="contenedor-hermano">Here you can deposit money into your checkings account</div> 
                                )}   
                            </NavLink>
                            
                            
                            <NavLink to={'/withdraw'} className="NavLink-navbar">
                                <div className="nav-NavLink" onMouseOver={() => mouseEnElemento(setShowPopUpWithdraw)} onMouseOut={() => mouseFueraElemento(setShowPopUpWithdraw)}>Withdraw</div>
                                {showPopUpWithdraw && (
                                    <div className="contenedor-hermano">Here you can make withdrawals from you checkings account</div> 
                                )}  
                            </NavLink>
                            
                            
                            <NavLink to={'/alldata'} className="NavLink-navbar">
                                <div className="nav-NavLink" onMouseOver={() => mouseEnElemento(setShowPopUpAlldata)} onMouseOut={() => mouseFueraElemento(setShowPopUpAlldata)}>All Data</div>
                                {showPopUpAlldata && (
                                    <div className="contenedor-hermano">here you can track all you transactions</div> 
                                )} 
                            </NavLink>
                            

                        </div>
                    </div>
                
                    <div className="navbar-brand">Usuario</div>

                    
                </div>
                
            </nav>

            
        </>
      
    )
}

export {Navbar}