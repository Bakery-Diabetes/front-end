// DESIGN SYSTEM
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { Tag } from "@/ui/design-system/tag/tag";
// ICONS
import { GrLocation } from "react-icons/gr";
// UTILS
import Link from "next/link";
import Image from "next/image";

interface CardBoutiqueProps {
    name: string;
    tags?: string[];
    image: string;
    uid?: string; 
    commune: string;
}

export const CardBoutique = ({ 
    name,
    commune,
    tags = [], 
    image, 
    uid
}: CardBoutiqueProps) => {
    return (
        <div className="bg-primary-beige rounded border-2 border-primary hover:bg-primary-100 animate">
            <Image 
                src={image || "/assets/placeholder.jpg"} 
                alt={name} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover rounded-t" 
                priority
            />
            <div className="p-4 space-y-5">
                <div className="flex gap-2 mb-2">
                    {tags.map((tag, i) => (
                        <Tag key={i} label={tag} />
                        
                    ))}
                </div>

                <div className="space-y-2">
                    <Typography variant="lead">{name}</Typography>
                    <div className="flex gap-1 items-center">
                        <GrLocation className="text-secondary text-2xl" />
                        <Typography variant="body-sm">{commune}</Typography>

                    </div>    
                </div>

                <div>
                    {uid && (
                        <Link href={`/boutiques/${uid}`}>
                            <Button variant="primary" size="small" fullWidth>
                                Voir la boutique
                            </Button>
                        </Link>    
                    )}    
                </div>
                
            </div>
        </div>
    );
};
