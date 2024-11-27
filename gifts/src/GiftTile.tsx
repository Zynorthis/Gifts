import { Card } from "@mantine/core";
import { Gift } from "./models";
import { IconBrandAmazon } from "@tabler/icons-react";

export interface GiftTileProps {
    gift: Gift
};

export const GiftTile = ({ gift }: GiftTileProps) => {
    return (
        <Card>
            <Card.Section>
                <h4>{gift.name}</h4>
            </Card.Section>
            <Card.Section>
                <div>Desire Score: {gift.wantScore}</div>
                <div>Price: {gift.price}</div>
            </Card.Section>
            <Card.Section>
                {gift.amazonLink !== '' &&
                    <a href={gift.amazonLink}><IconBrandAmazon /></a>
                }
            </Card.Section>
        </Card>
    );
};
