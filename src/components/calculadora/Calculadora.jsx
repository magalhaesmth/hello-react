import React from "react";
import './Calculadora.css';

class Calculadora extends React.Component{

    constructor(props){
        super(props);
        this.state = {valor1:'', valor2:'',resultado:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit(event){       //Calcular
        event.preventDefault();
        let resultado = parseFloat(this.state.valor1) + parseFloat(this.state.valor2);
        this.setState({resultado:resultado});
    }
    
    limpar(){
        this.setState({valor1:'',valor2:'',resultado:''});
    }

    render(){
        return(
            <div className="Calculadora">
                <h1>Somar Dois Números</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Primeiro Valor
                        <input name="valor1" value={this.state.valor1}onChange={this.handleChange} type="text"/>
                    </label>
                    <br></br>
                    <label>
                        Segundo Valor
                        <input name="valor2" value={this.state.valor2} onChange={this.handleChange} type="text"/>
                    </label>
                    <br></br>
                    <input type="submit" value="Calcular"/>
                    <input type="button" value="Limpar Campos" onClick={this.limpar}/>
                </form>
                <p>
                    {this.state.resultado}
                </p>
            </div>
        );
    }
}
export default Calculadora;
