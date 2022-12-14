import { CheckCircleOutlined } from "@ant-design/icons"
import { Typography } from "antd"
import cn from 'classnames'
import React from "react"

const { Text } = Typography

interface SuccessMessageProps {
    isActive?: boolean
}

const SuccessMessage = ({ isActive }: SuccessMessageProps): JSX.Element => {
    return (
        <div 
            className={cn(
                "text-[#49aa19] flex flex-col items-center justify-center w-full h-full absolute top-0 opacity-0 duration-700 z-10",
                isActive && 'opacity-100'
            )}>
            <CheckCircleOutlined className="text-5xl"/>
            <Text className="text-[#49aa19] text-center font-semibold mt-6 text-lg">Track uploaded <br/> successfully</Text>
        </div>
    )
}

export default React.memo(SuccessMessage)