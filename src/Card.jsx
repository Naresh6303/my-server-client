import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TiMessage } from "react-icons/ti";
import { MdMarkEmailRead } from "react-icons/md";

const EmailList = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const response = await axios.get('http://localhost:1111/card');
                setEmails(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchEmails();
    }, []);

    return (
        <div>
            <h3>Email List</h3>
            <div >
                {emails.map((email) => (
                    <div style={{border:'1px black solid' , margin:'10px',borderRadius:'5px' , textAlign:'center'}} key={email._id}>
                        <p style={{color:'green' , fontWeight:'bold' ,border:'0px black solid' , borderRadius:'5px' ,backgroundColor:'InfoText' , padding:'20px 5px'}}>
                          <div style={{color:'red'}}><MdMarkEmailRead style={{ fontSize: '24px',color:'blue' }}/> From:</div>
                           {email.email}</p>
                        <div style={{border:'0px black solid',backgroundColor:'ButtonShadow'}}>
                        <p>
                          <div style={{fontWeight:'bolder'}}>Subject:</div>
                           {email.subject}</p>
                        <p>
                          <div style={{fontWeight:'bolder'}}><TiMessage fontSize='24px'/> Message:</div>
                           {email.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmailList;
