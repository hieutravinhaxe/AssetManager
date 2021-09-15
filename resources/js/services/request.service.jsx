import Repository from './repository'

class RequestService {
  async getAllRequests(credentials) {
    const endpoint = '/returnings'
    const response = await Repository.get(endpoint, credentials)
    return response
  }

  async getStateInRequestList() {
    const endpoint = `/returnings/states`
    const response = await Repository.get(endpoint)
    return response
  }

  async cancelRequest(id) {
    const endpoint = `/returnings/${id}`
    const response = await Repository.delete(endpoint)
    return response
  }

  async completeRequest(id, credentials) {
    const endpoint = `/returnings/${id}`
    const response = await Repository.patch(endpoint, credentials)
    return response
  }
}

export default new RequestService()
