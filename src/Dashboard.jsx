import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [mailData, setMailData] = useState({
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setMailData({ ...mailData, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:1111/mail', mailData)
            .then(() => {
                alert(`Mail sent successfully from ${mailData.email}`)
                navigate('/card')
            })
            .catch(()=>{
                console.log('err')
            })
    }
    return (
        <>
            <h3>Email Form</h3>

            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label>Email :</label>
                    <div>
                        <input type="email" name='email' onChange={handleChange} placeholder='Enter Email address' />
                    </div>
                </div>

                <div>
                    <label>Subject :</label>
                    <div>
                        <input type="text" name='subject' onChange={handleChange} placeholder='Enter Your subject' />
                    </div>
                </div>

                <div>
                    <label>Message :</label>
                    <div>
                        <textarea type="text" onChange={handleChange} name='message' />
                    </div>
                </div>
                <div>
                    <button>Sent</button>
                </div>
            </form>
            <mailData mailSent = {mailData}/>
        </>
    )
}

export default Dashboard