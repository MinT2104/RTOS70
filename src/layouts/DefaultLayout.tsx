import NavigationBar from "@/components/application/NavigationBar/NavigationBar"
import Header from "@/components/element/Header"

export const DefaultLayout = ({ children }: any) => {

    return (
        <div className="scrollbar bg-slate-500 flex justify-center items-center h-screen relative">
            <div className="relative w-[390px] md:h-[95%] pt-16 pb-20 h-screen flex bg-white md:rounded-xl overflow-hidden text-black">
                <NavigationBar />
                <Header />
                {children}
            </div>
        </div>
    )
}