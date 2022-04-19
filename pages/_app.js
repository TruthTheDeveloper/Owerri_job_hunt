import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import "./style.css";
import { DefaultSeo } from 'next-seo'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DefaultSeo
        title="owerri jobhunt"
        description="over 2000 jobs available for Grabs"
      />
        <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
