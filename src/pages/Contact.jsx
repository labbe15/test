import SectionTitle from '@components/SectionTitle'
import { useForm } from '@/hooks/useForm'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function Contact() {
  const handleFormSubmit = async (values) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    console.log('Form values:', values)
    // Here you would send the data to your backend
  }

  const { values, status, isSubmitting, handleChange, handleSubmit } = useForm(
    initialValues,
    handleFormSubmit
  )

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title="Contact"
          subtitle="Un besoin, une question ? Réponse rapide."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="card space-y-3">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                className="mt-1 w-full border border-wood-300 rounded-xl p-3 focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                className="mt-1 w-full border border-wood-300 rounded-xl p-3 focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Téléphone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                className="mt-1 w-full border border-wood-300 rounded-xl p-3 focus:ring-2 focus:ring-brand-accent focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                className="mt-1 w-full border border-wood-300 rounded-xl p-3 min-h-[120px] focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                required
              />
            </div>
            <button
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi...' : 'Envoyer'}
            </button>
            {status && (
              <p
                className={`text-sm ${
                  status.type === 'success' ? 'text-green-700' : 'text-red-700'
                }`}
                role="alert"
              >
                {status.message}
              </p>
            )}
          </form>

          <div className="card">
            <h3 className="text-xl font-semibold">Coordonnées</h3>
            <p className="mt-2 text-wood-700">Gaillac, Albi, Toulouse Est</p>
            <p className="text-wood-700">contact@menuiserie-prestige.fr</p>
            <div className="mt-4">
              <div className="rounded-2xl bg-wood-200 aspect-[4/3] flex items-center justify-center text-wood-700">
                Carte (placeholder)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
