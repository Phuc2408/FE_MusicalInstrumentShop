import type { ReactNode } from 'react';
import React from 'react';

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={`max-w-6xl mx-auto px-4 `}>
            <main className="flex flex-col gap-8 py-8">{children}</main>
        </div>
    );
}