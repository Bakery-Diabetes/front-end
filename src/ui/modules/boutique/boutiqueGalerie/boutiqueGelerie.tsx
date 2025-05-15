import { FC, useState } from "react"
import Image from "next/image"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { MdCancel } from "react-icons/md"
import { motion, AnimatePresence } from "framer-motion"

import { Photo } from "@/types/boutique-types"
import { Button } from "@/ui/design-system/button/button"
import { Spinner } from "@/ui/design-system/spinner/spinner"

interface BoutiqueGalerieProps {
  photos: Photo[]
  loading?: boolean
}

const BoutiqueGalerie: FC<BoutiqueGalerieProps> = ({ photos, loading = false }) => {

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentPhotoIndex(prev => 
      (prev === 0 ? photos.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentPhotoIndex(prev => 
      (prev === photos.length - 1 ? 0 : prev + 1))
  }

  const swipeConfidenceThreshold = 100;

  const handleSwipe = (offset: number) => {
    if (offset > swipeConfidenceThreshold) {
      setCurrentPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    } else if (offset < -swipeConfidenceThreshold) {
      setCurrentPhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="space-y-4">

        {/* image principale */}
        <div className="w-full max-w-[600px] mx-auto h-[600px] relative rounded overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => handleSwipe(info.offset.x)}
            className="w-full h-full"
          >
            <Image
                src={photos[currentPhotoIndex].asset.url}
                alt={`Photo ${currentPhotoIndex + 1}`}
                className="object-cover w-full h-full"
                width={600}
                height={600}
                priority
            />
          </motion.div>
        </div>

        {/* Miniatures en dessous */}
        <div className="hidden md:flex gap-2 scrollbar-hide">
            {photos.map((photo, index) => (
              <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  onClick={() => setCurrentPhotoIndex(index)}
                  onKeyDown={(e) => e.key === "Enter" && setCurrentPhotoIndex(index)}
                  className={`w-[90px] h-[90px] rounded overflow-hidden cursor-pointer ${index === currentPhotoIndex ? "border-primary border-4" : ""}`}
              >
                  <Image
                  src={photo.asset.url}
                  alt={`Miniature ${index + 1}`}
                  width={90}
                  height={90}
                  className="object-cover w-full h-full"
                  />
              </div>
            ))}
        </div>


        {/* Boutons flèches pour mobile uniquement */}
        <div className="flex justify-between items-center md:hidden">
          <div className="flex space-x-2">
            <Button
              variant="ico"
              iconTheme="secondary"
              icon={{ icon: BsArrowLeft }}
              action={handlePrevious}
            />
            <Button
              variant="ico"
              iconTheme="secondary"
              icon={{ icon: BsArrowRight }}
              action={handleNext}
            />
          </div>
          <span className="text-sm text-gray-600">
            {currentPhotoIndex + 1} / {photos.length}
          </span>
        </div>



    </div>
  )
}

export default BoutiqueGalerie
