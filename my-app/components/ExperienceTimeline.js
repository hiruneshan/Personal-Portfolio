import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function ExperienceTimeline() {
  const experiences = [
    {
      id: 1,
      title: 'Developer / Team Lead',
      company: 'NeedList.ORG',
      location: 'Toronto, ON',
      startDate: 'Sep 2025',
      endDate: 'Present',
      description: 'Leading a team of 8 developers, architecting scalable solutions, and mentoring junior developers. Successfully delivered 15+ projects on time.',
      skills: ['React', 'Node.js', 'AWS', 'Team Leadership']
    },
    {
      id: 2,
      title: 'IT Intern - Co-OPS',
      company: 'NeedList.ORG',
      location: 'Toronto, ON',
      startDate: 'May 2025',
      endDate: 'Sep 2025',
      description: 'Developed and maintained multiple web applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality products.',
      skills: ['Notion', 'FlutterFlow', 'GCP', 'GitHub']
    },
    {
      id: 3,
      title: 'Junior Front End Developer',
      company: 'Comvey Pvt Ltd.',
      location: 'Colombo, Sri Lanka',
      startDate: 'Mar 2023',
      endDate: 'Feb 2024',
      description: 'Built responsive web interfaces and RESTful APIs. Participated in agile development processes and code reviews.',
      skills: ['HTML/CSS', 'JavaScript', 'MySQL', 'Git']
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #040b25 0%, #040b25 50%, #040b25 100%)',
      padding: '60px 20px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#1e293b',
      marginBottom: '10px'
    },
    subtitle: {
      color: '#cbd5e1',
      fontSize: '1.1rem'
    },
    timelineContainer: {
      position: 'relative',
      maxWidth: '900px',
      margin: '0 auto',
      paddingLeft: '80px'
    },
    timelineLine: {
      position: 'absolute',
      left: '32px',
      top: '0',
      bottom: '0',
      width: '3px',
      background: 'linear-gradient(180deg, #4d7379ff 0%, #3b82f6 50%, #2dd4bf 100%)',
      boxShadow: '0 0 10px rgba(34, 211, 238, 0.3)'
    },
    experienceItem: {
      marginBottom: '50px',
      position: 'relative'
    },
    timelineDot: {
      position: 'absolute',
      left: '-54px',
      top: '24px',
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      backgroundColor: '#0f172a',
      border: '4px solid #64ffda',
      boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)',
      zIndex: 2
    },
    card: {
      backgroundColor: '#1e293b',
      borderRadius: '5px',
      padding: '28px',
      border: '1px solid #334155',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
      transition: 'all 0.3s ease'
    },
    cardTitle: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      color: '#1eb18fff',
      marginBottom: '8px'
    },
    companyRow: {
      display: 'flex',
      alignItems: 'center',
      color: '#cbd5e1',
      marginBottom: '12px'
    },
    companyName: {
      fontWeight: '600',
      marginLeft: '8px'
    },
    badge: {
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '600'
    },
    currentBadge: {
      backgroundColor: 'rgba(34, 211, 238, 0.15)',
      color: '#64ffda',
      border: '1px solid rgba(0, 0, 0, 0.3)'
    },
    pastBadge: {
      backgroundColor: '#334155',
      color: '#cbd5e1',
      border: '1px solid #475569'
    },
    detailsRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      marginBottom: '16px',
      color: '#94a3b8',
      fontSize: '0.9rem'
    },
    detailItem: {
      display: 'flex',
      alignItems: 'center'
    },
    description: {
      color: '#cbd5e1',
      lineHeight: '1.6',
      marginBottom: '20px'
    },
    skillsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    skillBadge: {
      padding: '6px 14px',
      backgroundColor: 'rgba(34, 211, 238, 0.1)',
      color: '#64ffda',
      border: '1px solid rgba(34, 211, 238, 0.3)',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.container}>
      <div className="container">
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Work Experience</h1>
          <p style={styles.subtitle}>My professional journey</p>
        </div>

        {/* Timeline */}
        <div style={styles.timelineContainer}>
          {/* Vertical Line */}
          <div style={styles.timelineLine}></div>

          {/* Experience Cards */}
          {experiences.map((exp) => (
            <div key={exp.id} style={styles.experienceItem}>
              {/* Timeline Dot */}
              <div style={styles.timelineDot}></div>

              {/* Card */}
              <div
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(34, 211, 238, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.4)';
                }}
              >
                {/* Header */}
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="flex-grow-1">
                    <h3 style={styles.cardTitle}>{exp.title}</h3>
                    <div style={styles.companyRow}>
                      <Briefcase size={16} />
                      <span style={styles.companyName}>{exp.company}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div style={styles.detailsRow}>
                  <div style={styles.detailItem}>
                    <Calendar size={16} style={{ marginRight: '6px' }} />
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div style={styles.detailItem}>
                    <MapPin size={16} style={{ marginRight: '6px' }} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p style={styles.description}>{exp.description}</p>

                {/* Skills */}
                <div style={styles.skillsContainer}>
                  {exp.skills.map((skill, i) => (
                    <span key={i} style={styles.skillBadge}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}