# Pizzeria Frontend - React

- [repo backend laravel 11](https://github.com/Francescodc92/pizzeria-backend-laravel-11)

## 🚀 Avvio rapido

1. **Installazione dipendenze**
   ```bash
   npm install
   ```
2. **Avvio ambiente di sviluppo**
   ```bash
   npm run dev
   ```
3. **Build produzione**
   ```bash
   npm run build
   ```
4. **Linting**
   ```bash
   npm run lint
   ```

## 🛠️ Tecnologie utilizzate

- **React** (v19)
- **TypeScript**
- **TailwindCSS** (v4)
- **Zustand** (state management)
- **React Hook Form** (gestione form)
- **Zod** (validazione)
- **@tanstack/react-query** (data fetching e caching)
- **Sonner** (notifiche toast)
- **shadcn UI** (componenti UI, utilizzato solamente per i form per il momento)
- **FontAwesome** (icone)
- **Swiper** (slider/carousel)
- **Lucide React** (icone aggiuntive)
- **ESLint** (linting)
- **Stripe.js** (pagamenti)
- **React Router DOM** (routing)

## 📁 Struttura del progetto

- `/src` - codice sorgente
- `/src/http` - chiamate API e hooks custom
- `/src/store` - gestione stato globale
- `/src/components` - componenti riutilizzabili
- `/src/pages` - pagine principali

## ⚙️ Configurazione ambiente

Crea un file `.env` con le seguenti variabili:
```
VITE_API_URL="url backend"
VITE_STRIPE_PUBLIC_KEY=
```

