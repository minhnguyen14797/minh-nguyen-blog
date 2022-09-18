const MAINCOLOR = 'bg-darkBeige text-dark dark:text-light dark:bg-dark3'

export default function DisplayCode({children}) {

    
    return (
        <div className="flex flex-row justify-center my-2">
            <div className=" w-screen display-code">
                <div className={`flex ${MAINCOLOR} rounded-md p-4 justify-center`}>
                    {children}
                </div>
            </div>
        </div>
        
    )
}
