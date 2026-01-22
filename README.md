# Orbit Digital Agency

A production-ready Next.js website for Orbit Digital Agency, built with modern web technologies.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** for modern, responsive design
- **MongoDB & Mongoose** for robust data management
- **React Hook Form + Zod** for form validation
- **Framer Motion** for smooth animations
- **Fully Responsive** design (mobile, tablet, desktop)
- **Contact Form** with email validation and database persistence
- **Portfolio Section** with featured project showcase
- **Services Grid** highlighting your digital services

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB Atlas account or local MongoDB instance

## 🛠 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/orbit-digital-agency.git
cd orbit-digital-agency
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/orbit-digital?retryWrites=true&w=majority
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
orbit-digital-agency/
├── app/
│   ├── api/
│   │   ├── contact/route.ts      # Contact form API
│   │   └── projects/route.ts     # Projects API
│   ├── contact/page.tsx          # Contact page
│   ├── services/page.tsx         # Services page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles
│   └── not-found.tsx             # 404 page
├── components/
│   ├── ContactForm.tsx           # Contact form component
│   ├── ContactSection.tsx        # Contact section
│   ├── FeaturedWork.tsx          # Portfolio showcase
│   ├── Footer.tsx                # Footer component
│   ├── Hero.tsx                  # Hero section
│   ├── Navbar.tsx                # Navigation bar
│   ├── ServiceCard.tsx           # Service card component
│   └── ServicesGrid.tsx          # Services grid
├── lib/
│   └── db.ts                     # MongoDB connection
├── models/
│   ├── Inquiry.ts                # Contact form schema
│   ├── Project.ts                # Project schema
│   └── Service.ts                # Service schema
├── types/
│   └── index.ts                  # TypeScript interfaces
├── public/                       # Static assets
├── .env.local                    # Environment variables
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 🗄 Database Models

### Project
- `title`: string (required)
- `description`: string (required)
- `image`: string (required)
- `tags`: string[] (max 5)
- `link`: string (required)
- `featured`: boolean
- `createdAt`, `updatedAt`: Date (automatic)

### Service
- `title`: string (required)
- `description`: string (required)
- `iconName`: string (required)
- `priceRange`: string (required)
- `createdAt`, `updatedAt`: Date (automatic)

### Inquiry (Contact Form)
- `name`: string (required, 2-100 chars)
- `email`: string (required, valid email)
- `company`: string (optional)
- `message`: string (required, 10-5000 chars)
- `status`: 'new' | 'read' | 'replied' (default: 'new')
- `createdAt`, `updatedAt`: Date (automatic)

## 🔗 API Endpoints

### GET `/api/projects`
Fetch all projects sorted by featured status

**Response:**
```json
{
  "success": true,
  "message": "Projects retrieved successfully",
  "data": [...]
}
```

### POST `/api/contact`
Submit a contact form inquiry

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "message": "I'm interested in your services..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your inquiry has been received...",
  "data": {
    "id": "..."
  }
}
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
- Primary: `slate-900` (Deep professional blue/black)
- Accent: `blue-600` (Trustworthy vibrant blue)
- Background: `slate-50` (Off-white for readability)

### Typography
The site uses Inter font by default. Change in `app/layout.tsx`:
```typescript
import { Inter } from 'next/font/google';
```

### Content
Update mock data in `app/page.tsx` or connect to your MongoDB database.

## 📦 Building for Production

```bash
npm run build
npm run start
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
Build and deploy the `out/` directory:
```bash
npm run build
```

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `NEXT_PUBLIC_SITE_URL` | Public site URL | `https://orbit.agency` |

## 🔒 Security

- Input validation with Zod
- Mongoose schema validation
- CORS and security headers configured
- MongoDB connection with retry logic
- Environment variables for sensitive data

## 📊 Performance

- Server-side data fetching to reduce client bundle
- Image optimization with Next.js Image component
- Tailwind CSS tree-shaking
- Framer Motion for efficient animations
- Singleton MongoDB connection pattern

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Verify `MONGODB_URI` is correct
- Check IP whitelist in MongoDB Atlas
- Ensure network connectivity

### Form Not Submitting
- Check browser console for errors
- Verify API endpoint is accessible
- Check MongoDB is connected

### Styling Not Applied
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`

## 📄 License

MIT License - feel free to use this project for your own agency website.

## 📧 Support

For issues and questions, please open an issue on GitHub or contact hello@orbit.agency

---

Built with ❤️ by Orbit Digital Agency
