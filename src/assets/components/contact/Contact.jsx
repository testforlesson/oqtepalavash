import React from 'react';
import "./Contact.css";
import Footer from "../footer/Footer";


function Contact() {
  return (
    <>
      <div className='contact container'>
        <h2>Kontaktlar</h2>
        <div className='contact_banner'>
          <img  src="	https://oqtepalavash.uz/assets/images/contacts_img.jpg" alt="" />
          <div>
            <img src="	https://oqtepalavash.uz/assets/images/qr_oqtepa_contact.png" alt="" />
            <p>Izoh qoldiring yoki</p>
            <p>Telegramdan yozing!</p>
            <a href="http://https://t.me/rt_blog">@Oqtepalavash_MT</a>
          </div>
        </div>
        <div className='contact_center'>
          <p>Aloqa markazi</p>
          <a href="tel:+998996389899">+998996389899</a>
        </div>
        <div className='contact_center'>
          <p>Telegram bot</p>
          <a href="http://t.me/@Oqtepalavash_MT" target="_blank" rel="noopener noreferrer">@Oqtepalavash_MT</a>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact