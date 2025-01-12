import { useRegistry } from "./hooks/useRegistry";
import { GiftTile } from "./GiftTile/GiftTile";
import { Navigationbar } from "./NavigationBar/NavigationBar";
import './LandingPage.css';

export const LandingPage = () => {
    const { gifts, error, isLoading } = useRegistry();

    const underFiftyGifts = gifts?.map((gift) => {
        if (gift.price <= 5000)
            return gift;
        return undefined;
    });

    const fiftyToOneHundredGifts = gifts?.map((gift) => {
        if (gift.price >= 5001 && gift.price <= 10000)
            return gift;
        return undefined;
    })

    const overOneHundredGifts = gifts?.map((gift) => {
        if (gift.price > 10000)
            return gift;
        return undefined;
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (<>
        <Navigationbar />
        <h1>Gift Registry</h1>
        <p>I got tired of sending out the same gift list year round, so here's my permanent gift registry</p>
        <p className="subtext">(up to date prices and not owned yet)</p>
        {gifts?.length === 0 && (
            <div>Ope, nothing is currently on my list. Check the amazon links at the top of the page, or send me money instead :)</div>
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
                        return <GiftTile key={`fiftyToOneHundred-${index}`} gift={gift} />;
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
    </>);
};
