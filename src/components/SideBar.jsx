export const SideBar = ({
    availableCredits,
    title
}) => {

    return (
        <div className="bg-[#1E2640]">
            <div className="flex justify-between flex p-4  items-center">
                <div className=" flex " >
                    <div className="flex">
                        <div className=" mt-1 bg-white rounded h-9 w-9 items-center">
                            <img src="\src\assets\nishyan.760570e2 (1).svg" alt="NishyamImage" className="items-center" />
                        </div>


                    </div>
                    <div className="items-center">
                        <div className="text-white font-semibold ml-3">
                            {title}
                        </div>
                        <div className="ml-3 underline  leading-[16px] text-[13px] font-extralight  text-[#D2D4D9]">
                            Visit Store
                        </div>
                    </div>

                </div>
                <div className="text-white items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
            <div>
                <div className="hover:bg-white-100">
                    <button >
                        <div className="flex text-white p-2 m-2 items-center ">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                            </svg>
                            </div>
                            <div className="ml-2 ">
                                Home
                            </div> 
                        </div>                      

                    </button>
                </div>
            </div>
        </div>
    )
}