import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserDetails } from '../../shared/hooks'
import PropTypes from 'prop-types'

const NavLogo = ({ onClinckHandler }) => {
    return (
        <div className='nav-logo-container' onClick={onClinckHandler}>
            <img 
                src="https://i.ibb.co/9h0ZZfj/Escudo-Transparente.png" 
                alt="Logo de Kinal" 
                className='nav-logo'
                width="100%"
                height="100%"
            />
        </div>
    )
}

NavLogo.propTypes = {
    onClinckHandler: PropTypes.func.isRequired
}

const NavButton = ( {text, onClinckHandler }) => {
    return(
        <span className='nav-button' onClick={onClinckHandler}>
            {text}
        </span>
    )
}

NavButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClinckHandler: PropTypes.func.isRequired
}

export const Navbar = () => {
    const { isLogged, logout } = useUserDetails()
    const navigate = useNavigate()
    const [navVisible, setNavVisible ] = useState(false)

    const handleNavigateToAuthPage = () => navigate("/auth")
    const handleNavigateToSettings = () => navigate("/settings")
    const handleNavigateToChannels = () => navigate("/channels")
    const handleLogout = () => logout()
    const toggleNavVisibility = () => setNavVisible(!navVisible)

  return (
    <div className='nav-container'>
        <NavLogo onClinckHandler={toggleNavVisibility}/>
        <div className={`nav-buttons-container ${navVisible ? "visible" : ""}`}>
            <NavButton
                text="Inicio"
                onClinckHandler={handleNavigateToChannels}
            />
            {!isLogged ? (
                <NavButton
                    text="Inciar Sesión"
                    onClinckHandler={handleNavigateToAuthPage}
                />
                ):(
                    <>
                        <NavButton
                        text="Mi Cuenta"
                        onClinckHandler={handleNavigateToSettings}
                        />
                        <NavButton text="Cerrar Sesión" onClinckHandler={handleLogout}/>
                    </>
                )
            }
        </div>
    </div>
  )
}
