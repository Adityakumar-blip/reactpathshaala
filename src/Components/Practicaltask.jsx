import React, {useState, useEffect} from 'react'
import './Task.css'

const Practicaltask = () => {

    const localStorage = () => {
        const data = localStorage.getItem('taskdata');

        if(data) {
            return JSON.parse(data);
        }else {
            return [];
        }
    }

    const [taskdata, Settaskdata] = useState({
        city: "",
        name: "",
        salary: "",
        mobile:"",
        profle: "",
    })

    const [record, setRecord] =useState([])

    const handleInput = (e) => {
        const name = e.target.name;
        console.log(name)
        const value = e.target.value;
        console.log(value)

        Settaskdata({...taskdata, [name]: value})

    }

    const submitControl = (e) => {
        e.preventDefault();

        const newRecord = { ...taskdata, id:new Date().getTime.toString()}

        setRecord([... record, newRecord])
        console.log(record)

        Settaskdata({ city:'', name:'', salary:'', mobile:'', profle:'' })
    }

  return (
    <>
    <div className="superior">

    
    <form action=''>
    <div className="maintaskContainer">
        <h6>Step 1:</h6>
        <div className="step1">
        <p>City Name</p>
        <input type='text' onChange={handleInput} name="city" value={taskdata.city} />
        <button type='submit' onClick={submitControl}>Submit Button</button>
        </div>
        <div className="step2">
            <h6>Step 2:</h6>
            <div className="steptwoContainer">
                <p>Name</p>
                <input type='text' onChange={handleInput} name="name" value={taskdata.name}/>
                <p>City</p>
                <input type='text' onChange={handleInput} name="city" value={taskdata.city} />
                <p>Salary</p>
                <input type='text' onChange={handleInput} name="salary" value={taskdata.salary} />
                <p>Mobile</p>
                <input type='tel' onChange={handleInput} name="mobile" value={taskdata.mobile} />
                <p>Profile Picture</p>
                <input type='image' onChange={handleInput} name="profile" value={taskdata.profle}/>
            </div>
            <button type='submit' onClick={submitControl}>Submit</button>
        </div>
        <div className="step3">
            <div className="stepthreeContainer">
            <p>City</p>
            <input type='text' onChange={handleInput} name="city" value={taskdata.city} />
            </div>
        </div>
        <button type='submit' onClick={submitControl}>Submit</button>
    </div>
    </form>

    <div className='datareceived'>
        {
            record.map((curElem) => {
                return (
                    <div className='datastyle' key={curElem.id}>
                        <p>{curElem.city}</p>
                        <p>{curElem.name}</p>
                        <p>{curElem.salary}</p>
                        <p>{curElem.mobile}</p>
                        <p>{curElem.profile}</p>
                    </div>
                )
            })
        }
    </div>
    </div>
    </>

  )
}

export default Practicaltask