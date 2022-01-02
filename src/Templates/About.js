const About = () => {
    return (
        <section className="About">
            <div className="Anchor" id="About-anchor"></div>
            <header className="About__header uppercase">
                <h2 className="About__heading">
                    About the brand
                </h2>
            </header>
            <div className="About__container">
                <section className="About__section">
                    <article className="About__article">
                        <h3 className="About__title uppercase">
                            The Project:
                        </h3>
                        <p className="About__info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum mauris, mollis quis ante et, tempus convallis est. Sed ut hendrerit erat. Nam tincidunt dui id tortor vulputate elementum. Quisque aliquet elit et ligula ultricies, non dictum lectus elementum. Fusce eleifend lorem id commodo aliquam. Duis rhoncus, arcu at vulputate egestas, risus ipsum malesuada mauris, vel scelerisque libero mi ornare sapien. Donec iaculis augue ac eros placerat, non malesuada justo fringilla. Mauris et consectetur libero. Sed malesuada neque vel nisl congue, vel luctus lectus posuere. Vestibulum vel quam risus. Pellentesque ultrices ultrices tellus eu vestibulum. Ut dictum gravida urna, vel scelerisque nunc. Curabitur eu gravida nulla...
                            <span className="About__span"> </span>
                            <a className="About__read-more " href="">
                                Read more
                            </a>
                        </p>
                    </article>
                </section>
                <section className="About__section">
                    <article className="About__article">
                        <h3 className="About__title uppercase">
                            Our Business:
                        </h3>
                        <p className="About__info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum mauris, mollis quis ante et, tempus convallis est. Sed ut hendrerit erat. Nam tincidunt dui id tortor vulputate elementum. Quisque aliquet elit et ligula ultricies, non dictum lectus elementum. Fusce eleifend lorem id commodo aliquam. Duis rhoncus, arcu at vulputate egestas, risus ipsum malesuada mauris, vel scelerisque libero mi ornare sapien.
                        </p>
                    </article>
                    <footer className="About__footer">
                        <a className="About__contact uppercase" href="#Contact-anchor">
                            Contact
                        </a>
                    </footer>
                </section>
            </div>
        </section>
    );
}
 
export default About;