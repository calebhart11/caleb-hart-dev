import React, { useState,useRef } from 'react';
import { FormContainer } from '../styled-components/ContactMe';
import emailjs from 'emailjs-com';
// import  send  from 'emailjs-com';

export function EmailForm() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      subject,
      message,
    };
    console.log(data);
    // send data to email endpoint
    function SendEmail() {
      
     }
     const templateParams = {
      email_id: document.getElementById({email_id}),
      message: document.getElementById({message})
    }
     emailjs.send('service_fx40txf', 'template_atav6t7',templateParams, 'KkpocgmcZyh4NGqWp')
  };

  return (
    <>
    <h1>Contact Me!</h1>
    <FormContainer>
      <h2>caleb_hart11@yahoo.com</h2>
      <div id="formlink">
      {/* <h2>Get In Touch!</h2> */}
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email address:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <label htmlFor="message">Message:</label>
      <input
        type="text"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input className="send" type="submit" value="Send"></input>
      </form>
      </div>
      </FormContainer>
      </>
  )
  }
  export default EmailForm
      
     export function SendEmail() {
      const params = {
        message: document.getElementById("message").value,
        email_id: document.getElementById("email_id").value
      }
      emailjs.SendMail('service_fx40txf', 'template_atav6t7', form.current ,params, 'PvGoFfU2WomX7gNcU')
     }




// export const ContactMe = () => {
//   const form = useRef();

//   const SendMail = (e) => {
//     e.preventDefault();

//     emailjs.send('service_0ca3xem', 'template_atav6t7', form.current,   'PvGoFfU2WomX7gNcU')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <>
//     <FormContainer>
//       <form ref={form} onSubmit={SendMail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//     </FormContainer>
//     </>
//   );
// };