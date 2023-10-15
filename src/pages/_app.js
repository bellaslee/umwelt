// Import libraries
import React, { useState } from 'react';

// Import styles
import '@/styles/globals.scss'


// Import components
import PageWrapper from '@/components/PageWrapper';



export default function App({ Component, pageProps }) {
  const [hasShownLoader, setHasShownLoader] = useState(false);

  return (
    <PageWrapper >
      <Component {...pageProps} hasShownLoader={hasShownLoader} setHasShownLoader={setHasShownLoader} />
    </PageWrapper>
  )
}
