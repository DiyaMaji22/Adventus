# API Testing Examples

Quick reference for testing API endpoints with curl or any HTTP client.

## 🔐 Authentication

### Signup
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "name": "Test User"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@nexusventus.com",
    "password": "admin123"
  }'
```

**Save the token from response!**

## 🏆 Teams

### Get All Teams
```bash
curl http://localhost:5000/api/teams
```

### Get Team by Slug
```bash
curl http://localhost:5000/api/teams/valorant
```

### Create Team (requires auth)
```bash
curl -X POST http://localhost:5000/api/teams \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "slug": "csgo-team",
    "name": "Team Aventus CS2",
    "game": "Counter-Strike 2",
    "gameCategory": "FPS",
    "description": "Our CS2 competitive roster",
    "isActive": true
  }'
```

### Update Team (requires auth)
```bash
curl -X PUT http://localhost:5000/api/teams/valorant \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "description": "Updated description"
  }'
```

## 📰 News

### Get All News
```bash
curl http://localhost:5000/api/news
```

### Get News with Filters
```bash
curl "http://localhost:5000/api/news?category=Tournament&limit=5"
```

### Get Featured News
```bash
curl http://localhost:5000/api/news/featured
```

### Create News (requires auth)
```bash
curl -X POST http://localhost:5000/api/news \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "slug": "new-tournament-win",
    "title": "Team Wins Major Tournament",
    "excerpt": "Amazing victory for our team",
    "content": "<p>Full article content here</p>",
    "category": "Tournament",
    "tags": ["VALORANT", "Tournament", "Victory"]
  }'
```

## 💼 Jobs

### Get All Jobs
```bash
curl http://localhost:5000/api/jobs
```

### Get Jobs by Type
```bash
curl "http://localhost:5000/api/jobs?type=player&active=true"
```

### Create Job (requires auth)
```bash
curl -X POST http://localhost:5000/api/jobs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "slug": "content-creator-position",
    "title": "Content Creator",
    "type": "creator",
    "department": "Content",
    "location": "Remote",
    "isRemote": true,
    "description": "Create engaging gaming content",
    "requirements": ["Video editing skills", "Gaming knowledge"],
    "responsibilities": ["Create weekly videos", "Stream regularly"]
  }'
```

## 🛍️ Products

### Get All Products
```bash
curl http://localhost:5000/api/products
```

### Get Featured Products
```bash
curl http://localhost:5000/api/products/featured
```

### Get Products by Category
```bash
curl "http://localhost:5000/api/products?category=Apparel"
```

### Create Product (requires auth)
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "slug": "team-tshirt",
    "name": "Team T-Shirt",
    "price": 29.99,
    "category": "Apparel",
    "description": "Comfortable team t-shirt",
    "inStock": true,
    "stock": 100
  }'
```

## 🎮 Players

### Get All Players
```bash
curl http://localhost:5000/api/players
```

### Get Player by Slug
```bash
curl http://localhost:5000/api/players/phoenix
```

### Create Player (requires auth)
```bash
curl -X POST http://localhost:5000/api/players \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "slug": "new-player",
    "name": "ProGamer",
    "realName": "John Smith",
    "role": "Entry Fragger",
    "country": "USA",
    "joinDate": "2024-01-15",
    "type": "player"
  }'
```

## ⚔️ Matches

### Get All Matches
```bash
curl http://localhost:5000/api/matches
```

### Get Upcoming Matches
```bash
curl http://localhost:5000/api/matches/upcoming
```

### Create Match (requires auth)
```bash
curl -X POST http://localhost:5000/api/matches \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "slug": "match-vs-team-a",
    "opponent": "Team A",
    "opponentLogo": "/logo.svg",
    "date": "2024-02-15",
    "tournament": "Regional Finals",
    "result": "upcoming",
    "score": "TBD",
    "teamId": "TEAM_ID_HERE"
  }'
```

## 🤝 Sponsors

### Get All Sponsors
```bash
curl http://localhost:5000/api/sponsors
```

### Create Sponsor (requires auth)
```bash
curl -X POST http://localhost:5000/api/sponsors \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Gaming Brand",
    "logo": "/logo.svg",
    "url": "https://gamingbrand.com",
    "tier": "partner"
  }'
```

## 👔 Management

### Get All Management
```bash
curl http://localhost:5000/api/management
```

### Create Management Member (requires auth)
```bash
curl -X POST http://localhost:5000/api/management \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Jane Doe",
    "role": "Marketing Director",
    "bio": "Marketing expert with 5+ years experience",
    "order": 3
  }'
```

## 🔧 Tips

### Using Variables

For easier testing, save your token:
```bash
TOKEN="your_token_here"

curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer $TOKEN"
```

### JSON Pretty Print

Add `| json_pp` (Linux/Mac) or use tools like Postman/Insomnia for better formatting.

### VS Code REST Client

Install "REST Client" extension and create `.http` files:

```http
### Login
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "admin@nexusventus.com",
  "password": "admin123"
}

### Get Teams
GET http://localhost:5000/api/teams
```

## 🧪 Postman Collection

You can import these examples into Postman by:
1. Creating a new collection
2. Adding requests with the URLs and bodies above
3. Setting up an environment variable for the token
