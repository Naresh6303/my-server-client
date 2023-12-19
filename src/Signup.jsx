import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

    const [user , setUser] = useState({
        name:'',
        email:'',
        pswd:'',
        conpswd:''
    })

    const navigate = useNavigate()

    const handleChange = (e)=>{
        setUser({...user , [e.target.name] : e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:1111/register' , user)
        .then(result => {
            console.log(result)
            
            if(user.pswd === user.conpswd){
                alert('Registered successfully')
                navigate('/login')
            }
            else{
                alert('password is not matched')
            }
        })
        .catch(()=>{
            console.log('error')
        })

        
    }
  return (
    <>
         <div style={{marginTop:'10px' , }}>
            <h4>Signup</h4>
         </div>

         <form action="" onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="">Full Name :</label>
                </div>
                <input type="text" name='name' onChange={handleChange} required placeholder='Enter fullname'  />
            </div>
            <div>
                <div>
                    <label htmlFor="">Email :</label>
                </div>
                <input type="email" name='email' onChange={handleChange} required placeholder='Enter Email address'  />
            </div>
            <div>
                <div>
                    <label htmlFor="">Password :</label>
                </div>
                <input type="password" name='pswd' onChange={handleChange} required placeholder='Password'  />
            </div>
            <div>
                <div>
                    <label htmlFor="">Confirm password :</label>
                </div>
                <input type="password" name='conpswd' onChange={handleChange} required placeholder='Confirm password'  />
            </div>
            <div>
                <button style={{marginTop:'10px'}}>Register</button>
            </div>

            <p>Already have an account</p>
            <Link to='/login'> 
                <button>Login</button>
            </Link>
         </form>
    </>
  )
}

export default Signup