import React from 'react'
import ReactDOM from 'react-dom'
import { App as SendbirdApp} from '@sendbird/uikit-react'
import '@sendbird/uikit-react/dist/index.css'

// grabbed APP_ID from Sendbird sandbox demo 
// https://codesandbox.io/p/sandbox/1-1-using-sendbird-app-forked-ipv5r?file=%2Fsrc%2Fconst.js%3A3%2C24-3%2C61
export const APP_ID = '2D7B4CDB-932F-4082-9B09-A1153792DC8D';
export const USER_ID = 'testmctest';
export const NICKNAME = 'Testy Tester';

export function App() {
  return(
    <div style={{ height: '100vh' }}>
      <SendbirdApp
      // You can find your Sendbird application ID on the Sendbird dashboard.
      appId={APP_ID}
      // Specify the user ID you've created on the dashboard.
      // Or you can create a user by specifying a unique userId.
      userId={USER_ID}
      // accessToken={SENDBIRD_ACCESS_TOKEN}
      config={{ logLevel: 'all' }}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.body)
