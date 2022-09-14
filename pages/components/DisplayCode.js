

const MAINCOLOR = 'bg-darkBeige'
const BARCOLOR = 'bg-stone-300'

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



// <div className={`${BARCOLOR} px-2 py-1 rounded-t-md text-dark`}>
// <span className="ml-2">Example</span>
// </div>