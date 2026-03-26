import AzureADProvider from "next-auth/providers/azure-ad";
export const authOptions = {
providers: [
AzureADProvider({
clientId: process.env.AZURE_AD_CLIENT_ID,
clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
tenantId: process.env.AZURE_AD_TENANT_ID,
authorization: {
params: {
scope: "openid profile email User.Read",
},
},
}),
],
callbacks: {
async jwt({ token, account, profile }) {
if (account) {
token.accessToken = account.access_token;
}

if (profile) {
token.roles = profile.roles || [];
}

return token;
},
async session({ session, token }) {
session.accessToken = token.accessToken;
session.user.roles = token.roles || [];
return session;
},
},
secret: process.env.NEXTAUTH_SECRET,
};