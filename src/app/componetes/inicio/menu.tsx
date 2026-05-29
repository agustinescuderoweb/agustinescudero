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
    <nav className={styles.contenedor} aria-label="Menú principal de navegación">
      <div className={styles.header}>
        {!isOpen && (
          <div className={styles.logoContainer}>
             <h1 className="sr-only">Agustín Escudero Web</h1> 
            <Link href="/"><Image className={styles.logo} src={agus} width={100} alt="Logo de Agustín Escudero, desarrollador web en Mendoza" /></Link>
          </div>
        )}
        <button className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ''}`} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`${styles.items} ${isOpen ? styles.show : ''}`}>
        <Link href="/" className="text-black" title="Ir al inicio">Inicio</Link>
        <div className={styles.dropdown}>
  <div
    className={styles.dropdownToggle}
    onClick={toggleDropdown}
    style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
  >
    <Link
      href="/servicios"
      className="!no-underline"
      style={{ color: 'rgba(240,237,232,0.7)' }}
      title="Ver servicios"
    >
      Servicios Web
    </Link>

    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20px',
        height: '20px',
        borderRadius: '6px',
        background: 'rgba(163, 230, 53, 0.12)',
        border: '0.5px solid rgba(163, 230, 53, 0.3)',
        flexShrink: 0,
        transition: 'transform 0.2s ease',
        transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#a3e635"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </span>
  </div>

  <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownVisible : ''}`}>
    <Link href="/servicios/landing" className="!no-underline text-white/70 hover:text-black hover:bg-lime-400 transition-colors duration-200 px-4 py-2 block">
      Landing Page
    </Link>
    <Link href="/servicios/sitios" className="!no-underline text-white/70 hover:text-black hover:bg-lime-400 transition-colors duration-200 px-4 py-2 block">
      Sitios Web
    </Link>
    <Link href="/servicios/ecommerce" className="!no-underline text-white/70 hover:text-black hover:bg-lime-400 transition-colors duration-200 px-4 py-2 block">
      Ecommerce
    </Link>
  </div>
</div>
        <Link href="/ia" className="text-black !no-underline" title="Inteligencia Artificial">Inteligencia Artificial</Link>
        <Link href="/portafolio" className="text-black !no-underline" title="Portafolio">Portafolio</Link>
        <Link href="/blog" className="text-black !no-underline" title="Blog">Blog</Link>
        <Link href="/contactos" className="text-black !no-underline" title="Formulario de contacto">Contactos</Link>
      </div>
    </nav>
  );
}

export default Menu;
