import express from 'express'

const routes = express.Router()

routes.post('/certifications', (req, res) => {
  console.log(req.producer)
  return res.json({ ok: true })
})

export default routes
