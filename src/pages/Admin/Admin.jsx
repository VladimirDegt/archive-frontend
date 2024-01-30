import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectStatusUser, selectToken } from "redux/users/selectors";


const { RegisterForm } = require("components/RegistrForm/RegistrForm");

function Admin () {
    const [isOpen, setIsOpen] = useState('');
    const { token } = useSelector(selectToken);
    const statusUser = useSelector(selectStatusUser);
    const navigate = useNavigate();

    useEffect(()=>{
        if((token && statusUser === 'admin') ) {
            setIsOpen(true)
            return
        }
        navigate('/archive', { replace: true });
    }, [isOpen, token, statusUser, navigate])

    return (
        <>
            {isOpen && <RegisterForm/> }
        </>
    )
}

export default Admin;