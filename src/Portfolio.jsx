// Portfolio.js
import './App.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <header>
                <h1>John Doe</h1>
                <p>Web Developer & Designer</p>
            </header>

            <section className="about" id="about">
                <img className="image" src="/image/log.png" alt="Profile" />
                <p>I am a passionate web developer with experience in creating modern web applications.</p>
            </section>

            <section className="skills">
                <h2>Skills</h2>
                <div className="skills-list">
                    <span className="skill">JavaScript</span>
                    <span className="skill">React</span>
                    <span className="skill">Node.js</span>
                    <span className="skill">Python</span>
                </div>
            </section>

            <section className="projects">
                <h2>Projects</h2>
                <div className="project-grid">
                    <div className="project"><h3>House price prediction</h3><ul>
                        <li>Developed a machine learning model to predict house prices based on various features such as location, square footage, number of bedrooms, and amenities.</li>
                        <li>Utilized regression techniques like Linear Regression to analyze and model the relationships between input features and target prices.</li>
                        <li>Cleaned and preprocessed the dataset by handling missing values, encoding categorical variables, and scaling numerical features.</li>
                        <li>Evaluated the model's performance using metrics like MSE and R², achieving an optimized model with significant accuracy.</li>
                    </ul>
                    </div>
                    <div className="project"><h3>Books and Songs Dashboard</h3><ul>
                        <li>Created an interactive dashboard to provide personalized book and song recommendations based on user preferences.</li>
                        <li>Utilized collaborative filtering and content-based filtering algorithms to suggest relevant items, enhancing user experience through data-driven suggestions.</li>
                        <li>Designed the dashboard to visually display a collection of books and songs, allowing users to explore and receive tailored recommendations by analyzing their interactions and ratings.</li>
                        <li>Aimed to improve user engagement by providing dynamic, personalized content recommendations in an intuitive interface.</li>
                    </ul>
                    </div>

                </div>
            </section>

            <footer>
                <p>&copy; 2025 Vicky | Follow me on <a href="#">Social Media</a></p>
            </footer>
        </div>
    );
}

export default Portfolio;
