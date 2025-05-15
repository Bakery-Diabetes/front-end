import { sanityFetch } from './sanity'

export const getLatestBoutiques = async () => {
  return sanityFetch(`*[_type == "boutique" && publie == true] | order(_createdAt desc)[0...4] {
    _id,
    name,
    addressSearch {
      address,
      commune,
      lat,
      lng
    },
    categorie[],
    slug,
    photos[]{
        asset->{
            url
        }
    }
  }`)
}

export const getBoutiques = async () => {
  return sanityFetch(`*[_type == "boutique" && publie == true] {
    _id,
    name,
    location {
      address,
      commune,
      lat,
      lng
    },
    categorie[],
    slug,
    photos[]{
        asset->{
            url
        }
    }
  }`)
}