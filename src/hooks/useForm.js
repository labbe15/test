import { useState } from 'react'

export function useForm(initialValues = {}, onSubmit) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      await onSubmit(values)
      setStatus({ type: 'success', message: 'Message envoyé avec succès!' })
      setValues(initialValues)
    } catch (error) {
      setStatus({ type: 'error', message: 'Une erreur est survenue.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setValues(initialValues)
    setStatus(null)
  }

  return {
    values,
    status,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset,
  }
}
