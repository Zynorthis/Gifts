import './LinkListItem.css';

export interface LinkListItemProps {
  link: string;
  text: string;
  color?: 'white' | 'black' | 'lightseagreen';
  showBorder?: boolean;
  shouldOpenInNewTab?: boolean;
}

export const LinkListItem = ({
  link,
  text,
  color = 'black',
  showBorder = true,
  shouldOpenInNewTab = true,
}: LinkListItemProps) => {
  const target = shouldOpenInNewTab ? '_blank' : '_self';
  const borderStyle = showBorder ? `${color}-border` : '';
  const linkStyles = `${color} ${borderStyle}`;
  return (
    <a className={linkStyles} href={link} target={target} rel='noreferrer'>
      {text}
    </a>
  );
};
