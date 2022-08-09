import React from 'react';
import "./Notifications.css";
import close_icon from "../assets/close-icon.png";
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
    return (
	    <div className="Notifications">
	    <button style={{
		right: 30,
		border: 'none',
		position: 'absolute',
		background: 'transparent',
	    }}
	aria-label="close"
	onClick={() => console.log('Close button has been clicked')}>
	    <img src={close_icon} alt="close button icon" />
	    </button>
	    <p>Here is the list of notifications</p>
	    <ul>
	    <li data-priority="default">New course available</li>
	    <li data-priority="urgent">New resume available</li>
	    <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
	    </ul>
	    </div>
    )
}
