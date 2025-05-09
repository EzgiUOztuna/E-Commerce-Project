import { clientsData } from "../../public/dataStore/clientsData";

export default function Clients() {
    return <>
        <div className="bg-[#FAFAFA] lg:h-[11rem]">
            <div className="flex flex-col items-center py-24 gap-16
                            lg:w-[70rem] lg:mx-auto lg:py-12 lg:flex-row lg:items-center lg:gap-8">
                {clientsData.map((item, index) => (
                    <div key={index}
                        className="lg:w-[153px]">
                        <img src={item.img}></img>
                    </div>
                ))}
            </div>

        </div>



    </>
}