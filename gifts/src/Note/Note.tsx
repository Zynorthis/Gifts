import { IconInfoCircle } from '@tabler/icons-react';
import './Note.css';

export interface NoteProps {
  title?: string;
  showIcon?: boolean;
  children: React.ReactNode;
};

export const Note = ({ title, children, showIcon = false }: NoteProps) => {
  return <div className='note'>
    <div className='separater'>
      <div className='icon'>
        <IconInfoCircle />
      </div>
      <div>
        {title !== '' &&
          <div className='title'>{title}</div>
        }
        <div className='content'>{children}</div>
      </div>
    </div>
  </div>
}; 
