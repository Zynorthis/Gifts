import { LinkListItem } from '../LinkListItem/LinkListItem';
import './Footer.css';

export const Footer = () => {
  return <div className='footer'>
    {"If you'd like to see more of my work, check out my"}
    <LinkListItem 
      link='www.jacobt.dev'
      text='Portfolio'
      color='lightseagreen'
      showBorder={false}
    />
  </div>;
};

