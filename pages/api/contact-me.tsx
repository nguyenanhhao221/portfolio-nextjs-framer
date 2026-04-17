import { NextApiHandler } from 'next';
import { Resend } from 'resend';
import { z, ZodError } from 'zod';

//Zod schema to validate user input.
//Even if we validate input in front end already. We still need to validate on the server since malicious user can alter the request.
const UserInput = z.object({
  name: z.string().min(1).max(20),
  phoneNumber: z.string().nullable().optional().or(z.number().optional()),
  email: z.string().email().min(1).max(30),
  message: z.string().min(1),
});

const emailHandler: NextApiHandler = async (req, res) => {
  //if user go directly in the browser url with /api/contact-me => Redirect them back to homepage
  if (req.method === 'GET') {
    return res.status(307).redirect('/');
  }
  //If it a POST Method request. we use SPARKPOST to send email
  if (req.method === 'POST') {
    try {
      //validate data first
      const validateData = UserInput.parse(req.body);

      //if data input is valid we make request
      if (validateData) {
        const { name, email, phoneNumber, message } = validateData;
        const emailClient = new Resend(process.env.RESEND_API_KEY);
        const { data, error } = await emailClient.emails.send({
          from: `${name} <porfolio@resend.haonguyen.tech>`,
          to: 'hao@haonguyen.tech',
          subject: `Personal Website Email from ${name}`,
          html: `<html>
           <body>
           <p>${message}</p>
           <span >From: ${email}</span>
           <br />
           <span>Phone Number: ${phoneNumber}</span>
           </body>
           </html>`,
        });

        if (error) {
          console.error('error while sending email: ', error);
          return res
            .status(500)
            .json({ message: 'Something went wrong! Please try again later' });
        }

        if (data) {
          res
            .status(201)
            .json({ message: 'Email sent successfully. Thank you', data });
        }
      }
    } catch (e) {
      console.error(e);
      if (e instanceof ZodError) {
        return res.status(400).json({ message: e.issues });
      }

      if (e instanceof Error) {
        return res
          .status(500)
          .json({ message: 'Something went wrong! Please try again later' });
      }
    }
  }
};

export default emailHandler;
