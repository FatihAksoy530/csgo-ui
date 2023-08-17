import Spinner from './components/spinner/Spinner';
import RarityScaler from './components/rarity_scaler/RarityScaler';
import SatatusBar from './components/status_bar/StatusBar';
import DepositBar from './components/deposit_bar/DepositBar';
import Earnings from './components/earnings/Earnings';
import RewardBar from './components/rewards/RewardBar';
import PaymentBar from './components/payment/PaymentBar';

import './assets/css/global.css'
import './assets/css/css_reset.css'
import './App.css'

function App() {

  return (
    <>
      <div id='main-layout-container'>
        <Spinner/>
        <RarityScaler />
        <SatatusBar />
        <DepositBar />
        <Earnings />
        <RewardBar />
        <PaymentBar />
      </div>
    </>
  )
}

export default App
