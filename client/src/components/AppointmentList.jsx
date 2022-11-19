import React,{useState, useEffect} from 'react'
import Navb from "./Navbar"
import './applist.css';
import Axios from 'axios'

export default function AppointmentList() {

    const [appointmentList, setappointmentList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3003/read").then((response) => {
      setappointmentList(response.data)
    });
  }, []);

  const deleteAppointment = (id) => {
    Axios.delete(`http://localhost:3003/delete/${id}`);
  };

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <Navb />
            </div>
            <div className='listdiv'><br />
            <h1>Appointment List</h1>
            <br />
              {appointmentList.map((val, key) => {
                return (
                  <div key={key}>
                    <div className='wholelist container-flow'>
                        <div className='name row'>
                            <span className='namebox'><b>Patient's Name</b></span>
                            <span className='pname'><b>{val.patientName}</b></span>
                        </div>
                        <div className='age row'>
                            <span className='agebox'><b>Patient's Age:</b></span>
                            <span className='page'><b>{val.patientAge}</b></span>
                        </div>
                        <div className='email row'>
                            <span className='emailbox'><b>Patient's Email:</b></span>
                            <span className='pemail'><b>{val.patientEmail}</b></span>
                        </div>
                        <div className='pno row'>
                            <span className='pnobox'><b>Patient's Phone Number:</b></span>
                            <span className='ppno'><b>{val.patientPno}</b></span>
                        </div>
                        <div className='address row'>
                            <span className='addressbox'><b>Patient's Permanent Address:</b></span>
                            <span className='paddress'><b>{val.patientAddress}</b></span>
                        </div>
                        <div className='state row'>
                            <span className='statebox'><b>State</b></span>
                            <span className='pstate'><b>{val.patientState}</b></span>
                        </div>
                        <div className='city row'>
                            <span className='citybox'><b>City:</b></span>
                            <span className='pcity'><b>{val.patientCity}</b></span>
                        </div>
                        <div className='pincode row'>
                            <span className='pincodebox'><b>Pincode:</b></span>
                            <span className='ppincode'><b>{val.patientPincode}</b></span>
                        </div>
                        <div className='date row'>
                            <span className='datebox'><b>Patient's Date od Visit:</b></span>
                            <span className='pdate'><b>{val.patientDate}</b></span>
                        </div>
                        <div className='problem row'>
                            <span className='problembox'><b>Patient's Reason for Visit:</b></span>
                            <span className='pproblem'><b>{val.patientProblem}</b></span>
                        </div>
                        <br />
                        <div style={{position:"absolute",marginLeft:"34%"}}>
                          <button style={{width:"200px", borderRadius:"10px"}} onClick = {() => deleteAppointment(val._id)}>DELETE</button>
                        </div>
                        <br />
                        <br />
                        <hr />
                        <br />
                    </div>
                    {" "}
                  </div>
                );
              })}
            </div>
        </div>
    </div>
  )
}


{/* <div key={key}>
                    <h1>{val.patientName}</h1> 
                    <h1>{val.patientAge}</h1>
                    <h1>{val.patientEmail}</h1>
                    <h1>{val.patientPno}</h1>
                    <h1>{val.patientAddress}</h1>
                    <h1>{val.patientState}</h1>
                    <h1>{val.patientCity}</h1>
                    <h1>{val.patientPincode}</h1>
                    {" "}
                  </div> */}