import React from 'react';
import useAuth from '../hook/useAuth';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const {googleLogin} = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result)
        })
    }


    return (
        <div className='px-4 mb-2'>
            <div >
                <button 
                onClick={handleGoogleLogin}
                className='btn btn-neutral'>
                    <FaGoogle className='mr-1' />
                Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;