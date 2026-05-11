import React from "react";

export default function NoticiasLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
        
    );
}