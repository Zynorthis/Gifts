import { LinkListItem } from "./LinkListItem";
import './NavigationBar.css';

export const Navigationbar = () => {
    return <nav>
        <ul>
            <LinkListItem link="https://jacobt.dev/" text="Portfolio" />
        </ul>
        <ul>
            <LinkListItem link='https://www.amazon.com/hz/wishlist/ls/1BUI9J1LZVV5S?ref_=wl_share' text='Amazon WishList' />
        </ul>
    </nav>
};
