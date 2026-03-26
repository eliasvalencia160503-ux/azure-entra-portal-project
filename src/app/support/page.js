"use client";

import RoleGuard from "../../components/RoleGuard";
import { canAccessSupport } from "../../lib/roles";

export default function SupportPage() {
return (
<RoleGuard allow={canAccessSupport}>
<div>
<h1>Support Page</h1>
<p>This page is only for Support or Admin users.</p>

<h2>Mock Features</h2>
<ul>
<li>Device support dashboard</li>
<li>Ticket summary</li>
<li>Common troubleshooting resources</li>
</ul>
</div>
</RoleGuard>
);
}
