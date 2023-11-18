import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
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
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          {title}
        </Typography>
        {tags.map(tag => (
          <Chip key={tag} label={tag} sx={{ margin: '2px' }} />
        ))}
        <p className={style.text}>{description}</p>
      </CardContent>
    </Card>
  );
}
