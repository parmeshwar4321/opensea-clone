import { useRouter } from 'next/router';
import React from 'react'
const Collection = () => {
  const router = useRouter();
  console.log(router.query)
  return (
    <div>collection </div>
  )
}

export default Collection;