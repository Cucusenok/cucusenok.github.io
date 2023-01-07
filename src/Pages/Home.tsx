import React from "react";
import { styled } from '@mui/system';
import {BaseMobileContainer} from "../Components/Containers/BaseMobileContainer";
import {DarkOpacityRectangle} from "../Resources/Backgrounds/DarkOpacityRectangle";
import {Typography} from "@mui/material";
import {TypographyOptions} from "@mui/material/styles/createTypography";
import ContactWaveBackground from "../Resources/Backgrounds/ContactWaveBackground.svg";
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import SpacerStyled from "../Components/Untils/Spacer";
import TelegramIcon from "../Resources/Icons/TelegramIcon.svg";
import GitHubIcon from "../Resources/Icons/GitHubIcon.svg";
import InstagramIcon from "../Resources/Icons/InstagramIcon.svg";
import LinkedInIcon from "../Resources/Icons/LinkedInIcon.svg";
import MailIcon from "../Resources/Icons/MailIcon.svg";


const ProfileImg = styled('img')({
    width: "100px",
    height: "100px",
    borderRadius: "50%"
});


const AboutMeContainer = styled('div')({
    display: "flex",
    color: "white",
    gap: "25px"
});

const TextContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-between",
    color: "white",
    height: "100px",
});


const HelloText = styled('h1')(({ theme }) => ({
    ...(theme.typography as TypographyOptions).h2,
    position: "relative",
    display: "block",
    width: "fit-content",
    '&::after': {
        position: "absolute",
        right: "-0.8rem",
        bottom: "0.5rem",
        content: "''",
        display: 'block',
        border: "1px solid white",
        height: 6,
        width: 6,
    },
}));

const BioContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    height: "100px",
});



const HomeLayout = styled('div')({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
});


const ContactsContainer = styled('div')({
    width: "100%",
    height: "200px",
    position: "relative"
});


const ContactIconsContainer = styled('div')({
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    alignItems: "center"
});

const ContactsSvgBgObject = styled('object')({
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
})

const ContactIcon = styled('object')({
    width: "45px",
    height: "45px",
})


type ContactType = {
    icon: string,
    link: string
}


const ContactsContent = styled('div')({
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
})

const Contacts = () => {

    const contacts: Array<ContactType> = [
        {
            icon: TelegramIcon,
            link: "@",
        },
        {
            icon: GitHubIcon,
            link: "@",
        },
        {
            icon: InstagramIcon,
            link: "@",
        },
        {
            icon: LinkedInIcon,
            link: "@",
        },
        {
            icon: MailIcon,
            link: "@",
        },
    ];

    return <ContactsContainer>
        <ContactsSvgBgObject type="image/svg+xml" data={ContactWaveBackground} />
        <ContactsContent>
            <SpacerStyled height={50} />
            <Typography variant="h2">Contact me</Typography>
            <SpacerStyled height={30} />
            <ContactIconsContainer>
                { contacts.map( c => <ContactIcon type="image/svg+xml" data={c.icon} /> ) }
            </ContactIconsContainer>
        </ContactsContent>
    </ContactsContainer>
}



export const Home = () => {
    return <HomeLayout>
        <BaseMobileContainer>
            <AboutMeContainer>
                <ProfileImg src={"/profile.png"}/>
                <TextContainer>
                    <BioContainer>
                        <HelloText>Hello</HelloText>
                        <Typography variant="h1">I am Alex</Typography>
                    </BioContainer>
                    <Typography variant="h4">Software Engineer</Typography>
                </TextContainer>
            </AboutMeContainer>
            <div style={{marginTop: "40px"}}></div>
            <DarkOpacityRectangle width={"calc(100% - 20px)"} height={250} borderRadius={15} padding={10} >
                <Typography variant="h5" textAlign={"start"}>
                    Lorem ipsum dolor sit amet consectetur. Mattis fringilla lacus vitae pellentesque urna tempus aliquet. Urna purus diam lorem gravida tempor volutpat augue.  Lorem ipsum dolor sit amet consectetur. Mattis fringilla lacus vitae pellentesque urna tempus aliquet. Urna purus diam lorem gravida tempor volutpat augue. Lorem ipsum dolor sit amet consectetur. Mattis fringilla lacus vitae pellentesque urna tempus aliquet. Urna purus diam lorem gravida tempor volutpat augue.
                </Typography>
            </DarkOpacityRectangle>
            <SpacerStyled height={40} />
            <Button variant="contained" fullWidth>Download my CV</Button>

        </BaseMobileContainer>

        <Contacts />

    </HomeLayout>

}