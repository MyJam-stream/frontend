import { FC, ComponentProps } from 'react'
import { CreateStream } from '@/components/CreateStream'
import { BackgroundContainer } from '@/components/BackgroundContainer'

const CreatePage: FC<ComponentProps<any>> = ({ children }) => {
  return (
    <BackgroundContainer>
      <div className="flex justify-center items-center h-full w-full relative">
        <CreateStream />
      </div>
    </BackgroundContainer>
  )
}

export default CreatePage
