import { NextApiRequest, NextApiResponse } from 'next'

import {
  fetchPages,
} from '../../utils/notion'
import { makeSlicedPosts } from '../../utils/slicedPosts'

const ApiPages = async function(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json')

  if (req.method !== 'GET') {
    res.statusCode = 400
    res.end()
    return
  }

  try {
    const { results } = await fetchPages({})
    if (!results) {
      throw new Error("pages not found.")
    }
    // console.log(pages)
    const currentPage = 1;
    const slicedPosts = makeSlicedPosts(results, currentPage);
    res.write(JSON.stringify(slicedPosts))
    res.statusCode = 200
    res.end()
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.end()
  }
}

export default ApiPages