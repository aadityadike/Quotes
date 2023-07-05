import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github';
import { connectToDB } from "@utils/database";
import User from "@models/user";

console.log({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
})

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ],
    async session({ session }) {
        const sessionUser = await User.findOne({
            email: session.user.email
        })

        session.user.id = sessionUser._id.toString();
    },
    async signIn({ profile }) {
        try {
            // serverless -> lambda function -> connection to db.
            await connectToDB();
            // check if a user already exist
            const userExist = await User.findOne({ email: profile.email })
            // if user is not exist
            if (!userExist) {
                await User.create({
                    email: profile.email,
                    username: profile.name.replace("", "").toLowerCase(),
                    image: profile.image
                })
            }
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
})

export { handler as GET, handler as POST }