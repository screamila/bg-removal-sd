import logo from './bgremovallogo.svg'
import logo2 from './logo.svg'
import arrow_icon from './arrow_icon.png'
import upload_btn_icon from './upload_btn_icon.png'
import header_img from './header_img.png'
import upload_icon from './upload_icon.svg'
import remove_bg_icon from './remove_bg_icon.svg'
import download_icon from './download_icon.svg'
import image_w_bg from './original.jpg'
import image_wo_bg from './output.jpg'
import profile_img_1 from './profile_img_1_1.png'
import profile_img_2 from './profile_img_2_2.png'
import facebook_icon from './facebook_icon.svg'
import twitter_icon from './twitter_icon.svg'
import google_plus_icon from './googleplus_icon.svg'

export const assets = {
    logo, logo2, arrow_icon, upload_btn_icon, header_img, upload_icon, remove_bg_icon,
    download_icon, image_w_bg, image_wo_bg,
    profile_img_1, profile_img_2,
    facebook_icon, twitter_icon, google_plus_icon
}

export const testimonialsData = [
    {
        id:1,
        text: "I've been using bg.romeval for nearly two years, primarily for Instagram, and it ",
        author:"Richard Nelson",
        image: profile_img_1,
        jobTitle:"Web Developer"
    },
    {
        id:2,
        text: "I've been using bg.romeval for nearly 6 months, I had a fantastic experience. The ",
        author:"Donald Jackman",
        image: profile_img_2,
        jobTitle:"UI Designer"
    }
]

export const plans = [
    {
        id:'Basic',
        price: 10,
        credits: 100,
        desc: 'Best for personal use'
    },
    {
        id:'Advanced',
        price: 50,
        credits: 500,
        desc: 'Best for business use'
    },
    {
        id:'Business',
        price: 250,
        credits: 5000,
        desc: 'Best for enterprise use'
    }
]

export default {
    assets,
    testimonialsData,
    plans,
}