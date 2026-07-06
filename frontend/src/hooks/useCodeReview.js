import { useState } from 'react'
import axios from 'axios'

export function useCodeReview() {
  const [code, setCode] = useState(`function sum(a, b) {\n  return a + b\n}`)
  const [language, setLanguage] = useState('javascript')
  const [review, setReview] = useState('')
  const [loading, setLoading] = useState(false)

  async function reviewCode() {
    if (loading) return
    setLoading(true)
    setReview('')
    try {
      const apiUrl = https://ai-code-reviewer-api-5h5s.onrender.com/
      const response = await axios.post(`${apiUrl}/review/analyze`, { code, language })
      setReview(response.data)
    } catch (error) {
      const msg =
        error.response?.status === 429
          ? '**Rate limit reached.** Please wait a moment and try again.'
          : '**Something went wrong.** Please check that the backend server is running.'
      setReview(msg)
    } finally {
      setLoading(false)
    }
  }

  return { code, setCode, language, setLanguage, review, loading, reviewCode }
}
