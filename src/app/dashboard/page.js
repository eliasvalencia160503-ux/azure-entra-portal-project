"use client";
import { useSession } from "next-auth/react";
import RoleGuard from "../../components/RoleGuard";

export default function DashboardPage() {
return (
<RoleGuard allow={() => true}>
<DashboardContent />
</RoleGuard>
);
}

function DashboardContent() {
const { data: session } = useSession();
return (
<div className="page-container">
<h1>Dashboard</h1>
<div className="card">
<p><strong>Name:</strong> {session?.user?.name}</p>
<p><strong>Email:</strong> {session?.user?.email}</p>
<p><strong>Roles:</strong> {session?.user?.roles?.join(", ") || "No roles found"}</p>
</div>
</div>
);
}