const UserDetails =(teDhenat)=>{
    const {userNAme,age,gjinia}=teDhenat
    console.log(teDhenat)
    return (
        <>
        <h2> Username : {userNAme} </h2>
        <p> Age :{age}</p>
        <p> Gender : {gjinia} </p>
        </>
    )
}

export default UserDetails;