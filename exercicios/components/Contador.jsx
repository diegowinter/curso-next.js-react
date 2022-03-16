import { Component } from "react";

export default class Contador extends Component {

  state = {
    numero: this.props.valorInicial ?? 0,
    passo: this.props.passo ?? 1,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo ?? 1
    });
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo ?? 1
    });
  }

  renderForm() {
    return (
      <>
        <input
          type='number'
          min={1}
          max={1000}
          value={this.state.passo}
          onChange={ev => this.setState({ passo: +ev.target.value })}
        ></input>
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
      </>
    )
  }

  render() {
    return (
      <div>
        <h1>Contador (usando Clase)</h1>
        <h2>{this.state.numero}</h2>
        {this.renderForm()}
      </div>
    );
  }

}