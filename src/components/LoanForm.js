import React, {useState} from 'react'

const LoanForm = ({onAdd}) => {
    const [principal, setPrincipal] = useState("")
    const [interest, setInterest] = useState("")
    const [duration, setDuration] = useState("")



const submit = (e) =>{
    e.preventDefault()

    onAdd({principal, interest, duration})
    
    setPrincipal("")
    setInterest("")
    setDuration("")
}

    return (
        <div>
        <form className="form" onSubmit={submit}>
            <h3>Add Info</h3>
            <div className="form-control">
                <label>Enter Principal</label>
                <input type="number" placeholder="Enter Principal"
                value={principal} onChange={(e) =>setPrincipal(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Enter Duration (Months)</label>
                <input type="number" placeholder="Enter Duration"
                value={duration} onChange={(e) =>setDuration(e.target.value)} />
            </div>

            <button>Compute</button>
        </form>
        </div>
    )
}

export default LoanForm
