# Personal Portfolio & Blog Website

This is a **Personal Portfolio & Blog Website** built with **Next.js**. It features dynamic routing, API integration, authentication, state management, and deployment. The website includes public pages, a user dashboard, and a backend powered by MongoDB.

## Features
- **Personal Portfolio**: Showcase projects, skills, and experience.
- **Blog System**: Write, edit, and publish blog posts.
- **Authentication**: Secure login and user management.
- **Dashboard**: Manage content and profile settings.
- **Dynamic Routing**: Seamless navigation between pages.
- **API Integration**: Fetch and manage data efficiently.
- **State Management**: Optimized using Redux.
- **Responsive Design**: Fully optimized for all devices.
- **Deployment**: Hosted on a live server.

## Tech Stack
- **Frontend**: Next.js, React.js, TypeScript, Tailwind CSS, ShadCN
- **Backend**: Node.js, Express.js, MongoDB
- **State Management**: Redux
- **UI Components**: Ant Design (antd), ShadCN
- **Authentication**: JWT-based auth
- **Deployment**: Vercel

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mdnaeemmiah/portfolio-
   ```
2. Navigate to the project directory:
   ```sh
   cd portfolio-blog
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables in a `.env.local` file:
   ```sh
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   NEXT_PUBLIC_API_BASE_URL=your_api_url
   ```
5. Run the development server:
   ```sh
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure
```
portfolio-blog/
│── public/          # Static assets
│── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Next.js pages
│   ├── styles/      # Global styles
│   ├── utils/       # Utility functions
│   ├── store/       # Redux store
│── backend/         # Express.js API
│── .env.local       # Environment variables
│── next.config.js   # Next.js configuration
│── package.json     # Project dependencies
```

## Deployment
To deploy on **Vercel**, run:
```sh
vercel
```
Ensure all environment variables are correctly set in Vercel.

## License
This project is licensed under the **MIT License**.

## Contact
For any questions, reach out to me at [naeememail@example.com](mailto:naeeml@example.com) or visit my [portfolio](https://vercel.com/ailas-projects-e6327532/l2b4-a5-client).

---
🚀 Built with passion using Next.js, Tailwind CSS, and MongoDB!

