// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
Data = {
  name: string
}

export default function handler() {
  res.status(200).json({ name: 'John Doe' })
}