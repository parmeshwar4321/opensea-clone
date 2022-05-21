import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'pxuzu61r',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:
        'skcbIJuxRGN6m3hGlsa6LdcABeertMBNE8HMXMaSRVL9pSak3aw3sRvQqvG7oETs4yxbuTd8I7IwKZtise9dqO14jaxVIQvxJfBvr8CSzT506Zt72vWTMvnwFqAmSP1pYCFKBWPE13lhlxAUfb0ZLneBZHT1goV7Vo2UCmKLSgeOKUxyyoU1',
    useCdn: false,
})