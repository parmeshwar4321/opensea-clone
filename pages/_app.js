import '../styles/globals.css'
import LargeScreen from '../components/Navbar/largScreen'
import SmallScreen from '../components/Navbar/smallScreen'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className='largeScreen-nav'>
        <LargeScreen />
      </div>
      <div className='smallScreen-nav'>
        <SmallScreen />
      </div>
      <Component {...pageProps} />
    </div>

  )

}

export default MyApp
