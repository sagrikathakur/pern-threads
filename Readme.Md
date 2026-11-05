# 🧵 Woven Stories

**Preserving India's Textile Heritage, One Saree at a Time.**

Woven Stories is a digital archive dedicated to documenting, exploring, and preserving India's rich saree and textile heritage, with a special focus on Geographical Indication (GI)-tagged sarees.

The platform brings traditional craftsmanship, regional identities, weaving techniques, cultural stories, and historical significance together in one digital space.

## ✨ Key Features

- **Saree Archive:** Explore India's GI-tagged sarees.
- **Detailed Saree Stories:** Discover the history, origin, craftsmanship, and cultural significance of each saree.
- **Explore & Discover:** Browse sarees by region, state, weaving technique, and category.
- **Search & Filters:** Find sarees using relevant search criteria.
- **Favorites:** Save interesting sarees for later.
- **Collections:** Discover curated collections of traditional textiles.
- **Responsive Design:** Access the archive across desktop, tablet, and mobile devices.
- **Admin Dashboard:** Manage saree records and archive content.

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- TypeScript
- Redux Toolkit
- RTK Query
- React Router DOM
- Tailwind CSS
- Framer Motion
- Zod

### Backend
- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- Cookie-based Sessions
- Cloudinary

## 📁 Project Structure

```text
woven-stories/
│
├── client/
│   ├── public/
│   └── src/
│       ├── app/
│       ├── components/
│       │   ├── ui/
│       │   ├── layout/
│       │   └── shared/
│       ├── features/
│       │   ├── sarees/
│       │   ├── favorites/
│       │   ├── filters/
│       │   ├── auth/
│       │   ├── collections/
│       │   └── admin/
│       ├── pages/
│       ├── data/
│       ├── hooks/
│       ├── lib/
│       ├── types/
│       ├── styles/
│       ├── App.tsx
│       └── main.tsx
│
├── server/
│   └── src/
│
├── README.md
└── .gitignore
```

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd woven-stories
```

### 2. Frontend Setup

```bash
cd client
npm install
npm run dev
```

### 3. Backend Setup

```bash
cd server
npm install
npm run dev
```

## 🔐 Environment Variables

Configure the required environment variables in your backend `.env` file.

```env
PORT=5000
DATABASE_URL=your_postgresql_connection
SESSION_SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 🎯 Project Vision

Woven Stories aims to create a digital home for India's textile heritage.

Every saree carries a story of its region, artisans, traditions, and generations of craftsmanship. This platform makes those stories accessible while helping preserve India's traditional weaving knowledge for future generations.

## 👩‍💻 Author

Sagrika

---

Woven Stories — Every Thread Has a Story.