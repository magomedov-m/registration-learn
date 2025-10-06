import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

export const auth = betterAuth({
    database: prismaAdapter(),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        github: {
            clientId: "",
            clientSecret: "",
        },
        google: {
            clientId: "",
            clientSecret: "",
        }
    }
})