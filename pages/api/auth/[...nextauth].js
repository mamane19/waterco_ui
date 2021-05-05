import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  theme: "light",
  debug: true,
  providers: [
    Providers.Credentials({
      name: "Email and Passwod",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "eg: silverhairs",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      authorize: async (credentials) => {
        // make post request to API with data supplied to credentials
        console.log(credentials);
        const user = { username: "silverhairs", password: "password" };
        if (user) return Promise.resolve(user);
        return Promise.reject(new Error("Failed to authenticate"));
      },
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID.trim(),
      clientSecret: process.env.GITHUB_SECRET.trim(),
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
