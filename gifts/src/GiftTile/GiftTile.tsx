import { Card } from "@mantine/core";
import { Gift } from "../models";
import { IconBrandAmazon } from "@tabler/icons-react";
import './GiftTile.css';

export interface GiftTileProps {
    gift: Gift
};

export const GiftTile = ({ gift }: GiftTileProps) => {

    const formatPrice = (price: number) => {
        const cents = price % 100;
        const dollars = Math.floor(price / 100);
        return `${dollars}.${cents}`;
    }

    return (
        <Card className="card">
            <Card.Section>
                <h3>{gift.name}</h3>
            </Card.Section>
            <Card.Section>
                <div>Desire Score: {gift.wantScore}/5</div>
                <div>Price: ${formatPrice(gift.price)}</div>
            </Card.Section>
            <Card.Section>
                {gift.amazonLink !== '' &&
                    <a href={gift.amazonLink} target="_blank" className="link-icon">
                        <IconBrandAmazon color="grey" className="icon"/>
                    </a>
                }
            </Card.Section>
        </Card>
    );
};
