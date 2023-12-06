import { RoadmapItemProps } from '@/app/Roadmap'

export const RoadmapPassedItems: RoadmapItemProps[] = [
  {
    date: 'October 2023',
    title: 'ETHOnline Hackathon',
    description:
      'MyJam was born as a hackathon project idea during ETHOnline 2023: “a decentralized audio streaming platform that empowers musicians and engages audiences in real-time” the team was formed by Ceci, Ricy, Shaka, Johnathan and Rodrigo. <a href="https://ethglobal.com/showcase/myjam-4w705" target="_blanck" className="underline"> Learn more &gt; </a>',
  },
  {
    date: 'November 2023',
    title: '#GG19 SheFi Round',
    description:
      'Shortly after the hackathon we applied for the Gitcoin Grant Round 19 with SheFi. We were able to draw lots of support from SheFi community, and got donation from 42 contributors. <a href="https://explorer.gitcoin.co/#/round/10/0x36f548e082b09b0cec5b3f5a7b78953c75de5e74/0x36f548e082b09b0cec5b3f5a7b78953c75de5e74-5" target="_blanck" className="underline"> Learn more &gt; </a>',
  },
]

export const RoadmapUnpassedItems: RoadmapItemProps[] = [
  {
    date: 'January 2024',
    title: 'User Interface and Optimization',
    description:
      'Implement the planned UI design and integrate WalletConnect to optimize mobile use.',
  },
  {
    date: 'February 2024',
    title: 'Enhancing Creator Monetizing methods',
    description:
      'Enable musicians to monetizing on watching streaming. Provide various options for creators to monetizing on watching streaming, engagement and donation.',
  },
  {
    date: 'February 2024',
    title: 'Recommendation and schedule system',
    description:
      'Implement a scheduling system to allow users to plan and announce live streams in advance.',
  },
  {
    date: 'March 2024',
    title: 'Identity and Cross-Platform Integration',
    description:
      "Explore opportunities for cross-platform integration, expanding MyJam's accessibility.",
  },
]

export const CHAIN_ID = '80001'
