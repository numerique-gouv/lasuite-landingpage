import { promises as fs } from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { GetStaticProps } from 'next'
import { addAutoBackgrounds, parseMarkdown } from '@/utils/cms'
import { LandingPage } from '@/components/LandingPage'
import { LandingPageSchema } from '@/cms/landing-page.schema'
import '@gouvfr/dsfr/dist/dsfr/dsfr.css'

export default function ServiceLandingPage({
  id,
  data,
}: {
  id: string
  data: LandingPageSchema
}) {
  return <LandingPage {...{ id, data }} />
}

export const getStaticPaths = async () => {
  const enabledServices = await fs
    .readdir(path.join(process.cwd(), 'content', 'landing-pages', 'fr'))
    .then((files) =>
      files
        .filter((file) => file.endsWith('.yml'))
        .map((file) => file.replace(/\.yml$/, ''))
    )

  return {
    paths: enabledServices.map((service) => ({ params: { service } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.service) {
    throw Error('No service provided')
  }

  let serviceFile
  try {
    serviceFile = await fs.readFile(
      path.join(
        process.cwd(),
        'content',
        'landing-pages',
        'fr',
        `${context.params.service}.yml`
      ),
      'utf8'
    )
  } catch (error) {
    throw Error(`No data found for ${context.params.service}`)
  }

  let service: LandingPageSchema
  try {
    service = await parseMarkdown(yaml.load(serviceFile) as LandingPageSchema)
  } catch (error) {
    console.log(error)

    throw Error(`Error parsing ${context.params.service}.json file`)
  }

  if (service.enabled === false) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      id: context.params.service,
      data: addAutoBackgrounds(service),
    },
  }
}
