import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react"
import { Items } from "../../types/types";
import 'swiper/css/effect-fade';

type Props = {
    items: Items[]
}

export default function Slider({ items }: Props) {
    const [slidePerView, setSlidePerView] = useState(1)

    function handleResize() {
        if (window.innerWidth < 800) {
            setSlidePerView(1)
        } else if (window.innerWidth > 800 &&  window.innerWidth < 1045) {
            setSlidePerView(2)
        } 
        else if (window.innerWidth > 1045) {
            setSlidePerView(3)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <Swiper
            slidesPerView={slidePerView}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination, Navigation]}
        >
            {items.map((item, i) => (
                <SwiperSlide key={i} >
                    <div className="flex flex-col w-80 mx-auto">
                        <img src={item.url} className="h-64 px-6" alt="" />
                        <h2 className="my-2 text-2xl ml-5">{item.cut ? item?.cut : item?.light}</h2>
                        <p className="mx-5">{item.desc}</p>
                        <p className="my-2 ml-5">R$:{item.price}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}