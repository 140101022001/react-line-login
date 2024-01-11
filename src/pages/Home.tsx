import { useEffect, useState } from "react"
import liff from "@line/liff";
import { useNavigate } from "react-router-dom";

type Profile = {
    email?: string | null,
    name?: string | null,
    sub?: string | null
}

const initialProfile: Profile = {
    email: '',
    name: '',
    sub: ''
}

const Home = () => {
    const [profile, setProfile] = useState(initialProfile);
    const navigate = useNavigate();

    const logout = () => {
        liff.logout();
        navigate('/line-login-page')
    }

    useEffect(() => {
        const initLine = () => {
            liff.init({ liffId: import.meta.env.VITE_LINE_ID }, async () => {
                if (!liff.isLoggedIn()) {
                    navigate('/line-login-page')
                } else {
                    const profile = liff.getDecodedIDToken();
                    setProfile(profile!);
                }
            })
        }
        initLine()
    }, [navigate])


    return (
        <div className="container">
            <div className="box">
                <span>ID: {profile.sub}</span><br />
                <span>Name: {profile.name}</span><br />
                <span>Email: {profile.email}</span><br />
                <button className="" onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Home