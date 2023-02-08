import { highlightMock } from '../../services/apiMock'

const BannerSection = () => {
  return (
    <section>
        <span>{highlightMock.category}</span>
        <h1>{highlightMock.title}</h1>
        <a>Leia mais</a>
    </section>
  )
}

export default BannerSection