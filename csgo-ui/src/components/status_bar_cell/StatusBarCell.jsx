import "./StatusBarCell.css"

export default function StatusBarCell(props) {
    return (
        <>
            <div className= "status-bar-cell-container">
                {props.icon}
                <p className= "status-bar-mid-text">{props.text}</p>
                <p className= "status-bar-end-text">{props.value}</p>
            </div>
        </>
    )
}