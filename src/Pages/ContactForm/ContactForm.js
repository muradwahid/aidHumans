import React from 'react';

const ContactForm = () => {
    return (
        <div className='bg-red-300 mx-auto w-2/4'>
            <h1>Contact Us</h1>
            <form>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default ContactForm;