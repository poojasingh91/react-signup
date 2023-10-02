export default function ButtonSign({name, logo, onClick}){
    
    return(<>
        <button className="btn" onClick={onClick}>
        <img className="myimage" height={20} width={20} src={logo} alt={name}/>
        <span>{name}</span>
        </button>
        </>
    );
}