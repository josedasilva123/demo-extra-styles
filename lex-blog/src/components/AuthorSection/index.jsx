import Author from "../../assets/Author.jpg"

const AuthorSection = () => {
   return (
      <section>
         <div>
            <img src={Author} alt="Retrato da Autora" />
         </div>
         <div>
            <h3>Sobre a autora</h3>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies condimentum nisi, in pellentesque erat ornare ac.
               Quisque tempor, quam in facilisis congue, purus leo auctor risus, quis pellentesque ex lorem vitae velit. Nam et ipsum velit.
               Duis dictum porta mauris a tempor. Pellentesque vehicula tortor ac nunc ornare, eget sagittis eros pharetra. Mauris
               consectetur dignissim est, eget finibus tortor malesuada ut. Proin tincidunt neque sed eros placerat, sed congue massa
               feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc nec cursus purus.
               Fusce nulla ante, feugiat sit amet dignissim non, tempus sit amet lorem. Integer maximus gravida ante non egestas. Aliquam
               maximus lacus nec tempus ornare. Aenean efficitur semper purus, ac sollicitudin dui placerat nec. Proin fringilla ex vel
               risus porttitor, in eleifend ipsum condimentum.
            </p>
         </div>
      </section>
   );
};

export default AuthorSection;
