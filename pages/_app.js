import GlobalStyles from './../components/GlobalStyles'
import * as ga from '../lib/ga';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App