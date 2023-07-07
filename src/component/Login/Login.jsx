import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegImage from '../../RegImage.jpg'
import { useState } from 'react'
import axios from 'axios'
import joi from 'joi'
export default function Login({ saveUserData }) {
  let navigate = useNavigate();
  
  const [errorApi, setErrorApi] = useState('')
  const [errorValidation, setErrorValidation] = useState([])
  const [loding, setLoding] = useState(false)
  const [inputData, setInputData] = useState({

    email: '',
    password: '',
  })




  function getData(e) {

    let myUser = { ...inputData }
    myUser[e.target.name] = e.target.value
    setInputData(myUser)
  }

  async function sendDataApi() {

    let { data } = await axios.post('https://userapi-haj1.onrender.com/signin', inputData)

    if (data.message === 'success') {
      localStorage.setItem('userToken', data.token)
      saveUserData();
      navigate('')
      setLoding(false)
    }
    else {
      setErrorApi(data.message)
      setLoding(false)

    }
  }
  function validationLog() {
    let scheme = joi.object({

      email: joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
      password: joi.string().pattern(/^[A-Z][a-z0-9]{3,8}$/).required(),
    })
    return scheme.validate(inputData, { abortEarly: false })

  }

  function submitLog(e) {
    e.preventDefault();
    setLoding(true)
    let validate = validationLog();
    if (validate.error) {
      setErrorValidation(validate.error.details)
      setLoding(false)

    }
    else {
      sendDataApi();

    }
  }


  return <> <div className="container mt-5">
    <div className="test"> <div className="row">
      <div className="col-md-6 ">
        <img src={RegImage} alt="" className='w-100 h-100' />
      </div>
      <div className="col-md-6 pt-5 regpart ">

        <div className="text-center"><h3>Login to Game Over</h3>
        </div>
        <form onSubmit={submitLog} >


          <input onChange={getData} type="email" id='email' name='email' className='my-input form-control my-2 ' placeholder='EMAIL ADDRESS' />
          <div className='w-100 warning ' >{errorValidation.filter((error) => error.context.label === 'email')[0]?.message}</div>
          {errorApi ? <div className='w-100 warning ' >{errorApi}</div> : ''}


          <input onChange={getData} type="password" id='password' name='password' className='my-input form-control my-2 ' placeholder='PASSWORD' />
          <div className='w-100 warning ' >{errorValidation.filter((error) => error.context.label === 'password')[0] ? 'password must start with uppercase... ' : ''}</div>
          {errorApi ? <div className='w-100 warning ' >{errorApi}</div> : ''}


          <div className='bordary'>
            <button type='submit' className='btn btn-outline-primary border-0 w-100 text-light '>


              {loding ? <i className='fas fa-spinner fa-spin'></i> : 'Log in'}


            </button>

          </div>
          <div className='brdr w-75 my-3 mx-auto'></div>
        </form>
        <div onClick={() => { alert('ههه اعمل اكونت جديد') }} className='text-center' ><a className='text-primary' href="#">forget password?</a></div>
        <div className='text-center'>not a member yet ? <Link to='/Registration'>  <span className='text-primary '>create a account  </span> </Link> </div>
      </div>
    </div></div>


  </div>
  </>
}
