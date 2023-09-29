export default function ButtonSign({name, logo}){
    
    return(<>
        <button className="btn">
        <img className="myimage" height={20} width={20} src={logo} alt={name}/>
        <span>{name}</span>
        </button>
        </>
    );
}