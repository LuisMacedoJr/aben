import React from "react";

export default function ConhecaLayout({
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