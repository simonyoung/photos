import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Photos</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
