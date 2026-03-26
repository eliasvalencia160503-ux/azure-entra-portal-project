"use client";

export default function ProfileCard({ profile }) {
if (!profile) return null;

return (
<div className="light-card">
<h2 className="section-title">Microsoft Graph Profile</h2>
<p><strong>Display Name:</strong> {profile.displayName || "N/A"}</p>
<p><strong>Email:</strong> {profile.mail || profile.userPrincipalName || "N/A"}</p>
<p><strong>Job Title:</strong> {profile.jobTitle || "N/A"}</p>
<p><strong>Department:</strong> {profile.department || "N/A"}</p>
<p><strong>Office Location:</strong> {profile.officeLocation || "N/A"}</p>
</div>
);
}