"use client"

import Menubar from "@/components/menubar"
import Carousel from "@/components/carousel"
import Categories from "@/components/categories"
import Catalogue from "@/components/catalogue"
import { 
    getBanners,
    getCategories,
    getCollections
} from "@/endpoints/ecommerce"
import { useEffect } from "react"
import { useState } from "react"
import { toCurrency } from "@/utils/number"

type BannerType = {
    mainBannerId: string,
    pcImageUrl: string,
}

type CategoryType = {
    mainShortcutId: string,
    title: string,
    imageUrl: string
}

type BannerUIType = {
    id: string,
    src: string
}

type CategoryUIType = {
    id: string,
    title: string,
    src: string
}

type PublicationType = {
  id: string,
  title: string,
  rating: string
}

type PriceInfoType = {
  discount: number,
  price: number
}

type MediaType = {
  uri: string
}

export default function Home() {
    const [banners, setBanners] = useState([] as BannerUIType[])
    const [categories, setCategories] = useState([] as CategoryUIType[])
    const [hotDeals, setHotDeals] = useState({
        title: "",
        subtitle: "",        
        items: []
    })
    const [collections, setCollections] = useState([] as any[])

    const fetchBanners = () => {
       getBanners((data: BannerType[]) => {
           console.log(data)
           const newBanners = data.map(item => {
               const id = item.mainBannerId
               const src = item.pcImageUrl

               return { id, src }
           })

           setBanners(newBanners)
       })
    }

    const fetchCategories = () => {
       getCategories((data: CategoryType[]) => {
           const newCategories = data.map(item => {
               const id = item.mainShortcutId
               const title = item.title
               const src = item.imageUrl

               return { id, title, src }
           })

           setCategories(newCategories)
       })
    }

    const fetchCollections = () => {
       getCollections((data: any[]) => {
           const first = data[0]
           const newItems = first.items.map((item: { publication: PublicationType, priceInfo: PriceInfoType, media: MediaType[] }) => {
               const data = item.publication 
               const priceInfo = data.priceInfo
               const media = data.media[0]
               const id = data.id
               const src = media.uri
               const title = data.title
               const discount = priceInfo.discountRate + "%"
               const price = toCurrency(priceInfo.price)
               const rating = data.rating

               return { id, src, title, discount, price, rating }
           })
           const newHotDeals = {
               "title": first.title,
               "subtitle": first.subtitle,
               "items": newItems
           }

           setHotDeals(newHotDeals)

           const newCollections = data.slice(1).map(item => {
               const id = item.id
               const title = item.title
               const subtitle = item.subtitle
               const items = item.items.map(item2 => {
                   const data = item2.publication 
                   const priceInfo = data.priceInfo
                   const media = data.media[0]
                   const id = data.id
                   const src = media.uri
                   const title = data.title
                   const discount = priceInfo.discountRate + "%"
                   const price = toCurrency(priceInfo.price)
                   const rating = data.rating

                   return { id, src, title, discount, price, rating }    
               })

               return { id, title, subtitle, items }
           })
           setCollections(newCollections)
       })
    }

    useEffect(() => {
        fetchBanners()
        fetchCategories()
        fetchCollections()

        return () => {}
    }, [])

  return (
    <div className="pb-8 flex justify-center bg-backdrop">
        <div className="bg-white md:max-w-none max-w-[420px] ">
          <Menubar />
          <Carousel
            images={banners}
          />
          <Categories
            items={categories}
        	  className="mt-[40px]"
          />

          <Catalogue
          	title={hotDeals.title}
          	subtitle={hotDeals.subtitle}
          	items={hotDeals.items}
            className={"mt-[56px]"}
          />

          <div className="flex flex-col mt-[56px] gap-[56px]">
              { collections.map(item => (
                  <Catalogue
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    items={item.items}
                    className={"mt-[56px]"}
                  />
              )) }
          </div>
        </div>
    </div>
  );
}
