import "./RewardItem.css"

export default function RewardItem(props) {
    return (
        <div className="reward-item-container">
            <div className="reward-item-left-side">
                <h3 className="reward-item-header">{ props.title }</h3>
                <p className="reward-item-text">{ props.content_text }</p>
            </div>
            <div className="reward-item-right-side">
                <button className="reward-claim-btn">{ props.button_text }</button>
            </div>
        </div>
    )
}