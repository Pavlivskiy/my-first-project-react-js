import React, {Component} from 'react';
import "../css/Footer.css";
import gmailBlack from "../image/gmail_black.png";
import gmailColor from "../image/gmail_color.png";
import facebookBlack from "../image/facebook_black.png";
import facebookColor from "../image/facebook_color.png";
import telegramBlack from "../image/telegram_black.png";
import telegramColor from "../image/telegram_color.png";
import skypeBlack from "../image/Skype_black.png";
import skypeColor from "../image/Skype_color.png";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [],
            gmailBlack: gmailBlack,
            facebookBlack: facebookBlack,
            telegramBlack: telegramBlack,
            skypeBlack: skypeBlack

        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
    
    render() {
        let date = new Date();
        let dat = date.getFullYear();
        return (
            <div>
                <a href="pavlivskiyvolodymyr@gmail.com" className="size-icons"><img className="size-icons" onMouseOver={this.handleMouseOver.bind(this, "1")} onMouseOut={this.handleMouseOut} src={this.state.gmailBlack} /></a>
                <a href="https://www.facebook.com/profile.php?id=100017199545803&ref=bookmarks" className="size-icons"><img className="size-icons" onMouseOver={this.handleMouseOver.bind(this, "2")} onMouseOut={this.handleMouseOut} src={this.state.facebookBlack} /></a>
                <a href="https://t.me/pavlivskiy_vova" className="size-icons"><img className="size-icons" onMouseOver={this.handleMouseOver.bind(this, "3")} onMouseOut={this.handleMouseOut} src={this.state.telegramBlack} /></a>
                <a href="skype:pavlivskiy_vova?chat" className="size-icons"><img className="size-icons" onMouseOver={this.handleMouseOver.bind(this, "4")} onMouseOut={this.handleMouseOut} src={this.state.skypeBlack} /></a>
                <p className="whiteColor">All rights reserved &copy; {dat} Pavlivskiy Volodymyr</p>
            </div>
            
        );
    }
    handleMouseOut() {
        this.setState({
            gmailBlack: gmailBlack,
            facebookBlack: facebookBlack,
            telegramBlack: telegramBlack,
            skypeBlack: skypeBlack
        });
    }
    handleMouseOver(value) {
        if(value == "1")
            this.setState({
                gmailBlack: gmailColor,
                facebookBlack: facebookBlack,
                telegramBlack: telegramBlack,
                skypeBlack: skypeBlack
            });
        else if(value == "2"){
            this.setState({
                gmailBlack: gmailBlack,
                facebookBlack: facebookColor,
                telegramBlack: telegramBlack,
                skypeBlack: skypeBlack
            });
        }
        else if(value == "3"){
            this.setState({
                gmailBlack: gmailBlack,
                facebookBlack: facebookBlack,
                telegramBlack: telegramColor,
                skypeBlack: skypeBlack
            });
        }
        else if(value == "4"){
            this.setState({
                gmailBlack: gmailBlack,
                facebookBlack: facebookBlack,
                telegramBlack: telegramBlack,
                skypeBlack: skypeColor
            });
        }
    }
}

export default Footer;