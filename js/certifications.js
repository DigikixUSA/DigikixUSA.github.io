const certifications = [
    { name: "Western Governors University, Bachelor of Science, Software Engineering (2020-2025)", badge: "../content/wgu2.png" },
    { name: "AWS Certified Cloud Practitioner - Foundational (Oct 2023)", badge: "../content/aws.png" },
    { name: "CompTIA Project+ (Feb 2024)", badge: "../content/project.png" },
    { name: "C Certified Associate Programmer - CLA (June 2020) C++ Institute", badge: "../content/cla.png" },
    { name: "CompITA A+ (Dec 2008)", badge: "../content/aplus.png" }
];

function Certifications() {
  return (
    <div>
      <h2>Educations and Certifications</h2>
      <div className="cert-list">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <img src={cert.badge} alt={`${cert.name} badge`} className="cert-badge" />
            <span className="cert-name">{cert.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Certifications />);
