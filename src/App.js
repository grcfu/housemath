import './App.css'
import React, { useEffect, useState } from 'react'

function getMonthlyLoanPayment(price, rate) {
    let payments = 30 /* years */ * 12 /* months */
    let rateByMonth = rate / 12

    let loanAmount = price * 0.75
    let top = loanAmount * rateByMonth * ((1 + rateByMonth) ** payments)
    let bottom = ((1 + rateByMonth) ** payments) - 1
    let monthly = parseFloat(top) / parseFloat(bottom)

    console.log("monthly " + monthly)
    return monthly
}

function Form() {

    // Input
    const [price, setPrice] = useState(0)
    const [rate, setRate] = useState(0)
    const [rent, setRent] = useState(0)

    // Output
    const [monthlyPayment, setMonthlyPayment] = useState(0)
    const [management, setManagement] = useState(0)
    const [vacancy, setVacancy] = useState(0)
    const [repair, setRepair] = useState(0)
    const [insurance, setInsurance] = useState(0)
    const [tax, setTax] = useState(0)
    const [cashflow, setCashflow] = useState(0)

    const clearOutput = () => {
        setMonthlyPayment(0)
        setManagement(0)
        setVacancy(0)
        setRepair(0)
        setInsurance(0)
        setTax(0)
        setCashflow(0)
    }

    useEffect(() => {
        asdf()
    })

    const asdf = () => {
        if (price == 0 || rate == 0 || rent == 0) {
            console.log("empty input")
            clearOutput()
        } else {
            console.log("price " + price + " rate " + rate + " rent " + rent)
            let monthlyPayment = getMonthlyLoanPayment(price, rate)
            setMonthlyPayment(monthlyPayment)

            let management = rent * 0.10
            setManagement(management)

            let vacancy = rent * 0.08
            setVacancy(vacancy)

            let repair = rent * 0.03
            setRepair(repair)

            let insurance = rent * 0.05
            setInsurance(insurance)

            let tax = rent * 0.10
            setTax(tax)

            let cashflow = rent - monthlyPayment - management - vacancy - repair - insurance - tax
            setCashflow(cashflow)
        }
    }

    const usePrice = (event) => {
        setPrice(event.target.value)
    }


    const useRate = (event) => {
        setRate(event.target.value * 0.01)
    }

    const useRent = (event) => {
        setRent(event.target.value)
    }

    return (
        <div className="content">
            <form className="input">
                <div className="inputHeader">30 year loan</div>
                <label>
                    Price
                    <input
                        name="price"
                        type="number"
                        onChange={usePrice} />
                </label>

                <label>
                    Rate
                    <input name="rate"
                        placeholder="%"
                        type="number"
                        step="0.01"
                        onChange={useRate} />
                </label>

                <label>
                    Rent
                    <input name="rent"
                        type="number"
                        onChange={useRent} />
                </label>
            </form >

            <div className="output">
                <Mortgage num={monthlyPayment} />
                <Manage num={management} />
                <Vacancy num={vacancy} />
                <Repair num={repair} />
                <Insure num={insurance} />
                <Tax num={tax} />
                <Cashflow num={cashflow} />
            </div>
        </div>
    )
}

function Cashflow(props) {
    if (!props.num) {
        return <div></div>
    }
    let num = Math.round(props.num)
    return (
        <div>
            cashflow <span>{num}</span>
        </div>
    )
}


function Mortgage(props) {
    if (!props.num) {
        return <div></div>
    }
    let num = Math.round(props.num)
    return (
        <div>
            Monthly loan <span>{num}</span>
        </div>
    )
}


function Manage(props) {
    if (!props.num) {
        return <div></div>
    }
    let num = Math.round(props.num)
    return (
        <div>
            10% management <span>{num}</span>
        </div>
    )
}

function Vacancy(props) {
    if (!props.num) {
        return <div></div>
    }
    let num = Math.round(props.num)
    return (
        <div>
            8% vacancy <span>{num}</span>
        </div>
    )
}

function Repair(props) {
    if (!props.num) {
        return <div></div>
    }
    let num = Math.round(props.num)

    return (
        <div>
            3% repair <span>{num}</span>
        </div>
    )
}

function Insure(props) {
    if (!props.num) {
        return <div></div>
    }
    let num = Math.round(props.num)
    return (
        <div>
            0.5% insurance <span>{num}</span>
        </div>
    )
}

function Tax(props) {
    if (!props.num) {
        return <div></div>
    }
    let num = Math.round(props.num)
    return (
        <div>
            1% tax <span>{num}</span>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Form />
        </div>
    )
}

export default App
