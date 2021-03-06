import { MenuEntry } from '@wakandaswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.wakandaswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.wakandaswap.finance/#/pool',
      },
    ],
  },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'IWO',
    icon: 'PoolIcon',
    href: '/iwo',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'WakandaSwap',
        href: 'https://wakandaswap.info/token/0x5344c20fd242545f31723689662ac12b9556fc3d',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/wakanda-inu/',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/wakanda-inu/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x5344c20fd242545f31723689662ac12b9556fc3d',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/wakandaswap/',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://goosedefi.gitbook.io/wakanda-inu//',
      // },
      {
        label: 'Blog',
        href: 'https://wakandainu.medium.com/',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IWO',
  //   icon: 'IfoIcon',
  //   href:
  //     'https://google.com',
  // },
  {
    label: 'Audit by CertiK',
    icon: 'ShieldIcon',
    href: 'https://certik.org/projects/wakanda-inu/',
  },
]

export default config
