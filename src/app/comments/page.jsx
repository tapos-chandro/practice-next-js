import React, { Suspense } from 'react'
import CommentsList from '../components/CommentsList'

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CommentsList />
    </Suspense>
  )
}
