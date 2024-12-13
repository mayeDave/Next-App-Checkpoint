import './globals.css';
export const metadata = {
  title: 'My Website',
  description: 'A great website built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="flex justify-center gap-16 bg-slate-600 p-4">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-slate-600 flex justify-center">© 2024 My Website</footer>
      </body>
    </html>
  );
}
