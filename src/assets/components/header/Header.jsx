import React from 'react';
import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../images/logo.svg";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";

function Header() {
  return (
    <>
    {/* header */}
      <header className='header container'>
        {/* logo tomon */}
          <Link to="/" className='header_link'>
              <img src={logo} alt="" className='header_link-img' />
          </Link>
          {/* o'ng tomon */}
          <div className='header_right'>
            {/* tepa qismi */}
            <div className='header_right-top'>
              {/* list */}
                <ul className='header_right-top_list'>
                  <li>
                    <Link to="/" >Menyu</Link>
                  </li>
                  <li>
                    <Link to="/about" >Biz haqimizda</Link>
                  </li>
                  <li>
                    <Link to="/branches" >Filyallar</Link>
                  </li>
                  <li>
                    <Link to="/contacts" >Kontaktlar</Link>
                  </li>
                </ul>
              {/* lokatsiya */}
              <div className='header_location'>
                <span>
                  <FaLocationDot className='location_icon' />
                </span>
                <div>
                  <p className='header_location-text'>Yetkazib berish yoki olib ...</p>
                  <span className='header_location-span'>Qabul qilish turini tanlang</span>
                </div>
              </div>
              {/* hudud */}
              <div className='header_region'>
                <span>
                  <AiOutlineGlobal className='location_icon' /> 
                </span> 
                <div>
                  <p className='header_location-text'>Hudud</p>
                  <select className='header_location-span region_select'>
                      <option value="">Tashkent</option>
                      <option value="">Andijon</option>
                      <option value="">Farg'ona</option>
                      <option value="">Namangan</option>
                      <option value="">Nukus</option>
                      <option value="">Jizzax</option>
                      <option value="">Samarqand</option>
                  </select>
                </div>
              </div>
              {/* til uchun */}
              <div className='header_lang'>
                <span>
                  <img className='flag' src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg" alt="" />
                </span>
                <select className='header_lang-select' name="" id="">
                  <option value="uz">Uz</option>
                  <option value="ru">Ru</option>
                  <option value="en">En</option>
                </select>
              </div>
              {/* button */}
              <button className='header_btn'>Kirish</button>
            </div>
            {/* pastgi qisim */}
            <form className='header_right-bottom'>
               <div className='header_right-bottom_search'>
               <CiSearch />
               <input type="text" name="" id="" placeholder='Qidirish'/>
               </div>
                <button>Buyurtma berish</button>
            </form>
          </div>
      </header>
      {/* headerdan keyingi menu */}
      <Outlet  />
    
    </>
  )
}

export default Header;