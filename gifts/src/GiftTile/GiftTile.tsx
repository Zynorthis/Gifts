import { Card } from '@mantine/core';
import { Gift } from '../models';
import { IconBrandAmazon, IconLink } from '@tabler/icons-react';
import './GiftTile.css';

export interface GiftTileProps {
  gift: Gift;
}

export const GiftTile = ({ gift }: GiftTileProps) => {
  const formatPrice = (price: number) => {
    const cents = price % 100;
    const dollars = Math.floor(price / 100);
    if (cents === 0) return `${dollars}.00`;
    return `${dollars}.${cents}`;
  };

  return (
    <Card className='card'>
      <Card.Section>
        <div className='card-title'>{gift.name}</div>
      </Card.Section>
      <Card.Section>
        <div className='card-price'>Price: ${formatPrice(gift.price)}</div>
      </Card.Section>
      <Card.Section>
        {gift.note && (
          <div className='card-note'>{gift.note}</div>
        )}
      </Card.Section>
      <Card.Section>
        {gift.amazonLink !== '' && (
          <a
            href={gift.amazonLink}
            target='_blank'
            rel='noreferrer'
          >
            <IconBrandAmazon color='grey' className='link-icon' />
          </a>
        )}
        {gift.genericLink !== '' && (
          <a
            href={gift.genericLink}
            target='_blank'
            rel='noreferrer'
          >
            <IconLink color='grey' className='link-icon' />
          </a>
        )}
      </Card.Section>
    </Card>
  );
};
