import '../styles/globals.css'
import LargeScreen from '../components/Navbar/largScreen'
import SmallScreen from '../components/Navbar/smallScreen'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
const supportedChainIds = [4]
const connectors = {
  injected: {}
}
function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <div className='largeScreen-nav'>
        <LargeScreen />
      </div>
      <div className='smallScreen-nav'>
        <SmallScreen />
      </div>
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>

  )

}

export default MyApp
