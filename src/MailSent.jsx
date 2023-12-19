import React, { useState } from 'react'

const MailSent = ({MailSent}) => {
    const [state , setState] = useState(MailSent)
  return (
    <div>
        {state.map((data)=>{
            return(
                <>
                    <div>{data.email}</div>
                </>
            )
        })}
    </div>
  )
}

export default MailSent