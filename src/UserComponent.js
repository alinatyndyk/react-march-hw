export default function UserComponent(props){
    let {id, name, status, gender, species, image, alt} = props;
    return(
        <div>
        <h2>{id}</h2>
            <p>name - {name}</p>
            <p>gender - {gender}</p>
            <p>status - {status}</p>
            <p>species - {species}</p>
            <img src={image} alt={alt}/>
        </div>
    )
}