import './globals.css';
export const metadata = {
  title: 'Ecommerce Template',
  description: 'Fully responsive ecommerce template with Next.js and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
