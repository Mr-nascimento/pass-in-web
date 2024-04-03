import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<'button'>{
}

export function IconButton(props : IconButtonProps){
    return(
        <>
            {/* /* <button 
                {...props} 
                className={
                    transparent 
                    ? 'bg-black/20 border border-white/10 rounded-md p-1.5' 
                    : 'bg-white/10 border border-white/10 rounded-md p-1.5'
                }
            /> */}

            <button 
                {...props} 
                className={twMerge("bg-white/10 border border-white/10 rounded-md p-1.5", props.className)}
            />
        </>
    )
}