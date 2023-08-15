import { useState } from "react"
import Item from "../item/Item"

import "./Spinner.css"

export default function Spinner() {
    const [items, setItems] = useState([
        {
            id: 1,
            image_url: "./ak-47.webp",
            name: "AK-47 | Redline",
            price: 10.00
        },
        {
            id: 2,
            image_url: "./desert-eagle.webp",
            name: "Desert Eagle | Blaze",
            price: 10.00
        },
        {
            id: 3,
            image_url: "./karambit.webp",
            name: "Karambit | Lore",
            price: 10.00
        },
        {
            id: 4,
            image_url: "./p250.webp",
            name: "P250 | Asiimov",
            price: 10.00
        },
    ])

    return (
        <div id='spinner-container'>
            <div id='player-versus'>
                <div className="player-1">
                    <img className="profile-picture" src="./player-1.jpg" alt="" />
                </div>
                <div className="vs">VS</div>
                <div className="player-2">
                    <img className="profile-picture" src="./player-2.jpg" alt="" />
                </div>
            </div>
            <div id="items">
                {items.map(item => { 
                    return <Item key={item.id} image_url={item.image_url} name={item.name} price={item.price} />
                })}
            </div>
            <div className="total-value">
                <p className="money">$210.00</p>
                <p className="text">Total value</p>
            </div>
            <div className="enter">
                <button className="enter-btn">Enter</button>
            </div>
        </div>
    )
}