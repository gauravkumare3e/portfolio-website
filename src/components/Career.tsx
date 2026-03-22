import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Intern</h4>
                <h5>Elevate-Labs</h5>
              </div>
              <h3>Aug '25 - Sep '25</h3>
            </div>
            <p>
              Helped in automating CI/CD pipelines using GitHub Actions and Docker. 
              Worked on deployment optimization and basic cloud automation tasks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Intern (5G/6G)</h4>
                <h5>Hnnoix India Pvt. Ltd.</h5>
              </div>
              <h3>Aug '25 - Oct '25</h3>
            </div>
            <p>
              Gained hands-on experience on 6G technology, new telecom technology, 
              and wireless technology.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Electronics System Engineering</h4>
                <h5>NIELIT</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Final year B.Tech student progressing with a CGPA of 8.1.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
