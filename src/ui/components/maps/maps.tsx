'use client';
// TYPES
import { Boutique } from '@/types/boutique-types';
// DESIGN SYSTEM
import { Typography } from '@/ui/design-system/typography/typography';
// UTILS
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// STYLES
import 'leaflet/dist/leaflet.css';
// NEXT
import Image from 'next/image';


// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: '/assets/images/icon_location.svg',
//   iconUrl: '/assets/images/icon_location.svg',
//   iconSize: [80, 58],
//   iconAnchor: [40, 58],
//   popupAnchor: [0, -60],
// });

// interface Props {
//     boutiques: Boutique[];
// }



// const center: [number, number] = [50.8467, 4.3525];



const Map = () => {
  return (
    // <MapContainer
    //   center={center}
    //   zoom={13}
    //   scrollWheelZoom={false}
    //   className="rounded h-[90vh] w-full"
    // >
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        
    //   />

    //     {boutiques.map((b, i) => 
    //         b.location?.lat && b.location?.lng ? (
    //             <Marker
    //               key={b.slug?.current || i}
    //               position={[b.location.lat, b.location.lng]}
    //             >
    //               <Popup>
    //                 <div className="w-40">
    //                   <Image
    //                     src={b.photos?.[0]?.asset.url || '/placeholder.jpg'}
    //                     alt={b.name}
    //                     className="w-full h-[100px] object-cover rounded mb-2"
    //                   />
    //                   <a
    //                     href={`/boutiques/${b.slug?.current}`}
    //                     className="hover:underline decoration-primary decoration-2 underline-offset-4"
    //                   >
    //                     <Typography variant='h6' component='h6'>
    //                       {b.name}  
    //                     </Typography>
                        
    //                   </a>
                      
    //                   <Typography variant='caption4' theme='gray' className='mt-2 mb-2'>
    //                     {b.location?.commune}  
    //                   </Typography>
                      
                      
    //                 </div>
    //               </Popup>
    //             </Marker>
    //         ) : null
    //     )}
      
    // </MapContainer>

    <>
      <div><p>cours</p></div>
    </>
  );
};

export default Map;
