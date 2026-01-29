import React from 'react';
import ContactForm from '../Components/ContactForm';
import { Head, Link } from '@inertiajs/react'; // Si usas Inertia, mantén esto
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

export default function Welcome({ projects, experiences }) {
    
    const title = "Ricardo Merino,";
    // --- ESTADOS PARA EL CARRUSEL ---
    const [selectedProject, setSelectedProject] = useState(null); // Qué proyecto se abrió
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Qué foto ver (0 a 4)

    // --- TUS DATOS DE PROYECTOS ---
    const projectsData = [
        {
            id: 1,
            title: "Aplicacion Web de Faturacion/Logistica",
            description: "Aplicación web completa para la gestión de ventas, inventarios, facturación y logística.",
            tags: ["MySQL", "javaScript", "Html", "CSS", "PHP"],
            // AQUÍ PONES TUS 5 FOTOS
            images: [
                "/img/home1.png", 
                "/img/img2proyecto1.png",
                "/img/img3proyecto1.png",
                "/img/img4proyecto1.png",
                "/img/img5proyecto1.png"
            ],
            links: { code: "https://github.com/ioserio/PuntoVenta", demo: "https://puntoventa.rikflex.com/" }
        },
        {
            id: 2,
            title: "Web de una Boutique",
            description: "Sitio web de comercio electrónico para una boutique de moda con catálogo de productos y carrito de compras.",
            tags: ["MySQL", "javaScript", "Html", "CSS", "PHP"],
            images: [
                "/img/home2.png", // Usa fotos reales o placeholders
                "/img/proyecto2img1.png",
                "/img/proyecto2img2.png",
                "/img/proyecto2img3.png",
                "/img/proyecto2img4.png"
            ],
            links: { code: "https://github.com/ioserio/BoutiqueWeb", demo: "https://boutique.rikflex.com/" }
        },
        {
            id: 3,
            title: "Aplicacion Web para gestion de pedidos.",
            description: "Sitio web de gestion de pedidos y avanze de cuotas establecidas, con panel administrativo.Asi como consulta de estado de recojos y consulta de cobranzas pendientes",
            tags: ["MySQL", "JavaScript", "Html", "CSS", "PHP"],
            images: [
                "/img/proyecto3img5.png", // Usa fotos reales o placeholders
                "/img/proyecto3img1.png",
                "/img/proyecto3img2.png",
                "/img/proyecto3img3.png",
                "/img/proyecto3img4.png"
            ],
            links: { code: "https://github.com/ioserio/Gesti-n-de-Pedidos", demo: "https://rikflex.com/login.php?next=%2F" }
        },
        // ... Agrega más proyectos aquí
    ];

    // --- FUNCIONES DEL CARRUSEL ---
    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0); // Siempre empieza en la primera foto
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const nextImage = (e) => {
        e.stopPropagation(); // Evita que se cierre el modal al hacer clic
        if (!selectedProject) return;
        setCurrentImageIndex((prev) => 
            prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (!selectedProject) return;
        setCurrentImageIndex((prev) => 
            prev === 0 ? selectedProject.images.length - 1 : prev - 1
        );
    };
    
    
    return (
        
        <div className="flex min-h-screen bg-[#0a0a0a] text-white font-sans relative overflow-hidden">
            <Head title="Portafolio_Ricardo Merino" />

            {/* 1. LUCES DE FONDO (Glow Effects) */}
            {/* Estas luces flotan detrás de todo el contenido*/}
            {/*<div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-0" />*/}
            {/*<div className="fixed bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-0" />*/}

            {/* BARRA LATERAL (Fija) */}
            <aside className="w-20 md:w-40 bg-[#111] flex flex-col justify-between items-center py-8 fixed h-full border-r border-white/10 z-50 transition-all duration-300">
                <div className="flex flex-col items-center gap-4">
                    {/* Contenedor de la foto con el efecto de pulso */}
                    <div className="w-14 h-14 md:w-32 md:h-32 rounded-full border-2 border-indigo-500 p-1 shadow-[0_0_25px_rgba(99,102,241,0.5)] animate-pulse-glow transition-transform hover:scale-105 duration-300">
                            <img 
                            src="/img/ricardo.png" 
                            alt="Foto de Ricardo" 
                            className="w-full h-full rounded-full object-cover"
                            onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Ricardo+Merino&background=6366f1&color=fff"; }}
                        />
                    </div>
                    {/* Nombre */}
                    <div className="text-center hidden md:block">
                        {/*<h3 className="text-white font-black uppercase tracking-wider text-sm">Ricardo</h3>*/}
                        <p className="text-[10px] text-indigo-400 font-bold tracking-widest mt-1">WEB DEVELOPER</p>
                    </div>
                </div>
                
                {/* MENÚ DE NAVEGACIÓN */}
                <nav className="flex flex-col items-center gap-6 w-full">
                    <a href="#about" className="group flex items-center gap-3 text-gray-500 hover:text-white transition-all">
                        <span className="text-xs uppercase tracking-[0.2em] group-hover:text-indigo-400 hidden md:block">Sobre mí</span>
                        <i className="fas fa-user md:hidden"></i> {/* Icono solo para móvil */}
                    </a>
                    <a href="#work" className="group flex items-center gap-3 text-gray-500 hover:text-white transition-all">
                        <span className="text-xs uppercase tracking-[0.2em] group-hover:text-indigo-400 hidden md:block">Proyectos</span>
                        <i className="fas fa-code md:hidden"></i>
                    </a>
                    <a href="#contact" className="group flex items-center gap-3 text-gray-500 hover:text-white transition-all">
                        <span className="text-xs uppercase tracking-[0.2em] group-hover:text-indigo-400 hidden md:block">Contacto</span>
                        <i className="fas fa-envelope md:hidden"></i>
                    </a>
                </nav>

                {/* REDES SOCIALES - ICONOS */}
                <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
                    
                    {/* GitHub */}
                    <a 
                        href="https://github.com/ioserio" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors duration-300"
                    >
                        <i className="fab fa-github text-lg md:text-xl"></i>
                    </a>

                    {/* LinkedIn */}
                    <a 
                        href="https://pe.linkedin.com/in/rene-ricardo-merino-condori-a33b3113b" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#0077b5] transition-colors duration-300"
                    >
                        <i className="fab fa-linkedin text-lg md:text-xl"></i>
                    </a>

                    {/* Facebook */}
                    <a 
                        href="https://www.facebook.com/riki.merinoc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#1877F2] transition-colors duration-300"
                    >
                        <i className="fab fa-facebook text-lg md:text-xl"></i>
                    </a>

                </div>
            </aside>

            {/* CONTENIDO PRINCIPAL CON ANIMACIONES */}
            <main className="ml-20 md:ml-28 flex-1 relative z-10">
                
                {/* 2. HERO SECTION ANIMADA */}
                <motion.section 
                    initial={{ opacity: 0, y: 20 }} // Inicia invisible y un poco abajo
                    animate={{ opacity: 1, y: 0 }}  // Aparece suavemente
                    transition={{ duration: 1 }}     // Tarda 1 segundo
                    className="h-screen flex flex-col justify-center px-12 md:px-24"
                >
                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter">
                        Hola,<br /> soy{" "}
                        {/* El mapeo de letras va dentro de llaves */}
                        {title.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                className="inline-block text-indigo-500 underline decoration-4 underline-offset-8"
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </h1>
                    
                    <div className="text-4xl md:text-6xl font-bold mt-4 text-slate-400 italic">
                        <Typewriter
                            options={{
                                strings: ['Web developer - Laravel'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <p className="mt-8 text-gray-500 text-lg uppercase tracking-widest leading-relaxed max-w-2xl">
                        Especializado en <span className="text-white">Desarrollo Web Moderno</span>. 
                        <br className="hidden md:block" />
                        Con sólido background en aplicaciones móviles <span className="text-white">Android</span> 
                        y arquitectura de sistemas <span className="text-white">ERP en Java</span>.
                    </p>
                </motion.section>

                {/* --- SECCIÓN SOBRE MÍ (BIO + SKILLS ANIMADO) --- */}
                <motion.section 
                    id="about" 
                    initial={{ opacity: 0, y: 50 }} // Añadí 'y: 50' para que suba un poco al aparecer
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }} // Se activa un poco antes de llegar
                    /* AQUÍ ESTÁ LA MAGIA: min-h-screen obliga a ocupar toda la pantalla */
                    className="min-h-screen flex flex-col justify-center py-24 px-12 md:px-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5"
                >
                    
                    {/* Decoración de fondo (Glow sutil) */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        
                        {/* COLUMNA IZQUIERDA: TU HISTORIA (BIO) */}
                        <div className="space-y-8">
                            <h2 className="text-5xl font-black text-white tracking-tighter">
                                Sobre <span className="text-indigo-500">Mí</span>.
                            </h2>
                            
                            <div className="text-gray-400 text-lg leading-relaxed space-y-6">
                                <p>
                                    Soy un desarrollador apasionado por crear soluciones digitales que funcionan tan bien como se ven. Aunque mi foco actual es el <strong className="text-white">Desarrollo Web con Laravel y React</strong>, mi trayectoria es única porque vengo de un mundo estructurado.
                                </p>
                                <p>
                                    Tengo una base sólida en <strong className="text-white">Java y Android</strong>, lo que me permite entender la arquitectura de software desde el backend empresarial hasta la experiencia móvil. No solo escribo código; construyo sistemas escalables.
                                </p>
                            </div>

                            {/* Botón de Descargar CV */}
                            <motion.a 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="CV2026.pdf"
                                target="_blank"
                                className="inline-flex items-center gap-3 px-8 py-3 border border-white/10 bg-white/5 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all rounded-sm text-sm font-bold tracking-widest uppercase text-indigo-400"
                            >
                                <i className="fas fa-download"></i> Descargar CV
                            </motion.a>
                        </div>

                        {/* COLUMNA DERECHA: TUS HABILIDADES (STACK TÉCNICO) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            
                            {/* 1. WEB STACK (Destacado) */}
                            <div className="p-6 border border-indigo-500/30 bg-indigo-500/5 rounded-lg relative overflow-hidden group hover:border-indigo-500 transition-colors">
                                <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                                    <i className="fas fa-globe text-4xl text-indigo-500"></i>
                                </div>
                                <h3 className="text-indigo-400 font-bold uppercase tracking-wider mb-4 text-sm">Web Moderno</h3>
                                <ul className="space-y-2 text-gray-300 font-mono text-sm">
                                    <li>• Laravel (PHP)</li>
                                    <li>• React.js / Inertia</li>
                                    <li>• Tailwind CSS</li>
                                    <li>• MySQL</li>
                                </ul>
                            </div>

                            {/* 2. MOBILE & JAVA */}
                            <div className="p-6 border border-white/10 bg-[#111] rounded-lg hover:border-gray-500 transition-colors">
                                <h3 className="text-gray-400 font-bold uppercase tracking-wider mb-4 text-sm">Móvil & Backend</h3>
                                <ul className="space-y-2 text-gray-500 font-mono text-sm">
                                    <li>• Android (Nativo)</li>
                                    <li>• Java </li>
                                    <li>• APIs REST</li>
                                </ul>
                            </div>

                            {/* 3. HERRAMIENTAS */}
                            <div className="sm:col-span-2 p-6 border border-white/10 bg-[#111] rounded-lg hover:border-gray-500 transition-colors flex flex-wrap gap-4 items-center">
                                <span className="text-gray-400 font-bold uppercase tracking-wider text-xs mr-4">Tools:</span>
                                <span className="px-3 py-1 bg-white/5 rounded text-xs text-gray-400 hover:text-white transition-colors">Git</span>
                                <span className="px-3 py-1 bg-white/5 rounded text-xs text-gray-400 hover:text-white transition-colors">Git Hub</span>
                                <span className="px-3 py-1 bg-white/5 rounded text-xs text-gray-400 hover:text-white transition-colors">VS Code</span>                        
                                <span className="px-3 py-1 bg-white/5 rounded text-xs text-gray-400 hover:text-white transition-colors">Composer</span>
                              
                            </div>
                            
                        </div>
                    </div>
                </motion.section>

                {/* --- SECCIÓN PROYECTOS --- */}
                <motion.section 
                    id="work" 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="min-h-screen flex flex-col justify-center py-24 px-12 md:px-24 bg-[#0a0a0a] relative border-t border-white/5"
                >
                    
                    <div className="max-w-7xl mx-auto w-full">
                        
                        {/* TÍTULO DE LA SECCIÓN */}
                        <div className="mb-16">
                            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
                                Mis <span className="text-indigo-500">Proyectos</span>.
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl">
                                Una selección de mis trabajos más recientes, desde aplicaciones web completas hasta experimentos de interfaz.
                            </p>
                        </div>

                        {/* GRID DE PROYECTOS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            
                            {/* PROYECTO 1: E-COMMERCE (Ejemplo) */}
                            <motion.div 
                                onClick={() => openModal(projectsData[0])} // <--- ESTO ES VITAL
                                whileHover={{ y: -10 }}
                                className="group relative bg-[#111] border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(99,102,241,0.2)] flex flex-col h-full"
                            >
                                {/* Imagen del Proyecto (Placeholder oscuro por ahora) */}
                                <div className="h-48 bg-[#1a1a1a] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-all duration-500"></div>
                                    <img src="/img/portada1.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="w-full h-full flex items-center justify-center text-gray-700 font-mono text-xs">
                                        [IMAGEN DEL PROYECTO 1]
                                    </div>
                                </div>

                                {/* Contenido de la Tarjeta */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Aplicacion Web de Faturacion/Logistica</h3>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        Aplicación web completa para la gestión de ventas, inventarios, facturación y logística.
                                    </p>
                                    
                                    {/* Tecnologías (Tags) */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="px-2 py-1 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 rounded">MySQL</span>
                                        <span className="px-2 py-1 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 rounded">javaScript</span>
                                        <span className="px-2 py-1 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 rounded">Html</span>
                                        <span className="px-2 py-1 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 rounded">CSS</span>
                                        <span className="px-2 py-1 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 rounded">PHP</span>
                                    </div>

                                    {/* Botones de Acción */}
                                    <div className="mt-auto flex items-center gap-4 pt-4 border-t border-white/5 w-full">
                                        
                                        {/* Botón CÓDIGO */}
                                        <a 
                                            href="https://github.com/ioserio/PuntoVenta" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                            onClick={(e) => e.stopPropagation()} 
                                        >
                                            <i className="fab fa-github"></i> Código
                                        </a>

                                        {/* Botón DEMO */}
                                        <a 
                                            href="https://puntoventa.rikflex.com/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors ml-auto"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Demo <i className="fas fa-external-link-alt text-xs"></i>
                                        </a>

                                    </div>
                                </div>
                            </motion.div>


                            {/* PROYECTO 2: PORTAFOLIO (Este mismo) */}
                            <motion.div
                                onClick={() => openModal(projectsData[1])} // <--- ESTO ES VITAL
                                whileHover={{ y: -10 }}
                                className="group relative bg-[#111] border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(99,102,241,0.2)] flex flex-col h-full"                            >
                                {/* Imagen del Proyecto (Placeholder oscuro por ahora) */}
                                <div className="h-48 bg-[#1a1a1a] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-all duration-500"></div>
                                    <img src="/img/home2.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="w-full h-full flex items-center justify-center text-gray-700 font-mono text-xs">
                                        [IMAGEN DEL PROYECTO 2]
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1" >
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Web de Boutique</h3>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        Sitio web de comercio electrónico para una boutique de moda con catálogo de productos y carrito de compras.
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="px-2 py-1 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 rounded">MySQL</span>
                                        <span className="px-2 py-1 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 rounded">JavaScript</span>
                                        <span className="px-2 py-1 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 rounded">HTML</span>
                                        <span className="px-2 py-1 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 rounded">CSS</span>
                                        <span className="px-2 py-1 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 rounded">PHP</span>
                                    </div>
                                    <div></div>
                                
                                    {/* Botones de Acción */}
                                    <div className="mt-auto flex items-center gap-4 pt-4 border-t border-white/5">
                                        
                                        {/* Botón CÓDIGO */}
                                        <a 
                                            href="https://github.com/ioserio/BoutiqueWeb" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                            onClick={(e) => e.stopPropagation()} 
                                        >
                                            <i className="fab fa-github"></i> Código
                                        </a>

                                        {/* Botón DEMO */}
                                        <a 
                                            href="https://boutique.rikflex.com/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors ml-auto"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Demo <i className="fas fa-external-link-alt text-xs"></i>
                                        </a>

                                    </div>
                                </div>
                            </motion.div>

                            {/* PROYECTO 3: (Crea otro si quieres) */}
                            <motion.div
                                onClick={() => openModal(projectsData[2])} // <--- ESTO ES VITAL 
                                whileHover={{ y: -10 }}
                                className="group relative bg-[#111] border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(99,102,241,0.2)] flex flex-col h-full"
                            >
                                <div className="h-48 bg-[#1a1a1a] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-all duration-500"></div>
                                    <img src="/img/home3.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="w-full h-full flex items-center justify-center text-gray-700 font-mono text-xs">
                                        [IMAGEN DEL PROYECTO 3]
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Aplicacion Web para gestion de pedidos</h3>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        Sitio web de gestion de pedidos y avanze de cuotas establecidas, con panel administrativo.Asi como consulta de estado de recojos y consulta de cobranzas pendientes
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="px-2 py-1 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 rounded">MySQL</span>
                                        <span className="px-2 py-1 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 rounded">JavaScript</span>
                                        <span className="px-2 py-1 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 rounded">HTML</span>
                                        <span className="px-2 py-1 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 rounded">CSS</span>
                                        <span className="px-2 py-1 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/10 rounded">PHP</span>
                                    </div>
            
                                    {/* Botones de Acción */}
                                    <div className="mt-auto flex items-center gap-4 pt-4 border-t border-white/5">
                                        
                                        {/* Botón CÓDIGO */}
                                        <a 
                                            href="https://github.com/ioserio/Gesti-n-de-Pedidos" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                            onClick={(e) => e.stopPropagation()} 
                                        >
                                            <i className="fab fa-github"></i> Código
                                        </a>

                                        {/* Botón DEMO */}
                                        <a 
                                            href="https://rikflex.com/login.php?next=%2F" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors ml-auto"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Demo <i className="fas fa-external-link-alt text-xs"></i>
                                        </a>

                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </motion.section>

                {/* --- SECCIÓN CONTACTO --- */}
                <motion.section 
                    id="contact" 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="min-h-screen flex flex-col justify-center py-24 px-12 md:px-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5"
                >
                    
                    {/* Fondo decorativo (Luz opuesta a la sección anterior) */}
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        {/* COLUMNA IZQUIERDA: LLAMADO A LA ACCIÓN */}
                        <div className="space-y-8">
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                                Hablemos <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                                    Ahora.
                                </span>
                            </h2>
                            
                            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                                ¿Tienes una idea en mente o buscas modernizar tu plataforma? Estoy disponible para proyectos freelance y colaboraciones técnicas.
                            </p>

                            {/* Datos de Contacto Directo */}
                            <div className="space-y-4 pt-4">
                                <a href="mailto:rmerino857@gmail.com" className="flex items-center gap-4 text-white hover:text-indigo-400 transition-colors group">
                                    <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-indigo-500 transition-colors">
                                        <i className="fas fa-envelope text-lg"></i>
                                    </div>
                                    <span className="text-lg font-mono">rmerino857@gmail.com</span>
                                </a>
                                
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center border border-white/10">
                                        <i className="fas fa-map-marker-alt text-lg text-gray-400"></i>
                                    </div>
                                    <span className="text-lg font-mono text-gray-400">Lima, Perú</span>
                                </div>
                            </div>

                            {/* Redes Sociales Grandes */}
                            <div className="flex gap-4 pt-6">
                                <a href="https://pe.linkedin.com/in/rene-ricardo-merino-condori-a33b3113b" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300">
                                    <i className="fab fa-linkedin-in text-xl"></i>
                                </a>
                                <a href="https://github.com/ioserio" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-white transition-all duration-300">
                                    <i className="fab fa-github text-xl"></i>
                                </a>
                                <a href="https://wa.me/51923486317" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 hover:border-green-600 transition-all duration-300">
                                    <i className="fab fa-whatsapp text-xl"></i>
                                </a>
                            </div>
                        </div>

                        {/* COLUMNA DERECHA: FORMULARIO */}
                        {/* Envolvemos tu componente en motion.div para mantener la animación de entrada */}
                        <motion.div 
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="w-full"
                        >
                            {/* AQUÍ ESTÁ LA MAGIA: Llamamos al componente que sí funciona */}
                            <ContactForm />
                            
                        </motion.div>

                    </div>
                </motion.section>

            </main>
            {/* --- AQUÍ VA EL MODAL (FUERA DEL MAIN) --- */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        layoutId={`project-${selectedProject.id}`} 
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
                    >
                        {/* FONDO OSCURO (Backdrop) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />

                        {/* CONTENIDO DEL MODAL */}
                        <motion.div
                            className="relative w-full max-w-6xl bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()} 
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            {/* BOTÓN CERRAR (Móvil y Desktop) */}
                            <button 
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-red-500/80 transition-colors"
                            >
                                <i className="fas fa-times text-xl"></i>
                            </button>

                            {/* 1. SECCIÓN DE IMAGEN (Izquierda / Arriba) - 60% Ancho */}
                            <div className="w-full md:w-[60%] bg-black relative flex items-center justify-center bg-checkered h-[40vh] md:h-auto group">
                                
                                {/* Imagen Actual */}
                                <AnimatePresence mode='wait'>
                                    <motion.img
                                        key={currentImageIndex}
                                        src={selectedProject.images[currentImageIndex]}
                                        alt="Project view"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </AnimatePresence>

                                {/* Botones Navegación (Flechas) */}
                                <button 
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-indigo-600 transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <button 
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-indigo-600 transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <i className="fas fa-chevron-right"></i>
                                </button>

                                {/* Indicadores (Puntitos) */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {selectedProject.images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                idx === currentImageIndex ? "bg-indigo-500 w-6" : "bg-white/30 hover:bg-white"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* 2. SECCIÓN DE INFORMACIÓN (Derecha / Abajo) - 40% Ancho */}
                            <div className="w-full md:w-[40%] p-8 overflow-y-auto bg-[#111] flex flex-col border-l border-white/5">
                                
                                <h2 className="text-3xl font-black text-white mb-2">{selectedProject.title}</h2>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 text-xs font-bold text-indigo-300 bg-indigo-500/10 rounded border border-indigo-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-8 flex-1">
                                    {selectedProject.description}
                                </p>

                                <div className="space-y-4 mt-auto pt-6 border-t border-white/10">
                                    <a 
                                        href={selectedProject.links?.demo} 
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded font-bold tracking-wider transition-all"
                                    >
                                        <i className="fas fa-external-link-alt"></i> Ver Demo en Vivo
                                    </a>
                                    <a 
                                        href={selectedProject.links?.code} 
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 w-full py-3 bg-[#222] hover:bg-[#333] text-gray-300 hover:text-white rounded font-bold tracking-wider transition-all border border-white/10"
                                    >
                                        <i className="fab fa-github"></i> Ver Código Fuente
                                    </a>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}