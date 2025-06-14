# Bob Jones Portfolio

A modern, interactive portfolio website built with Next.js, TypeScript, and TailwindCSS. The site features a unique command-line interface animation and a clean, hacker-inspired design.

## Features

- 🖥️ Interactive CLI-style introduction animation
- 📱 Fully responsive design
- 🎨 Modern, dark theme with green accents
- ⚡ Fast page loads with Next.js
- 🎭 Smooth animations with Framer Motion
- 📝 Blog section for articles
- 📬 Contact form
- 🔗 Social media integration

## Tech Stack

- Next.js 14
- TypeScript
- TailwindCSS
- Framer Motion
- React Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── CLIAnimation.tsx
│       ├── Layout.tsx
│       ├── About.tsx
│       ├── Blog.tsx
│       └── Contact.tsx
├── public/
│   └── placeholder-profile.jpg
└── package.json
```

## Customization

1. Update personal information in the components
2. Replace placeholder images in the `public` directory
3. Modify the color scheme in `globals.css`
4. Add your own blog posts in the `Blog` component

## Deployment

The site can be easily deployed to Vercel:

```bash
npm run build
vercel
```

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

For any questions or suggestions, please reach out through the contact form on the website. 