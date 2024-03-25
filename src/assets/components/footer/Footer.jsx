import React from 'react';
import "./Footer.css";
import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";
import { FaTelegram, FaInstagram  } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";


function Footer() {
  return (
    <div className='footer container'>
      <div className='footer_top'>
        
        <Link>
          <img src={logo} alt="" />
        </Link>


        <ul className='footer_list'>
          <li>
            <Link>Menyu</Link>
          </li>
          <li>
            <Link>Biz haqimizda</Link>
          </li>
          <li>
            <Link>Filiallar</Link>
          </li>
          <li>
            <Link>Kontaktlar</Link>
          </li>
        </ul>

        <div className='footer_media'>
          <span>
            <FaTelegram/>
            <a href="https://t.me/rt_blog" target="_blank" rel="noopener noreferrer">Telegram</a>
          </span>
          <span>
            <FaInstagram/>
            <a href="http://instagram.com/tokhirov1111/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </span>
          <span>
            <BsFillTelephoneFill/>
            <a href="tel:+998996389899">+998996389899</a>
          </span>
        </div>


      </div>
      <div className='footer_bottom'>
        <span> ©️ Oqtepa Lavash</span>
        <span>AZIZ ACADEMY</span>
      </div>
    </div>
  )
}

export default Footer