<h2>Live Link: <a href="https://66312439889a570d4b50cc68--incredible-alpaca-8797d6.netlify.app/">Travelo</a></h2>
<h2>Server Side Code: <a href="https://github.com/mushfiq7297/Travelo-Tour-Management-Server">Server</a></h2>
<h1>Project Overview:</h1>
<p>Travelo is a tourism-focused website designed to help travelers explore and discover exciting destinations. This project aims to solve the problem of finding reliable and comprehensive travel information by providing detailed guides, reviews, and recommendations for various travel spots around the world.</p>

<h3>Features:</h3>
<ul>
  <li>Detailed Guides: Our in-depth guides provide everything you need to know about a destination, including attractions, accommodation options,cultural insights, and hidden gems.</li>
  <li>Trusted Reviews: We offer honest reviews from fellow travelers, giving you a realistic picture of what to expect at different locations.</li>
  <li>Curated Recommendations: Based on your interests and preferences, Travelo suggests destinations and experiences that are perfect for you.</li>
</ul>
<h3>Technology used:</h3>
<p>ReactJS | TailwindCSS | ExpressJS | MongoDB | JWT  | Axios | Swiper

</p>

<h3>Installation and Setup:</h3>
<p>
  To clone and run this project locally, follow these steps:
</p>
<p>
 1. Clone the repository:<br>

  ```
git clone [repository URL]
```

</p>
<p>
2. Navigate to the project directory:<br>

  ```
cd [project directory]
```

</p>
<p>
3. Install dependencies:<br>

  ```
npm install
```

</p>
<p>
  4. Setup MongoDB:<br>
  <ul>
    <li>Ensure you have MongoDB installed and running on your local machine.<br></li>
    <li> Create a .env file in the root of the project and add your MongoDB connection string:<br></li>  
    </ul>
    
  ```
MONGO_URI=your_mongodb_connection_string
```

     
 
</p>
<p>
  5. Setup Firebase:<br>
  <ul>
    <li>Go to the Firebase Console and create a new project.</li>
    <li>Enable Firebase Authentication and set up the desired authentication methods.</li>
    <li>Create a firebaseConfig.js file in the src directory and add your Firebase configuration:</li>
    </ul> 
</p>

```
    const firebaseConfig = {
    apiKey: "your_api_key",
    authDomain: "your_auth_domain",
    projectId: "your_project_id",
    storageBucket: "your_storage_bucket",
    messagingSenderId: "your_messaging_sender_id",
    appId: "your_app_id"
    };
```

<p>
6. Run the project:<br>

  ```
npm start
```

</p>




- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
