import React from 'react'
import AuthorSection from '../../components/AuthorSection'
import BannerSection from '../../components/BannerSection'
import FeedSection from '../../components/FeedSection'
import NewsletterSection from '../../components/NewsletterSection'
import PageTemplate from '../../components/templates/PageTemplate'

const HomePage = () => {
  return (
    <PageTemplate>
        <BannerSection />
        <FeedSection />
        <AuthorSection />
        <NewsletterSection />
    </PageTemplate>
  )
}

export default HomePage