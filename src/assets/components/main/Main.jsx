import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./Main.css";
import { BiCategory } from "react-icons/bi";
import Footer from '../footer/Footer';



function Main() {
  return (
    <>
        <div className='mains container'>
          <h1>Menu</h1>
          <div className="mains_wrap">
            <div className="mains_catalog" >
              <div className='mains_catalog-header'>
                <BiCategory />
                <h3>Catalog</h3>
              </div>
              <div className='catalog_item'>
                <Link to="/" className="mains_catalog-single">
                  <img src="https://cc.oqtepalavash.uz/api/image/pc-9f1d8853-b30d-4b7d-bc54-8d1ff26d3f9e.png" alt="" />
                  <p>️ promo beneficial sets</p>
                </Link>
                <Link to="/lavash" className="mains_catalog-single">
                  <img src="https://cc.oqtepalavash.uz/api/image/pc-4ff5d9b9-1271-48fe-bf53-e82ee2d1432d.png" alt="" />
                  <p>️ Lavash</p>
                </Link>
                <Link className="mains_catalog-single">
                  <img src="	https://cc.oqtepalavash.uz/api/image/pc-550689a0-6ec7-4f5e-9dd6-2b84734f9bd6.png" alt="" />
                  <p>️ Burger va Hotdogs</p>
                </Link>
                <Link className="mains_catalog-single">
                  <img src="https://cc.oqtepalavash.uz/api/image/pc-6f2b4dff-2edf-46f0-8c81-c3b7bad5e993.png" alt="" />
                  <p>️ Pizza</p>
                </Link>
                <Link className="mains_catalog-single">
                  <img src="https://cc.oqtepalavash.uz/api/image/pc-00a18eb3-e579-4c10-a6bb-adc05361a044.png" alt="" />
                  <p>️ Salads</p>
                </Link>
                <Link className="mains_catalog-single">
                  <img src="	https://cc.oqtepalavash.uz/api/image/pc-1b85708e-d0c1-4c4f-aa1d-6d091af84c68.png" alt="" />
                  <p>️ Sendvich</p>
                </Link>
                <Link className="mains_catalog-single">
                  <img src="https://cc.oqtepalavash.uz/api/image/pc-b9649a6f-159c-4734-9e42-6d9be4a787e5.png" alt="" />
                  <p>️ Crypsy chickens</p>
                </Link>
                <Link className="mains_catalog-single">
                  <img src="	https://cc.oqtepalavash.uz/api/image/pc-a4f463d1-fa23-4cbb-b046-c5ccf556bcf7.png" alt="" />
                  <p>️ Donar</p>
                </Link>
                <Link className="mains_catalog-single">
                  <img src="https://cc.oqtepalavash.uz/api/image/pc-1b85708e-d0c1-4c4f-aa1d-6d091af84c68.png" alt="" />
                  <p>️ Snacks</p>
                </Link>
                <Link className="mains_catalog-single">
                  <img src="	https://cc.oqtepalavash.uz/api/image/pc-f157087d-03bf-434b-81d6-9fdc2ae24720.png" alt="" />
                  <p>️ Souces</p>
                </Link>
                <Link className="mains_catalog-single">
                  <img src="https://cc.oqtepalavash.uz/api/image/pc-7c117f04-38ab-4664-a4a5-ebe903553cf0.png" alt="" />
                  <p>️ Drinks </p>
                </Link>
              
              </div>
            </div>
            <div className='main_prodcuts'>
                <Outlet/>
            </div>
          </div>
        </div>
        <Footer/>

    </>
  )
}

export default Main