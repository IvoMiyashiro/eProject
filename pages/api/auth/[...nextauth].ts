import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { v4 as uuidv4 } from 'uuid';

import { verifyPassword } from 'helpers';

import { db } from 'database';

export default NextAuth({
  providers: [
    Credentials({
      name: 'Custom Login',
      credentials: {
        email: { label: 'Correo:', type: 'email', placeholder: 'correo@google.com'  },
        password: { label: 'Contraseña:', type: 'password', placeholder: 'Contraseña'  },
      },
      async authorize(credentials) {
        return await checkCustomerEmailPassword( credentials!.email, credentials!.password );
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],

  pages: {
    signIn: '/auth/signin',
    newUser: '/auth/signup'
  },

  jwt: {
    
  },
  
  session: {
    maxAge: 2592000,
    strategy: 'jwt',
    updateAge: 86400,
  },

  callbacks: {

    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;

        switch( account.type ) {

        case 'oauth': 
          token.user = await oAUthToDbUser( user?.email || '', user?.name || '', user?.image || '' );
          break;

        case 'credentials':
          token.user = user;
          break;
        }
      }
      return token;
    },

    async session({ session, token }){
      session.accessToken = token.accessToken;
      session.user = token.user as any;

      return session;
    }
  }
});

const checkCustomerEmailPassword = async (email: string, password: string) => {

  const query = 'SELECT * FROM customer WHERE email = $1';
  const values = [email];

  try {
    const { rows } = await db.conn.query(query, values);

    if (rows.length === 0) {
      return null;
    }

    const { role, name, id, password: dbPassword, profile_image } = rows[0];

    if (!verifyPassword(dbPassword, password)) {
      return null;
    }

    return {
      id,
      name,
      email: email.toLocaleLowerCase(),
      profile_image,
      role,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

const oAUthToDbUser = async (email: string, name: string, image: string) => {
  let query = 'SELECT * FROM customer WHERE email = $1';
  let values = [email];

  try {
    const { rows } = await db.conn.query(query, values);

    if (rows.length !== 0) {
      const { id, name, email, profile_image, role } = rows[0];
      return { id, name, email, profile_image, role };
    } else {
      const uid = uuidv4();

      query = 'INSERT INTO customer (id, name, email, profile_image, password, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
      values = [uid, name, email, image, '@', 'client'];
  
      const { rows } = await db.conn.query(query, values);

      const { id, name: dbName, email: dbEmail, profile_image, role } = rows[0];
      return { id, name: dbName, email: dbEmail, profile_image, role };
    }
  } catch (error) {
    console.log(error);
  }
};
