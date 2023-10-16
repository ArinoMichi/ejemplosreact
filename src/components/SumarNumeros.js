function SumarNumeros (){
    const sumar = (numero1, numero2) =>{
        var suma = numero1 + numero2;
        console.log(suma);
    }

    var estiloCSS ={ 
        display : "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%",
        justifyContent: "space-evenly"
    }

    return(<div style={estiloCSS}>
        <button onClick={()=>sumar(10,5)}>Sumar 10 + 5 </button>
        <button onClick={()=>sumar(31,2)}>Sumar 31 + 2 </button>
    </div>)
}
export default SumarNumeros;