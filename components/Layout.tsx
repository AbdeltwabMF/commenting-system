import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Commenting system</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <div>
        <header className='text-2xl text-center'>header</header>
        <main>{children}</main>
        <footer className='text-center'>footer</footer>
      </div>
    </>
  )
}

export default Layout
