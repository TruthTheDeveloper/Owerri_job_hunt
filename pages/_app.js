import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import store from "../store";
import "./style.css";
import { DefaultSeo } from 'next-seo'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
      <DefaultSeo
        title="owerri jobhunt"
        description="over 2000 jobs available for Grabs"
      />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
