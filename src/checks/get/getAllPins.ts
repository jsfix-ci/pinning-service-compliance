import { ApiCall } from '../../ApiCall'
import type { ServiceAndTokenPair } from '../../types'
import { allPinStatuses, getJoiSchema } from '../../utils/constants'

const getAllPins = async (pair: ServiceAndTokenPair) => {
  const allPinsApiCall = new ApiCall({
    pair,
    title: 'List pin objects (GET /pins) in all states',
    fn: async (client) => await client.pinsGet({ status: allPinStatuses }),
    schema: await getJoiSchema('PinResults')
  })

  allPinsApiCall.expect({
    title: 'Response is successful',
    fn: ({ apiCall }) => apiCall.response.ok
  })
  allPinsApiCall.expect({
    title: 'Response statusCode is 200',
    fn: ({ apiCall }) => apiCall.response.status === 200
  })
  await allPinsApiCall.runExpectations()
}

export { getAllPins }