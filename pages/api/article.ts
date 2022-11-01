import { NextApiRequest, NextApiResponse } from 'next'
import { Params } from "../../types/types";

import {
  fetchPages,
  fetchBlocksByPageId,
} from '../../utils/notion'

const ApiArticle = async function(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json')

  if (req.method !== 'GET') {
    res.statusCode = 400
    res.end()
    return
  }

  const { slug } = req.query as Params

  if (!slug) {
    res.statusCode = 400
    res.end()
    return
  }

  try {
    const post = await fetchPages({ slug: slug })
    if (!post) {
      throw new Error(`page not found. slug: ${slug}`)
    }
    const page = post.results[0]
    const { results: blocks } = await fetchBlocksByPageId(page.id)

    const articleParts = { page, blocks }
    
    res.write(JSON.stringify(articleParts))
    res.statusCode = 200
    res.end()
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.end()
  }
}

export default ApiArticle