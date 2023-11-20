import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import style from '../_styles/projectcard.module.css';
import { Tag } from './Tag';

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
      <CardContent sx={{ paddingTop: 0, '& MuiCardContent-root:last-child': { paddingBottom: 0 } }}>
        <div style={{ height: 0, position: 'relative', top: '-26px', left: '-16px' }}>
          <h5 className={style.cardTitle}>
            {title}
          </h5>
        </div>
        {tags.map((tag, i) => <Tag key={i} tag={tag} />)}
        <p className={style.text}>{description}</p>
      </CardContent>
    </Card>
  );
}
