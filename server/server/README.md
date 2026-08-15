# Nexus Ventus Forge - Backend API

A comprehensive RESTful API backend for the Nexus Ventus Forge esports platform, built with Node.js, Express, and MongoDB.

## 🚀 Features

- **Authentication & Authorization**: JWT-based authentication with role-based access control (Admin, Moderator, User)
- **User Management**: Complete user CRUD operations with secure password hashing
- **Teams Management**: Full CRUD for esports teams with player roster management
- **News System**: Article management with categories, tags, and view tracking
- **Job Board**: Career opportunities management with filtering and search
- **E-commerce**: Product catalog for team merchandise
- **Player Profiles**: Individual player management with team associations
- **Match Tracking**: Match history and upcoming matches system
- **Sponsors**: Sponsor management with tier categorization
- **Management Team**: Organization leadership profiles
- **Security**: Helmet.js, rate limiting, CORS protection
- **Validation**: Request validation with express-validator
- **Error Handling**: Centralized error handling middleware

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- npm or yarn

## 🛠️ Installation

1. **Navigate to the server directory**:
   ```bash
   cd server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create environment file**:
   ```bash
   copy .env.example .env
   ```

4. **Configure environment variables** in `.env`:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/nexus-ventus-forge
   JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
   FRONTEND_URL=http://localhost:5173
   ```

5. **Start MongoDB** (if running locally):
   ```bash
   mongod
   ```

6. **Seed the database** (optional but recommended):
   ```bash
   npm run seed
   ```

7. **Start the server**:
   ```bash
   # Development mode with auto-restart
   npm run dev

   # Production mode
   npm start
   ```

The API will be available at `http://localhost:5000/api`

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register a New User
```http
POST /api/auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Get Profile (Protected)
```http
GET /api/auth/profile
Authorization: Bearer <token>
```

#### Update Profile (Protected)
```http
PUT /api/auth/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "newemail@example.com"
}
```

#### Change Password (Protected)
```http
PUT /api/auth/change-password
Authorization: Bearer <token>
Content-Type: application/json

{
  "currentPassword": "oldpassword",
  "newPassword": "newpassword"
}
```

#### Get All Users (Admin Only)
```http
GET /api/auth/users
Authorization: Bearer <admin_token>
```

### Teams Endpoints

#### Get All Teams
```http
GET /api/teams
Query Parameters:
  - active: true/false
  - game: string (e.g., "VALORANT")
```

#### Get Team by Slug
```http
GET /api/teams/:slug
```

#### Create Team (Moderator/Admin)
```http
POST /api/teams
Authorization: Bearer <token>
Content-Type: application/json

{
  "slug": "valorant-team",
  "name": "Team Aventus Valorant",
  "game": "VALORANT",
  "gameCategory": "FPS",
  "description": "Our competitive VALORANT roster",
  "achievements": ["VCT Champions 2024"],
  "isActive": true
}
```

#### Update Team (Moderator/Admin)
```http
PUT /api/teams/:slug
Authorization: Bearer <token>
Content-Type: application/json

{
  "description": "Updated description",
  "achievements": ["New achievement"]
}
```

#### Delete Team (Moderator/Admin)
```http
DELETE /api/teams/:slug
Authorization: Bearer <token>
```

#### Add Player to Team (Moderator/Admin)
```http
POST /api/teams/:slug/players
Authorization: Bearer <token>
Content-Type: application/json

{
  "playerId": "player_id_here"
}
```

#### Remove Player from Team (Moderator/Admin)
```http
DELETE /api/teams/:slug/players/:playerId
Authorization: Bearer <token>
```

### News Endpoints

#### Get All News
```http
GET /api/news
Query Parameters:
  - category: string
  - tag: string
  - published: true/false
  - limit: number (default: 10)
  - page: number (default: 1)
```

#### Get Featured News
```http
GET /api/news/featured
```

#### Get News Categories
```http
GET /api/news/categories
```

#### Get News by Slug
```http
GET /api/news/:slug
```

#### Create News (Moderator/Admin)
```http
POST /api/news
Authorization: Bearer <token>
Content-Type: application/json

{
  "slug": "team-wins-championship",
  "title": "Team Wins Championship",
  "excerpt": "Brief summary",
  "content": "<p>Full article content</p>",
  "category": "Tournament",
  "tags": ["VALORANT", "Championship"],
  "isPublished": true
}
```

#### Update News (Moderator/Admin)
```http
PUT /api/news/:slug
Authorization: Bearer <token>
```

#### Delete News (Moderator/Admin)
```http
DELETE /api/news/:slug
Authorization: Bearer <token>
```

### Jobs Endpoints

#### Get All Jobs
```http
GET /api/jobs
Query Parameters:
  - type: staff/player/creator/freelance
  - department: string
  - remote: true/false
  - active: true/false
```

#### Get Job Types
```http
GET /api/jobs/types
```

#### Get Job Departments
```http
GET /api/jobs/departments
```

#### Get Job by Slug
```http
GET /api/jobs/:slug
```

#### Create Job (Moderator/Admin)
```http
POST /api/jobs
Authorization: Bearer <token>
Content-Type: application/json

{
  "slug": "social-media-manager",
  "title": "Social Media Manager",
  "type": "staff",
  "department": "Marketing",
  "location": "Remote",
  "isRemote": true,
  "description": "Full job description",
  "requirements": ["Requirement 1", "Requirement 2"],
  "responsibilities": ["Responsibility 1", "Responsibility 2"],
  "isActive": true
}
```

#### Update Job (Moderator/Admin)
```http
PUT /api/jobs/:slug
Authorization: Bearer <token>
```

#### Delete Job (Moderator/Admin)
```http
DELETE /api/jobs/:slug
Authorization: Bearer <token>
```

### Products Endpoints

#### Get All Products
```http
GET /api/products
Query Parameters:
  - category: string
  - inStock: true/false
  - featured: true/false
  - limit: number (default: 20)
  - page: number (default: 1)
  - sort: string (default: -createdAt)
```

#### Get Featured Products
```http
GET /api/products/featured
```

#### Get Product Categories
```http
GET /api/products/categories
```

#### Get Product by Slug
```http
GET /api/products/:slug
```

#### Create Product (Moderator/Admin)
```http
POST /api/products
Authorization: Bearer <token>
Content-Type: application/json

{
  "slug": "team-jersey-2024",
  "name": "Official Team Jersey 2024",
  "price": 79.99,
  "category": "Apparel",
  "description": "Premium jersey",
  "inStock": true,
  "stock": 50,
  "featured": true
}
```

#### Update Product (Moderator/Admin)
```http
PUT /api/products/:slug
Authorization: Bearer <token>
```

#### Delete Product (Moderator/Admin)
```http
DELETE /api/products/:slug
Authorization: Bearer <token>
```

### Players Endpoints

#### Get All Players
```http
GET /api/players
Query Parameters:
  - type: player/creator/staff
  - teamId: string
```

#### Get Player by Slug
```http
GET /api/players/:slug
```

#### Create Player (Moderator/Admin)
```http
POST /api/players
Authorization: Bearer <token>
Content-Type: application/json

{
  "slug": "player-name",
  "name": "ProPlayer",
  "realName": "John Doe",
  "role": "Duelist",
  "country": "USA",
  "joinDate": "2024-01-15",
  "type": "player",
  "socialLinks": {
    "twitter": "https://twitter.com/player",
    "twitch": "https://twitch.tv/player"
  }
}
```

#### Update Player (Moderator/Admin)
```http
PUT /api/players/:slug
Authorization: Bearer <token>
```

#### Delete Player (Moderator/Admin)
```http
DELETE /api/players/:slug
Authorization: Bearer <token>
```

### Matches Endpoints

#### Get All Matches
```http
GET /api/matches
Query Parameters:
  - teamId: string
  - result: win/loss/upcoming
  - limit: number (default: 20)
```

#### Get Upcoming Matches
```http
GET /api/matches/upcoming
```

#### Get Match by Slug
```http
GET /api/matches/:slug
```

#### Create Match (Moderator/Admin)
```http
POST /api/matches
Authorization: Bearer <token>
Content-Type: application/json

{
  "slug": "match-vs-rival",
  "opponent": "Rival Esports",
  "opponentLogo": "/logo.svg",
  "date": "2024-01-20",
  "tournament": "VCT Challengers",
  "result": "upcoming",
  "score": "TBD",
  "teamId": "team_id_here"
}
```

#### Update Match (Moderator/Admin)
```http
PUT /api/matches/:slug
Authorization: Bearer <token>
```

#### Delete Match (Moderator/Admin)
```http
DELETE /api/matches/:slug
Authorization: Bearer <token>
```

### Sponsors Endpoints

#### Get All Sponsors
```http
GET /api/sponsors
Query Parameters:
  - tier: main/partner/supporter
  - active: true/false
```

#### Get Sponsor by ID
```http
GET /api/sponsors/:id
```

#### Create Sponsor (Moderator/Admin)
```http
POST /api/sponsors
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "TechGear",
  "logo": "/logo.svg",
  "url": "https://techgear.com",
  "tier": "main",
  "isActive": true
}
```

#### Update Sponsor (Moderator/Admin)
```http
PUT /api/sponsors/:id
Authorization: Bearer <token>
```

#### Delete Sponsor (Moderator/Admin)
```http
DELETE /api/sponsors/:id
Authorization: Bearer <token>
```

### Management Endpoints

#### Get All Management
```http
GET /api/management
Query Parameters:
  - active: true/false
```

#### Get Management Member by ID
```http
GET /api/management/:id
```

#### Create Management Member (Moderator/Admin)
```http
POST /api/management
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Alex Martinez",
  "role": "CEO & Founder",
  "bio": "Visionary leader with 10+ years in esports",
  "order": 1,
  "socialLinks": {
    "twitter": "https://twitter.com/alex",
    "linkedin": "https://linkedin.com/in/alex"
  },
  "isActive": true
}
```

#### Update Management Member (Moderator/Admin)
```http
PUT /api/management/:id
Authorization: Bearer <token>
```

#### Delete Management Member (Moderator/Admin)
```http
DELETE /api/management/:id
Authorization: Bearer <token>
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. After logging in, you'll receive a token that must be included in the `Authorization` header for protected routes:

```
Authorization: Bearer <your_token_here>
```

### User Roles

- **User**: Basic access (can view public content)
- **Moderator**: Can create, update, and delete content
- **Admin**: Full access including user management

## 🗂️ Database Models

### User
- email, password, name, role, isActive, createdAt, lastLogin

### Team
- slug, name, game, gameCategory, logo, banner, description, isActive, achievements, roster[], staff[]

### Player
- slug, name, realName, role, photo, country, socialLinks, joinDate, type, bio, teamId

### News
- slug, title, excerpt, content, thumbnail, featuredImage, category, author, publishedAt, tags[], isPublished, views

### Job
- slug, title, type, department, location, isRemote, description, requirements[], responsibilities[], postedAt, isActive

### Product
- slug, name, price, image, images[], category, description, inStock, stock, sizes[], colors[], featured, rating, reviewCount

### Match
- slug, opponent, opponentLogo, date, tournament, result, score, highlights[], teamId

### Sponsor
- name, logo, url, tier, description, isActive, contractStart, contractEnd

### Management
- name, role, photo, bio, socialLinks, order, isActive

## 🛡️ Security Features

- **Helmet.js**: Secures HTTP headers
- **Rate Limiting**: Prevents abuse (100 requests per 15 minutes)
- **CORS**: Configured for frontend integration
- **Password Hashing**: Uses bcrypt for secure password storage
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Request validation with express-validator
- **Role-Based Access Control**: Different permissions for different user roles

## 📦 Project Structure

```
server/
├── config/
│   └── database.js          # MongoDB connection
├── controllers/
│   ├── authController.js     # Authentication logic
│   ├── teamController.js     # Teams CRUD
│   ├── newsController.js     # News CRUD
│   ├── jobController.js      # Jobs CRUD
│   ├── productController.js  # Products CRUD
│   ├── playerController.js   # Players CRUD
│   ├── matchController.js    # Matches CRUD
│   ├── sponsorController.js  # Sponsors CRUD
│   └── managementController.js # Management CRUD
├── middleware/
│   ├── auth.js              # Authentication middleware
│   ├── errorHandler.js      # Error handling
│   └── validation.js        # Request validation
├── models/
│   ├── User.js
│   ├── Team.js
│   ├── Player.js
│   ├── News.js
│   ├── Job.js
│   ├── Product.js
│   ├── Match.js
│   ├── Sponsor.js
│   ├── Management.js
│   └── Staff.js
├── routes/
│   ├── authRoutes.js
│   ├── teamRoutes.js
│   ├── newsRoutes.js
│   ├── jobRoutes.js
│   ├── productRoutes.js
│   ├── playerRoutes.js
│   ├── matchRoutes.js
│   ├── sponsorRoutes.js
│   └── managementRoutes.js
├── scripts/
│   └── seed.js              # Database seeding
├── .env.example             # Environment variables template
├── .gitignore
├── index.js                 # Server entry point
├── package.json
└── README.md
```

## 🧪 Testing the API

### Using the Seed Data

After running `npm run seed`, you can log in with:
- **Email**: admin@nexusventus.com
- **Password**: admin123

### Example Workflow

1. **Login**:
   ```bash
   curl -X POST http://localhost:5000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@nexusventus.com","password":"admin123"}'
   ```

2. **Save the token** from the response

3. **Create a news article**:
   ```bash
   curl -X POST http://localhost:5000/api/news \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_TOKEN" \
     -d '{"slug":"new-article","title":"New Article","excerpt":"Summary","content":"Content","category":"Announcement"}'
   ```

## 🚀 Deployment

### Environment Variables for Production

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=use_a_very_strong_secret_key_here
FRONTEND_URL=https://your-frontend-domain.com
```

### MongoDB Atlas Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in `.env`

## 📝 Development

### Adding a New Route

1. Create a model in `models/`
2. Create a controller in `controllers/`
3. Create routes in `routes/`
4. Register routes in `index.js`
5. Add validation if needed in `middleware/validation.js`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🆘 Support

For issues or questions:
- Check existing documentation
- Review error messages carefully
- Ensure MongoDB is running
- Verify environment variables are set correctly

## 🔧 Common Issues

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify network connectivity

### Authentication Errors
- Check if JWT_SECRET is set
- Verify token is included in headers
- Ensure token hasn't expired

### Port Already in Use
- Change PORT in `.env`
- Or stop the process using the port

---

Built with ❤️ for the Nexus Ventus Forge esports platform
