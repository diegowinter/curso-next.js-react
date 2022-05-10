export default function metodo(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      nome: 'Diego GET'
    })
  } else {
    res.status(200).json({
      nome: 'Diego OUTRO'
    })
  }
}