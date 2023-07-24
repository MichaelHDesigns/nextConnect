import { Account } from '../components/Account'
import { Balance } from '../components/Balance'

import { Connect } from '../components/Connect'
import { Connected } from '../components/Connected'

import { SendTransaction } from '../components/SendTransaction'
import { SendTransactionPrepared } from '../components/SendTransactionPrepared'

import { WatchPendingTransactions } from '../components/WatchPendingTransactions'


export default function Page() {
  return (
    <div>
      <h1>wagmi + Next.js</h1>
      <Connect />
      <Connected>
        <hr />

        <h2>Account</h2>
        <Account />
        <br />
        <hr />
        <h2>Balance</h2>
        <Balance />
        <br />
        <hr />


        <h2>Send Transaction</h2>
        <SendTransaction />
        <br />
        <hr />
        <h2>Send Transaction (Prepared)</h2>
        <SendTransactionPrepared />
        <br />
        <hr />

        <h2>Watch Pending Transactions</h2>
        <WatchPendingTransactions />
        <br />
        <hr />
 
      </Connected>
    </div>
  )
}
