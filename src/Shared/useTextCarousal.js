import { useMemo, useState } from "react"

const useTextCarousal = () => {
    const [text, setText] = useState("")
    const data = useMemo([
        "Fullstack developer",
        "UI developer"
    ])


}

export default useTextCarousal