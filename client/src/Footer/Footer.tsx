import React from 'react'
import { connect } from 'react-redux'



export type FooterPropsType = {
  pageFooter: {
  heading: string,
  infoText: string,
  socialHeading: string,
  social: {
    facebook: string,
    telegram: string,
    whatsapp: string,
    kakao: string
  },
  copyright: string
  }
}

export const Footer = (props:FooterPropsType) => {
    return (
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">{props.pageFooter.heading}</h5>
                <p className="grey-text text-lighten-4">{props.pageFooter.infoText}</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">{props.pageFooter.socialHeading}</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href={props.pageFooter.social.facebook}>Facebook</a></li>
                  <li><a className="grey-text text-lighten-3" href={props.pageFooter.social.telegram}>Telegram</a></li>
                  <li><a className="grey-text text-lighten-3" href={props.pageFooter.social.whatsapp}>Whatsapp</a></li>
                  <li><a className="grey-text text-lighten-3" href={props.pageFooter.social.kakao}>Kakao</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © {props.pageFooter.copyright}
            </div>
          </div>
        </footer>
    )
}


type mstpType = (state:any) => FooterPropsType

const mapStateToProps:mstpType = (state:any) => ({pageFooter: state.pageFooter})

export const FooterContainer = connect(mapStateToProps, {})(Footer)