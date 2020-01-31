import React from "react";
import Modal from "react-responsive-modal";
import "./card_style.css";


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: ""
        };
    }

    render() {
        var {
            title,
            cover
        } = this.props;
        return ( <
            div className = "card" >
            <
            img src = {
                cover
            }
            alt = "cover" / >
            <
            div className = "cardContent" >
            <
            h3 > {
                title
            } < /h3> {" "} < /
            div > {
                " "
            } <
            /div>
        );
    }
}


class LitEvents extends React.Component {
    state = {
        open: false,
        title: "TITLE",
        image: "",
        desc: ""
    };
    onOpenModal = (string, imageLink, description) => {
        this.setState({
            open: true,
            title: string,
            image: imageLink,
            desc: description
        });
        console.log(this);
    };

    onCloseModal = () => {
        this.setState({
            open: false
        });
    };

    render() {
        const {
            open,
            title,
            image,
            desc
        } = this.state;
        return ( <
            div className = "appContainer" >
            <
            h2 > Literary Events < /h2>{" "} <
            div className = "cardContainer"
            onClick = {
                () => this.onOpenModal("Event 1", "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png", "Some Decription")
            } >
            <
            Card title = "Some"
            cover = "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" / >
            <
            /div>{" "} <
            div className = "cardContainer"
            onClick = {
                () => this.onOpenModal("Event 2", "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg")
            } >
            <
            Card title = "Some 2"
            cover = "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" / >
            <
            /div>{" "} <
            div className = "cardContainer"
            onClick = {
                () => this.onOpenModal("Event 3", "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg")
            } >
            <
            Card title = "Title 2"
            cover = "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" / >
            <
            /div>{" "}  <
            Modal className = "modal"
            open = {
                open
            }
            onClose = {
                this.onCloseModal
            } >
            <
            img src = {
                image
            }
            style = {
                {
                    width: "100%",
                    margin: "auto",
                    padding: "2%"
                }
            }
            />{" "} <
            h4 > {
                title
            } < /h4>{" "} <
            h5 > {
                desc
            } {
                " "
            } <
            /h5>{" "} < /
            Modal > {
                " "
            } <
            /div>
        );
    }
}

export default LitEvents;