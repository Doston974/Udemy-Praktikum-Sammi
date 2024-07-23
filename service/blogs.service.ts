import { IBlog } from '@/types'
import request, { gql } from 'graphql-request'
import { cache } from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async () => {
	const query = gql`
query Assets() {
  blogs(where:{archive:false}) {
    title
    author {
      name
      img {
        url
      }
    }
    category {
      name
      slug
    }
    descripton
    tag {
      name
      slug
    }
    img {
      url
    }
      publishedAt
      createdAt
    content {
      html
    }
      slug
  }
}
`
	const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query)
	return blogs
}

export const getDetailedBlog = async (slug: string) => {
	const query = gql`
  query MyQuery($slug:String!) {
  blog(where: {slug: $slug}) {
    author {
      name
      img {
        url
      }
        bio
        id
    }
    content {
      html
    }
    createdAt
    img {
      url
    }
    slug
    tag {
      name
      slug
    }
      category {
      name
      slug
    }
    title
  }
}
  `

	const { blog } = await request<{ blog: IBlog }>(graphqlAPI, query, { slug })
	return blog
}