        

export const Topbar = ()=>{

    return (
        <div>
            <div className="flex   p-2 justify-between  shadow-md items-center">
                <div className="flex items-center">
                    <div>
                        <button className="ml-3 block md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="ml-3 text-[#1A181E] font-medium text-xl items-center">
                        Payouts
                    </div>
                    <div className="flex text-[#4D4D4D] items-center">
                        <div className="items-center ml-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>

                        </div>
                        <div className="text-xs ml-1 items-center hidden sm:visible ">
                            How it works
                        </div>
                    </div>
                </div>
              
                <div className="flex m-2  items-center p-2 bg-[#F2F2F2] lg:w-[400px] w-[140px] sm:w-[250px] text-[#808080] rounded ">
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </div>
                    <div className="ml-1">
                        <input type="text" placeholder="Search Feautures,Tutorials etc.." className="bg-transparent w-full outline-none" />
                    </div>
                </div>
                <div className="flex justify-end mr-4">
                    <div className="ml-2">
                        <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>

                        </button>
                    </div>
                    <div className="ml-2">
                        <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>


                        </button>
                    </div>
                </div>
                

            </div>
            
        </div>
    )
}