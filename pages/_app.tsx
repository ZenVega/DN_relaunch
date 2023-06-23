import PageWrapper from "../components/PageWrapper";
import "../globals.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  );
}
