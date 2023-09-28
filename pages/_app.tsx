import PageWrapper from "../components/PageWrapper";
import "../globals.css";
import { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

export default function App({
  Component,
  pageProps,
}: AppProps & { files: string[] }) {
  return <Component {...pageProps} />;
}
