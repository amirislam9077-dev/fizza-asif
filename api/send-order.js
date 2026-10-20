const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const {
    customer, email, phone,
    country, location, address, apartment, city, postal,
    items_list, total_qty, subtotal, discount,
  } = req.body;

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
      <div style="background:#1a1a1a;padding:24px 32px;">
        <h1 style="font-family:Georgia,serif;color:#e8ddd4;font-weight:300;letter-spacing:6px;margin:0;font-size:20px;">FIZZA ASIF</h1>
        <p style="color:#8a6a4a;margin:6px 0 0;font-size:13px;letter-spacing:2px;">NEW ORDER</p>
      </div>

      <div style="padding:28px 32px;background:#fff;">
        <h2 style="font-size:16px;font-weight:600;margin:0 0 18px;">Order Details</h2>

        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <tr><td style="padding:7px 0;color:#888;width:140px;">Customer</td><td style="padding:7px 0;font-weight:500;">${customer}</td></tr>
          <tr><td style="padding:7px 0;color:#888;">Email</td><td style="padding:7px 0;">${email || '—'}</td></tr>
          <tr><td style="padding:7px 0;color:#888;">Phone</td><td style="padding:7px 0;">${phone || '—'}</td></tr>
        </table>

        <hr style="border:none;border-top:1px solid #eee;margin:18px 0;"/>

        <h2 style="font-size:15px;font-weight:600;margin:0 0 14px;">Delivery Address</h2>
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <tr><td style="padding:7px 0;color:#888;width:140px;">Country</td><td style="padding:7px 0;">${country}</td></tr>
          <tr><td style="padding:7px 0;color:#888;">Location</td><td style="padding:7px 0;">${location || '—'}</td></tr>
          <tr><td style="padding:7px 0;color:#888;">Address</td><td style="padding:7px 0;">${address || '—'}</td></tr>
          <tr><td style="padding:7px 0;color:#888;">Apartment</td><td style="padding:7px 0;">${apartment || '—'}</td></tr>
          <tr><td style="padding:7px 0;color:#888;">City</td><td style="padding:7px 0;">${city || '—'}</td></tr>
          <tr><td style="padding:7px 0;color:#888;">Postal Code</td><td style="padding:7px 0;">${postal || '—'}</td></tr>
        </table>

        <hr style="border:none;border-top:1px solid #eee;margin:18px 0;"/>

        <h2 style="font-size:15px;font-weight:600;margin:0 0 14px;">Items</h2>
        <pre style="font-family:Arial,sans-serif;font-size:13px;margin:0;line-height:1.8;white-space:pre-wrap;">${items_list}</pre>

        <hr style="border:none;border-top:1px solid #eee;margin:18px 0;"/>

        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <tr><td style="padding:6px 0;color:#888;">Subtotal (${total_qty} items)</td><td style="padding:6px 0;text-align:right;">${subtotal}</td></tr>
          <tr><td style="padding:6px 0;color:#888;">Shipping</td><td style="padding:6px 0;text-align:right;color:#2e7d32;font-weight:600;">FREE</td></tr>
          ${discount && discount !== '—' ? `<tr><td style="padding:6px 0;color:#888;">Discount Code</td><td style="padding:6px 0;text-align:right;">${discount}</td></tr>` : ''}
          <tr>
            <td style="padding:12px 0;font-weight:700;font-size:15px;">Total</td>
            <td style="padding:12px 0;text-align:right;font-weight:700;font-size:15px;">${subtotal}</td>
          </tr>
        </table>
      </div>

      <div style="background:#f7f7f7;padding:16px 32px;text-align:center;font-size:11px;color:#aaa;">
        FIZZA ASIF &nbsp;·&nbsp; Pakistan &nbsp;·&nbsp; This is an automated order notification
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from:    'FIZZA ASIF <onboarding@resend.dev>',
      to:      'amirislam9077@gmail.com',
      subject: `New Order — ${customer} · ${subtotal}`,
      html,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: err.message });
  }
};
