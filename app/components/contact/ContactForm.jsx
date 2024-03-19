'use client';

import { useForm } from 'react-hook-form';
import Button from '../Button';
import { useModal } from '@/app/context/ModalContext';
import { sendEmail } from '@/utils/send-email';
import toast from 'react-hot-toast';

function ContactForm() {
  const { handleModal, isActiveModal } = useModal();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    const res = sendEmail(data);

    toast.promise(res, {
      loading: 'Sending...',
      success: 'Your message successfully sent!',
      error: 'Error when sending',
    });

    reset();
    if (isActiveModal) {
      handleModal();
    }
  }

  return (
    <div className="flex justify-center items-center w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 min-w-80 sm:max-w-[600px] w-full"
      >
        <div>
          <input
            type="text"
            id="fullName"
            name="fullName"
            {...register('fullName', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Name has to be at least 3 characters long',
              },
            })}
            placeholder="Full name"
            className="w-full border outline-none border-gray-300 rounded-lg py-2 px-4 outline-0 focus:ring-2 focus:ring-indigo-500 focus:pl-6 duration-200"
          />
          {errors.fullName && (
            <p className="bg-red-200 rounded-md px-3 py-1 text-red-500 text-sm mt-1">
              {errors?.fullName?.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            {...register('phoneNumber', {
              required: 'This field is required',
              pattern: {
                value:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                message: 'Please provide a valid phone number',
              },
            })}
            placeholder="Phone number"
            className="w-full border outline-none border-gray-300 rounded-lg py-2 px-4 outline-0 focus:ring-2 focus:ring-indigo-500 focus:pl-6 duration-200"
          />
          {errors.phoneNumber && (
            <p className="bg-red-200 rounded-md px-3 py-1 text-red-500 text-sm mt-1">
              {errors?.phoneNumber?.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please provide a valid email address',
              },
            })}
            placeholder="Email"
            className="w-full border outline-none border-gray-300 rounded-lg py-2 px-4 outline-0 focus:ring-2 focus:ring-indigo-500 focus:pl-6 duration-200"
          />
          {errors.email && (
            <p className="bg-red-200 rounded-md px-3 py-1 text-red-500 text-sm mt-1">
              {errors?.email?.message}
            </p>
          )}
        </div>

        <div>
          <textarea
            type="text"
            id="message"
            name="message"
            {...register('message', {
              required: 'This field is required',
              minLength: {
                value: 10,
                message: 'Message has to be at least 10 characters long',
              },
            })}
            placeholder="Your message"
            className="w-full border outline-none border-gray-300 rounded-lg py-2 px-4 outline-0 focus:ring-2 focus:ring-indigo-500 focus:pl-6 duration-200"
          />
          {errors.message && (
            <p className="bg-red-200 rounded-md px-3 py-1 text-red-500 text-sm mt-1">
              {errors?.message?.message}
            </p>
          )}
        </div>

        <Button type="primary">Send</Button>
      </form>
    </div>
  );
}

export default ContactForm;
