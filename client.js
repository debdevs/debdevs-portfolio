import  sanityClient  from "@sanity/client";
import imageUrlBuilder  from "@sanity/image-url";
export const client = sanityClient({
    projectId: 'ac99yawh',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN 
});


const builder = imageUrlBuilder({

    projectId: 'ac99yawh',
    dataset: 'production',
  })
export const urlFor = (source) => builder.image(source);


// const urlFor = (source) => builder.image(source)

