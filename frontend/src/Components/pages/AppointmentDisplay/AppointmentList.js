import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
import './AppointmentDisplay.css';

const AppointmentList = ({ appointments }) => {
    // const [confirmed, setConfirmed] = useState(false);
    // const [rejected, setRejected] = useState(false);
    // const [isPending, setIsPending] = useState(false);

    return (
        <>{appointments.data.map((appointment) => (
            <div class="appointment_list col-sm-12 col-md-6 mt-3">

                <div className="appointment-preview" key={appointment.appointment_id}>
                    {/* <Link to={`/appointments/${appointment.AppointmentId}`} /> */}

                    <div className="border">
                        <h2 className="appContent border rounded text-center">Appointment {appointment.appointment_id}</h2>
                        <div className="appointmentParagraphs  text-center">
                            <p className="apptIsConsultation">Consultation Appointment? {appointment.is_consultation ? "Yes" : "No"}</p>
                            <p className="petParentName">Pet Parent Name: {appointment.first_name} {appointment.last_name}</p>
                            <p className="petName">Pet Name: ---</p>
                            <p className="apptStartTime">Appointment Start Time: {appointment.start_time}</p>
                            <p className="apptEndTime">Appointment End Time: {!appointment.end_date ? "---" : appointment.end_date.substring(0, 10)}</p>
                            <p className="apptStartDate">Appointment Start Date: {appointment.start_date.substring(0, 10)}</p>
                            <p className="apptEndDate">Appointment End Date: {!appointment.end_date ? "---" : appointment.end_date.substring(0, 10)}</p>
                            <p className="apptDescription">Pet Parent Appointment Notes: {!appointment.description ? "---" : appointment.description}</p>
                            <button className="confirmApptBtn btn"><a className="confirmRejectLink" href={`mailto:${appointment.email}?subject=NewTown Dogs - Confirming Your Appointment!`}>Confirm Appointment</a></button>
                            <button className="rejectApptBtn btn"><a className="confirmRejectLink" href={`mailto:${appointment.email}?subject=NewTown Dogs - Appointment Cannot Be Confirmed Yet`}>Reject Appointment</a></button>

                            {/* {isPending && <div><button className="confirmApptBtn btn"><a href={`mailto:${appointment.email}?subject=NewTown Dogs - Confirming Your Appointment!`} onClick={() => {

                                setConfirmed(true)
                                setIsPending(false)

                            }}>Confirm Appointment</a></button>
                                <button className="rejectApptBtn btn"><a href={`mailto:${appointment.email}?subject=NewTown Dogs - Appointment Cannot Be Confirmed Yet`} onClick={() => {

                                    setRejected(true)
                                    setIsPending(false)

                                }}>Reject Appointment</a></button>
                            </div>
                            }
                            {!isPending && <div>Appointment request has been replied to.</div>} */}
                        </div>
                    </div>
                </div>

            </div>
        ))}
        </>

    )
}

export default AppointmentList;