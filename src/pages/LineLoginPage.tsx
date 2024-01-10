import liff from "@line/liff";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const LineLoginPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const initLine = () => {
            liff.init({liffId: import.meta.env.VITE_LINE_ID}, async () => {
                if(liff.isLoggedIn()) {
                    navigate('/')
                } else {
                    liff.login();
                }
            })
        }
        initLine()
    }, [navigate])

    return (
        <div>LineLoginPage</div>
    )
}

export default LineLoginPage