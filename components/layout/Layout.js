import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>SummitCRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">
            {children}
      </div>
      <footer className="footer">
            <a href="#" target="_blank" rel="noreferrer">Summit</a><span> &copy; {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
