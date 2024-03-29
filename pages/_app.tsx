import "../styles/globals.css";
import type { AppProps } from "next/app";
import AuthWrapper from "../hooks/AuthWrapper";
import { Provider } from "react-redux";
import store from "../store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </Provider>
  );
}
