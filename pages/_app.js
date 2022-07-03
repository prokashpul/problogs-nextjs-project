import Layout from "../layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
