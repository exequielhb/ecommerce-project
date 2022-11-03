import React from 'react'
import {BsFillBagCheckFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { surprise } from '../../utils/utils'

export const Success = () => {

    useEffect(() => {
        surprise()
    }, [])
    
  return <>
    <div className='succes-wrapper'>
        <div className='succes'>
            <h1>Purchase made successfully</h1>
            <BsFillBagCheckFill style={{fontSize: "3rem"}} className='success-icon' />
            <p>Thanks for your purchase 🥰</p>
            <p>You will receive an email with the details of your purchase shortly.</p>
            <Link to="/"><button className='btn'>Continue shopping</button></Link>
        </div>
    </div>
    </>
}
