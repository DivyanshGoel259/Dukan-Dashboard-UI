export const Overview = () => {
    return <div className="flex justify-between p-6">
        <div className="text-xl font-medium ">
            Overview
        </div>
        <div>
            <button >
                <div className="flex border items-center p-1 text-[#4D4D4D]">
                    <div className="text-md">
                        This Month
                    </div>
                    <div className="ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                </div>
            </button>
        </div>
    </div>
}