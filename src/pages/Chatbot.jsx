import React from 'react'
import { Container, ChatBot } from '../components'
function Chatbot() {
    return (
        <div className='py-8'>
          <h1
  className="text-2xl mb-2 font-bold text-black p-2"
  style={{
    fontFamily: 'Cursive, "Brush Script MT", sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //margin: 0, 
  }}
>
  Ask any space facts.
</h1>
            <Container>
            <ChatBot/>
            </Container>
        </div>
      )
}

export default Chatbot