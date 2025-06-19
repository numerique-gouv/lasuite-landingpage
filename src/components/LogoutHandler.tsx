import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function LogoutHandler() {
  const router = useRouter()

  useEffect(() => {
    if (router.query.logout === 'true') {
      // Nettoyage du localStorage
      localStorage.removeItem('access_token')
      localStorage.removeItem('id_token')
      localStorage.removeItem('refresh_token')
      localStorage.removeItem('user_info')

      // Redirection vers la page d'accueil sans le paramètre logout
      router.replace('/', undefined, { shallow: true })
    }
  }, [router.query.logout])

  return null
} 