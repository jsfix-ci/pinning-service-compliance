import { RemotePinningServiceClient, Configuration } from '@ipfs-shipyard/pinning-service-client'

import { requestResponseLogger, RequestResponseLoggerOptions } from './middleware/requestReponseLogger'
import type { ServiceAndTokenPair } from './types'

function clientFromServiceAndTokenPair ([endpointUrl, accessToken]: ServiceAndTokenPair, middleWareOptions: RequestResponseLoggerOptions): RemotePinningServiceClient {
  const config = new Configuration({
    endpointUrl,
    accessToken,
    middleware: [
      requestResponseLogger(middleWareOptions)
    ]
  })

  return new RemotePinningServiceClient(config)
}

export { clientFromServiceAndTokenPair }