export async function getGraphProfile(accessToken) {
const response = await fetch("https://graph.microsoft.com/v1.0/me", {
headers: {
Authorization: `Bearer ${accessToken}`,
},
});

if (!response.ok) {
throw new Error("Failed to fetch Microsoft Graph profile");
}

return response.json();
}