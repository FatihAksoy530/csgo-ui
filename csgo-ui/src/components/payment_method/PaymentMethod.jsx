import "./PaymentMethod.css";

export default function PaymentMethod(props) {
    return (
        <>
            <div className="payment-method-container">
                <div className="payment-method-left">
                    <img className="payment-method-img" src={props.paymentMethodImage} alt="" />
                </div>
                <div className="payment-method-right">
                    <h3 className="payment-method-header">{ props.paymentMethodHeader }</h3>
                    <p className="payment-method-description"> { props.paymentMethodDescription }</p>
                </div>
            </div>
        </>
    )   
} 