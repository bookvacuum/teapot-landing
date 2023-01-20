import { PrismaClient } from '@prisma/client';
import styles from '../../styles/Home.module.css';

// Instantiate Prisma Client
const prisma = new PrismaClient();

const ReviewPage = (review = null) => {
  return (
    <div className={styles.container}>
    <h1 className={styles.header}>our mission</h1>
                <span>{review?.company ?? 0} company </span>

                <span>{review?.role ?? 0} </span>
           
                <span>{review?.createdAt ?? 0}</span>

        
    
        <p className="mt-8 text-lg">{review?.content ?? ''}</p>
    </div>
  );
};

export default ReviewPage;

export async function getStaticPaths() {
  // Get all the homes IDs from the database
  const reviews = await prisma.review.findMany({
    select: { id: true },
  });

  return {
    paths: reviews.map(review => ({
      params: { id: review.id },
    })),
    fallback: false,
  };
}                               


export async function getStaticProps({ params }) {
  // Get the current home from the database
  const review = await prisma.review.findUnique({
    where: { id: params.id },
  });

  if (review) {
    return {
      props: JSON.parse(JSON.stringify(review)),
    };
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}