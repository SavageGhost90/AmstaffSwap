import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 4 ) should always be at the top of the file we use them for price strings.
   */
  {
    pid: 0,
    lpSymbol: 'AMF',
    lpAddresses: {
      97: '0x55eeCf210E4bB36534077083423e579869CF7Cc0',
      56: '0x77639ee74CD99cF99c6340d50a66BEC7aD4DCf96',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'AMF-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0a543538a3615d231e99db1e265d5f5d3a4c289a',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'AMF-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xf8130c6d2f8444280086f19c6a7197a2839a91d2',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  /* Add new farms below this line */
   
  
  
 ]

 export default farms
