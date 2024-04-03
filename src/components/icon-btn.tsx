import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<'button'>{
}

export function IconButton(props : IconButtonProps){
    return(
        <>          

            <button 
                {...props} 
                className={twMerge(
                    "bg-white/10 border border-white/10 rounded-md p-1.5", 
                    props.className, 
                    props.disabled ? 'opacity-50' : null
                )}
            />
        </>
    )
}