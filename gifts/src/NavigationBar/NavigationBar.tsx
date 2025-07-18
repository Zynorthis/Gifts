import { LinkListItem } from './LinkListItem';
import './NavigationBar.css';

export const Navigationbar = () => {
  return (
    <nav>
      <ul>
        <LinkListItem
          link='https://jacobt.dev/'
          text='Portfolio'
          shouldOpenInNewTab={false}
        />
      </ul>
    </nav>
  );
};
