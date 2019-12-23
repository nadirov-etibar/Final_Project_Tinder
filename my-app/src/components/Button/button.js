import React, {Component} from 'react';
import "./css/style.scss"

class Button extends Component {

    render() {
        const svg = {
            pencil: <svg className="Sq(28px) Sq(24px)--xs profile__svg-blue" viewBox="0 0 24 24" width="24px" height="24px"
                         focusable="false" aria-hidden="true" role="presentation">
                <path className="Fill($c-secondary)"
                      d="M17.079 2c-.41 0-.81.158-1.125.463l-2.23 2.229 5.574 5.583 2.229-2.208c.63-.641.63-1.64 0-2.25l-3.334-3.354A1.605 1.605 0 0 0 17.08 2m-4.101 3.438L4.46 13.966l2.691.295.19 2.408 2.397.179.305 2.691 8.518-8.527M3.84 14.944L2 21.98l7.045-1.882-.252-2.272-2.43-.178-.188-2.44"/>
            </svg>,
            camera: <svg className="Sq(32px) Sq(28px)--xs profile__camera" viewBox="0 0 24 24" width="24px" height="24px"
                         focusable="false" aria-hidden="true" role="presentation">
                <path className="Fill(#fff)"
                      d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"/>
            </svg>,
            like: <svg aria-hidden="true" focusable="false" width="24px" height="24px"
                          data-icon="heart" className="profile__svg-blue" role="presentation"
                          viewBox="0 0 512 512">
                <path
                      d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
            </svg>,

            exit: <svg aria-hidden="true" focusable="false" width="12px" height="12px"
                       data-icon="sign-out-alt" className="profile__svg-blue" role="presentation"
                       viewBox="0 0 512 512">
                <path
                      d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"/>
            </svg>

        };
        const {classes, value, info="", function_name}=this.props;
        const _CLASSES = {
            btn: '',
            info: 'btn-info',
            wrapper: 'btn-wrapper',
            ...classes
        };

        return (
            <div className={_CLASSES.wrapper}>
                <button className={_CLASSES.btn} onClick={function_name}>
                    {svg[value] || value}
                </button>
                {info!==""?<h2 className={_CLASSES.info}>{info}</h2>:false}
            </div>
        );
    }
}

export default Button;