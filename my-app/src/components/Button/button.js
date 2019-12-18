import React, {Component} from 'react';
import "./css/style.scss"

class Button extends Component {

    render() {
        const svg = {
            pencil: <svg className="Sq(28px) Sq(24px)--xs" viewBox="0 0 24 24" width="24px" height="24px"
                         focusable="false" aria-hidden="true" role="presentation">
                <path className="Fill($c-secondary)"
                      d="M17.079 2c-.41 0-.81.158-1.125.463l-2.23 2.229 5.574 5.583 2.229-2.208c.63-.641.63-1.64 0-2.25l-3.334-3.354A1.605 1.605 0 0 0 17.08 2m-4.101 3.438L4.46 13.966l2.691.295.19 2.408 2.397.179.305 2.691 8.518-8.527M3.84 14.944L2 21.98l7.045-1.882-.252-2.272-2.43-.178-.188-2.44"></path>
            </svg>,
            camera: <svg className="Sq(32px) Sq(28px)--xs" viewBox="0 0 24 24" width="24px" height="24px"
                         focusable="false" aria-hidden="true" role="presentation">
                <path className="Fill(#fff)"
                      d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"></path>
            </svg>,
            setting: <svg className="Sq(28px) Sq(24px)--xs" viewBox="0 0 24 24" width="24px" height="24px"
                          focusable="false" aria-hidden="true" role="presentation">
                <path className="Fill($c-secondary)"
                      d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"></path>
            </svg>

        };
        const {classes, value, info=""}=this.props;
        const _CLASSES = {
            btn: '',
            info: '',
            wrapper: 'btn-wrapper',
            ...classes
        };

        return (
            <div className={_CLASSES.wrapper}>
                <button className={_CLASSES.btn}>
                    {svg[value] || value}
                </button>
                {info!==""?<h2 className={_CLASSES.info}>{info}</h2>:false}
            </div>
        );
    }
}

export default Button;