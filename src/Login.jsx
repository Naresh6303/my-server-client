import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [email , setEmail] = useState()
    const [pswd , setPswd] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:1111/login' , {email,pswd})
        .then(result =>{
            console.log(result)
            if(result.data === 'Success'){
                navigate('/mail')
            }
            else{
                alert('Invalid credentials')
            }

           
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <>
        <div style={{marginTop:'10px' , }}>
            <h4>Login</h4>
         </div>

        <form action="" onSubmit={handleSubmit}>
        <div>
                <div>
                    <label htmlFor="">Email :</label>
                </div>
                <input type="text" name='email' onChange={(e)=>setEmail(e.target.value)} required placeholder='Enter Email address'  />
            </div>
            <div>
                <div>
                    <label htmlFor="">Password :</label>
                </div>
                <input type="password" name='pswd' onChange={(e)=>setPswd(e.target.value)} required placeholder='Enter Password'  />
            </div>

            <div>
                <button style={{marginTop:'10px'}}>Login</button>
            </div>

            
        </form>
    </>
  )
}

export default Login