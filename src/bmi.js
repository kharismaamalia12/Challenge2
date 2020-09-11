import React, {Component} from 'react';
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state = {
            berat : null,
            tinggi : null,
            hasil : null,
            pesan : ""
        };
    }
    hitung = (e) => {
        e.preventDefault();
        const berat = parseInt(this.refs.berat.value);
        const tinggi = parseInt(this.refs.tinggi.value) / 100;
        let hasil;
        let pesan

        hasil = berat / Math.pow(tinggi,2);
        console.log(hasil);

        if(hasil < 18.5){
            pesan = "Kekurangan Berat Badan"
          }else if(hasil >= 18.5 && hasil <= 24.9){
            pesan = "Ideal"
          }else if(hasil >= 25 && hasil <= 29.9){
            pesan = "Kelebihan berat badan"
          }else{
            pesan = "Obesitas"
          }

        this.setState({
            berat, tinggi, hasil, pesan
        });
        this.refs.berat.value = null;
        this.refs.tinggi.value = null;
    }

    render(){
        return(
          <div className="card col-sm-6 mx-auto m-5">
              <div className="card-header text-center">
                <h4>Body Mass Index</h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.hitung}>
                  <div className="form-group row">
                    <label class="col-sm-2 col-form-label">Berat</label>
                    <div className="col-sm-10">
                      <input type="number" className="form-control" ref="berat"></input>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label class="col-sm-2 col-form-label">Tinggi</label>
                    <div className="col-sm-10">
                      <input type="number" className="form-control" ref="tinggi"></input>
                    </div>
                  </div>
                  <button class="form-control btn btn-dark">Hasil</button>
                </form>
                <br></br>
                <h4 className="text-center">Hasil</h4>
                <p className="alert alert-secondary">{this.state.pesan}</p>
              </div>
          </div>
        );
      }
}

export default App;