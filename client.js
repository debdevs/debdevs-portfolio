import  sanityClient  from "@sanity/client";
import imageUrlBuilder  from "@sanity/image-url";
export const client = sanityClient({
    projectId: 'ac99yawh',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token: 'skxFP8Iig4cVAJ9yr5JqgLVw6DpiO8jqYCjGAgz9zZbup6EI0x9OGOebaTOeFMhZdqQfbzaPNbzY98ockRaAH4j9BhbQVOqIDFFxGrW0kcJNn7Xb7Z0Frihl8CQ7VAwc6XMO5AwcaFsajbM0cAE1cAIo1HwuoHhcpPBWPrWkZIItVKgOXEQr',
});


const builder = imageUrlBuilder({

    projectId: 'ac99yawh',
    dataset: 'production',
  })
export const urlFor = (source) => builder.image(source);



// const urlFor = (source) => builder.image(source)

