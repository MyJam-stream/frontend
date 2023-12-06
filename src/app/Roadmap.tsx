'use client'
import { useEffect } from 'react'
import { useSpring, animated as a } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import cx from 'clsx'
import { RoadmapPassedItems, RoadmapUnpassedItems } from '@/utils/constants'
import ScrollProgress from '@/components/Progress'

const Roadmap: React.FC = () => {
  return (
    <div className="my[80px] flex flex-col items-center">
      <div className="mb-[48px] text-center">
        <div className="font-semibold text-[48px] leading-[67.2px]">
          Roadmap
        </div>
        <div className="text-[36px]">Empowering Musicians with Web3 Tech</div>
      </div>
      <div className="relative mx-auto mb-[48px] w-full max-w-[800px]">
        <div className="absolute bottom-[0px] left-[16px] sm:left-[50%] -ml-[1.5px] w-[3px] h-[66.7%] opacity-30" />
        <ScrollProgress containerId="process" gradientPer={33} />
        <div className="w-full" id="process">
          <div className="w-full" id="processPassed">
            {RoadmapPassedItems.map((item) => (
              <RoadmapItem
                key={item.title}
                title={item.title}
                description={item.description}
                date={item.date}
                passed
              />
            ))}
          </div>
          <div className="relative w-full">
            {RoadmapUnpassedItems.map((item) => (
              <RoadmapItem
                key={item.title}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export interface RoadmapItemProps {
  title: string
  description: string
  date: string
  passed?: boolean
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({
  title,
  description,
  passed,
  date,
}) => {
  const { ref, inView } = useInView({
    rootMargin: '100px 0px -100px 0px',
    triggerOnce: true,
    threshold: 1,
  })

  const [wSprings, wApi] = useSpring(() => ({
    from: { width: '0%' },
  }))

  const [oSprings, oApi] = useSpring(() => ({
    from: { opacity: '0' },
  }))

  useEffect(() => {
    if (inView) {
      wApi.start({
        from: {
          width: '0%',
        },
        to: {
          width: '100%',
        },
      })
      oApi.start({
        from: {
          opacity: '0',
        },
        to: {
          opacity: '1',
        },
      })
    }
  }, [inView])

  return (
    <div
      ref={ref}
      className="ml-[16px] mr-[10px] sm:mr-[0px] sm:ml-[0px] my-[80px] pr-[20px] sm:pr-[0px] flex flex-col sm:flex-row justify-center items-center sm:items-start"
    >
      <div className="flex flex-col sm:flex-row justify-end items-start sm:items-end w-full sm:w-[50%]">
        <a.div
          style={{ ...oSprings }}
          className="mr-[15px] mb-[8px] sm:-mb-[4px] ml-[16px]"
        >
          {date}
        </a.div>
        <div className="p-[16px] sm:p-[8px] -ml-[1.5px] relative w-full">
          <div className="text-[20px] font-medium">{title}</div>
          <a.div
            style={{ ...wSprings }}
            className={cx(
              'absolute right-[0px] bottom-[0px] -mb-[3px] h-[3px] bg-[#FDE694]',
              !passed && 'opacity-30'
            )}
          />
        </div>
      </div>
      <a.div
        style={{ ...oSprings }}
        className="p-[16px] flex justify-start sm:justify-end items-center w-full sm:w-[50%]"
      >
        <div
          className='underline"'
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {/* {description} */}
      </a.div>
    </div>
  )
}

export default Roadmap
