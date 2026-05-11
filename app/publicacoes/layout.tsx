import React from "react";

export default function PublicacoesLayout({
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