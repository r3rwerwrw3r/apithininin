// api/shouldActivateEvent.js
let shouldTrigger = false;

export default function handler(req, res) {
  if (req.method === 'POST') {
    shouldTrigger = true;
    return res.status(200).json({ success: true });
  }

  if (req.method === 'GET') {
    const trigger = shouldTrigger;
    shouldTrigger = false; // reset
    return res.status(200).json({ trigger });
  }

  res.status(405).end();
}
