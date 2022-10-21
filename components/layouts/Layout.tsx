import Head from "next/head"

import * as React from 'react';
import { Navbar } from "../ui";
 
type Props = {
  children?: React.ReactNode,
  title?:string
};

export const Layout: React.FC<Props> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="Julian Perez Demonty" />
            <meta name="description" content="Informacion sobre el pokemon XXXX" />
            <meta name="keywords" content="XXXXX, pokemon, pokedex" />
        </Head>

        <Navbar/>

        <main style={{
          padding: '0px 20px',
        }}>
            {children}
        </main>
    </>
  )
}
