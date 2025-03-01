import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function App() {

    return (
        <div className="w-screen h-screen bg-gray-100">
            {/* Topbar */}
            <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-10">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Logo</h1>
                    <ul className="flex space-x-6">
                        <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-500">Sobre</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-500">Serviços</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-500">Contato</a></li>
                    </ul>
                </div>
            </nav>

            <div className="pt-16">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                    autoplay={{delay: 3000}}
                    className="w-full h-96"
                >
                    <SwiperSlide>
                        <img src="/backgrounds/man-safety.jpg" className="w-full h-full object-cover" alt="Imagem 1"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/backgrounds/workplace.jpg" className="w-full h-full object-cover" alt="Imagem 2"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/backgrounds/teamwork.jpg" className="w-full h-full object-cover" alt="Imagem 3"/>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* Conteúdo principal */}
            <main className="pt-20 max-w-6xl mx-auto p-4">
                <section className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h2 className="text-3xl font-semibold">Bem-vindo à nossa Landing Page</h2>
                    <p className="mt-4 text-gray-600">Aqui você pode apresentar seu produto ou serviço com destaque.</p>
                </section>
            </main>
        </div>
    );
}

export default App
