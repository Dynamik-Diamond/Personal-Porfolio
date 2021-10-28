import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <main className='contact-page contact-section'>
      <article className='container'>
        <h2 className='contact-title'>
          Contact.
        </h2>
      </article>
      <div className='form-control'>
        <form
          action=''
          method='post'
          className='form container'
        >
          <div className='input-container'>
            <div className='col-1'>
              <div className='form-row'>
                <label
                  htmlFor='name'
                  className='form-label'
                >
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='form-input'
                />
              </div>
              <div className='form-row'>
                <label
                  htmlFor='email'
                  className='form-label'
                >
                  Email
                </label>
                <input
                  type='text'
                  name='email'
                  id='email'
                  className='form-input'
                />
              </div>
            </div>
            <div className='col-2'>
              <div className='form-row'>
                <label
                  htmlFor='message'
                  className='form-label'
                >
                  Message
                </label>
                <textarea
                  name='message'
                  id='message'
                  className='form-textarea'
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type='submit'
            className='form-btn'
          >
            Send email
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
