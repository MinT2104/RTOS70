import relay from "@/assets/relay.png"
import { ApiClient } from "@/services/api/ApiClient";
import { Popconfirm, Switch } from 'antd';
import { useEffect, useState } from "react";
import { useGlobalStore } from "@/stores/global";
import { MdDeleteForever } from "react-icons/md";


const DashboardView = () => {
  const [renderState, setRenderState] = useState<any>([])
  const { isRefresh } = useGlobalStore()


  const getData = () => {
    ApiClient.get("data").then((res) => {
      setRenderState(res.data)
      console.log(res.data)
    })
  }

  const handleUpdateSwitch = (value: boolean, data: any) => {
    ApiClient.put(`data/${data.id}`, {
      name: data.name,
      id: data.id,
      timer: data.timer,
      isChecked: value === false ? "False" : "True"
    }).then((res) => {
      getData()
    })
  }

  const confirm = (id: number) => {
    ApiClient.delete(`data`).then((res) => {
      getData()
    })
  }
  const cancel = (id: number) => {}

  useEffect(() => {
    getData()
    console.log("refresh data")

  }, [isRefresh])
  return <div className="w-full h-full overflow-y-scroll scrollbar">
    <div className="grid grid-cols-2 gap-4 p-5">
      {
        renderState?.map((data: any, index: number) => (
          <div
            style={{ boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px` }}
            className="shadow-xl border w-full rounded-xl h-40 p-2 flex items-center flex-col px-4  justify-between" key={data.id}>
            <div className="flex items-center justify-between w-full">
              <h1 className="font-bold">{data.name}</h1>
              {/* <Popconfirm
                title="Delete the relay"
                description="Are you sure to delete this relay?"
                onConfirm={() => confirm(data.id)}
                onCancel={() => cancel(data.id)}
                okText="Yes"
                cancelText="No"
              > */}
              <MdDeleteForever onClick={() => confirm(data.id)} className="cursor-pointer text-red-500" />
              {/* </Popconfirm> */}
            </div>
            <img className="w-20" src={relay} alt="" />
            <Switch checked={data.isChecked === "False" ? false : true} onChange={(value) => handleUpdateSwitch(value, data)} />
          </div>
        ))
      }
    </div>
  </div>;

};

export default DashboardView;
