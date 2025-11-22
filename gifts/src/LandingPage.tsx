import { useRegistry } from './hooks/useRegistry';
import { GiftTile } from './GiftTile/GiftTile';
import { LinkListItem } from './LinkListItem/LinkListItem';
import { Note } from './Note/Note';
import { Footer } from './Footer/Footer';
import './LandingPage.css';
import { useEffect } from 'react';

export const LandingPage = () => {
  const { gifts, error, isLoading } = useRegistry();

  useEffect(() => {}, [gifts]);

  const underFiftyGifts = gifts?.map((gift) => {
    if (gift.price <= 5000) return gift;
    return undefined;
  });

  const fiftyToOneHundredGifts = gifts?.map((gift) => {
    if (gift.price >= 5001 && gift.price <= 10000) return gift;
    return undefined;
  });

  const overOneHundredGifts = gifts?.map((gift) => {
    if (gift.price > 10000) return gift;
    return undefined;
  });

  if (isLoading) return <div className='loading'>Loading...</div>;
  if (error) return <div className='error'>Error: {error}</div>;
  if (!gifts) return <div className='no-registry'>
    <p>Well that's awkward...</p>
    <p>No registry file found. You should let Jacob know.</p>
  </div>;

  return (
     <>
      <h1>Gift Registry</h1>
      <p>
        I got tired of sending out the same dozen wishlist links to everyone who asked, so I made this website that has everything
      </p>
      <p className='subtext'>(Last updated on 11/21/2025)</p>
      <div className='notes'>
        <Note title='Note:'>
          To view my wishlist of video games, which can be done by clicking the 'Games' link, you will need have a steam account and be logged in.
        </Note>
        <Note title='Note:'>If nothing here or in any of the wishlist appeals to you, money is always an option :)</Note>
      </div>
      <p className='links-text'>Here are a few of my most popular wishlist</p>
      <div className='links'>
        <LinkListItem
          link='https://www.amazon.com/hz/wishlist/ls/1BUI9J1LZVV5S?ref_=wl_share'
          text='Amazon WishList'
          color='lightseagreen'
        />
        <LinkListItem
          link='https://www.amazon.com/hz/wishlist/ls/10OV4INQTX76P?ref_=wl_share'
          text='Home Automation'
          color='lightseagreen'
        />
        <LinkListItem
          link='https://www.amazon.com/hz/wishlist/ls/2S5ORP4RQ476Y?ref_=wl_share'
          text='Board Games'
          color='lightseagreen'
        />
        <LinkListItem
          link='https://www.amazon.com/hz/wishlist/ls/3DK17OHKYTAEB?ref_=wl_share'
          text='Home Workshop'
          color='lightseagreen'
        />
        <LinkListItem
          link='https://www.amazon.com/hz/wishlist/ls/PDC6BFRM12XO?ref_=wl_share'
          text='D&D'
          color='lightseagreen'
        />
        <LinkListItem
          link='https://store.steampowered.com/wishlist/id/Zynorthis/'
          text='Games'
          color='lightseagreen'
        />
      </div>
      {gifts?.length === 0 && (
        <p className='no-gifts'>
          Ope, nothing is currently on my list. Check out the amazon links above, or send me money instead :)
        </p>
      )}
      {underFiftyGifts?.some((gift) => gift !== undefined) && (
        <>
          <h3>Under $50</h3>
          <div className='section'>
            {underFiftyGifts.map((gift, index) => {
              if (gift === undefined) return undefined;
              return <GiftTile key={`underFifty-${index}`} gift={gift} />;
            })}
          </div>
        </>
      )}
      {fiftyToOneHundredGifts?.some((gift) => gift !== undefined) && (
        <>
          <h3>$50 - $100</h3>
          <div className='section'>
            {fiftyToOneHundredGifts.map((gift, index) => {
              if (gift === undefined) return undefined;
              return (
                <GiftTile key={`fiftyToOneHundred-${index}`} gift={gift} />
              );
            })}
          </div>
        </>
      )}
      {overOneHundredGifts?.some((gift) => gift !== undefined) && (
        <>
          <h3>Over $100</h3>
          <div className='section'>
            {overOneHundredGifts.map((gift, index) => {
              if (gift === undefined) return undefined;
              return <GiftTile key={`overOneHundred-${index}`} gift={gift} />;
            })}
          </div>
        </>
      )}
      <Footer />
    </>
  );
};
