import "./Item.css"

export default function Item(props) {
    const { image_url, name, price } = props
    return (
        <div className="item-container">
            <img className="item-image" src={image_url} alt="" />
        </div>
            
    )
}
