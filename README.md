# OpenRouter

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-green.svg)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Monorepo](https://img.shields.io/badge/Monorepo-Turborepo-blue.svg)](https://turborepo.dev/)

A modern, scalable platform for managing and routing requests to multiple large language model (LLM) providers. OpenRouter provides a unified API interface with built-in authentication, payment processing, and comprehensive management capabilities.

## Features

- 🤖 **Multi-Provider Support** - Seamlessly integrate with Anthropic Claude, Google Gemini, and other LLM providers
- 🔐 **Authentication & Authorization** - JWT-based auth with role-based access control
- 💳 **Payment Processing** - Built-in subscription and payment management
- 🔑 **API Key Management** - Secure generation and management of API keys
- 📊 **Model Management** - Centralized model configuration and versioning
- 🚀 **Production-Ready** - Type-safe, well-tested, and monitoring-ready
- 📦 **Monorepo Architecture** - Organized, scalable, and maintainable structure

## Tech Stack

### Core Technologies
- **Language**: TypeScript 5.9
- **Runtime**: Node.js 18+
- **Package Manager**: pnpm 9.0.0
- **Monorepo**: Turborepo 2.8.16

### Backend
- **Framework**: NestJS 11.x
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **LLM SDKs**: @anthropic-ai/sdk, @google/genai

### Frontend
- **Framework**: React 19.2
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: TanStack React Query
- **UI Components**: Custom component library

### Development
- **Linting**: ESLint
- **Formatting**: Prettier
- **Testing**: Jest
- **Type Checking**: TypeScript

## Project Structure

```
openrouter/
├── apps/
│   ├── api-backend/          # LLM API & chat service
│   ├── primary-backend/      # Core API (auth, payments, keys, models)
│   └── web/                  # React frontend application
├── packages/
│   ├── database/             # Shared database schemas & repositories
│   ├── ui/                   # Shared React component library
│   ├── eslint-config/        # Shared ESLint configuration
│   └── typescript-config/    # Shared TypeScript configuration
└── Configuration files
```

## Quick Start

### Prerequisites
- Node.js 18 or higher
- pnpm 9.0.0
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abuhurera00/openrouter.git
   cd openrouter
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy example env files
   cp apps/primary-backend/.env.example apps/primary-backend/.env.local
   cp apps/api-backend/.env.example apps/api-backend/.env.local
   cp apps/web/.env.example apps/web/.env.local
   ```

4. **Configure your environment**
   Update `.env.local` files with your configuration:
   - Database connection strings
   - LLM provider API keys
   - JWT secrets
   - Payment processor credentials

5. **Start development servers**
   ```bash
   pnpm dev
   ```
   This starts all apps in watch mode. Access:
   - Frontend: http://localhost:5173
   - Primary Backend: http://localhost:3000
   - API Backend: http://localhost:5000

## Usage

### Development

```bash
# Install dependencies
pnpm install

# Start all apps in development mode
pnpm dev

# Build all apps and packages
pnpm build

# Run linter
pnpm lint

# Format code
pnpm format

# Type checking
pnpm check-types
```

### Backend Services

**Primary Backend** (Port 3000)
- Authentication endpoints
- API key management
- User profile management
- Payment & subscription management
- Model configuration

**API Backend** (Port 5000)
- Chat completion endpoints
- Message streaming
- LLM provider routing
- Request logging and analytics

### Building for Production

```bash
# Build specific backend
pnpm build:primary-backend
pnpm build:api-backend

# Start production servers
pnpm start:primary-backend
pnpm start:api-backend
```

## API Documentation

### Authentication

All API requests require authentication via JWT token in the Authorization header:

```bash
Authorization: Bearer <your-jwt-token>
```

### Chat Endpoint

```
POST /api/chat/completions
```

**Request:**
```json
{
  "messages": [
    {
      "role": "user",
      "content": "Hello!"
    }
  ],
  "model": "claude-3-sonnet",
  "stream": false
}
```

**Response:**
```json
{
  "id": "chat-123",
  "object": "chat.completion",
  "created": 1234567890,
  "model": "claude-3-sonnet",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hi! How can I help you?"
      }
    }
  ]
}
```

## Configuration

### Environment Variables

**Primary Backend:**
```bash
NODE_ENV=production
DATABASE_URI=mongodb://localhost:27017/openrouter
JWT_SECRET=your-secret-key
JWT_EXPIRATION=24h
PAYMENT_API_KEY=your-payment-key
PAYMENT_WEBHOOK_SECRET=your-webhook-secret
```

**API Backend:**
```bash
NODE_ENV=production
DATABASE_URI=mongodb://localhost:27017/openrouter
ANTHROPIC_API_KEY=your-anthropic-key
GOOGLE_GENAI_API_KEY=your-google-key
PRIMARY_BACKEND_URL=http://primary-backend:3000
```

**Frontend:**
```bash
VITE_API_BASE_URL=http://localhost:3000
```

## Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:cov

# Run e2e tests
pnpm test:e2e
```

## Docker Support

Build and run containerized:

```bash
# Build Docker images
docker-compose build

# Start services
docker-compose up
```

## Performance Optimization

- Turborepo caching for faster builds
- Lazy loading in frontend
- Database indexing on frequently queried fields
- Request/response compression
- CDN-ready static assets

## Security Practices

- Environment variable validation
- JWT token-based authentication
- CORS configuration
- Request validation with whitelist
- Secure password hashing
- Rate limiting (recommended)
- SQL injection prevention (MongoDB with Mongoose)

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Code style and standards
- Commit conventions
- Pull request process
- Testing requirements
- Release process

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. This means:
- ✅ You can use it for commercial purposes
- ✅ You can modify and distribute it
- ✅ You must include the license and copyright notice
- ❌ No warranty or liability

## Support

- 📖 [Documentation](docs/)
- 🐛 [Issue Tracker](https://github.com/Abuhurera00/openrouter/issues)
- 💬 [Discussions](https://github.com/Abuhurera00/openrouter/discussions)
- 📧 Email: support@openrouter.dev

## Roadmap

- [ ] Additional LLM provider integrations (OpenAI, Cohere, etc.)
- [ ] Advanced analytics dashboard
- [ ] Usage-based billing
- [ ] API rate limiting and quotas
- [ ] Model fine-tuning capabilities
- [ ] Webhooks and event streaming
- [ ] GraphQL API
- [ ] Mobile applications

## Acknowledgments

- Built with [NestJS](https://nestjs.com/)
- Powered by [Turborepo](https://turborepo.dev/)
- UI components inspired by industry standards

## Authors

- Your Name - [GitHub](https://github.com/Abuhurera00)

---

**Made with ❤️ for the open-source community**
yarn dlx turbo build
pnpm exec turbo build
```

You can build a specific package by using a [filter](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters):

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed:

```sh
turbo build --filter=docs
```

Without global `turbo`:

```sh
npx turbo build --filter=docs
yarn exec turbo build --filter=docs
pnpm exec turbo build --filter=docs
```

### Develop

To develop all apps and packages, run the following command:

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed (recommended):

```sh
cd my-turborepo
turbo dev
```

Without global `turbo`, use your package manager:

```sh
cd my-turborepo
npx turbo dev
yarn exec turbo dev
pnpm exec turbo dev
```

You can develop a specific package by using a [filter](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters):

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed:

```sh
turbo dev --filter=web
```

Without global `turbo`:

```sh
npx turbo dev --filter=web
yarn exec turbo dev --filter=web
pnpm exec turbo dev --filter=web
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.dev/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed (recommended):

```sh
cd my-turborepo
turbo login
```

Without global `turbo`, use your package manager:

```sh
cd my-turborepo
npx turbo login
yarn exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed:

```sh
turbo link
```

Without global `turbo`:

```sh
npx turbo link
yarn exec turbo link
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.dev/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.dev/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.dev/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.dev/docs/reference/configuration)
- [CLI Usage](https://turborepo.dev/docs/reference/command-line-reference)
