import { useRegistry } from "./hooks/useRegistry";
import { GiftTile } from "./GiftTile/GiftTile";
import { Navigationbar } from "./NavigationBar/NavigationBar";
import './LandingPage.css';

export const LandingPage = () => {
    const { gifts, error, isLoading } = useRegistry();

    const underFiftyGifts = gifts?.map((gift) => {
        if (gift.price <= 5000)
            return gift;
        return;
    })

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (<>
        <Navigationbar />
        <h1>Gift Registry</h1>
        <p>I got tired of sending out the same gift list year round, so here's my permanent gift registry (up to date prices and not owned yet)</p>
        {underFiftyGifts && (
            <>
                <h3>Under $50</h3>
                <div className='section'>
                    {underFiftyGifts.map((gift, index) => {
                        if (gift === undefined) return;
                        return <GiftTile key={index} gift={gift} />;
                    })}
                </div>
            </>
        )}
    </>);
};
