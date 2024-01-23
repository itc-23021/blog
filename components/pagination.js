import React from 'react'
import styles from 'styles/pagination.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

const Pagination = ({
  prevText = '',
  prevUrl = '',
  nextText = '',
  nextUrl = ''
}) => {
  const handleLinkClick = url => {
    // ここでページ遷移の処理を実装する
    console.log(`Navigating to: ${url}`)
    // 例: ページ遷移のロジックを追加する
  }

  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li className={styles.prev}>
          <span
            className={styles.iconText}
            onClick={() => handleLinkClick(prevUrl)}
          >
            <FontAwesomeIcon icon={faChevronLeft} color='var(--gray-25)' />
            <span>{prevText}</span>
          </span>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.next}>
          <span
            className={styles.iconText}
            onClick={() => handleLinkClick(nextUrl)}
          >
            <span>{nextText}</span>
            <FontAwesomeIcon icon={faChevronRight} color='var(--gray-25)' />
          </span>
        </li>
      )}
    </ul>
  )
}

export default Pagination
