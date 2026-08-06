import type { ExperienceCardData } from '../models/experience';

type Props = {
  card: ExperienceCardData;
};

function ExperienceCard({ card }: Props) {
  return (
    <article
      style={{
        minHeight: '250px',
        border: '1px solid rgba(125, 211, 252, 0.28)',
        borderRadius: '20px',
        padding: '28px',
        background: 'rgba(15, 23, 42, 0.78)',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            fontSize: '32px',
            color: '#ffffff',
          }}
        >
          {card.title}
        </h2>

        <p
          style={{
            margin: '18px 0 0',
            fontSize: '24px',
            lineHeight: 1.4,
            color: '#cbd5e1',
            whiteSpace: 'pre-line',
          }}
        >
          {card.message}
        </p>

        {card.highlight && (
          <p
            style={{
              margin: '18px 0 0',
              fontSize: '25px',
              lineHeight: 1.35,
              fontWeight: 700,
              color: '#38bdf8',
              whiteSpace: 'pre-line',
            }}
          >
            {card.highlight}
          </p>
        )}
      </div>

      {card.prompt && (
        <div
          style={{
            marginTop: '28px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(148, 163, 184, 0.25)',
          }}
        >
          <p
            style={{
              margin: '0 0 8px',
              fontSize: '18px',
              color: '#7dd3fc',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Try saying
          </p>

          <p
            style={{
              margin: 0,
              fontSize: '26px',
              fontWeight: 700,
              lineHeight: 1.35,
            }}
          >
            “{card.prompt}”
          </p>
        </div>
      )}
    </article>
  );
}

export default ExperienceCard;