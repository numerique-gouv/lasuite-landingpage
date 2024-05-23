import { promises as fs } from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { GetStaticProps } from 'next'
import { parseMarkdown } from '@/utils/cms'
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

  // little tricks to alternate backgrounds if none are set,
  // making sure to also alternate between blocks that have set bgs
  service.flexible_content.forEach((block, i) => {
    if (i === 0 && (block.bg === 'auto' || block.bg === undefined)) {
      block.bg = 'blue'
      return
    }
    if (
      (block.bg === 'auto' || block.bg === undefined) &&
      (!service.flexible_content[i - 1].bg ||
        service.flexible_content[i - 1].bg === 'auto')
    ) {
      block.bg = 'blue'
      return
    }
  })

  return {
    props: {
      id: context.params.service,
      data: service,
    },
  }
}
