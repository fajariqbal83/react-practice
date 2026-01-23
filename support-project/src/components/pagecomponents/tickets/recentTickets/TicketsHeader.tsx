import { MoveDown } from "lucide-react"

const TicketsHeader = () => {
  return (
    <div className="grid grid-cols-[0.1fr_1fr_1fr_0.5fr_0.5fr_1fr_0.2fr]
    items-center px-4 py-4 text-xl text-gray-500 border-b border-gray-300">
      <input  type="checkbox"   className="w-5 h-5 accent-blue-600"
/>
      <div>REQUESTER</div>
      <div>SUBJECT</div>
      <div>AGENT</div>
      <div>STATUS</div>
      <div className="flex flex-row gap-2 items-center">LAST MESSAGE <span><MoveDown size={20} strokeWidth={2.5} color="#747272" /></span></div>
      <div></div>
    </div>
  )
}

export default TicketsHeader
