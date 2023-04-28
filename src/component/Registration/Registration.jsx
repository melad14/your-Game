import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegImage from '../../RegImage.jpg'
import { useState } from 'react'
import axios from 'axios'
import joi from 'joi'


export default function Registration() {

  let navigate = useNavigate();

  const [errorApi, setErrorApi] = useState('')
  const [errorValidation, setErrorValidation] = useState([])
  const [loding, setLoding] = useState(false)

  const [inputData, setInputData] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    email: '',
    password: '',
  })




  function getData(e) {

    let myUser = { ...inputData }
    myUser[e.target.name] = e.target.value
    setInputData(myUser)
  }

  async function sendDataApi() {

    let { data } = await axios.post('https://sticky-note-fe.vercel.app/signup', inputData)

    if (data.message === 'success') {
      navigate('/Login')
      setLoding(false)
    }
    else {
      setErrorApi(data.message)
      setLoding(false)

    }
  }
  function validation() {
    let scheme = joi.object({
      first_name: joi.string().min(3).max(8).required(),
      last_name: joi.string().min(3).max(8).required(),
      age: joi.number().min(16).max(80).required(),
      email: joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
      password: joi.string().pattern(/^[A-Z][a-z]{3,8}$/).required(),
    })
    return scheme.validate(inputData, { abortEarly: false })

  }

  function submitReg(e) {
    e.preventDefault();
    setLoding(true)
    let validate = validation();
    if (validate.error) {
      setErrorValidation(validate.error.details)
      setLoding(false)

    }
    else {
      sendDataApi();

    }

  }


  return <>



    <div className="container mt-5">
      <div className="test"> <div className="row">
        <div className="col-md-6 ">
          <img src={RegImage} alt="" className='w-100 h-100' />
        </div>
        <div className="col-md-6 pt-5 regpart ">
          <div className="text-center"> <h2>Create My Account!</h2></div>
          <form onSubmit={submitReg} >
            <div className="row">
              {errorApi ? <p className='text-danger'>{errorApi}</p> : ''}
              <div className="col-md-6">
                <input onChange={getData} type="text" id='first_name' name='first_name' className='my-input form-control my-2 ' placeholder='FIRST NAME :' />
                <div className='w-100 warning ' >{errorValidation.filter((error) => error.context.label === 'first_name')[0]?.message}
                </div>

              </div>
              <div className="col-md-6">
                <input onChange={getData} type="text" id='last_name' name='last_name' className='my-input form-control my-2 ' placeholder='LAST NAME' />
                <div className='w-100 warning ' >{errorValidation.filter((error) => error.context.label === 'last_name')[0]?.message}</div>

              </div>
            </div>

            <input onChange={getData} type="number" id='age' name='age' className='my-input form-control my-2 ' placeholder='Age' />
            <div className='w-100 warning ' >{errorValidation.filter((error) => error.context.label === 'age')[0]?.message}</div>


            <input onChange={getData} type="email" id='email' name='email' className='my-input form-control my-2 ' placeholder='EMAIL ADDRESS' />
            <div className='w-100 warning ' >{errorValidation.filter((error) => error.context.label === 'email')[0]?.message}</div>


            <input onChange={getData} type="password" id='password' name='password' className='my-input form-control my-2 ' placeholder='PASSWORD' />
            <div className='w-100 warning ' >{errorValidation.filter((error) => error.context.label === 'password')[0] ? 'password must start with uppercase... ' : ''}</div>


            <div className='bordary'>
              <button type='submit' className='btn btn-outline-primary border-0 w-100 text-light '>


                {loding ? <i className='fas fa-spinner fa-spin'></i> : 'Create Account'}


              </button>

            </div>
            <div className='brdr w-100 my-2'></div>
          </form>
          <div className='text-center'>already registered <Link to='/login'>  <span className='text-primary '>login  </span> </Link> </div>
        </div>
      </div></div>


    </div>
  </>
}
