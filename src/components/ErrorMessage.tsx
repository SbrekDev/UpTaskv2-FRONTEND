import { ReactNode } from "react";


export default function ErrorMessage({children} : {children : ReactNode}) {
  return (
    <div className="text-center bg-red-500 my-4 text-white font-bold p-3 text-sm">
      {children}
    </div>
  )
}
