import React from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';

function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        const templateParams = {
            name: data.name,
            email: data.email,
            message: data.message,

        };

        emailjs
            .send('service_g2bbhd7', 'template_5cixpoa', templateParams, {
                publicKey: 'UKZfRNKfqzeEfmM90',
            })
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (err) => {
                    console.log('FAILED...', err);
                },
            );
    }



    const emailRegexPattern = {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'Invalid email address'
    };



    return (
                <form onSubmit={handleSubmit(onSubmit)} className='mx-auto max-w-screen-sm' noValidate>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='mb-4 mx-auto'>
                            <label htmlFor='name' className='block text-lg font-bold'>Name</label>
                            <input type='text' id='name' name='name' placeholder='Enter your name'
                                {...register('name', {
                                    required: 'Please enter a name',
                                    maxLength: { value: 20, message: 'Name is too long' },
                                    minLength: { value: 2, message: 'Name is too short' },

                                })} className=' text-black mt-1 block shadow-sm text-lg border-gray-300 rounded-md' />
                            {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                        </div>

                        <div className='mb-4 mx-auto'>
                            <label htmlFor='email' className='block text-lg font-bold '>Email</label>
                            <input type='email' id='email' name='email' placeholder='Enter your email'
                                {...register('email', {
                                    required: 'Please enter an email',
                                    pattern: emailRegexPattern,
                                })}
                                className='mt-1 text-black  block  shadow-sm text-lg border-gray-300 rounded-md' />
                            {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                        </div>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='message' className='block text-lg font-bold '>Message</label>
                        <textarea id='message' name='message' rows={4} placeholder='Enter your message'
                            {...register('message', {
                                required: 'Please enter a message',
                                minLength: { value: 10, message: 'Message is too short' },
                                maxLength: { value: 500, message: 'Message is too long' }

                            })}
                            className='mt-1 text-black block w-full shadow-sm text-lg border-gray-300 rounded-md' />
                        {errors.message && <span className='text-red-500'>{errors.message.message}</span>}
                    </div>

                    <div className='mb-4 mx-auto text-center'>
                        <button type='submit' className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-green-500 text-white hover:animate-pulse'>Submit</button>
                    </div>
                </form>
    )
}

export default Form