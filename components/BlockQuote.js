

export default function BlockQuote({children, author}) {
  return (
    <div className={`bg-green-400 rounded-lg relative mt-8`}>
        <span className="absolute -top-[100px] bg-red-400/30 text-[200px] text-green-600/50 select-none h-0">“</span>
        <div className="p-8 pb-4 leading-7">
            {children}
            <span className={`text-gray-700/50 italic mt-3 block`}>- {author}</span>
        </div>
        
    </div>
  )
}
