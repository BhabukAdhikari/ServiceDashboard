export const SupplierSignUpData=async (newData)=> {
    try{
        const credantials=await api.post(newData);
        const response= credantials.data || [];
        return response;
}catch(error){
    console.log(error);
}
}