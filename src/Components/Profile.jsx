
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

import { useCartContext } from "../context/authContext/cartContext";


export const Profile = () => {

    const [profileHistory , setProfileHistory] = useState([])

    const {myFavorite} = useCartContext()

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

        <h2>Productos favoritos</h2>
        <div className="profileFav">
            {myFavorite.map((fav) => {
                return (
                    <div className="profileFavItem" key={fav.id}>
                            <h3>Name: {fav.title}</h3>
                            <img src={fav.pictureUrl} alt="product" />
                    </div>
                )
            })}
        </div>
    </div>


  )
}
