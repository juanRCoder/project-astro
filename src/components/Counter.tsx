import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex gap-4">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-orange-500 w-24 py-1 rounded-sm"
      >
        Agregar
      </button>
      <button
        onClick={() => setCount(0)}
        className="bg-orange-500 w-24 py-1 rounded-sm"
      >
        Resetear
      </button>
      <p className="text-center text-lg">{count}</p>
    </div>
  )
}
