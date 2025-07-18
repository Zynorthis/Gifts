import './LinkListItem.css';

export interface LinkListItemProps {
  link: string;
  text: string;
  color?: 'white' | 'black' | 'lightseagreen';
  shouldOpenInNewTab?: boolean;
}

export const LinkListItem = ({
  link,
  text,
  color = 'black',
  shouldOpenInNewTab = true,
}: LinkListItemProps) => {
  const target = shouldOpenInNewTab ? '_blank' : '_self';
  return (
    <a className={color} href={link} target={target} rel='noreferrer'>
      {text}
    </a>
  );
};
