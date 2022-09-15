const MAINCOLOR = 'bg-darkBeige'

export default function DisplayCode({children}) {

    
    return (
        <div className="flex flex-row justify-center my-2">
            <div className=" w-screen">
                <div className={`flex ${MAINCOLOR} rounded-md p-4 justify-center`}>
                    {children}
                </div>
            </div>
        </div>
        
    )
}
