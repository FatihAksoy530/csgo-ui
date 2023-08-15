import FileCopyIcon from '@mui/icons-material/FileCopy';
import QrCodeIcon from '@mui/icons-material/QrCode';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

import "./DepositBar.css"

export default function DepositBar() {
    return (
        <>
            <div id="deposit-bar">
                <div className="top-bar">
                    <div className="top-bar-left">
                        <h3>Deposit Address &#40;BTC Only&#41;</h3>
                        <p className='wallet-number'>mr2ZZGT4x4fajUGAwUvmfnbXTTUeM21YhX</p>
                    </div>
                    <div className="top-bar-right">
                        <div className='icon-container'>
                            <FileCopyIcon />
                        </div>
                        <div className='icon-container'>
                            <QrCodeIcon />
                        </div>
                    </div>
                </div>
                <div className='bottom-bar'>
                    <h3>Conversion preview</h3>
                    <div className='conversion-bar'>
                        <div className='dollars'>
                            <AttachMoneyIcon style={{ fill: "orange"}} />
                            <span className='money-amount'>756.71</span>
                        </div>
                        <p className='almost-equal'>≈</p>
                        <div className='btc'>
                            <CurrencyBitcoinIcon style={{ fill: "orange"}} />
                            <span>0.9991678427</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}