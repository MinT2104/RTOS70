import { ApiClient } from "@/services/api/ApiClient";
import { useGlobalStore } from "@/stores/global";
import React, { useEffect, useState } from "react";
import { IoTimer } from "react-icons/io5";

const TimerView = () => {
    const [renderState, setRenderState] = useState<any>([])
    const [isOpenPopup, setIsOpenPopup] = useState({ isOpen: false, id: NaN})
    const { isRefresh } = useGlobalStore()

    const getData = () => {
        ApiClient.get("data").then((res) => {
            setRenderState(res.data)
            console.log(res.data)
        })
    }

    const timerMock = [
        {
            id: 1,
            title: "5",
        },
        {
            id: 2,
            title: "10",
        },
        {
            id: 3,
            title: "15",
        },
        {
            id: 4,
            title: "20",
        },
    ]
    
    const handleSetTimer = (id: any) => {
            const timerData = {
            id: isOpenPopup.id,
            toAction: renderState[isOpenPopup.id - 1].isChecked === "False" ? "True" : "False",
            time: timerMock[id - 1].title,
            data: {
                ...renderState[isOpenPopup.id - 1],
                isChecked: renderState[isOpenPopup.id - 1].isChecked === "False" ? "True" : "False",
                timer: "0"
            }
        }
        const updateTimerObj = { ...renderState[isOpenPopup.id - 1], timer: timerMock[id - 1].title }
        ApiClient.put(`data/${isOpenPopup.id}`, updateTimerObj).then((res) => {
            getData()
        })
        ApiClient.post("/timer", timerData).then((res) => {
            console.log(res.data)
        })
        setIsOpenPopup({ isOpen: false, id: NaN })
    }
    useEffect(() => {
        getData()
    }, [isRefresh])

    return <div className="w-full h-full overflow-y-scroll scrollbar">
        {
            isOpenPopup.isOpen ?
                <div className="absolute flex items-center justify-center h-full w-full z-50">
                    <div onClick={() => setIsOpenPopup({ isOpen: false, id: NaN })} className="absolute z-10 bg-slate-500 w-full h-full opacity-50" />
                    <div className="z-50 h-60 w-[200px] bg-white rounded-xl truncate">
                        {
                            timerMock.map((data)=>{
                                return(
                                    <div onClick={() => handleSetTimer(data.id)} className="h-1/4 flex items-center justify-center font-semibold border cursor-pointer" key={data.id}><span>Set Timer for {data.title}s</span></div>
                                )
                            })
                        }
                    </div>
                </div>
                : null
        }
        <div className="grid grid-cols-1 gap-2 p-5">
            {
             renderState[0] && renderState?.map((data: any, index: number) => (
                    <div

                        onClick={() => setIsOpenPopup({isOpen: true, id: index + 1})}
                        style={{ boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px` }}
                        className={`shadow-xl border w-full rounded-xl h-20 p-2 flex items-start px-4 cursor-pointer justify-between ${ isOpenPopup.isOpen && isOpenPopup.id === index + 1 ? "bg-sky-300" : "bg-white"}`} key={index}>
                        <div className="flex items-start flex-col justify-between w-full">
                            <h1 className={`font-bold ${isOpenPopup.isOpen && isOpenPopup.id === index + 1 ? "text-white" : "text-black"}`}>{data.name}</h1>
                            {
                                data.timer !== "0" ?
                                    <span className="text-green-600 text-[12px]">{data.timer}s to turn {data.isChecked === "False" ? "on" : "off"} relay {data.id}</span>
                                    :
                                    <span className="text-red-600 text-[12px]">Timer is not working</span>
                            }
                            <span className={`font-bold ${data.isChecked !== "False" ? "text-green-600" : "text-red-600"}`}>{data.isChecked === "False" ? "OFF" : "ON"}</span>
                        </div>
                        <div className="flex flex-col">
                            <IoTimer className={`h-7 w-7 ${data.timer !== "0" ? "text-green-600" : "text-slate-300"}`} />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>;
};

export default TimerView;
