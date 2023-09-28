import Head from "next/head";
import Script from "next/script";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";
import Header from "../components/Header";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { getProjectData } from "../utils/getProjectData";
import PageWrapper from "../components/PageWrapper";

export async function getStaticProps() {
  try {
    const projects = getProjectData();

    return {
      props: { projects },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {},
    };
  }
}

export default function ({ projects }) {
  let { title, cats, icon } = attributes;
  return (
    <>
      <Head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      </Head>
      <PageWrapper projectsMeta={projects}>
        <article>
          <Header title={title} icon={icon} />
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </PageWrapper>
    </>
  );
}
