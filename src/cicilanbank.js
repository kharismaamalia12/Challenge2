import React, {Component} from 'react';
import './App.css';

class cicilanbank extends Component {
    constructor(){
        super();
        this.state = {
            nominal : null,
            bunga : null,
            periode : null,
            angsuran : "",
            bungaflat : "",
            hasil : ""
        };
    }
    hitung = (hello) => {
        hello.preventDefault();
        const nominal = parseInt(this.refs.nominal.value);
        const bunga = parseInt(this.refs.bunga.value) / 100;
        const periode = parseInt(this.refs.periode.value);
        let angsuran;
        let bungaflat;
        let hasil;

        angsuran = nominal / periode;
        bungaflat = (nominal * bunga) / periode;
        hasil = angsuran + bungaflat;
        console.log(hasil);

        this.setState({
            nominal, bunga, periode, angsuran, bungaflat, hasil
        });
        this.refs.nominal.value = null;
        this.refs.bunga.value = null;
        this.refs.periode.value = null;
    }

    render(){
        return(
            <div className="card col-sm-7 mx-auto m-5">
                <div className="card-header text-center">
                  <h4>Cicilan Bank</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={this.hitung}>
                  <div className="form-group row">
                    <label class="col-sm-2 col-form-label">Nominal</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" ref="nominal"></input>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label class="col-sm-2 col-form-label">Bunga</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" ref="bunga"></input>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label class="col-sm-2 col-form-label">Periode</label>
                    <div className="col-sm-10">
                      <input type="number" className="form-control" ref="periode"></input>
                    </div>
                  </div>
                  <button class="form-control btn btn-dark">Hasil</button>
                  </form>
                  <br/>
                  <p className="alert alert-secondary">{this.state.hasil}</p>
                </div>
            </div>
        );
    }
}

export default cicilanbank;