import type { AppProps } from "next/app";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/Global.styles";
import { myTheme } from "../styles/theme";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { AuthContextProvider } from "../context/AuthContext";
import { CartContextProvider } from "../context/CartContext";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <GlobalStyle />
        <SCThemeProvider theme={myTheme}>
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </SCThemeProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
