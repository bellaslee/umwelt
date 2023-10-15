import React from 'react';
import Link from 'next/link';

import { Gayathri } from 'next/font/google'
import { Navbar, Nav } from 'react-bootstrap';
const gayathri = Gayathri({ weight: '400', subsets: ['latin'] })

export default function Header({ font }) {
  return (
    <header className={`${font.className} container pt-3`}>
      <Link href="/"><h1 className={`display-4 ${gayathri.className}`}> Umwelt</h1></Link>
      <div className='px-3'>
        <Link href="/" className='px-3'>home</Link>
        <Link href="process" className='px-3'>development report</Link>
      </div>
    </header>
  )
}