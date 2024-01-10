import liff from "@line/liff";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LineLoginPage = () => {
    const navigate = useNavigate();

    const lineLogin = () => {
        liff.login();
    }
    useEffect(() => {
        const initLine = () => {
            liff.init({liffId: import.meta.env.VITE_LINE_ID}, async () => {
                if(liff.isLoggedIn()) {
                    navigate('/')
                }
            })
        }
        initLine()
    }, [navigate])

    return (
        <div>
            <button onClick={lineLogin}>Line Login</button>
        </div>
    )
}

export default LineLoginPage