import React, { useEffect, useState } from 'react'
import useAuth from '../context/useAuth';
import axios from 'axios';

interface UserProfileData{
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    profilePhoto: string;
}

const UserProfile : React.FC<UserProfileData>= () => {
    const{userId,token}=useAuth();
    const[profile,setProfile]=useState<UserProfileData | null>(null);
    const[error,setError]=useState<string | null>(null);

    useEffect(()=>{
        if(!userId) return;
        const fetchProfile= async()=>{

            try{
                const apiUrl=`${import.meta.env.VITE_USER_SERVICE_URL}/profile/${userId}`;
                const respnse=await axios.get(apiUrl,{headers:{Authorization:`Bearer ${token}`}});
                setProfile(respnse.data);
            }catch(error){
                setError("Failed to load profile");
            }
        }
       fetchProfile(); 
    },[userId,token]);
    if (error) {
        return <div>Error: {error}</div>;
      }
    
      if (!profile) {
        return <div>Loading...</div>;
      }
  return (
    <div>
      <h1>Profile</h1>
      <p><strong>First Name:</strong> {profile.firstName}</p>
      <p><strong>Last Name:</strong> {profile.lastName}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>Address:</strong> {profile.address}</p>
      {profile.profilePhoto && <img src={profile.profilePhoto} alt="Profile" />}
    </div>
  )
}

export default UserProfile
