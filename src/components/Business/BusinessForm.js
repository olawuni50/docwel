import React, {useState} from 'react'

const BusinessForm = ({onAdd}) => {
    const [principal, setPrincipal] = useState("")
    const [duration, setDuration] = useState("")
   

    const submit = (e) =>{
        e.preventDefault()
    
        onAdd({principal, duration})
        
        setPrincipal("")
        setDuration("")
    }

    
    return (
        <div>
            <form className="form" onSubmit={submit}>
            <h3>Add Info</h3>
                <div className="form-control">
                    <label>Principal</label>
                    <input type="number" placeholder="Enter Principal"
                value={principal} onChange={(e) =>setPrincipal(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Enter Duration + Moratorium</label>
                <input type="number" placeholder="Enter Duration"
                value={duration} onChange={(e) =>setDuration(e.target.value)} />
            </div>

            {/* <div className="form-control">
                <label>Enter Moratorium</label>
                <input type="number" placeholder="Enter Moratorium"
                value={moratorium} onChange={(e) =>setMoratorium(e.target.value)} />
            </div> */}

            <button>Compute</button>
           
            </form>
            
        </div>
    )
}

export default BusinessForm
