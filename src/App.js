import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Home Component
const Home = () => (
  <section className="section">
    <h1>Welcome to Tech Innovation Hub</h1>
    <p>Discover the latest in technology and innovation.</p>
  </section>
);

// Events Component
const Events = () => {
  const [events] = useState([
    { title: "AI Conference 2025", date: "March 10, 2025", description: "Explore AI advancements and trends." },
    { title: "Tech Hackathon", date: "April 15, 2025", description: "Compete and innovate in a 24-hour coding challenge." },
    { title: "Web3 Summit", date: "May 20, 2025", description: "Dive into decentralized web technologies." },
  ]);

  return (
    <section className="section">
      <h1>Upcoming Events</h1>
      <div id="events-container">
        {events.length === 0 ? (
          <p>Loading events...</p>
        ) : (
          events.map((event, index) => (
            <div key={index} className="event">
              <h2>{event.title}</h2>
              <p><strong>Date:</strong> {event.date}</p>
              <p>{event.description}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

// About Component
const About = () => (
  <section className="section">
    <h1>About Tech Innovation Hub</h1>
    <p>We are a cutting-edge technology organization dedicated to fostering innovation and pushing the boundaries of what's possible.</p>
  </section>
);

// Projects Component
const Projects = () => (
  <section className="section">
    <h1>Our Projects</h1>
    <article id="datacamp">
      <h2>DataCamp</h2>
      <p>Description and details about DataCamp.</p>
    </article>
    <article id="ai-influencer">
      <h2>AI Influencer</h2>
      <p>Features and objectives of the AI Influencer project.</p>
    </article>
    <article id="chatbot">
      <h2>Chatbot</h2>
      <p>Use cases and development overview of the Chatbot project.</p>
    </article>
  </section>
);

// App Component
const App = () => (
  <Router>
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>

    <footer>
      <p>&copy; 2025 Tech Innovation Hub. All rights reserved.</p>
    </footer>
  </Router>
);

export default App;
