import axios, { AxiosResponse } from 'axios';
import { ZodError } from 'zod';
import { FormInput } from '../components/Contact/ContactForm';

/**
 * Make post request to api with the user input contact to send email
 * @param formData The form data with user input
 * @returns response form the server
 */
export const sendEmail = async (formData: FormInput) => {
  try {
    const response: AxiosResponse<{ message: string }, { message: string }> =
      await axios.post('/api/contact-me', JSON.stringify(formData), {
        headers: { 'Content-Type': 'application/json' },
      });
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (Array.isArray(err.response?.data.message)) {
        //Handle zod error
        //https://zod.dev/?id=error-handling
        throw new Error(
          err.response?.data.message.map((e: ZodError) => e.message)
        );
      }
      throw new Error(err.response?.data.message);
    } else if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
};
