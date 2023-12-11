import { Card, CardContent, CardMedia, Skeleton } from '@mui/material';
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
          <div style={{ height: 0, position: 'relative', top: '-26px', left: '-16px', maxWidth: 'calc(100% + 32px)' }}>
            <h5 className={style.cardTitle}>
              {title}
            </h5>
          </div>
          <div style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {tags.map((tag, i) => <Tag key={i} tag={tag} />)}
          </div>
          <p className={style.text}>{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export function LoadingCard() {
  return (
    <Skeleton className={style.projectCard} sx={{ backgroundColor: 'var(--projk_foreground)' }} />
  )
}
