import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import '../app/globals.css';

const Layout = ({ children, title, description }) => {
    return (
    <>
        <Head>
            <title>{`Camisetas de programación - ${title}`}</title>
            <meta name="description" content={description} />
        </Head>

        <Header />

        {children}

        <Footer />
    </>
    )
}

export default Layout;