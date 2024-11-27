import { useRegistry } from "./hooks/useRegistry";
import { GiftTile } from "./GiftTile";

export const LandingPage = () => {
    console.log("Landing Page.");
    const { gifts, error, isLoading } = useRegistry();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (<>
        <h1>Gift Registry</h1>
        <p>I got tired of sending out the same gift list year round, so here's my permanent gift registry (up to date prices and not owned yet)</p>
        <h3>Under $50</h3>
        {gifts && gifts.map((gift) => {
            if (+(gift.price) <= 5000) {
                return <GiftTile gift={gift} />
            }
        })}
    </>);
};
