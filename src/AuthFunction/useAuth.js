import React, { useState } from 'react'

const useAuth = () => {
 const [newData , setNewData]= useState({
    CompanyName: "", 
    PhoneNumber: "",
    Email: "", 
    RegistrationNumber: "", 
    PanNumber: "", 
    PanCertificate: null, 
    NewDate: "",
    Address: "", 
    CompanyCategory: "", 
    SerciceCategory: "", 
    CompanyDocumentVerification: null
 })
}

export default useAuth