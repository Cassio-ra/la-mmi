import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {useEffect, useState} from 'react';
import {BadgeCheck, Binoculars, Goal, Handshake, Scale, ShieldHalf, TreeDeciduous, UsersRound} from "lucide-react";
import images from "./assets/backgrounds/index.js";
import logo from "./assets/logo.png"

function App() {
    const [swiperInstance, setSwiperInstance] = useState(null);
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

    const goToSlide = (index) => {
        swiperInstance?.slideTo(index);
        swiperInstance?.autoplay.stop();
        setTimeout(() => {
            swiperInstance?.autoplay.start(); // Retoma o autoplay após o timeout
        }, 3000);
        window.scrollTo({top: 0, behavior: "smooth"});
    }


    return (
        <div className={`w-[calc(100vw-${scrollbarWidth}px)] bg-gray-100 overflow-hidden`}>
            {/* Topbar */}
            <nav
                className={`fixed w-full top-0 z-10 py-4 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 className="flex items-center h-10 max-h-10"
                        onClick={() => goToSlide(0)}>
                        <img src={logo}
                             className={`object-contain h-30 w-30 ${isScrolled ? "" : "xl:h-45 xl:w-45 xl:mt-5"} transition-all`}
                             alt="logo"/>
                    </h1>
                    <ul className="flex space-x-6 mr-5">
                        <li><a
                            onClick={() => goToSlide(0)}
                            className="text-gray-700 font-semibold hover:text-blue-500 hover:cursor-pointer">Início</a>
                        </li>
                        <li><a
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("missao")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center"
                                });
                            }}
                            className="text-gray-700 font-semibold hover:text-blue-500 hover:cursor-pointer">Sobre</a>
                        </li>
                        <li><a
                            className={`text-gray-700 font-semibold hover:text-blue-500 hover:cursor-pointer px-2 ${isScrolled ? "bg-green-500 rounded-xl" : ""}`}>Contato</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/*Swiper*/}
            <div className="w-full h-screen">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                    autoplay={{delay: 3000}}
                    onSlideChange={(swiper) => swiper.autoplay.start()}
                    className="w-full h-full"
                    onSwiper={setSwiperInstance}
                    cssMode={true}
                    onClick={(swiper) => {
                        swiper.autoplay.stop(); // Para autoplay no clique
                        setTimeout(() => swiper.autoplay.start(), 3000); // Reinicia após 3s
                    }}
                >
                    <SwiperSlide className="relative w-full h-full">
                        <img src={images.bem_vindo}
                             className="absolute top-0 left-0 w-full h-full object-cover" alt="Imagem 1"/>
                        <div className="absolute inset-0 bg-black/35">
                            <div className="absolute top-[30%] left-[15%] text-left text-white">
                                <h2 className="text-[clamp(1.5rem,10vw,2rem)] font-bold break-all hyphens-auto">Bem
                                    Vindo</h2>
                                <p className="mt-2 ml-4 text-md lg:w-[45vw] w-[60vw]">Especialistas em montagem e
                                    manutenção industrial, oferecemos soluções completas para garantir o máximo
                                    desempenho, segurança e eficiência da sua operação. Com uma equipe experiente e
                                    tecnologia de ponta, trabalhamos para manter seu negócio sempre em pleno
                                    funcionamento.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative w-full h-full">
                        <img src={images.qualidade}
                             className="absolute top-0 left-0 w-full h-full object-cover" alt="Imagem 2"/>
                        <div className="absolute inset-0 bg-black/35">
                            <div className="absolute top-[30%] left-[15%] text-left text-white">
                                <h2 className="text-[clamp(1.5rem,10vw,2rem)] font-bold break-all hyphens-auto">Qualidade</h2>
                                <p className="mt-2 ml-4 text-md lg:w-[45vw] w-[60vw]">Na LA, qualidade é essencial em
                                    cada projeto de montagem e manutenção industrial. Utilizamos as melhores práticas e
                                    equipamentos modernos para oferecer soluções seguras, eficientes e duradouras,
                                    garantindo o alto desempenho da sua operação.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative w-full h-full">
                        <img src={images.seguranca}
                             className="absolute top-0 left-0 w-full h-full object-cover" alt="Imagem 3"/>
                        <div className="absolute inset-0 bg-black/35">
                            <div className="absolute top-[30%] left-[15%] text-left text-white">
                                <h2 className="text-[clamp(1.5rem,10vw,2rem)] font-bold break-all hyphens-auto">Segurança</h2>
                                <p className="mt-2 ml-4 text-md lg:w-[45vw] w-[60vw]">Montagem e manutenção industrial
                                    exigem rigor e responsabilidade. Por isso, seguimos padrões de segurança elevados,
                                    protegendo sua equipe, seu patrimônio e assegurando operações sem riscos. Segurança
                                    não é um detalhe, é o nosso compromisso!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative w-full h-full">
                        <img src={images.integridade}
                             className="absolute top-0 left-0 w-full h-full object-cover" alt="Imagem 4"/>
                        <div className="absolute inset-0 bg-black/35">
                            <div className="absolute top-[30%] left-[15%] text-left text-white">
                                <h2 className="text-[clamp(1.5rem,10vw,2rem)] font-bold break-all hyphens-auto">Integridade</h2>
                                <p className="mt-2 ml-4 text-md lg:w-[45vw] w-[60vw]">Trabalhamos com transparência,
                                    ética e compromisso em cada serviço de montagem e manutenção industrial. Valorizamos
                                    relações de confiança, garantindo soluções seguras, eficientes e alinhadas às
                                    necessidades do seu negócio. Na LA, a integridade está sempre em primeiro lugar!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative w-full h-full">
                        <img src={images.comprometimento}
                             className="absolute top-0 left-0 w-full h-full object-cover" alt="Imagem 5"/>
                        <div className="absolute inset-0 bg-black/35">
                            <div className="absolute top-[30%] left-[15%] text-left text-white">
                                <h2 className="text-[clamp(1.5rem,10vw,2rem)] font-bold break-all hyphens-auto">Comprometimento</h2>
                                <p className="mt-2 ml-4 text-md lg:w-[45vw] w-[60vw]">Na LA, estamos sempre prontos para
                                    atender com eficiência e dedicação. Nosso comprometimento com a excelência em
                                    montagem e manutenção industrial garante soluções ágeis, seguras e personalizadas
                                    para manter sua operação funcionando sem imprevistos. Seu sucesso é a nossa
                                    missão!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative w-full h-full">
                        <img src={images.sustentabilidade}
                             className="absolute top-0 left-0 w-full h-full object-cover" alt="Imagem 6"/>
                        <div className="absolute inset-0 bg-black/35">
                            <div className="absolute top-[30%] left-[15%] text-left text-white">
                                <h2 className="text-[clamp(1.5rem,10vw,2rem)] font-bold break-all hyphens-auto">Sustentabilidade</h2>
                                <p className="mt-2 ml-4 text-md lg:w-[45vw] w-[60vw]">Eficiência e responsabilidade
                                    ambiental caminham juntas em nossos serviços de montagem e manutenção industrial.
                                    Com práticas sustentáveis, reduzimos desperdícios, otimizamos recursos e minimizamos
                                    impactos, contribuindo para um futuro mais seguro e equilibrado.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative w-full h-full">
                        <img src={images.trabalho_em_equipe}
                             className="absolute top-0 left-0 w-full h-full object-cover" alt="Imagem 7"/>
                        <div className="absolute inset-0 bg-black/35">
                            <div className="absolute top-[30%] left-[15%] text-left text-white">
                                <h2 className="text-[clamp(1.5rem,10vw,2rem)] font-bold break-word hyphens-auto">Trabalho
                                    em Equipe</h2>
                                <p className="mt-2 ml-4 text-md lg:w-[45vw] w-[60vw]">A força de um time comprometido é
                                    essencial para a excelência na montagem e manutenção industrial. Com união,
                                    experiência e dedicação, entregamos soluções eficientes e seguras, garantindo o
                                    melhor resultado para cada projeto. Juntos, alcançamos mais!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Conteúdo principal */}
            <main
                className="w-full h-auto p-4 flex flex-wrap xl:justify-evenly justify-center items-center gap-4 bg-main">
                {/* Blocos de missão e visão */}
                <div
                    id="missao"
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
                    onClick={() => goToSlide(1)}
                    className=" xl:w-[25%] w-[80%] rounded-lg text-center py-4 flex flex-col items-center group transition duration-500 hover:cursor-pointer hover:bg-[#021031] hover:shadow-md ">
                    <BadgeCheck className={`bg-white rounded-4xl`} size={58}/>
                    <h1 className={`text-center text-3xl font-bold m-2 bg-white group-hover:text-white group-hover:bg-transparent transition duration-200 rounded-2xl px-2`}>Qualidade</h1>
                </section>
                <section
                    onClick={() => goToSlide(2)}
                    className=" xl:w-[25%] w-[80%] rounded-lg text-center py-4 flex flex-col items-center group transition duration-500 hover:cursor-pointer hover:bg-[#021031] hover:shadow-md ">
                    <ShieldHalf className={`bg-white rounded-4xl`} size={58}/>
                    <h1 className={`text-center text-3xl font-bold m-2 bg-white group-hover:text-white group-hover:bg-transparent transition duration-200 rounded-2xl px-2`}>Segurança</h1>
                </section>
                <section
                    onClick={() => goToSlide(3)}
                    className=" xl:w-[25%] w-[80%] rounded-lg text-center py-4 flex flex-col items-center group transition duration-500 hover:cursor-pointer hover:bg-[#021031] hover:shadow-md ">
                    <Scale className={`bg-white rounded-4xl`} size={58}/>
                    <h1 className={`text-center text-3xl font-bold m-2 bg-white group-hover:text-white group-hover:bg-transparent transition duration-200 rounded-2xl px-2`}>Integridade</h1>
                </section>
                <section
                    onClick={() => goToSlide(4)}
                    className=" xl:w-[25%] w-[80%] rounded-lg text-center py-4 flex flex-col items-center group transition duration-500 hover:cursor-pointer hover:bg-[#021031] hover:shadow-md ">
                    <Handshake className={`bg-white rounded-4xl`} size={58}/>
                    <h1 className={`text-center text-3xl font-bold m-2 bg-white group-hover:text-white group-hover:bg-transparent transition duration-200 rounded-2xl px-2`}>Comprometimento</h1>
                </section>
                <section
                    onClick={() => goToSlide(5)}
                    className=" xl:w-[25%] w-[80%] rounded-lg text-center py-4 flex flex-col items-center group transition duration-500 hover:cursor-pointer hover:bg-[#021031] hover:shadow-md ">
                    <TreeDeciduous className={`bg-white rounded-4xl`} size={58}/>
                    <h1 className={`text-center text-3xl font-bold m-2 bg-white group-hover:text-white group-hover:bg-transparent transition duration-200 rounded-2xl px-2`}>Sustentabilidade</h1>
                </section>
                <section
                    onClick={() => goToSlide(6)}
                    className=" xl:w-[25%] w-[80%] rounded-lg text-center py-4 flex flex-col items-center group transition duration-500 hover:cursor-pointer hover:bg-[#021031] hover:shadow-md ">
                    <UsersRound className={`bg-white rounded-4xl`} size={58}/>
                    <h1 className={`text-center text-3xl font-bold m-2 bg-white group-hover:text-white group-hover:bg-transparent transition duration-200 rounded-2xl px-2`}>Trabalho
                        em Equipe</h1>
                </section>
            </main>
        </div>
    );
}

export default App;