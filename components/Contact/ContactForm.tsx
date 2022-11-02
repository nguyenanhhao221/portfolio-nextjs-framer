import { ArrowPathIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { sendEmail } from '../../helpers/requests';

export type FormInput = {
  name: string;
  email: string;
  phoneNumber?: number;
  message: string;
};
export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({ mode: 'onChange' }); //Validate form every time there is a change

  // Mutations
  const mutation = useMutation({
    mutationFn: sendEmail,
    cacheTime: 60 * 1000,
    onSuccess: () => reset(), //Reset the form if request is success.
  });

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    mutation.mutate(data); //when user submit, send mutation request
    return;
  };
  //Styles for input
  const inputStyle = 'rounded-lg dark:bg-gray-800 dark:text-white';
  const errorStyle =
    'border-pink-500 text-pink-600 rounded-lg bg-gray-800 dark:bg-gray-800 dark:text-white focus:border-pink-500 focus:ring-pink-500';
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[80%] flex-col gap-4 text-sm md:text-base"
    >
      <label htmlFor="name">Name*</label>
      {errors.name && (
        <span className="text-sm text-red-500">{errors.name.message}</span>
      )}
      <input
        {...register('name', {
          required: { value: true, message: 'Required' },
          maxLength: { value: 20, message: 'Max length is 20 Characters' },
        })}
        type="text"
        className={`${errors.name ? errorStyle : inputStyle} `}
        id="name"
        required
        name="name"
        autoComplete="on"
      />
      <label htmlFor="email">Email*</label>
      {errors.email && (
        <span className="text-sm text-red-500">{errors.email.message}</span>
      )}
      <input
        {...register('email', {
          required: { value: true, message: 'Required' },
          maxLength: { value: 20, message: 'Max length is 20 Characters' },
        })}
        className={`${errors.email ? errorStyle : inputStyle} `}
        autoComplete="on"
        type="email"
        required
        id="email"
        name="email"
      />
      <label htmlFor="tel">Phone Number</label>
      <input
        {...register('phoneNumber')}
        className={`${errors.phoneNumber ? errorStyle : inputStyle} `}
        autoComplete="on"
        type="tel"
        id="tel"
        name="tel"
      />

      <label htmlFor="message">Message*</label>
      {errors.message && (
        <span className="text-sm text-red-500">{errors.message.message}</span>
      )}
      <textarea
        {...register('message', {
          required: { value: true, message: 'Required' },
        })}
        className={`${errors.message ? errorStyle : inputStyle} `}
        rows={3}
        required
        autoComplete="on"
        id="message"
        name="message"
      />
      <button
        type="submit"
        title="Send Message"
        className="flex w-full items-center justify-center gap-2 self-center rounded-lg bg-gradient-to-r from-gradient-purple-apple-from via-gradient-purple-apple-via to-gradient-purple-apple-to py-1 text-center text-xl font-bold md:mt-10 md:w-[50%] md:rounded-xl md:py-4"
        disabled={mutation.isLoading}
      >
        {mutation.isLoading ? (
          <ArrowPathIcon className="h-6 w-6 animate-spin"></ArrowPathIcon>
        ) : (
          <PaperAirplaneIcon className="h-6 w-6" />
        )}
        <span>{mutation.isLoading ? 'Sending' : 'Send'}</span>
      </button>
    </form>
  );
};
