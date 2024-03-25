import React from 'react';
import "./SingleBranch.css";
import { FaLocationDot } from "react-icons/fa6";

function SingleBranch() {
  return (
    <div className='single_branch'>
        <div>
            <div className='single_branch-location'>
                <div>
                    <FaLocationDot/>
                </div>
                <p>OLOSS Test</p>
            </div>
            <span>Restaran 03:45 da yopiladi. </span>
        </div>
        <div>
            <div>
                <span>Ish vaqti:</span>
                <h3>Dush- Yak : 10:00 - 03:45</h3>
            </div>
            <div>
                <span>Telefon:</span>
                <h3>+998996389899</h3>
            </div>
        </div>
    </div>
  )
}

export default SingleBranch