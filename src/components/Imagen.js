import flor from "../assets/images/flor.jpg";


function Imagen(){


    var estiloCSS ={ 
        display : "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%",
    }
    var imagenCSS ={
        width: "100%",
        height: "500px"
    }

    var textoCSS = {
        color: "brown"
    }
    

    return (<div style={estiloCSS}>
        <h1 style={textoCSS}>Imagen</h1>
        <hr/>
        <img src={flor} alt="flor" style={imagenCSS}></img>       
    </div>)
}
export default Imagen;
