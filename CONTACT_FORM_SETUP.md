# Contact Form Setup - Vercel Environment Variables

## Required Environment Variables

To enable the contact form email functionality, you need to configure the following environment variables in your Vercel project:

### 1. GMAIL_USER

Your Gmail address that will be used to send emails.

**Value:** `rafaellopes.dev@gmail.com`

### 2. GMAIL_PASS

Your Gmail App Password (NOT your regular Gmail password).

**Important:** You need to generate an App Password for Gmail:

1. Go to your Google Account settings: <https://myaccount.google.com/>
2. Navigate to Security → 2-Step Verification (must be enabled)
3. Scroll down to "App passwords"
4. Select "Mail" and "Other (Custom name)"
5. Enter a name like "Portfolio Contact Form"
6. Copy the 16-character password generated

**Value:** Your generated app password (format: `xxxx xxxx xxxx xxxx`)

## How to Add Environment Variables to Vercel

### Via Vercel Dashboard

1. Go to your project on Vercel Dashboard
2. Navigate to Settings → Environment Variables
3. Add both variables:
   - Name: `GMAIL_USER` | Value: `rafaellopes.dev@gmail.com`
   - Name: `GMAIL_PASS` | Value: `[app-password]`
4. Select which environments should use these variables (Production, Preview, Development)
5. Click "Save"

### Via Vercel CLI

```bash
vercel env add GMAIL_USER
# Enter the value: rafaellopes.dev@gmail.com

vercel env add GMAIL_PASS
# Enter the value: your-app-password
```

## Testing Locally

To test the contact form locally with the serverless function:

1. Make sure your `.env` file contains:

   ```text
   GMAIL_USER=email@gmail.com
   GMAIL_PASS=password
   ```

2. **IMPORTANT:** Run with Vercel CLI (not `pnpm dev`):

   ```bash
   pnpm dev:api
   ```

   ⚠️ **Do NOT use `pnpm dev`** - it only serves the frontend and won't run the API functions!

3. Access `http://localhost:3000` (Vercel uses port 3000 by default)

4. Navigate to the contact section and submit the form

### Why Vercel CLI?

- `pnpm dev` → Only runs Vite (frontend) ❌ API functions don't work
- `pnpm dev:api` → Runs Vite + API functions ✅ Full environment simulation

## API Endpoint

The contact form sends a POST request to `/api/sendEmail` with the following payload:

```json
{
  "fullName": "John Doe",
  "phone": "+55 (62) 99999-9999",
  "email": "john@example.com",
  "subject": "Website inquiry",
  "message": "Hello, I would like to discuss..."
}
```

## Security Notes

- ✅ The `.env` file is already in `.gitignore` and will not be committed
- ✅ Use Gmail App Passwords, never your actual password
- ✅ The API validates all input before processing
- ✅ CORS is handled by Vercel automatically
- ✅ Rate limiting is recommended for production (can be added via Vercel config)

## Troubleshooting

### "Failed to send email" error

- Verify environment variables are set correctly in Vercel
- Check that the Gmail App Password is valid
- Ensure 2-Step Verification is enabled on the Gmail account

### "Method Not Allowed" error

- Ensure the request is using POST method
- Check browser console for CORS issues

### Email not received

- Check spam folder
- Verify GMAIL_USER is set to the correct recipient email
- Review Vercel function logs for errors
