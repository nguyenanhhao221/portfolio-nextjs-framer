import axios, { AxiosResponse } from 'axios';
import { ZodError } from 'zod';
import { FormInput } from '../components/Contact/ContactForm';
import { sanityClient } from '../sanity';
import type { TSkill } from '../types';
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

export const getSanity = async (queryString: string) => {
  try {
    const response = await sanityClient.fetch(queryString);
    if (response) return response;
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      throw new Error('Data from Sanity is not available');
    }
  }
};

/**
 * Help to restructure the data get back from Sanity on Skills Data.
 * Find unique category from the raw data, base on that merge together each skill that have the same unique category
 * @param skillArr The data on Skills section from Sanity
 * @returns a new Array with each element is an object merge by the category key
 */
export const restructureSkillData = (skillArr: TSkill[]) => {
  const uniqueCategory = [...new Set(skillArr.map((skill) => skill.category))];
  const result = uniqueCategory.map((category) => {
    const data = skillArr.filter((skill) => skill.category === category);
    return { category: category, data };
  });
  return result;
};
