/* eslint-disable import/no-anonymous-default-export */
import { data } from "/data/articles"


// export default function handler(req, res) {
//   const { query: { id } } = req;

//   res.json({ 
//     ...data.find(data => data.id === parseInt(id)),
//   });
// }

export default (req, res) => {
  const { query: { id } } = req;

  const article = data.find(article => article.id === parseInt(id));
  if (!article) {
    return res.status(404).json({
      status: 404,
      message: 'Not Found'
    });
  }

  res.json({ ...article });
}



// export default handler = (req, res) => {
//   const { method } = req;

//   switch (method) {
//     case 'GET':
//       res.json({ method: 'GET', endpoint: 'Users' });
//       break;
//     case 'POST':
//       res.json({ method: 'POST', endpoint: 'Users' });
//       break;
//     default:
//       res.setHeader('Allow', ['GET', 'POST']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//       break;
//   }
// }
