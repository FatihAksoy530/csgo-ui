import { useState } from "react"
import Item from "../item/Item"

import "./Spinner.css"

export default function Spinner() {
    const [items, setItems] = useState([
        {
            id: 1,
            image_url: "https://dmarket.com/blog/most-beautiful-csgo-skins/AK-47%20Nightwish_hudd803c2318e740e6f9c5549131b31111_170495_675x0_resize_q100_h2_lanczos.webp",
            name: "AK-47 | Redline",
            price: 10.00
        },
        {
            id: 2,
            image_url: "https://dmarket.com/blog/most-beautiful-csgo-skins/Desert%20Eagle%20Ocean%20Drive_hudd803c2318e740e6f9c5549131b31111_247221_675x0_resize_q100_h2_lanczos.webp",
            name: "AK-47 | Redline",
            price: 10.00
        },
        {
            id: 3,
            image_url: "https://dmarket.com/blog/most-beautiful-csgo-skins/P250%20Visions_hu957518b28da29b822be6dab4e505d7ca_281010_675x0_resize_q100_h2_lanczos.webp",
            name: "AK-47 | Redline",
            price: 10.00
        },
        {
            id: 4,
            image_url: "https://dmarket.com/blog/most-beautiful-csgo-skins/Karambit%20Doppler%20%28Sapphire%29_hud3d580b9905286d5392915c49c15b176_130701_675x0_resize_q100_h2_lanczos.webp",
            name: "AK-47 | Redline",
            price: 10.00
        },
        {
            id: 5,
            image_url: "https://dmarket.com/blog/most-beautiful-csgo-skins/M4A1-S%20Hyper%20Beast_hu957518b28da29b822be6dab4e505d7ca_112250_675x0_resize_q100_h2_lanczos.webp",
            name: "AK-47 | Redline",
            price: 10.00
        },
        {
            id: 6,
            image_url: "https://dmarket.com/blog/most-beautiful-csgo-skins/Falchion%20Doppler%20%28Ruby%29_hud3d580b9905286d5392915c49c15b176_108014_675x0_resize_q100_h2_lanczos.webp",
            name: "AK-47 | Redline",
            price: 10.00
        }
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