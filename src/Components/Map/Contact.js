import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import React, { Component, useRef, useState } from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './Contact.module.scss';
import emailjs from 'emailjs-com';



const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_3sbxv9c', 'template_we5u8tq', formRef.current, 'user_M2MFgIL69jd3ISvmSUMtR')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          setTimeout(() => {
            setDone(false)
          }, 3000);

      }, (error) => {
          console.log(error.text);

      });
  }

  return (
    <form className={styles.container} ref={formRef} onSubmit={handleSubmit}>
      <header>Contact me!</header>
      <input className={styles.name} name="user_name" placeholder='name'></input>
      <input className={styles.email} name="user_email" placeholder='e-mail'></input>
      <textarea rows='7' className={styles.message} name="message" placeholder='message'></textarea>
      <button className={styles.sendButton}>Send!</button>
      {done && <div className={styles.thnxMsg}>Thank you!</div>}

    </form>
   )
}

export default Contact;