import React, { useRef} from 'react';
import styles from "../styles";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_bxtdavu',
      'template_hx457ks',
      form.current,
      'bjorKDNmOW_ab-Djx'
      )
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent.")
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className={`${styles.flexStart} bg-background`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
          <h1 className={`${styles.heading2}`}>Contact Us</h1>
          <p className={`${styles.paragraph} md:max-w-[70%] my-[30px]`}>If you have any questions or would just like to get in touch fill out the form below or call us on 01969 667017</p>
          <form ref={form} onSubmit={sendEmail} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-[25px]'>
            <label className='block text-gray-700 text-sm font-bold mb-2 mt-2'>Name</label>
            <input required type="text" name="user_name" className='bg-background shadow appearance-none border rounded w-full py-2 px-3 text-brown leading-tight focus:outline-none focus:shadow-outline' />
            <label className='block text-gray-700 text-sm font-bold mb-2 mt-2'>Email</label>
            <input required type="email" name="user_email" className='bg-background shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
            <label className='block text-gray-700 text-sm font-bold mb-2 mt-2'>Contact Number</label>
            <input required type="tel" name="user_number" className='bg-background shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
            <label className='block text-gray-700 text-sm font-bold mb-2 mt-2'>Message</label>
            <textarea required name="message" className='bg-background shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-[200px] ' />
            <button type="submit" value="send" className={`uppercase bg-blue2 hover:bg-blue-700 text-white hover:text-accent font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2`}>Submit</button>
          </form>
          </div>
          <div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact