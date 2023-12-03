import { Chip, Tooltip } from '@mui/material';

const TAG_TO_COLOR: { [key: string]: { color: string; tooltip: string; }; } = {
  "Venture": {
    "color": "#315f26",
    "tooltip": "A venture separate from Projk LLC."
  },
  "Paid Work": {
    "color": "#708238",
    "tooltip": "Work done for a company or a contractor (IP not owned by me)."
  },
  "HYPER": {
    "color": "#ff8000",
    "tooltip": "This took or is taking years to complete."
  },
  "MAJOR": {
    "color": "#a335ee",
    "tooltip": "This took a couple of months to complete."
  },
  "MINOR": {
    "color": "#0070dd",
    "tooltip": "This took a few weeks to a month to complete."
  },
  "MINI": {
    "color": "#20e65c",
    "tooltip": "This took a few days to a week to complete."
  },
  "MICRO": {
    "color": "#dbdbdb",
    "tooltip": "This took less than a day to complete!"
  },
  "On Hold": {
    "color": "#f8c211",
    "tooltip": "This project is currently on hold. Development may continue in the future."
  },
  "Finished": {
    "color": "#1cc54f",
    "tooltip": "This is completed, and work won't continue."
  },
  "Deceased": {
    "color": "#d70000",
    "tooltip": "No longer exists. Don't cry for me Argentina..."
  },
  "For Kicks": {
    "color": "#ff6a9b",
    "tooltip": "Not for our careers, not even a proof of concept. Made purely for kicks."
  },
  "bL0cKchAiN!": {
    "color": "#03bafc",
    "tooltip": "It used to be a buzzword on resumes. Now artists on twitter hate you."
  },
  "JavaScript": {
    "color": "#c4a600",
    "tooltip": "The best and worst thing that has happened to frontends."
  },
  "C#": {
    "color": "#400800",
    "tooltip": "It's like Java, but cooler."
  },
  "TypeScript": {
    "color": "#3178c6",
    "tooltip": "This language is just JavaScript when impatient."
  }, 
  "Solidity": {
    "color": "#AA6746",
    "tooltip": "Gas golfing should be integrated into leetcode."
  },
  "Smart Contract": {
    "color": "#008080",
    "tooltip": "I don't know, it doesn't seem that smart to me."
  },
  "Rust": {
    "color": "#ff8a4c",
    "tooltip": "The chad crab language."
  },
  "PHP": {
    "color": "#4F5B93",
    "tooltip": "Who designing this language needed variables of variables?"
  }
};

export function Tag({ tag }: { tag: string; }) {
  const tagData = tagToColor(tag);
  return (
    <Tooltip key={tag} title={tagData.tooltip}
      sx={{
        typography: 'body2',
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
          fontSize: '0.75rem',
          padding: '2px 4px',
          height: '24px',

          '& .MuiChip-label': {
            fontSize: '0.75rem',
            padding: '0 4px', // Custom padding for the label
          },
        }} />
    </Tooltip>
  );
}

function tagToColor(tag: string): { color: string; tooltip: string; } {
  if (TAG_TO_COLOR[tag] != undefined) return TAG_TO_COLOR[tag];
  else {
    return {
      color: stringToColor(tag),
      tooltip: ''
    };
  }
}

function stringToColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 255;
    color += ('00' + value.toString(16)).substr(-2);
  }

  return color;
}