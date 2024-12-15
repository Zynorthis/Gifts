import './LinkListItem.css';

export interface LinkListItemProps {
    link: string;
    text: string;
};

export const LinkListItem = ({ link, text }: LinkListItemProps) => {
    return <li>
        <a href={link} target='_blank'>{text}</a>
    </li>
};
