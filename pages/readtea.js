import Layout from '../components/layout'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import RecipeReviewCard from '../components/reviewplain'
import { reviews } from '../data'

export const getStaticProps = async () => {
  return {
    props: {
      reviewslist: reviews,
    },
  }
}

export default function Show({ reviewslist }) {
  const [currentPage, setCurrentPage] = useState(1)
  const reviewsPerPage = 3
  const totalPages = Math.ceil(reviewslist.length / reviewsPerPage)
  const indexOfLastReview = reviewsPerPage * currentPage
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage
  const currentReviews = reviewslist.slice(
    indexOfFirstReview,
    indexOfLastReview,
  )
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1)
  }
  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <div className={styles.feed}>
        {currentReviews.map((review) => (
          <RecipeReviewCard content={review.content} />
        ))}
        <div className={styles.pagination}>
          <button
            onClick={() => handlePrevious()}
            disabled={currentPage <= 1}
            className={styles.paginationButton}
          >
            Previous
          </button>

          <div className={styles.pageNumbers}>
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={currentPage == pageNumber ? styles.activePage : ''}
              >
                <p>{pageNumber}</p>
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNext()}
            disabled={currentPage >= totalPages}
            className={styles.paginationButton}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}
