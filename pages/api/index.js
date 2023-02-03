import { urlRequisicao } from "../../utils"


export default async function (req) {
  const body = req.body;
  const response = await fetch(urlRequisicao,{
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body
  })
  let data = await response.json()

  return new Response(
    JSON.stringify(data),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

