import './SumarNumeros.css';
import flor from '../../assets/images/flor.jpg';


function SumarNumeros (){
    const sumar = (num1,num2) =>{
        var resultado = num1 + num2;
        console.log(resultado);
    }

    var imgSize={
        width: "300px",
        height: "300px"
    }

    return (<div>
        <h1>SumarNumeros</h1>
        <img src={flor} style={imgSize}></img>
        <button onClick={() => sumar(3,4)}>Sumar 3 + 4</button>
        <button onClick={() => sumar(10,3)}>Sumar 10 + 3</button>
    </div>)
}
export default SumarNumeros;