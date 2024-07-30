'use client'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useCart } from "@/app/hook/useCart";
import { useEffect } from "react";



export default function Home({
    params: { id }
}: {
    params: { id: string }
}) {
    const { getUserId,setGetUserId } = useCart();
    console.log("gggggg",getUserId);
    const router=useRouter()
    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`http://localhost:5000/api/auth/login-success/${id}`);
                router.push("/")
                const user = response.data.user;               
                setGetUserId(user); // Set the whole user object
                localStorage.setItem("accessToken", response.data.accessToken);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Adding `id` to dependencies

  
}
