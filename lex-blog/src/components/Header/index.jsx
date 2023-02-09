import LexBlog from "../../assets/LexBlog.svg";
import { StyledContainer } from "../../styles/grid";

const Header = () => {
   return (
      <header>
         <StyledContainer>
            <img src={LexBlog} alt="Logo Lex Blog" />
            <button>Siga-nos</button>
         </StyledContainer>
      </header>
   );
};

export default Header;
