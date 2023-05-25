import React from "react";

const ProfileIconSvg = (props: React.SVGProps<any>) => {
    return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.50144 20.1032L2.04263 23.0025C0.668082 23.6275 0.668082 24.6509 2.04263 25.2759L13.6013 30.5494C14.9204 31.1502 17.0916 31.1502 18.4107 30.5494L29.9694 25.2759C31.3439 24.6509 31.3439 23.6275 29.9694 23.0025L23.7261 19.997M29.9631 6.75394L18.2982 1.4336C17.0338 0.855468 14.9642 0.855468 13.6997 1.4336L2.04263 6.75394C0.668082 7.37895 0.668082 8.40161 2.04263 9.02661L13.6013 14.3001C14.9204 14.9017 17.0916 14.9017 18.4107 14.3001L29.9694 9.02661C31.3377 8.40161 31.3377 7.37817 29.9631 6.75394Z" stroke={props.color} strokeWidth="1.27195" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.49753 11.9727L2.03091 14.8758C0.656363 15.5008 0.656363 16.5242 2.03091 17.1493L13.5896 22.4219C14.9087 23.0235 17.0799 23.0235 18.399 22.4219L29.9577 17.1493C31.34 16.5242 31.34 15.5008 29.9655 14.8758L23.4926 11.9727" stroke={props.color} strokeWidth="1.27195" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}

export default ProfileIconSvg;