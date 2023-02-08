import React from 'react'
import AuthorSection from '../../components/AuthorSection'
import BannerSection from '../../components/BannerSection'
import FeedSection from '../../components/FeedSection'
import PageTemplate from '../../components/templates/PageTemplate'

const HomePage = () => {
  return (
    <PageTemplate>
        <BannerSection />
        <FeedSection />
        <AuthorSection />
    </PageTemplate>
  )
}

export default HomePage