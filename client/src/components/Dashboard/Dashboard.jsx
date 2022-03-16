import { useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-node"
import useAuth from './../../hooks/useAuth';

import { CLIENT_ID } from '../../../environment'

const spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
})

export default function Dashboard({ code }) {
  const accessToken = useAuth(code)

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  return (
    <div>
        {accessToken}
    </div>
  )
}