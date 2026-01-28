import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// 1. ESTA ES LA "CAJA GRANDE" QUE FALTABA
const ContactForm = () => {
    
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    // 2. TU FUNCIÓN DE ENVÍO VA ADENTRO
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        // --- TUS CREDENCIALES YA PUESTAS ---
        const SERVICE_ID = "service_bv2vppt";
        const TEMPLATE_ID = "template_aa2viue";
        const PUBLIC_KEY = "5rhdyLDKTurquJux7";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            setLoading(false);
            setStatus('success');
            form.current.reset();
            setTimeout(() => setStatus(null), 5000);
        }, (error) => {
            setLoading(false);
            setStatus('error');
            console.log(error.text);
        });
    };

    // 3. EL HTML QUE SE MUESTRA (RETURN)
    return (
        <div className="bg-[#111] p-8 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden">
            
            {/* Encabezado */}
            <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Envíame un mensaje</h3>
            <p className="text-gray-400 text-sm mb-6">¿Tienes una idea o proyecto? Hablemos.</p>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
                
                {/* NOMBRE */}
                <div>
                    <input 
                        type="text" 
                        name="user_name" 
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                        placeholder="Tu nombre"
                    />
                </div>

                {/* EMAIL */}
                <div>
                    <input 
                        type="email" 
                        name="user_email" 
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                        placeholder="tu@email.com"
                    />
                </div>

                {/* MENSAJE */}
                <div>
                    <textarea 
                        name="message" 
                        rows="4"
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                        placeholder="Cuéntame sobre tu proyecto..."
                    ></textarea>
                </div>

                {/* BOTÓN */}
                <button 
                    type="submit" 
                    disabled={loading}
                    className={`w-full py-3.5 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 flex justify-center items-center gap-2
                        ${loading ? 'bg-indigo-900/50 cursor-wait text-indigo-200' : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-500/25'}
                    `}
                >
                    {loading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>

                {/* MENSAJES DE ESTADO */}
                {status === 'success' && (
                    <div className="text-green-400 text-sm text-center mt-2">✅ ¡Mensaje enviado!</div>
                )}
                {status === 'error' && (
                    <div className="text-red-400 text-sm text-center mt-2">❌ Error al enviar.</div>
                )}

            </form>
        </div>
    );
};

// 4. AHORA SÍ FUNCIONA LA EXPORTACIÓN PORQUE "ContactForm" EXISTE ARRIBA
export default ContactForm;