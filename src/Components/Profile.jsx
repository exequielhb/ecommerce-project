
import { db } from "../firebase/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";

export const Profile = () => {

    const [profileHistory , setProfileHistory] = useState([])

    const profileCollection = collection(db, "purchase-user")

    const getProfile = async () => {
        const dataProfile = await getDocs(profileCollection)
        setProfileHistory(
            dataProfile.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
        )
    }

    useEffect(() => {
        getProfile()
    }, [])

  return (
    <div className="profileContainer">
        <h1>Profile</h1>
        <h2>Historial de compras</h2>
        <div className="profileHistory">
            {profileHistory.map((profile) => {
                return (
                    <div className="profileHistoryItem" key={profile.id}>
                            <h3>Name: {profile.name}</h3>
                            <h3>Last Name: {profile.surname}</h3>
                            <h3>paymen Method: {profile.payment}</h3>
                            <h3>Subtotal: {profile.totalPrice}</h3>
                    </div>
                )
            })}
        </div>
    </div>


  )
}
