import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { BadgeCheck, Binoculars, Goal } from "lucide-react";

function App() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [scrollbarWidth, setScrollbarWidth] = useState(0);

    useEffect(() => {
        const calcScrollbarWidth = () => {
            setScrollbarWidth(window.innerWidth - document.documentElement.clientWidth);
        };

        calcScrollbarWidth();
        window.addEventListener("resize", calcScrollbarWidth);
        return () => window.removeEventListener("resize", calcScrollbarWidth);
    }, []);

    return (
        <div className={`w-[calc(100vw-${scrollbarWidth}px)] bg-gray-100 overflow-hidden`}>
            {/* Topbar */}
            <nav className={`fixed w-full top-0 z-10 py-4 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
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

            {/*Swiper ocupando 100vh*/}
            <div className="w-full h-screen">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    className="w-full h-full"
                >
                    <SwiperSlide className="relative w-full h-full">
                        <img src="/backgrounds/man-safety.jpg"
                             className="absolute top-0 left-0 w-full h-full object-cover" alt="Imagem 1"/>
                        <div className="absolute inset-0 bg-black/35">
                            <div className="absolute top-[30%] left-[15%] text-left text-white">
                                <h2 className="text-5xl font-bold">Bem Vindo</h2>
                                <p className="mt-2 ml-4 text-md lg:w-[45vw] w-[60vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt eleifend elementum. Nunc eget malesuada nulla. Curabitur porttitor commodo ante, ac auctor nisi feugiat quis.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative w-full h-full">
                        <img src="/backgrounds/man-safety.jpg"
                             className="absolute top-0 left-0 w-full h-full object-cover" alt="Imagem 2"/>
                        <div className="absolute inset-0 bg-black/35">
                            <div className="absolute top-[30%] left-[15%] text-left text-white">
                                <h2 className="text-5xl font-bold">Qualidade</h2>
                                <p className="mt-2 ml-4 text-md lg:w-[45vw] w-[60vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt eleifend elementum. Nunc eget malesuada nulla. Curabitur porttitor commodo ante, ac auctor nisi feugiat quis.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*<SwiperSlide className="relative w-full h-full">*/}
                    {/*    <img src="/backgrounds/man-safety.jpg"*/}
                    {/*         className="absolute top-0 left-0 w-full h-full object-cover" alt="Imagem 3"/>*/}
                    {/*</SwiperSlide>*/}
                </Swiper>
            </div>

            {/* Conteúdo principal com fundo branco */}
            <main
                className="w-full h-auto p-4 flex flex-wrap xl:justify-evenly justify-center items-center gap-4 bg-main">
                {/* Blocos de missão e visão */}
                <div
                    className={`w-full h-auto flex flex-wrap gap-y-4 xl:justify-evenly justify-center text-white -mt-[8em]`}>
                    <section
                        className={`z-8 bg-[#021031] rounded-xl xl:w-[25vw] w-[80vw] h-auto p-4 flex flex-col justify-center items-center gap-2`}>
                        <Goal size={56}/>
                        <h1 className={`font-bold text-2xl`}>Missão</h1>
                        <p className={`text-center mt-2`}>Nossa missão é oferecer serviços de manutenção e montagem de
                            máquinas e equipamentos industriais com excelência, garantindo a máxima eficiência
                            operacional e
                            a segurança de nossos clientes. Buscamos antecipar necessidades, solucionar problemas de
                            forma
                            proativa e proporcionar um atendimento ágil e personalizado, contribuindo para o crescimento
                            e a
                            sustentabilidade dos negócios de nossos parceiros.</p>
                    </section>
                    <section
                        className={`z-8 bg-[#021031] rounded-xl xl:w-[25vw] w-[80vw] h-auto p-4 flex flex-col justify-start items-center gap-2`}>
                        <Binoculars size={56}/>
                        <h1 className={`font-bold text-2xl`}>Visão</h1>
                        <p className={`text-center mt-2`}>Ser reconhecida como líder no setor de manutenção e montagem
                            de
                            máquinas e equipamentos industriais, sendo referência em inovação, qualidade e confiança.
                            Nosso
                            objetivo é expandir nossas operações e desenvolver soluções tecnológicas que atendam às
                            necessidades dinâmicas da indústria, sempre com foco em resultados concretos e na satisfação
                            total de nossos clientes.</p>
                    </section>
                </div>

                {/* Opções */}
                <section
                    className="bg-[#738598] shadow-md xl:w-[25%] w-[80%] rounded-lg text-center py-4 flex flex-col items-center">
                    <BadgeCheck size={58}/>
                    <h1 className={`text-center text-3xl font-bold m-4`}>Qualidade</h1>
                </section>
                <section
                    className="bg-[#738598] shadow-md xl:w-[25%] w-[80%] rounded-lg text-center py-4 flex flex-col items-center">
                    <BadgeCheck size={58}/>
                    <h1 className={`text-center text-3xl font-bold m-4`}>Segurança</h1>
                </section>
                <section
                    className="bg-[#738598] shadow-md xl:w-[25%] w-[80%] rounded-lg text-center py-4 flex flex-col items-center">
                    <BadgeCheck size={58}/>
                    <h1 className={`text-center text-3xl font-bold m-4`}>Integridade</h1>
                </section>
                <section
                    className="bg-[#738598] shadow-md xl:w-[25%] w-[80%] rounded-lg text-center py-4 flex flex-col items-center">
                    <BadgeCheck size={58}/>
                    <h1 className={`text-center text-3xl font-bold m-4`}>Comprometimento</h1>
                </section>
                <section
                    className="bg-[#738598] shadow-md xl:w-[25%] w-[80%] rounded-lg text-center py-4 flex flex-col items-center">
                    <BadgeCheck size={58}/>
                    <h1 className={`text-center text-3xl font-bold m-4`}>Sustentabilidade</h1>
                </section>
                <section
                    className="bg-[#738598] shadow-md xl:w-[25%] w-[80%] rounded-lg text-center py-4 flex flex-col items-center">
                    <BadgeCheck size={58}/>
                    <h1 className={`text-center text-3xl font-bold m-4`}>Trabalho em Equipe</h1>
                </section>
            </main>
        </div>
    );
}

export default App;