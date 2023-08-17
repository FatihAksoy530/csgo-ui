import PaymentMethod from "../payment_method/PaymentMethod.jsx";

import "./PaymentBar.css";

const paymentMethods = [
    {
        paymentMethodHeader: "Bitcoin (BTC)",
        paymentMethodDescription: "1 BTC = $ 29.738,12",
        paymentMethodImage: "./bitcoin.png"
    },
    {
        paymentMethodHeader: "Dota 2",
        paymentMethodDescription: "Deposit Dota 2 skins via Skinsback",
        paymentMethodImage: "./dota2.png"
    },
    {
        paymentMethodHeader: "Tether (USDT)",
        paymentMethodDescription: "1 USDT = $ 0.99",
        paymentMethodImage: "./tether.png"
    },
    {
        paymentMethodHeader: "CS:GO 2",
        paymentMethodDescription: "Deposit Dota 2 skins via Skinsback",
        paymentMethodImage: "./csgo.webp"
    },
]

export default function PaymentBar() {
    return (
        <>
            <div className="payment-container">
                <div className="payment-container-header">
                    <button className="add-button">+</button>
                    <h3>Deposit</h3>
                    <button className="close-button">X</button>
                </div>
                <div className="payment-container-content">
                    <h2>1.Choose a payment method</h2>
                    <p>Pick a payment method below to get started. Prices are retrieved hourly from CoinMarketCap.</p>
                    <div className="payment-methods">
                        {
                            paymentMethods.map((item) => {
                                return (
                                    <>
                                        <PaymentMethod
                                            paymentMethodHeader={item.paymentMethodHeader}
                                            paymentMethodDescription={item.paymentMethodDescription}
                                            paymentMethodImage={item.paymentMethodImage}
                                        />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}