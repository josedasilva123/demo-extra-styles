import { StyledContainer } from "../../styles/grid";
import NewsletterForm from "./NewsletterForm";

const NewsletterSection = () => {
   return (
      <section>
         <StyledContainer containerWidth={990}>
            <h3>Cadastre-se na nossa newsletter</h3>
            <p>E fique de olho nas nossas novidades</p>
            <div>
               <NewsletterForm />
            </div>
         </StyledContainer>
      </section>
   );
};

export default NewsletterSection;
