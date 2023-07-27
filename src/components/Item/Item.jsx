const Item =({name,img,stock,description,precio})=>{

return(
    <div className="card col-3 m-4">
        <div className="card-title">
            <h3>{name}</h3>
        </div>
        <picture>
            <img className="card-img" src={img} alt={name} />
        </picture>
        <div>
        <p>detalle {description}</p>
        <span>precio ${precio}</span>
        <span>stock: {stock}</span>
        </div>
        <div>
            <button className="btn btn-secondary m-4">Ver detalle</button>
        </div>
    </div>




)


}

export default Item