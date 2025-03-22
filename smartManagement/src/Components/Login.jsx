import React from "react";

function Login()
{
    return(
        <>
        <div className="w-full min-h-[80vh] bg-gray-200 pt-[100px] pb-[100px]">
            <div className="w-[700px] h-[700px] bg-white m-auto pt-[40px] pb-[40px] pl-[60px] pr-[60px] mb-10 border-[2px] border-black ">
                <h1 className="mt-[20px] mb-[20px] ml-0 mr-0 font-bold text-[32px] ">Login</h1>
                <div className="flex flex-col gap-[29px] mt-[30px]   ">
                    <input className="h-[72px] w-full pl-[20px] border-[1px] border-gray-300 outline-none bg-gray-100 text-[18px]  " type="text" placeholder="Username" />
                    <input className="h-[72px] w-full pl-[20px] border-[1px] border-gray-300 outline-none bg-gray-100 text-[18px]  " type="email" placeholder="Email Address" />
                    <input className="h-[72px] w-full pl-[20px] border-[1px] border-gray-300 outline-none bg-gray-100 text-[18px]  " type="password" placeholder="Password" />
                </div>    
                <div className="flex justify-center mt-[25px] gap-[20px] text-gray-600 text-[18px] font-medium  ">
                        <input type="checkbox" name="" id="" />
                        <p>By continuing, i agree to the terms of use & privacy policy.</p>
                    </div>
                    <button className="w-full h-[72px] text-white bg-blue-700 mt-[30px] border-none text-[24px] font-medium cursor-pointer  ">Continue</button>
            </div>
        </div>
        </>
    )
}

export default Login;