/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { z } from 'zod'

const PhotoTipSchema = z.object({
  id: z.string(),
  created_at: z.string().optional(),
  text: z.string().optional(),
  url: z.string().optional(),
  lang: z.string().optional(),
  agree_count: z.number().optional(),
  disagree_count: z.number().optional()
})

const PhotoSchema = z.object({
  id: z.string(),
  created_at: z.string().optional(),
  prefix: z.string().optional(),
  suffix: z.string().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
  classifications: z.array(z.string()).optional(),
  tip: PhotoTipSchema.optional()
})

const GeocodeSchema = z.object({
  latitude: z.number().optional(),
  longitude: z.number().optional()
})

const LocationSchema = z.object({
  address: z.string().optional(),
  address_extended: z.string().optional(),
  admin_region: z.string().optional(),
  census_block: z.string().optional(),
  country: z.string().optional(),
  cross_street: z.string().optional(),
  dma: z.string().optional(),
  formatted_address: z.string().optional(),
  locality: z.string().optional(),
  neighborhood: z.array(z.string()).optional(),
  po_box: z.string().optional(),
  post_town: z.string().optional(),
  postcode: z.string().optional(),
  region: z.string().optional()
})

const FoursquareSchema = z.object({
  fsq_id: z.string(),
  name: z.string(),
  location: LocationSchema.optional(),
  rating: z.number().optional(),
  description: z.string().optional(),
  photos: z.array(PhotoSchema).optional(),
  geocodes: z.object({
    drop_off: GeocodeSchema.optional(),
    front_door: GeocodeSchema.optional(),
    main: GeocodeSchema.optional(),
    road: GeocodeSchema.optional(),
    roof: GeocodeSchema.optional()
  }).optional(),
  tel: z.string().optional(),
  email: z.string().optional(),
  website: z.string().optional(),
  price: z.number().optional()
}).transform((data) => {
  const photosUrls = data.photos ? data.photos.map((photo) => `${photo.prefix}original${photo.suffix}`) : []
  return {
    placeId: data.fsq_id,
    description: data.description,
    name: data.name,
    location: data.location,
    provider: 'fsq',
    geocodes: data.geocodes?.main,
    website: data.website,
    rating: data.rating,
    photosUrls
  }
})

export default FoursquareSchema

export type FoursquareSchemaType = z.infer<typeof FoursquareSchema>
