import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CasinoIcon from '@mui/icons-material/Casino';
import CasesSharpIcon from '@mui/icons-material/CasesSharp';
import StatusBarCell from '../status_bar_cell/StatusBarCell';
import { useState } from 'react';

import "./StatusBar.css";

const statusBarItems = [
    {
        "icon": <SportsEsportsIcon style={{ fill: "orange" }} />,
        "text": "Users",
        "value": "19"
    },
    {
        "icon": <AttachMoneyIcon style={{ fill: "orange" }} />,
        "text": "Pot Value",
        "value": "10.031,76"
    },
    {
        "icon": <CasinoIcon style={{ fill: "orange" }} />,
        "text": "Your Chance",
        "value": "15%"
    },
    {
        "icon": <CasesSharpIcon style={{ fill: "orange" }} />,
        "text": "Items",
        "value": "8/10"
    },
]

export default function SatatusBar() {
    return (
        <>
            <div id='status-bar-container'>
                {statusBarItems.map((item, index) => {
                    return (
                        <StatusBarCell
                            key={index}
                            icon={item.icon}
                            text={item.text}
                            value={item.value}
                        />
                    )
                })}
            </div>
        </>
    )
}