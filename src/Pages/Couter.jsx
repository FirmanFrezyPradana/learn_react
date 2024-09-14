// menurut documentasi state komponen hanya bisa dilakukan pda statefull componen(clsss componen), namu ada cara untuk mengunakan state pada stateless componen(fungsi) berikut ditunjukkan untuk statefull componen
import React, { Component } from "react";

export default class Couter extends Component {
  // membuat sebuah constructor untuk mengyimpan nilai default(awal)
  constructor(props) {
    super(props);
    //membaut sebuah state
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className=" flex items-start">
        <h1 className="mr-5">{this.state.count}</h1>
        <button
          className="bg-black text-white p-3"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}
