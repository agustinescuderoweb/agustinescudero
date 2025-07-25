'use client'
import Link from 'next/link'
import Image from 'next/image'
import agus from '../../../../public/logo.png'
import styles from '../../componetes/inicio/menu.module.css'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen === false) {
      setIsDropdownOpen(false); // Cierra el dropdown si se cierra el menú principal
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <div className={styles.contenedor}>
      <div className={styles.header}>
        {!isOpen && (
          <div className={styles.logoContainer}>
            <a href="/"><Image className={styles.logo} src={agus} width={100} alt="Logo" /></a>
          </div>
        )}
        <button className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ''}`} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`${styles.items} ${isOpen ? styles.show : ''}`}>
        <Link href="/" className="text-black">Inicio</Link>
        <div className={styles.dropdown}>
          <span className={styles.dropdownToggle} onClick={toggleDropdown}><Link href="/servicios" className="text-black !no-underline">Servicios</Link></span>
              <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownVisible : ''}`}>
                <Link href="/servicios/landing" className="!no-underline"><h1 className="text-white sm:text-black">Landing Page</h1></Link>
                <Link href="/servicios/sitios" className="!no-underline"><h1  className="text-white sm:text-black">Sitios Web</h1></Link>
                <Link href="/servicios/ecommerce" className="!no-underline"><h1  className="text-white sm:text-black">Ecommerce</h1></Link>
            </div>
        </div>
        <Link href="/quiensoy" className="text-black !no-underline">¿Quién Soy?</Link>
        <Link href="/contactos" className="text-black !no-underline">Contactos</Link>
      </div>
    </div>
  );
}

export default Menu;
