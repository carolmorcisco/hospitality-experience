const experiences = [
  {
    id: 'finance',
    icon: '/icons/banking_black.svg',
    title: 'Finance',
    description: 'Personalized financial services',
    accent: '#8b5cf6',
  },
  {
    id: 'healthcare',
    icon: '/icons/healthcare.svg',
    title: 'Healthcare',
    description: 'Connected patient experiences',
    accent: '#22d3ee',
  },
  {
    id: 'airline',
    icon: '/icons/travel.svg',
    title: 'Airline',
    description: 'Intelligent travel assistance',
    accent: '#60a5fa',
  },
  {
    id: 'hospitality',
    icon: '/icons/customer-experience-cx.svg',
    title: 'Hospitality',
    description: 'Personalized guest journeys',
    accent: '#2dd4bf',
  },
];

function ExperienceSelection() {
  return (
    <main
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        padding: '30px 52px 38px',
        background:
          'linear-gradient(145deg, #17112f 0%, #292263 44%, #143c63 72%, #07616c 100%)',
        color: '#ffffff',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-220px',
          left: '-150px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.46), transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-180px',
          bottom: '-260px',
          width: '680px',
          height: '680px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(45, 212, 191, 0.34), transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1120px',
          margin: '0 auto',
        }}
      >
        <header
          style={{
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              minHeight: '72px',
              marginBottom: '12px',
            }}
          >
            <img
              src="/webex-by-CIsco-right-wordmark-white.png"
              alt="Webex by Cisco"
              style={{
                display: 'block',
                width: '155px',
                maxHeight: '72px',
                objectFit: 'contain',
                objectPosition: 'left center',
              }}
            />
          </div>

          <div
            style={{
              textAlign: 'center',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '17px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#73f2d2',
              }}
            >
              Webex AI Agent
            </p>

            <h1
              style={{
                margin: '12px 0 10px',
                fontSize: '50px',
                lineHeight: 1.04,
                letterSpacing: '-0.035em',
              }}
            >
              Explore AI Experiences
            </h1>

            <p
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                fontSize: '22px',
                lineHeight: 1.4,
                color: 'rgba(255, 255, 255, 0.78)',
              }}
            >
              Tell the AI Concierge which experience you would like to explore.
            </p>
          </div>
        </header>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '20px',
          }}
        >
          {experiences.map((experience) => (
            <article
              key={experience.id}
              style={{
                position: 'relative',
                minHeight: '168px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                padding: '24px 28px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.055))',
                boxShadow:
                  '0 18px 44px rgba(4, 4, 25, 0.25), inset 0 1px 0 rgba(255,255,255,0.11)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '5px',
                  height: '100%',
                  background: experience.accent,
                }}
              />

              <div
                style={{
                  width: '80px',
                  height: '80px',
                  flexShrink: 0,
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: '22px',
                  border: `1px solid ${experience.accent}66`,
                  background: `${experience.accent}24`,
                }}
              >
                <img
                  src={experience.icon}
                  alt=""
                  style={{
                    width: '52px',
                    height: '52px',
                    objectFit: 'contain',
                  }}
                />
              </div>

              <div>
                <h2
                  style={{
                    margin: '0 0 9px',
                    fontSize: '30px',
                    lineHeight: 1.1,
                  }}
                >
                  {experience.title}
                </h2>

                <p
                  style={{
                    margin: 0,
                    fontSize: '19px',
                    lineHeight: 1.4,
                    color: 'rgba(255, 255, 255, 0.72)',
                  }}
                >
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </section>

        <p
          style={{
            margin: '25px 0 0',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 500,
            color: '#73f2d2',
          }}
        >
          Try saying
        </p>

        <p
          style={{
            margin: '8px 0 0',
            textAlign: 'center',
            fontSize: '22px',
            fontWeight: 400,
            color: '#73f2d2',
          }}
        >
          Finance • Healthcare • Airline • Hospitality
        </p>
      </div>
    </main>
  );
}

export default ExperienceSelection;