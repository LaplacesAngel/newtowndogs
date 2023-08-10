import React from "react";
import { useState } from "react";
import './AppointmentDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../useFetch";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";



const AppointmentList = ({ appointments }) => {
    const { appointment_id } = useParams();
    const history = useHistory();


    const handleTrashClick = () => {
        console.log('Deleting clicked....')
        fetch(`/api/appointments/${appointments.appointment.appointment_id}`, {
            method: "DELETE",
        }).then(() => {
            history.push("/AppointmentDisplay");

        }).catch((error) => {
            console.error("Error deleting appointment:", error);
        });
    };


    return (
        <>
            <div class="appointment_list col-sm-12 col-md-6 mt-3">
                {appointments.data.map((appointment) => (
                    <div className="appointment-preview" key={appointment.appointment_id}>


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
                                <a href={`/api/appointments/${appointment.appointment_id}`} > <FontAwesomeIcon className="trashCan" icon={faTrashCan} onClick={handleTrashClick} /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>

    )
}

export default AppointmentList;