import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/style/style.scss";

export default function Project() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tjwot2q', 'template_0n9kn9p', form.current, 'BWW0kDBUVCKGem7zk')
      .then((result) => {
          console.log(result.text);
          alert("Շնորհակալություն ինձ հետ կապ հաստատելու համար։ Ձեր հաղորդագրությանը կարձագանքեմ հնարավորինս արագ");
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <>
        <Header />
        <div className="container">
            <div className="section-title">
                <div className="contact-bg">
                    <h1>Կապ և ռեզյումե</h1>
                </div>
            </div>
            <div className="contact-form">
                <div className="send-message">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder="Անուն" />
                        <input type="email" name="user_email" placeholder="Էլ․հասցե" />
                        <textarea name="message" placeholder="Հաղորդագրություն" />
                        <input type="submit" value="Ուղարկել" />
                    </form>
                </div>
                <div className="resume">
                    <a href="https://drive.google.com/file/d/10eUlPq3uMgFkAYOS6_j1phCDCahAG9IE/view" target="_blank">Տեսնել ռեզյումեն</a>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}