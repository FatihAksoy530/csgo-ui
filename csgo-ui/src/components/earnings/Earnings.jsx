import "./Earnings.css";

export default function Earnings() {
    return (
        <>
            <div id="earnings-container">
                <div className="total-earnings">
                    <div>
                        <img className="coins" src="./coins.png" alt="" />
                    </div>
                    <div className="total-earnings-right-container">
                        <p className="total-earnings-in-dollars">$1.151.14</p>
                        <p className="total-earnings-text">Total Earnings</p>
                    </div>
                </div>
                <div className="available-earnings">
                    <div className="case-image-container">
                        <img className="case" src="./case.png" alt="" />
                    </div>
                    <div className="available-earnings-mid-container">
                        <p className="total-earnings-in-dollars">$1.151.14</p>
                        <p className="total-earnings-text">Available Earnings</p>
                    </div>
                    <button className="claim-btn">
                        <img className="single-coin" src="./single-coin.png" alt="" />
                        <span className="claim-earnings">Claim Earnings</span>
                    </button>
                </div>
            </div>
        </>
    )
}