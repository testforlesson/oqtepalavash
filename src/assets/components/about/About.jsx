import React from 'react'
import "./About.css";
import Footer from "../footer/Footer";



function About() {
  return (
    <>
      <div className='about container'>
        <h2> Kompaniya haqida ma'lumot </h2>
        <div>
          <img src="	https://oqtepalavash.uz/assets/images/about.jpg" alt="Oqtepa lavash" />
          <p>“Oqtepa lavash” fastfud kafelar tarmog‘i
            O‘zbekistonning jadal rivojlanayotgan bozorida
            faoliyat yuritib, aholi o‘rtasida arzon tez
            tayyorlanadigan taomlarga
            bo‘lgan talabni qondirishga qaratilgan.
            <br />
            <br />

            Menyuga pita nonining yanada muvozanatli
            variantlarini qo'shishdan tortib, faqat
            buyurtma qilingan holda tayyorlanadigan
            yangi cheeseburgerlarni taqdim etishgacha
            bo'lgan taomimizga ishtiyoqmandmiz. Biz har
            doim mijozlarimizga va oziq-ovqatimizga sodiqligimizni
            ko'rsatish yo'llarini topamiz.
            <br />
            <br />
            Bizning hikoyamiz 12 yildan ko'proq vaqt oldin,
            ikki aka-uka o'zlarining eski orzularini ro'yobga
            chiqarish, ovqatlanish sohasida, ya'ni lavash
            pishirishda eng yaxshi bo'lishni boshlaganlarida
            boshlangan. Xullas, 2010 yilda Oqtepa lavashining
            birinchi filiali paydo bo‘ldi. Bugungi kunga qadar
            O‘zbekiston bo‘ylab 55 dan ortiq tez ovqatlanish
            kafelari ochilib,
            1500 dan ortiq xodim ish bilan ta’minlangan.
            <br />
            <br />
            Bosh ofisimiz manzili: Toshkent sh., Olmazor tumani, Qorasaroy ko'chasi 2a
          </p>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default About