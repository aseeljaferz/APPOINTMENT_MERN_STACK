import React, {useState} from 'react'
import Axios from 'axios'
import Navb from "./Navbar"
import "./booking.css"

export default function Booking() {

  const [patientName, setpatientName] = useState('')
  const [patientAge, setpatientAge] = useState(0)
  const [patientEmail, setpatientEmail] = useState('')
  const [patientPno, setpatientPno] = useState(0)
  const [patientAddress, setpatientAddress] = useState('')
  const [patientState, setpatientState] = useState('')
  const [patientCity, setpatientCity] = useState('')
  const [patientPincode, setpatientPincode] = useState(0)
  const [patientProblem, setpatientProblem] = useState('')
  const [patientDate, setpatientDate] = useState('')

  const addToList = () => {
    Axios.post('http://localhost:3003/insert',{patientName: patientName, 
                                               patientAge: patientAge  ,
                                               patientEmail: patientEmail, 
                                               patientPno: patientPno, 
                                               patientAddress: patientAddress,
                                               patientState: patientState,
                                               patientCity: patientCity,
                                               patientPincode: patientPincode,
                                               patientDate: patientDate,
                                               patientProblem:patientProblem,});
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <Navb />
          </div>
            <div className='App'>
              <br /> <br />

              <h1 style={{position:"absolute",marginLeft:"40%"}}>Booking Your Appointment</h1> 
              <div className='personal'>
                <label htmlFor=""><h6>Name of the Patient:</h6></label>
                <input className='input1' type="text" onChange={(event) => {setpatientName(event.target.value);}} /> 
                <label htmlFor=""><h6>Patient's Age:</h6></label>
                <input className='input1' type="number" onChange={(event) => {setpatientAge(event.target.value);}} />
                <label htmlFor=""><h6>Patient's Email:</h6></label>
                <input className='input1' type="Email" onChange={(event) => {setpatientEmail(event.target.value);}} />
                <label htmlFor=""><h6>Patient's Phone Number</h6></label>
                <input className='input1' type="number" onChange={(event) => {setpatientPno(event.target.value);}} />
              </div>
              <div className='address1'>
                <label htmlFor=""><h6>Patients Address:</h6></label>
                <input className='input1' type="textarea" onChange={(event) => {setpatientAddress(event.target.value);}} />
                <label htmlFor=""><h6>State:</h6></label>
                <input className='input1' type="text" onChange={(event) => {setpatientState(event.target.value);}} />
                <label htmlFor=""><h6>City:</h6></label>
                <input className='input1' type="text" onChange={(event) => {setpatientCity(event.target.value);}} />
                <label htmlFor=""><h6>PinCode:</h6></label>
                <input className='input1' type="number" onChange={(event) => {setpatientPincode(event.target.value);}} />
              </div>
              <div className='problem1'>
                <label htmlFor=""><h6>Date of Visit</h6></label>
                <input className='input1' type="datetime-local"  onChange={(event) => {setpatientDate(event.target.value);}} />
                <label htmlFor=""><h6>reason for Visit:</h6></label>
                <input className='input2' type="textarea" onChange={(event) => {setpatientProblem(event.target.value);}} />
              </div>
            </div>
          </div>
        </div>
        <button style={{marginLeft:"122%", marginTop:"210%", width:"300px", borderRadius:"20px"}} onClick={addToList}>Book Appointment</button>
        
    </>
  )
}
