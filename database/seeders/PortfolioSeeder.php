<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\Experience;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Datos de prueba para Proyectos
        Project::create([
            'titulo' => 'Mi Primer Portafolio',
            'descripcion' => 'Proyecto desarrollado con Laravel, React e Inertia.js para mostrar mi carrera profesional.',
            'tecnologias' => 'Laravel, React, Tailwind, MySQL',
            'link_github' => 'https://github.com/tu-usuario/portafolio2026',
        ]);

        Project::create([
            'titulo' => 'E-commerce API',
            'descripcion' => 'Una API robusta para una tienda en línea con sistema de pagos y gestión de inventario.',
            'tecnologias' => 'Laravel, Redis, Docker',
            'link_github' => 'https://github.com/tu-usuario/api-ecommerce',
        ]);

        // Datos de prueba para Experiencia
        Experience::create([
            'empresa' => 'Freelance / Personal',
            'cargo' => 'Fullstack Developer',
            'descripcion' => 'Desarrollo de aplicaciones web personalizadas y aprendizaje continuo de nuevas tecnologías.',
            'fecha_inicio' => '2024-01-01',
        ]);
    }
}
