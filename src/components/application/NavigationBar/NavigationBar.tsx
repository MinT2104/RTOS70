
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiViewGrid } from "react-icons/hi";
import { IoAddCircleSharp } from "react-icons/io5";
import { PiClockCountdownFill } from "react-icons/pi";
import { ApiClient } from "@/services/api/ApiClient";
import { useGlobalStore } from "@/stores/global";


const NavigationBar = () => {
    const [getPath, setGetPath] = useState("");
    const [pathActive, setPathActive] = useState(getPath);
    const { isRefresh, setIsRefresh } = useGlobalStore()

    const handleChangeSwitch = () => {
        ApiClient.post("post").then((res) => console.log(res))
        setIsRefresh(!isRefresh)
    }

    useEffect(() => {
        setPathActive(window.location.pathname);
    }, [getPath]);

    return (
        <div className="absolute animate-none flex text-white flex-col justify-between bg-white border-t w-full h-20 z-0 bottom-0">
            <div>
                <div className="z-0 flex gap-2 justify-center">
                    <Link
                        onClick={() => {
                            setGetPath("/");
                        }}
                        to="/"
                        className={` w-1/3
             outline-none font-normal flex items-center justify-center gap-4 rounded p-4 duration-300 cursor-pointer `}
                    >
                        <HiViewGrid className="text-[40px] text-slate-400 ml-10" />
                        {/* <h1 className="text-sm">Overview</h1> */}
                    </Link>
                    <Link
                        onClick={() => handleChangeSwitch()}
                        to="/"
                        className={` w-1/3
                ${pathActive === "/management"
                                ? "color-Primary text-white"
                                : "text-black"
                            }
               outline-none font-normal flex items-center justify-center gap-4 rounded duration-300 cursor-pointer `}
                    >
                        <IoAddCircleSharp className="text-[50px] text-sky-500" />
                    </Link>
                    <Link
                        onClick={() => {
                            setGetPath("/timer");
                        }}
                        to="/timer"
                        className={` w-1/3
               dark:bg-transparent dark:text-white outline-none font-normal flex items-center justify-center gap-4 hover:color-Primary hover:text-white rounded duration-300 cursor-pointer `}
                    >
                        <PiClockCountdownFill className="text-[40px] text-slate-400 mr-10" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default NavigationBar;
