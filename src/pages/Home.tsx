import { useEffect, useState } from "react"
import liff from "@line/liff";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [profile,setProfile] = useState({});
    const navigate = useNavigate();

    const initLine = () => {
        liff.init({liffId: import.meta.env.VITE_LINE_ID}, async () => {
            if(!liff.isLoggedIn()) {
                navigate('/line-login-page')
            } else {
                const profile = await liff.getProfile();
                console.log(profile);
            }
        })
    }
    useEffect(() => {
        initLine()
    }, [])
    

    return (
        <div className="container">
            <div className="box">
                <span>Name:</span>
                <span></span>
            </div>
        </div>
    )
}

export default Home