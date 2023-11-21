import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import style from '../_styles/projectcard.module.css';
import { Tag } from './Tag';
import Link from 'next/link';
interface PortfolioCardProps {
  id: string;
  title: string;
  tags: string[];
  imageUrl: string;
  description: string;
}

export default function ProjectCard({ id, title, tags, imageUrl, description }: PortfolioCardProps) {
  return (
    <Link href={`/portfolio/${id}`} passHref style={{ textDecoration: 'none' }}>
      <Card className={style.projectCard} sx={{ backgroundColor: 'var(--projk_foreground)' }}>
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
    </Link>
  );
}
