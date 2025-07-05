# Contact_API_Mongoose_Express]
# 📞 Contact API

A robust and scalable **RESTful API** for managing contacts, built using **Node.js**, **Express.js**, and **MongoDB Atlas**, and deployed on **AWS**. This API allows users to create, read, update, and delete (CRUD) contact entries efficiently and securely.

---

## 🚀 Features

- Create a new contact (POST)
- Retrieve all contacts or a single contact (GET)
- Update an existing contact (PUT/PATCH)
- Delete a contact (DELETE)
- Input validation using `express-validator`
- MongoDB Atlas cloud-based database
- Environment variable management with `dotenv`
- Deployed on AWS (e.g., EC2 or Elastic Beanstalk)

---

## 🛠️ Tech Stack

| Tool/Tech        | Purpose                                  |
|------------------|------------------------------------------|
| **Node.js**      | JavaScript runtime                       |
| **Express.js**   | Web framework for building the API       |
| **MongoDB Atlas**| Cloud-hosted NoSQL database              |
| **Mongoose**     | MongoDB object modeling for Node.js      |
| **Postman**      | API testing and development              |
| **Dotenv**       | Manage environment variables             |
| **AWS**          | Hosting and deployment                   |

---

## 📂 Folder Structure

Contact_API/
│
├── config/ # DB connection settings
├── controllers/ # Logic for each API route
├── models/ # Mongoose schemas
├── routes/ # API route definitions
├── .env # Environment variables
├── server.js # Entry point
├── package.json # Dependencies & scripts
└── README.md # Project documentation

yaml
Copy
Edit

---

## 🔐 Environment Variables (.env)

Make sure to create a `.env` file in the root with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
🧪 API Endpoints
Method	Endpoint	Description
GET	/api/contacts	Get all contacts
GET	/api/contacts/:id	Get single contact
POST	/api/contacts	Create new contact
PUT	/api/contacts/:id	Update contact
DELETE	/api/contacts/:id	Delete contact

Test using tools like Postman.

📦 Installation & Running Locally
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Sitara-Shahzad1/Contact_API_Mongoose_Express.git
cd Contact_API_Mongoose_Express
Install dependencies:

bash
Copy
Edit
npm install
Create .env file with your MongoDB URI.

Run the server:

bash
Copy
Edit
npm start
The API will be running at: http://localhost:5000

🌐 Deployment
This project is deployed on AWS. You can deploy it using:

AWS EC2 (Node.js manually hosted)

AWS Elastic Beanstalk

AWS S3 + API Gateway (optional REST setup)

🙌 Acknowledgements
Special thanks to:

MongoDB Atlas

Express.js

AWS Free Tier

📬 Contact
For questions, feedback, or collaborations:

Sitara Shahzad
📧 sitara.shahzad@example.com
🔗 LinkedIn | GitHub

“We don't just build APIs, we build scalable solutions.”

yaml
Copy
Edit

---

Would you like me to:
- Add Swagger or API documentation section?
- Generate a `package.json` or `.gitignore` as well?
- Help you upload this to your GitHub with formatting?

Let me know!








Ask ChatGPT
