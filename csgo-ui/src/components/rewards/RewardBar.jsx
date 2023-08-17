import RewardItem from "../reward_item/RewardItem";

import "./RewardBar.css";

const rewardItems = [
    {
        title: "Daily Reward",
        content_text: "Your level is 99",
        button_text: "Collect $0.95"
    },
    {
        title: "Rakeback",
        content_text: "146.87",
        button_text: "Claimed"
    },
]

export default function RewardBar() {
    return (
        <>
            <div className="reward-bar-container">
                {
                    rewardItems.map((item) => {
                        return (
                            <>
                                <RewardItem
                                title={item.title}
                                content_text={item.content_text}
                                button_text={item.button_text}
                                />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}