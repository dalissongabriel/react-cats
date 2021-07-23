import { HttpPostClientSpy } from '../../data/mockHttpClient'
import { RemoteAuthentication } from './remoteAuthentication'

describe('RemoteAuthentication', () => {
  test('Should call HttPostClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
