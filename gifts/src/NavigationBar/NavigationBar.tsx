import { LinkListItem } from "./LinkListItem";
import './NavigationBar.css';

export const Navigationbar = () => {
    return <nav>
        <ul>
            <LinkListItem link="https://jacobt.dev/" text="Portfolio" />
        </ul>
        <ul className='divider'>|</ul>
        <ul>
            <LinkListItem link='https://www.amazon.com/hz/wishlist/ls/1BUI9J1LZVV5S?ref_=wl_share' text='Amazon WishList' />
        </ul>
        <ul>
            <LinkListItem link='https://www.amazon.com/hz/wishlist/ls/10OV4INQTX76P?ref_=wl_share' text='Home Automation' />
        </ul>
        <ul>
            <LinkListItem link='https://www.amazon.com/hz/wishlist/ls/PDC6BFRM12XO?ref_=wl_share' text='D&D' />
        </ul>
        <ul>
            <LinkListItem link='https://www.amazon.com/hz/wishlist/ls/2S5ORP4RQ476Y?ref_=wl_share' text='Board Games' />
        </ul>
        <ul>
            <LinkListItem link='https://www.amazon.com/hz/wishlist/ls/3DK17OHKYTAEB?ref_=wl_share' text='Home Workshop' />
        </ul>
        <ul>
            <LinkListItem link='https://store.steampowered.com/wishlist/id/Zynorthis/' text='Games' />
        </ul>
    </nav>
};
