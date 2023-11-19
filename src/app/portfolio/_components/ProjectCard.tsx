import { Card, CardContent, CardMedia, Chip, Tooltip, Typography } from '@mui/material';
import style from '../_styles/projectcard.module.css';

interface PortfolioCardProps {
  title: string;
  tags: string[];
  imageUrl: string;
  description: string;
}



export default function ProjectCard({ title, tags, imageUrl, description }: PortfolioCardProps) {
  return (
    <Card className={style.projectCard}>
      <CardMedia
        component='img'
        height="140"
        image={imageUrl}
        alt={title}
      >
      </CardMedia>
      <CardContent sx={{ paddingTop: 0 }}>
        <div style={{ height: 0, position: 'relative', top: '-26px', left: '-16px' }}>
          <h5 className={style.cardTitle}>
            {title}
          </h5>
        </div>
        {tags.map(tag => {
          const tagData = tagToColor(tag);
          return (
            <Tooltip key={tag} title={tagData.tooltip}
              sx={{
                typography: 'body2', // Use a typography variant, or use custom styles
                '& .MuiTooltip-tooltip': {
                  fontFamily: 'Lexend, sans-serif'
                }
              }}
            >
              <Chip
                label={tag}
                sx={{
                  margin: '6px 6px 6px 0',
                  backgroundColor: tagData.color,
                  color: 'white',
                  fontSize: '0.75rem', // Smaller text
                  padding: '2px 4px', // Reduced padding
                  height: '24px', // Smaller height if needed

                  '& .MuiChip-label': { // Targeting the label
                    fontSize: '0.75rem', // Smaller text
                    padding: '0 4px', // Custom padding for the label
                  },
                }}
              />
            </Tooltip>
          )
        }
        )}
        <p className={style.text}>{description}</p>
      </CardContent>
    </Card>
  );
}

function tagToColor(tag: string): { color: string, tooltip: string } {
  if (TAG_TO_COLOR[tag] != undefined) return TAG_TO_COLOR[tag];
  else {
    return {
      color: stringToColor(tag),
      tooltip: ''
    }
  }
}

function stringToColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).substr(-2);
  }

  return color;
}

const TAG_TO_COLOR: { [key: string]: { color: string, tooltip: string } } = {
  "Venture": {
    "color": "#315f26",
    "tooltip": "A venture & company separate from the members of Projk."
  },
  "Hyper Projk": {
    "color": "#ff8000",
    "tooltip": "This took or is taking years to complete."
  },
  "Major Projk": {
    "color": "#a335ee",
    "tooltip": "This took a couple of months to complete."
  },
  "Minor Projk": {
    "color": "#0070dd",
    "tooltip": "This took a few weeks to a month to complete."
  },
  "Mini Projk": {
    "color": "#20e65c",
    "tooltip": "This took a few days to a week to complete."
  },
  "Micro Projk": {
    "color": "#dbdbdb",
    "tooltip": "This took less than a day to complete!"
  },
  "On Hold": {
    "color": "#f8c211",
    "tooltip": "This project is currently on hold. Development may continue in the future."
  },
  "Finished": {
    "color": "#1cc54f",
    "tooltip": "This is completed, and work probably won't continue."
  },
  "Deceased": {
    "color": "#d70000",
    "tooltip": "No longer exists. Don't cry for me Argentina..."
  },
  "J & K": {
    "color": "#684663",
    "tooltip": "Made in equal parts by both Jeremy and Kevin."
  },
  "For Kicks": {
    "color": "#ff6a9b",
    "tooltip": "Not for our careers, not even a proof of concept. Made purely for kicks."
  },
  "bL0cKchAiN!": {
    "color": "#03bafc",
    "tooltip": "It used to be a buzzword on resumes. Now artists on twitter hate you."
  }
};
