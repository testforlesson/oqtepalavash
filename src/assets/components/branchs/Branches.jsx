import React from 'react'
import Footer from "../footer/Footer";
import "./Branch.css";
import { Link } from 'react-router-dom';
import SingleBranch from './SingleBranch';


function Branches() {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <>
      <div className='branch container'>
        <div className='branch_heading'>
         <div className='branch_heading-top'>
          <h2>Filyallar</h2>
            <div className='branch_btn'>
              <Link>Ro'yxat</Link>
              <Link>Xarita</Link>
            </div>
         </div>
          <div className='branch_screen'>
            <div className='branch_s'>
              {
                arr.map((item) => {
                  return <SingleBranch />
                })
              }
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Branches