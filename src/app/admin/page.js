"use client";

import RoleGuard from "../../components/RoleGuard";
import { canAccessAdmin } from "../../lib/roles";

export default function AdminPage() {
return (
<RoleGuard allow={canAccessAdmin}>
<div className="page-container">
<h1>Admin Page</h1>
<div className="card">
<p>This page is only for Admin users.</p>

<h2 className="section-title">Mock Features</h2>
<ul>
<li>User access review</li>
<li>Role assignment summary</li>
<li>App management overview</li>
</ul>
</div>
</div>
</RoleGuard>
);
}