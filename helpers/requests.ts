import axios from 'axios';
import { FormInput } from '../components/Contact/ContactForm';

/**
 * Make post request to api with the user input contact to send email
 * @param formData The form data with user input
 * @returns response form the server
 */
export const sendEmail = async (formData: FormInput) => {
  try {
    const response = await axios.post(
      '/api/contact-me',
      JSON.stringify(formData),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
