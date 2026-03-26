import "./globals.css";
import Navbar from "../components/Navbar";
import SessionProviderWrapper from "../components/SessionProviderWrapper";

export const metadata = {
title: "Azure Entra Portal",
description: "Internal company access portal with Microsoft Entra ID",
};

export default function RootLayout({ children }) {
return (
<html lang="en">
<body>
<SessionProviderWrapper>
<Navbar />
<main style={{ padding: "24px" }}>{children}</main>
</SessionProviderWrapper>
</body>
</html>
);
}