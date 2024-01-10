import { useEffect, useState } from "react"
import liff from "@line/liff";
import { useNavigate } from "react-router-dom";

const initialProfile = {
    displayName: '',
    userId: ''
}

const Home = () => {
    const [profile,setProfile] = useState(initialProfile);
    const navigate = useNavigate();

    const logout = () => {
        liff.logout();
        navigate('/line-login-page')
    }

    useEffect(() => {
        const initLine = () => {
            liff.init({liffId: import.meta.env.VITE_LINE_ID}, async () => {
                if(!liff.isLoggedIn()) {
                    navigate('/line-login-page')
                } else {
                    const profile = await liff.getProfile();
                    setProfile(profile);
                }
            })
        }
        initLine()
    }, [navigate])
    

    return (
        <div className="container">
            <div className="box">
                <span>Name: { profile.displayName }</span><br />
                <span>ID: { profile.userId }</span><br />
                <button className="" onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Home