import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, keywords }) {
  const siteTitle = 'Menuiserie Prestige'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const defaultDescription =
    'Menuiserie sur-mesure - Fenêtres, portes, pergolas, terrasses. Artisan qualifié dans le Tarn (Gaillac, Albi, Toulouse Est).'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
