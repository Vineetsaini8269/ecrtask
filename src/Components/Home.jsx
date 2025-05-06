import { useNavigate } from 'react-router-dom'; // ✅ Correct import
import * as React from 'react';
import Button from '@mui/material/Button';

const Home = () => {
    const navigate = useNavigate();

    const helpHandler = () => {
        navigate('/help'); // ✅ This will now work
    }
    const SuperHandler = () => {
        navigate('/admin'); // ✅ This will now work
        
    }
    const queriesHandler = () => {
        navigate('/quieries'); // ✅ This will now work
    }
    
    return (
        <div>
            <div className='flex flex-col justify-center items-center w-10/12 mx-auto gap-10 my-20'>
                <h1 className="font-bold text-3xl">Welcome to Dashboard Page</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint totam atque p laceat quasi
                    odit vel similique quibusdam eveniet pariatur magni accusamus molestiae porro numquam 
                    doloremque, ullam laboriosam beatae ex facere, molestias doloribus provident...
                </p>
            </div>

            <div className='flex justify-center items-center'>
                {/* <button 
                    onClick={helpHandler}
                    className='border-1 hover:bg-blue-800 border-black bg-blue-500 cursor-pointer rounded-xl px-3 py-4 text-white font-[800]'
                >
                    Need help ..?
                </button > */}
                <Button
                onClick={helpHandler}
                variant="contained">Need help ..?</Button>

                <Button
                sx={{margin:'10px'}}
                onClick={SuperHandler}
                variant="contained">Admin Page</Button>

                <Button
                sx={{margin:'10px'}}
                onClick={queriesHandler}
                variant="contained">Quries</Button>
            </div>
        </div>
    );
}

export default Home;
