
import { gqlClient } from "../../lib/graphql-client";
import {gql} from "graphql-request";
import Image from "next/image"

interface galleryItem{
    id: string,
    fileName: string,
    // assetTitle: string,
    // assetDescription: string,
    url: string,
    width: number,
    height: number
}

interface gallery{
    createdAt: string,
    gallerySlug: string,
    id: string,
    publishedAt: string,
    title: string,
    updatedAt: string,
    galleryItems: galleryItem
}


const getMainGalleryQuery = gql`query Galleries {
    galleries(where: {gallerySlug:"main-gallery"}) {
      createdAt
      gallerySlug
      id
      publishedAt
      title
      updatedAt
      galleryItems{
        id,
        fileName,
        url,
        width,
        height
      }
    }
  }`;


const Page = async ()=>{
    const gal = await gqlClient.request(getMainGalleryQuery);
    let items = gal.galleries[0].galleryItems;
    console.log(items)
    return(
        <>
            <ul>
                {
                items.map((e: galleryItem) =>{
                    return(<li key={e.id}>
                    <Image src={e.url} alt={e.fileName} width={e.width} height={e.height}></Image>
                    </li>
                    )
                })
                }
          
            </ul>
        </>
    )
}

export default Page;