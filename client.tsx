import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;



const client = createClient({
  projectId: projectId, // you can find this in sanity.json
  dataset: dataset, // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-05-04'
})

export default client

const builder = imageUrlBuilder(client)

export const urlFor = (source:any) => builder.image(source);

