import './LinkListItem.css';

export interface LinkListItemProps {
    link: string;
    text: string;
    shouldOpenInNewTab?: boolean;
};

export const LinkListItem = ({ link, text, shouldOpenInNewTab = true }: LinkListItemProps) => {
    const target = shouldOpenInNewTab ? '_blank' : '_self';
    return <li>
        <a href={link} target={target} rel='noreferrer'>{text}</a>
    </li>
};
