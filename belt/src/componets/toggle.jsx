

const Toggle = ({id,name,complete,handleToggle}) =>{
    return(
        <div>
            <span className={complete ? "strike" : ""}>{name}</span>
            <span>
                <input type="checkbox" checked={complete} onChange={() => handleToggle(id)}/>
            </span>
        </div>
    )
}