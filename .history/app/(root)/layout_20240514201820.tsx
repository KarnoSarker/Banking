import { Sidebar } from 'lucide-react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Karno', lastName: 'Sarker' };
  return (
    <main className='flex h-screen w-full font-inter'>
      Side
      {children}
    </main>
  );
}
