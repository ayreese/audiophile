import type { AppProps } from "next/app";
import "../styles/main.scss"
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navigation from "../components/pageComponents/Navigation";
import Footer from "../components/pageComponents/Footer";
import { AuthContextProvider } from "../context/AuthContext";
import { CartContextProvider } from "../context/CartContext";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <CartContextProvider>
          <Navigation />
          <Component {...pageProps} />
          <Footer />
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
