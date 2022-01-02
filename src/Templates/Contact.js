const Contact = () => {
    return (
        <section className="Contact">
            <div className="Anchor" id="Contact-anchor"></div>
            <header className="Contact__header">
                <h2 className="Contact__title uppercase">
                    Get In Contact
                </h2>
            </header>
            <main className="Contact__main">
                <form className="Contact__form">
                    <section className="Contact__section">
                        <label className="Contact__label" for="Contact__input_name">
                            Name
                        </label>
                        <input className="Contact__input" id="Contact__input_name" type="text" placeholder="George" />
                    </section>
                    <section className="Contact__section">
                        <label className="Contact__label" for="Contact__input_mail">
                            E-mail
                        </label>
                        <input className="Contact__input" id="Contact__input_mail" type="email" placeholder="mymail@mil.com" />
                    </section>
                    <section className="Contact__section">
                        <label className="Contact__label" for="Contact__input_message">
                            Message
                        </label>
                        <textarea className="Contact__message" id="Contact__input_message"  type="text" placeholder="..." rows="5"></textarea>
                    </section>
                    <button className="Contact__button"  type="post">
                        Send
                    </button>
                </form>
                <footer className="Contact__footer">
                    <p className="Copyright">
                        The Vault ©
                    </p>
                </footer>
            </main>
        </section>
    );
}
 
export default Contact;