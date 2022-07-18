import '../styles/globals.css'
import Link from 'next/link';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <nav className="header">
      <div className="">
        <Link href="/">
          <a >Kapehe's Kitchen</a>
        </Link>
      </div>
    </nav>
      <main>
      <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp
