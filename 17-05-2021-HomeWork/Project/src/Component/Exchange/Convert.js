

import { createRef} from 'react'
import elements from "./rates.json";


const change = () => {

   let Input = createRef();
   let ResultRef = createRef();
    let GivenCurrencyRef = createRef();
    let OutcomeRef = createRef();
    
   let acquireOutcome = (first, second) => {
        let getFirstCurrencyValue = elements.find((input) => input.code == first).value;
          let getSecondCurrencyValue = elements.find((input) => input.code == second).value;
          var ratio = Input.current.value;
          return (getFirstCurrencyValue / getSecondCurrencyValue) * ratio;
      }
   let ExchangeCurrencies = () => {
          let get = ResultRef.current.value;
          let currencyValue = GivenCurrencyRef.current.value;
          let result = acquireOutcome(get, currencyValue);
          OutcomeRef.current.value = result.toFixed(5);
      }

    return (
        <div className="row justify-content-center ">
          <div className="col-6">
            <div className="currency">
                <div className="row">
                    <div>
                    <span>From</span>
                    <div className="d-flex justify-content-around">
                    <input type="number" ref={Input}/>
                    <select ref={ResultRef}>{elements.map((firstinput) => <option >{firstinput.code}</option>)}</select></div></div>
                    <div className="d-flex justify-content-center">
                    <img src={process.env.PUBLIC_URL + `./image/converted.jpeg`}/>
                    </div>
                    <div>
                    <span> To</span>
                    <div className="d-flex justify-content-around">
                    <input id="result" ref={OutcomeRef} />
                    <select ref={GivenCurrencyRef}>{elements.map((secondinput) => <option>{secondinput.code}</option>)}</select></div>
                    </div></div></div>
                    
                    <button id="btn" className="showOutcome" onClick={ExchangeCurrencies}>Exchange</button>
            </div>
            </div>
    
    
    
    
    
    )
    



    
}


export default change;
