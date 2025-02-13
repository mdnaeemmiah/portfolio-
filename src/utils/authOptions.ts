import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions} from "next-auth";

// Define the user login function (replace with your actual login logic)
// async function myUserLoginFunctio(email: string, password: string): Promise<User | null> {
//     // Mock user data (replace with actual authentication logic)
//     const mockUser = { id: "1", email: "test@example.com", name: "Test User", password: "password123" };
  
//     if (email === mockUser.email && password === mockUser.password) {
//       return mockUser;
//     }
  
//     return null; // Return null if the credentials are incorrect
//   }

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "email" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     if (!credentials?.email || !credentials?.password) {
    //       return null; // Ensure both email and password are present
    //     }

    //     const { email, password } = credentials;

    //     // Call your user login function (e.g., check the email and password)
    //     const user = await myUserLoginFunctio(email, password); 

    //     if (user) {
    //       return user; // Return the user object if login is successful
    //     }

    //     return null; // Return null if login failed
    //   },
    // }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       // Add user data to the JWT token when the user signs in
  //       token.email = user.email;
  //       token.name = user.name;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     // Add user data to the session
  //     if (token) {
  //       session.user = {
  //         email: token.email,
  //         name: token.name,
  //       };
  //     }
  //     return session;
  //   },
  // },
  pages: {
    signIn: "/login", // Customize the login page if needed
  },
  secret: process.env.NEXTAUTH_SECRET, // Secret used for signing JWTs
};
