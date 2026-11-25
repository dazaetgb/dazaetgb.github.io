/**
 * ============================================================================
 * UNIFIED SITE DATA - DR. DAZAET GALICIA-BADILLO (EN-FIRST + ES)
 * ============================================================================
 * Shared across all 3 design concepts (Option 1 Monograph, Option 2 Optics,
 * Option 3 Studio). Edit this single file to update text, publications,
 * graphical abstracts, awards, mentored students, or research group mode.
 *
 * TO EXPAND INTO A RESEARCH GROUP WEBSITE:
 * Change config.mode from "individual" to "group" and fill in the `group` block.
 * ============================================================================
 */

window.SITE_DATA = {
  config: {
    mode: "individual", // "individual" | "group"
    defaultLang: "en",  // English first as requested ("en" | "es")
    photo: "",          // Optional high-res portrait path relative to site root
    orcid: "0000-0002-0705-6045",
    email: "dazaet.galiciab@outlook.com",
    academicEmail: "dazaet.galiciab@iquimica.unam.mx",
    lastUpdated: "2026-11",
    links: {
      orcid: "https://orcid.org/0000-0002-0705-6045",
      scholar: "https://scholar.google.com/scholar?q=author:%22Dazaet+Galicia-Badillo%22",
      instagram: "https://www.instagram.com/dazaetgb/",
      twitter: "https://x.com/dazaetgb",
      unamThesisBs: "https://repositorio.unam.mx/contenidos/3560162"
    }
  },

  group: {
    en: {
      navLabel: "Group",
      badge: "Research Group",
      name: "Dynamic Crystalline Materials Laboratory",
      tagline: "Designing responsive organic crystals and porous frameworks where nanoscale motion drives macroscopic function.",
      intro: "A collaborative research environment welcoming undergraduate, graduate, and visiting scientists across synthetic chemistry, crystallography, solid-state NMR, and computational modeling.",
      membersTitle: "People",
      openingsTitle: "Open Opportunities",
      members: [
        {
          name: "Dr. Dazaet Galicia-Badillo",
          role: "Principal Investigator",
          focus: "Dynamic crystals, amphidynamic MOFs, solid-state NMR, and stimuli-responsive materials.",
          initials: "DG"
        }
      ],
      openings: [
        {
          level: "Theses & Internships",
          title: "Projects in Solid-State Materials Chemistry",
          detail: "Open to students in chemistry, physics, and materials science interested in synthesis, X-ray crystallography, solid-state NMR, or DFT."
        }
      ]
    },
    es: {
      navLabel: "Grupo",
      badge: "Grupo de Investigación",
      name: "Laboratorio de Materiales Cristalinos Dinámicos",
      tagline: "Diseño de cristales orgánicos responsivos y redes porosas donde el movimiento nanométrico impulsa función macroscópica.",
      intro: "Un entorno colaborativo pensado para recibir estudiantes de licenciatura, posgrado y estancias en síntesis química, cristalografía, RMN de estado sólido y modelado computacional.",
      membersTitle: "Integrantes",
      openingsTitle: "Oportunidades abiertas",
      members: [
        {
          name: "Dr. Dazaet Galicia-Badillo",
          role: "Investigador Principal",
          focus: "Cristales dinámicos, MOFs anfidinámicos, RMN de estado sólido y materiales responsivos.",
          initials: "DG"
        }
      ],
      openings: [
        {
          level: "Tesis y estancias",
          title: "Proyectos en Química de Materiales en Estado Sólido",
          detail: "Abierto a estudiantes de química, física o ciencia de materiales interesados en síntesis, cristalografía de rayos X, RMN de estado sólido o DFT."
        }
      ]
    }
  },

  /**
   * Mentored & co-advised students (named roster verified from academic records)
   */
  mentorship: {
    theses: [
      {
        name: "Yesterday López-Herrera",
        year: "2026",
        level: { en: "B.S. Thesis - Co-Director", es: "Tesis de Licenciatura - Codirector" },
        topic: {
          en: "Thermomechanical Effects of a Phosphorescent Carbazole-Derived Organic Crystal",
          es: "Efectos termomecánicos en un cristal orgánico fosforescente derivado de carbazol"
        }
      },
      {
        name: "Edgar Daniel Guzmán-Cruz",
        year: "2026",
        level: { en: "B.S. Thesis - Co-Director", es: "Tesis de Licenciatura - Codirector" },
        topic: {
          en: "Synthesis of 2,7-Dicarbazoic Acid to Explore Its Luminescent Properties as a Linker in a MOF",
          es: "Síntesis del ácido 2,7-dicarbazoico para explorar sus propiedades luminiscentes como ligante en un MOF"
        }
      },
      {
        name: "Paulina Noemí García-Vargas",
        year: "2024",
        level: { en: "B.S. Thesis - Co-Director", es: "Tesis de Licenciatura - Codirector" },
        topic: {
          en: "Modulation of Rotational Dynamics through Multivariate Metal-Organic Frameworks",
          es: "Modulación de la dinámica rotacional mediante redes metal-orgánicas multivariadas"
        }
      },
      {
        name: "Alonso Acosta-Vera",
        year: "2023",
        level: { en: "B.S. Thesis - Co-Director", es: "Tesis de Licenciatura - Codirector" },
        topic: {
          en: "Variation of Rotational Dynamics in MOFs by Incorporating a Fluorescent Host",
          es: "Variación de la dinámica rotacional en MOFs mediante la incorporación de un huésped fluorescente"
        }
      }
    ],
    stays: [
      {
        name: "José Ángel Fonseca",
        year: "2025",
        level: { en: "Undergraduate Research Stay", es: "Estancia corta de investigación" },
        topic: { en: "Synthesis of Dicarboxylic Acids Based on Pyrrolo[3,2-b]pyrrole", es: "Síntesis de ácidos dicarboxílicos basados en pirrolo[3,2-b]pirrol" }
      },
      {
        name: "Viridiana Taboada-Chincoya",
        year: "2024",
        level: { en: "Undergraduate Research Stay", es: "Estancia corta de investigación" },
        topic: { en: "Rose Bengal Synthesis", es: "Síntesis de Rosa de Bengala" }
      },
      {
        name: "Ana Sofía Vivanco",
        year: "2024",
        level: { en: "Undergraduate Research Stay", es: "Estancia corta de investigación" },
        topic: { en: "Room-Temperature Phosphorescence Changes in 4-Iodophenylcarbazole Due to Polymorphism", es: "Cambios en fosforescencia a temperatura ambiente en 4-yodofenilcarbazol por polimorfismo" }
      },
      {
        name: "Paulina Noemí Vargas-Núñez",
        year: "2024",
        level: { en: "Undergraduate Research Stay", es: "Estancia corta de investigación" },
        topic: { en: "Steric Factor Modulation in Multivariate MOFs", es: "Modulación del factor estérico en MOFs multivariados" }
      },
      {
        name: "Sebastián Augusto Reyes-Soto",
        year: "2023",
        level: { en: "Undergraduate Research Stay", es: "Estancia corta de investigación" },
        topic: { en: "Synthesis of 2,7-Dicarbazoic Acid for Use in a Zirconium MOF", es: "Síntesis de ácido 2,7-dicarbazoico para un MOF de circonio" }
      },
      {
        name: "Iván Mateos-Esquivel",
        year: "2023",
        level: { en: "Undergraduate Research Stay", es: "Estancia corta de investigación" },
        topic: { en: "Synthesis of Multivariate MOFs Based on Pyrrolo[3,2-b]pyrrole", es: "Síntesis de MOFs multivariados basados en pirrolo[3,2-b]pirrol" }
      },
      {
        name: "Gerardo Rodríguez-Contreras",
        year: "2023",
        level: { en: "Undergraduate Research Stay", es: "Estancia corta de investigación" },
        topic: { en: "Exploring the Photoisomerization of Bis(phenyldiazenyl)pyrrolo[3,2-b]pyrrole", es: "Estudio de la fotoisomerización de bis(fenildiazenil)pirrolo[3,2-b]pirrol" }
      },
      {
        name: "Oscar Eduardo Grande-Carro",
        year: "2022",
        level: { en: "Undergraduate Research Stay", es: "Estancia corta de investigación" },
        topic: { en: "Synthesis of MOFs with Artificial Molecular Rotors", es: "Síntesis de MOFs con rotores moleculares artificiales" }
      },
      {
        name: "Julio Baruc Martínez-Reyes",
        year: "2022",
        level: { en: "High School Research Intern", es: "Estancia de bachillerato" },
        topic: { en: "Synthesis of Dicarboxylic Organic Linkers", es: "Síntesis de ligantes orgánicos dicarboxílicos" }
      }
    ]
  },

  /**
   * Updated Honors, Awards & Funding (from October 2026 CV)
   */
  awards: [
    {
      year: "2026",
      tier: "distinction",
      title: { en: "Alfonso Caso Medal Nomination", es: "Nominación a la Medalla Alfonso Caso" },
      institution: { en: "UNAM (outcome pending)", es: "UNAM (resultado pendiente)" },
      detail: {
        en: "Nominated for the university's highest recognition for outstanding postgraduate achievement.",
        es: "Nominado al máximo reconocimiento universitario por desempeño sobresaliente en posgrado."
      }
    },
    {
      year: "2026",
      tier: "distinction",
      title: { en: "Ph.D. Awarded with Honors (Mención Honorífica)", es: "Doctorado con Mención Honorífica" },
      institution: { en: "Institute of Chemistry, UNAM", es: "Instituto de Química, UNAM" },
      detail: {
        en: "Doctorate in Chemical Sciences defended with honors for work on multiscale motion in crystals and MOFs.",
        es: "Doctorado en Ciencias Químicas otorgado con mención honorífica por investigación en movimiento multiescala."
      }
    },
    {
      year: "2025",
      tier: "conference",
      title: { en: "Best Presentation Award", es: "Premio a Mejor Presentación" },
      institution: { en: "IX Seminario Regional de Materiales Avanzados, UAEH, Mexico", es: "IX Seminario Regional de Materiales Avanzados, UAEH, México" },
      detail: {
        en: "Awarded in October 2025 for research on interdependent molecular rotors and photoswitches in multivariate MOFs.",
        es: "Reconocimiento en octubre de 2025 por la investigación sobre interdependencia de rotores y fotointerruptores en MOFs."
      }
    },
    {
      year: "2024",
      tier: "funding",
      title: { en: "Supercomputing Resource Allocations (x2)", es: "Asignaciones de Supercómputo (x2)" },
      institution: { en: "National High-Performance Computing Laboratory (LANCAD)", es: "Laboratorio Nacional de Cómputo de Alto Desempeño (LANCAD)" },
      detail: {
        en: "Prepared successful competitive proposals securing two allocations of HPC computational resources.",
        es: "Propuestas competitivas aprobadas para dos asignaciones de recursos de supercómputo para investigación."
      }
    },
    {
      year: "2023",
      tier: "conference",
      title: { en: "Best Poster Award", es: "Premio a Mejor Cartel (Best Poster Award)" },
      institution: { en: "DynaMIC23, Adolphe Merkle Institute, Fribourg, Switzerland", es: "DynaMIC23, Adolphe Merkle Institute, Friburgo, Suiza" },
      detail: {
        en: "Dynamic Materials, Crystals and Phenomena Conference hosted by Prof. Simon Krause.",
        es: "Conferencia Dynamic Materials, Crystals and Phenomena organizada por el Prof. Simon Krause."
      }
    },
    {
      year: "2022",
      tier: "funding",
      title: { en: "Doctoral Scholarship", es: "Beca de Doctorado" },
      institution: { en: "Secretariat of Science, Humanities, Technology, and Innovation (SECIHTI)", es: "Secretaría de Ciencia, Humanidades, Tecnología e Innovación (SECIHTI)" },
      detail: {
        en: "National fellowship supporting Ph.D. research in Chemical Sciences (2022 - 2026).",
        es: "Beca nacional de apoyo para estudios de doctorado en Ciencias Químicas (2022 - 2026)."
      }
    },
    {
      year: "2020",
      tier: "funding",
      title: { en: "Master's Scholarship", es: "Beca de Maestría" },
      institution: { en: "Secretariat of Science, Humanities, Technology, and Innovation (SECIHTI)", es: "Secretaría de Ciencia, Humanidades, Tecnología e Innovación (SECIHTI)" },
      detail: {
        en: "National fellowship supporting M.Sc. studies in Chemical Sciences (2020 - 2022).",
        es: "Beca nacional de apoyo para estudios de maestría en Ciencias Químicas (2020 - 2022)."
      }
    },
    {
      year: "2019",
      tier: "distinction",
      title: { en: "Institute of Chemistry Undergraduate Scholarship", es: "Beca de Licenciatura del Instituto de Química" },
      institution: { en: "UNAM", es: "UNAM" },
      detail: {
        en: "Awarded for the best undergraduate research project at the Institute of Chemistry, UNAM.",
        es: "Otorgada al mejor proyecto de investigación de licenciatura en el Instituto de Química de la UNAM."
      }
    }
  ],

  /**
   * 14 Verified Peer-Reviewed Publications (Numbered 14 down to 1, matching CV)
   * Every publication includes its verified DOI and real Graphical Abstract / Cover!
   */
  publications: [
    {
      number: 14,
      id: "acsami-2026",
      year: 2026,
      title: "Dual-State Emissive Imidazole-Based Photoswitches by Design and Their Use for Data Encryption",
      authors: "Ernesto Enríquez-Palacios, Dazaet Galicia-Badillo, Yoarhy A. Amador-Sánchez, Marcos Flores-Álamo, José Luis Belmonte-Vázquez",
      journal: "ACS Applied Materials & Interfaces",
      citation: "2026, 18(35), 47895-47906",
      doi: "10.1021/acsami.6c10426",
      image: "assets/img/papers/paper-14.webp",
      thumb: "assets/img/papers/paper-14-thumb.webp",
      categories: ["photophysics"],
      firstAuthor: false,
      featured: true,
      summary: {
        en: "Rational design of dual-state emissive imidazole photoswitches enabling reversible light-controlled writing and optical data encryption.",
        es: "Diseño racional de fotointerruptores de imidazol con emisión dual para escritura reversible con luz y cifrado óptico de datos."
      }
    },
    {
      number: 13,
      id: "mcf-2026",
      year: 2026,
      title: "Disentangling Molecular and Macroscopic Motion in a Salient Solvate",
      authors: "Dazaet Galicia-Badillo, Ernesto A. Hernández-Morales, Yesterday López-Herrera, Erick Hernández-Santiago, Jan Blahut, Rubén A. Toscano, Martin Dračínský, Braulio Rodríguez-Molina",
      journal: "Materials Chemistry Frontiers",
      citation: "2026, 10(18), 3305-3313",
      doi: "10.1039/D6QM00456C",
      image: "assets/img/papers/paper-13.webp",
      thumb: "assets/img/papers/paper-13-thumb.webp",
      categories: ["mechanics"],
      firstAuthor: true,
      featured: true,
      summary: {
        en: "Decouples toluene rotational dynamics from colossal anisotropic thermal expansion to explain thermosalient jumping in an organic solvate.",
        es: "Separa la dinámica rotacional del tolueno de la expansión térmica colosal anisótropa para explicar el efecto termosaliente en un solvato orgánico."
      }
    },
    {
      number: 12,
      id: "acsml-2026",
      year: 2026,
      title: "Integration of a Molecular Rotor and a Photoswitch in a Metal-Organic Framework",
      authors: "Dazaet Galicia-Badillo, Jade Cisneros, Jan Blahut, Alonso Acosta-Vera, Alfonso García-Márquez, Haggeo Desirena, Erika Bartůnková, Ma. Carmen García-González, Ingrid Chávez-Serrano, Joelis Rodríguez-Hernández, Martin Dračínský, Braulio Rodríguez-Molina",
      journal: "ACS Materials Letters",
      citation: "2026, 8(7), 1995-2001",
      doi: "10.1021/acsmaterialslett.6c00255",
      image: "assets/img/papers/paper-12.webp",
      thumb: "assets/img/papers/paper-12-thumb.webp",
      categories: ["mofs", "photophysics"],
      firstAuthor: true,
      featured: true,
      summary: {
        en: "Combines a molecular rotor and an azobenzene photoswitch inside a single multivariate Zr-MOF to modulate internal rotational motion with light and guests.",
        es: "Integra un rotor molecular y un fotointerruptor de azobenceno en un MOF multivariado de circonio para modular la rotación interna con luz y huéspedes."
      }
    },
    {
      number: 11,
      id: "angew-2026",
      year: 2026,
      title: "Crystals as Rockets: Modulation of the Salient Temperature in Cocrystals by Solvent Mixture Composition",
      authors: "Ernesto A. Hernández-Morales, Dayra Barreto-Hernández, Dazaet Galicia-Badillo, Rubén A. Toscano, M. Elena García-Aguilera, Braulio Rodríguez-Molina",
      journal: "Angewandte Chemie International Edition",
      citation: "2026, e26010",
      doi: "10.1002/anie.202526010",
      image: "assets/img/papers/paper-11.webp",
      thumb: "assets/img/papers/paper-11-thumb.webp",
      categories: ["mechanics"],
      firstAuthor: false,
      featured: true,
      summary: {
        en: "Demonstrates programmable tuning of the thermosalient jumping temperature in channel-like solvate cocrystals by varying solvent mixture ratios.",
        es: "Demuestra el ajuste programable de la temperatura de salto termosaliente en cocristales solvatos mediante la proporción de disolventes."
      }
    },
    {
      number: 10,
      id: "cptc-2026",
      year: 2026,
      title: "Rational Modulation of Excited-State Intramolecular Proton Transfer, Aggregation-Induced Emission, and Intramolecular Motion on Polysubstituted Imidazoles",
      authors: "Ángel D. Álvarez-Castillo, Alexis Juárez-Morales, Dazaet Galicia-Badillo, Mauricio Maldonado-Domínguez, José M. Heredia-Peñaloza, Marcos Flores-Álamo, José Luis Belmonte-Vázquez",
      journal: "ChemPhotoChem",
      citation: "2026, 10, e70099",
      doi: "10.1002/cptc.202500262",
      image: "assets/img/papers/paper-10.webp",
      thumb: "assets/img/papers/paper-10-thumb.webp",
      categories: ["photophysics"],
      firstAuthor: false,
      featured: true,
      cover: true,
      summary: {
        en: "Selected as Front Cover: maps how substituent design controls ESIPT, aggregation-induced emission, and intramolecular motion in imidazoles.",
        es: "Portada de ChemPhotoChem: mapea cómo el diseño de sustituyentes controla ESIPT, emisión inducida por agregación y movimiento intramolecular."
      }
    },
    {
      number: 9,
      id: "orglett-2025",
      year: 2025,
      title: "Synthesis of Non-Symmetrical 3,3'-Bicoumarins: Total Synthesis of Arteminorin C, 3,3'-Biisofraxidin, and Biscopoletin",
      authors: "Mario Castañón-García, Pedro López-Mendoza, Dazaet Galicia-Badillo, Luis D. Miranda",
      journal: "Organic Letters",
      citation: "2025, 27(21), 5349-5354",
      doi: "10.1021/acs.orglett.5c01119",
      image: "assets/img/papers/paper-09.webp",
      thumb: "assets/img/papers/paper-09-thumb.webp",
      categories: ["synthesis"],
      firstAuthor: false,
      featured: false,
      summary: {
        en: "Double Perkin synthetic route toward non-symmetrical fluorescent 3,3'-bicoumarins and total synthesis of three natural products.",
        es: "Ruta sintética de doble Perkin hacia 3,3'-bicumarinas fluorescentes no simétricas y síntesis total de tres productos naturales."
      }
    },
    {
      number: 8,
      id: "chemmater-2025",
      year: 2025,
      title: "Low-Temperature Dynamics at Nano- and Macroscales: Organic Crystal That Exhibits Low-Temperature Molecular Motion and the Thermosalient Effect",
      authors: "José L. Belmonte-Vázquez, Durga Prasad Karothu, Carl H. Fleischer, Dazaet Galicia-Badillo, Mauricio Maldonado-Domínguez, Robert W. Schurko, Liang Li, Panče Naumov, Braulio Rodríguez-Molina",
      journal: "Chemistry of Materials",
      citation: "2025, 37, 3373-3383",
      doi: "10.1021/acs.chemmater.5c00171",
      image: "assets/img/papers/paper-08.webp",
      thumb: "assets/img/papers/paper-08-thumb.webp",
      categories: ["mechanics"],
      firstAuthor: false,
      featured: false,
      summary: {
        en: "International collaboration uncovering low-temperature molecular motion coupled with reversible phase transitions and macroscopic jumping.",
        es: "Colaboración internacional que revela movimiento molecular a baja temperatura acoplado a transiciones de fase reversibles y saltos macroscópicos."
      }
    },
    {
      number: 7,
      id: "tet-2024",
      year: 2024,
      title: "On the Flexibility of 1,4-Bis(phenylethynyl)benzene Butyl Ester Organic Crystal Featuring Mobile Components",
      authors: "Dazaet Galicia-Badillo, Braulio Rodríguez-Molina",
      journal: "Tetrahedron",
      citation: "2024, 167, 134245",
      doi: "10.1016/j.tet.2024.134245",
      image: "assets/img/papers/paper-07.webp",
      thumb: "assets/img/papers/paper-07-thumb.webp",
      categories: ["mechanics"],
      firstAuthor: true,
      featured: true,
      summary: {
        en: "Connects supramolecular packing and internal mobile phenylene rotors with reversible elasto-plastic mechanical bending in organic crystals.",
        es: "Conecta el empaquetamiento supramolecular y rotores internos con la flexión mecánica elasto-plástica reversible en cristales orgánicos."
      }
    },
    {
      number: 6,
      id: "acsomega-2024",
      year: 2024,
      title: "Aggregation-Induced Emission Enhancement and Solid-State Photoswitching of Crystalline Carbazole N-Salicylidene Anilines",
      authors: "Dazaet Galicia-Badillo, José L. Belmonte-Vázquez, Mario Rodríguez, Braulio Rodríguez-Molina, Ma. Carmen García-González",
      journal: "ACS Omega",
      citation: "2024, 9(36), 38015-38022",
      doi: "10.1021/acsomega.4c04764",
      image: "assets/img/papers/paper-06.webp",
      thumb: "assets/img/papers/paper-06-thumb.webp",
      categories: ["photophysics"],
      firstAuthor: true,
      featured: false,
      summary: {
        en: "Contrasts crystalline carbazole N-salicylidene anilines to balance high fluorescence quantum yields against solid-state photochromism.",
        es: "Contrasta anilinas cristalinas de carbazol para equilibrar altos rendimientos cuánticos de fluorescencia frente a fotocromismo en estado sólido."
      }
    },
    {
      number: 5,
      id: "acsml-2024",
      year: 2024,
      title: "Modulation of the Photophysics and Internal Dynamics in a Zr Metal-Organic Framework by the Inclusion of Fluorinated Guests",
      authors: "Alonso Acosta-Vera, Dazaet Galicia-Badillo, Armando Navarro-Huerta, Konstantin Stracke, Virginia Gómez-Vidales, Joelis Rodríguez-Hernández, Jack D. Evans, Braulio Rodríguez-Molina",
      journal: "ACS Materials Letters",
      citation: "2024, 6(9), 4395-4401",
      doi: "10.1021/acsmaterialslett.4c00805",
      image: "assets/img/papers/paper-05.webp",
      thumb: "assets/img/papers/paper-05-thumb.webp",
      categories: ["mofs", "photophysics"],
      firstAuthor: false,
      featured: false,
      summary: {
        en: "Shows how encapsulating fluorinated guests inside a Zr-MOF restricts fast molecular rotations while simultaneously shifting emission.",
        es: "Muestra cómo encapsular huéspedes fluorados en un MOF de circonio restringe rotaciones moleculares rápidas mientras modula la emisión."
      }
    },
    {
      number: 4,
      id: "matter-preview-2024",
      year: 2024,
      title: "Preview: The Integration of Multiple Components for Multi-Responsive Dynamic Framework Materials",
      authors: "Dazaet Galicia-Badillo, Paulina Noemí García-Vargas, Braulio Rodríguez-Molina",
      journal: "Matter",
      citation: "2024, 7(8), 2766-2768",
      doi: "10.1016/j.matt.2024.06.034",
      image: "assets/img/papers/paper-04.webp",
      thumb: "assets/img/papers/paper-04-thumb.webp",
      categories: ["reviews", "mofs"],
      firstAuthor: true,
      featured: false,
      summary: {
        en: "Perspective highlighting how combining distinct dynamic motifs inside ordered frameworks unlocks multi-stimuli responsiveness.",
        es: "Perspectiva sobre cómo combinar motivos dinámicos distintos dentro de redes ordenadas habilita materiales sensibles a múltiples estímulos."
      }
    },
    {
      number: 3,
      id: "matter-review-2024",
      year: 2024,
      title: "Review: Local and Global Dynamics in Organic Soft Porous Crystals",
      authors: "Erick Hernández-Santiago, Jorge Espinosa-Rocha, Dazaet Galicia-Badillo, Braulio Rodríguez-Molina",
      journal: "Matter",
      citation: "2024, 7(2), 408-429",
      doi: "10.1016/j.matt.2023.11.020",
      image: "assets/img/papers/paper-03.webp",
      thumb: "assets/img/papers/paper-03-thumb.webp",
      categories: ["reviews", "mechanics"],
      firstAuthor: false,
      featured: false,
      summary: {
        en: "Comprehensive review classifying covalent, non-covalent, local, and collective dynamic phenomena in organic soft porous crystals.",
        es: "Revisión comprehensiva que clasifica los fenómenos dinámicos locales y colectivos en cristales porosos orgánicos blandos."
      }
    },
    {
      number: 2,
      id: "acsomega-2022",
      year: 2022,
      title: "9-Trifluoromethylxanthenediols: Synthesis and Supramolecular Motifs",
      authors: "Manuel Rodríguez-Molina, Dazaet Galicia-Badillo, Enoc Cetina-Mancilla, Jorge Cárdenas, Lilian I. Olvera, Rubén A. Toscano, Braulio Rodríguez-Molina, Mikhail G. Zolotukhin",
      journal: "ACS Omega",
      citation: "2022, 7(16), 13520-13528",
      doi: "10.1021/acsomega.1c06635",
      image: "assets/img/papers/paper-02.webp",
      thumb: "assets/img/papers/paper-02-thumb.webp",
      categories: ["synthesis"],
      firstAuthor: false,
      featured: false,
      summary: {
        en: "Synthesizes and resolves the crystal packing and hydrogen-bonded supramolecular architectures of 3,6- and 2,7-xanthenediols.",
        es: "Sintetiza y resuelve el empaquetamiento cristalino y las arquitecturas supramoleculares por puente de hidrógeno de 3,6- y 2,7-xantenodioles."
      }
    },
    {
      number: 1,
      id: "chemsci-2020",
      year: 2020,
      title: "Multiple Rotational Rates in a Guest-Loaded, Amphidynamic Zirconia Metal-Organic Framework",
      authors: "Aaron Torres-Huerta, Dazaet Galicia-Badillo, Andrés Aguilar-Granda, Jacob T. Bryant, Fernando J. Uribe-Romo, Braulio Rodríguez-Molina",
      journal: "Chemical Science",
      citation: "2020, 11(42), 11579-11583",
      doi: "10.1039/D0SC04432F",
      image: "assets/img/papers/paper-01.webp",
      thumb: "assets/img/papers/paper-01-thumb.webp",
      categories: ["mofs"],
      firstAuthor: false,
      featured: false,
      summary: {
        en: "Demonstrates dual rotational regimes (fast and hindered) inside an interpenetrated amphidynamic Zr-MOF tuned by solvent guests.",
        es: "Demuestra dos regímenes de rotación (libre e impedida) dentro de un MOF anfidinámico interpenetrado de circonio modulados por huéspedes."
      }
    }
  ],

  /**
   * Broader, well-classified Research Interests (general scientific taxonomy)
   */
  researchTaxonomy: {
    en: [
      {
        id: "mofs",
        index: "I",
        domain: "Porous & Amphidynamic Frameworks",
        headline: "Dynamic Metal-Organic Frameworks & Molecular Machines",
        summary: "Designing porous crystalline architectures (Zr-MOFs and multivariate frameworks) where rigid scaffolds host fast molecular rotors and guest-responsive pores.",
        subtopics: ["Amphidynamic crystals", "Multivariate MOFs", "Host-guest dynamics", "Post-synthetic modification"],
        applications: "Molecular sorting, responsive membranes, gas storage & controlled release"
      },
      {
        id: "mechanics",
        index: "II",
        domain: "Crystal Engineering & Solid-State Mechanics",
        headline: "Mechanically Adaptive, Flexible & Salient Crystals",
        summary: "Understanding how molecular motion, slip planes, and colossal anisotropic thermal expansion govern elastic bending, crystal jumping, and single-crystal phase transitions.",
        subtopics: ["Elasto-plastic organic crystals", "Thermosalient actuators", "SC-SC phase transitions", "Anisotropic thermal expansion"],
        applications: "Micro-actuators, thermal switches, flexible optoelectronics"
      },
      {
        id: "photophysics",
        index: "III",
        domain: "Photophysics & Light-Responsive Solids",
        headline: "Solid-State Photoswitches, Luminescence & Optical Encryption",
        summary: "Tuning excited-state processes (AIE/AIEE, ESIPT, photoisomerization) in organic crystals and hybrid frameworks to couple light with color, emission, and internal motion.",
        subtopics: ["Solid-state photochromism", "AIE & ESIPT chromophores", "Light-gated dynamics", "Optical data encryption"],
        applications: "Anti-counterfeiting, optical memory, smart luminescent sensors"
      },
      {
        id: "synthesis",
        index: "IV",
        domain: "Multiscale Characterization, Synthesis & Computation",
        headline: "From Synthetic Design to Solid-State NMR, Diffraction & AI Workflows",
        summary: "Bridging air-sensitive organic synthesis with variable-temperature 2H/13C solid-state NMR, X-ray crystallography, DFT energy landscapes, and Python/AI research automation.",
        subtopics: ["Organic & supramolecular synthesis", "VT 2H / 13C solid-state NMR", "SCXRD / PXRD & DSC", "DFT (Gaussian16) & AI-assisted analysis"],
        applications: "Accelerated materials discovery, energy, environmental & biomedical interfaces"
      }
    ],
    es: [
      {
        id: "mofs",
        index: "I",
        domain: "Redes Porosas y Cristales Anfidinámicos",
        headline: "Redes Metal-Orgánicas Dinámicas y Máquinas Moleculares",
        summary: "Diseño de arquitecturas cristalinas porosas (MOFs de circonio y redes multivariadas) donde andamios rígidos alojan rotores moleculares y poros sensibles a huéspedes.",
        subtopics: ["Cristales anfidinámicos", "MOFs multivariados", "Dinámica huésped-anfitrión", "Modificación postsintética"],
        applications: "Separación molecular, membranas responsivas, almacenamiento y liberación controlada"
      },
      {
        id: "mechanics",
        index: "II",
        domain: "Ingeniería Cristalina y Mecánica del Estado Sólido",
        headline: "Cristales Flexibles, Adaptables y Termosalientes",
        summary: "Estudio de cómo la movilidad molecular, los planos de deslizamiento y la expansión térmica anisótropa gobiernan la flexión elástica, los saltos térmicos y las transiciones monocristal-monocristal.",
        subtopics: ["Cristales orgánicos elasto-plásticos", "Actuadores termosalientes", "Transiciones de fase SC-SC", "Expansión térmica anisótropa"],
        applications: "Microactuadores, interruptores térmicos y optoelectrónica flexible"
      },
      {
        id: "photophysics",
        index: "III",
        domain: "Fotofísica y Sólidos Sensibles a la Luz",
        headline: "Fotointerruptores en Estado Sólido, Luminiscencia y Cifrado Óptico",
        summary: "Modulación de procesos en estado excitado (AIE/AIEE, ESIPT, fotoisomerización) en cristales orgánicos y redes híbridas para acoplar luz, emisión y movimiento interno.",
        subtopics: ["Fotocromismo en estado sólido", "Cromóforos AIE y ESIPT", "Dinámica modulada por luz", "Cifrado óptico de información"],
        applications: "Seguridad óptica, memorias fotónicas y sensores luminiscentes inteligentes"
      },
      {
        id: "synthesis",
        index: "IV",
        domain: "Caracterización Multiescala, Síntesis y Cómputo",
        headline: "Del Diseño Sintético a la RMN de Estado Sólido, Rayos X e IA",
        summary: "Integración de síntesis orgánica sensible a aire/humedad con RMN de estado sólido 2H/13C a temperatura variable, difracción de rayos X, cálculos DFT y automatización con Python e IA.",
        subtopics: ["Síntesis orgánica y supramolecular", "RMN de estado sólido 2H / 13C VT", "DRX monocristal/polvos y DSC", "DFT (Gaussian16) y flujos con IA"],
        applications: "Descubrimiento acelerado de materiales para energía, ambiente y biomedicina"
      }
    ]
  },

  ui: {
    en: {
      nav: {
        about: "About",
        research: "Research",
        publications: "Publications",
        mentorship: "Mentorship",
        awards: "Awards",
        outreach: "Outreach",
        future: "Vision",
        contact: "Contact"
      },
      hero: {
        role: "Ph.D. in Chemical Sciences (Honors, UNAM) - Mexico City",
        affiliation: "Current affiliation: Mexican Institute of Industrial Property (IMPI)",
        name: "Dazaet Galicia-Badillo",
        statement: "I design crystalline organic materials and metal-organic frameworks where nanoscale molecular motion drives macroscopic mechanics and optical function.",
        ctaPubs: "Browse 14 Publications",
        ctaResearch: "Research Areas",
        stats: [
          { value: "14", label: "Peer-reviewed papers" },
          { value: "5", label: "First-author papers" },
          { value: "14", label: "Students mentored" },
          { value: "24", label: "Talks & posters" }
        ]
      },
      sim: {
        label: "Interactive 3D Crystal Bench",
        dragHint: "Drag to orbit 3D lattice - select stimulus",
        modes: [
          {
            id: "rotor",
            label: "Amphidynamic Rotor",
            title: "Nanoscale Rotational Dynamics",
            caption: "A mobile phenylene rotor spins freely inside a rigid Zr6-MOF cage while preserving long-range crystalline order."
          },
          {
            id: "photo",
            label: "UV Photoswitch",
            title: "Light-Gated Isomerization & AIE",
            caption: "365-405 nm excitation switches embedded chromophores, shifting fluorescence emission and sterically modulating neighboring motion."
          },
          {
            id: "salient",
            label: "Salient & Elastic",
            title: "Macroscopic Flexing & Thermal Jump",
            caption: "Anisotropic lattice expansion stores elastic strain across molecular planes until the crystal bends reversibly or leaps."
          }
        ]
      },
      about: {
        kicker: "Biography & Current Activity",
        title: "Crystals are far from static.",
        lead: "Trained across B.S., M.Sc., and Ph.D. (Honors) in Chemical Sciences at UNAM, my work investigates how order and motion coexist inside solid matter.",
        body: [
          "By combining organic synthesis, metal-organic framework assembly, variable-temperature solid-state NMR (2H and 13C), X-ray diffraction, photophysics, and DFT calculations, I map the bridge between molecular-level motion and macroscopic crystal behavior.",
          "Following my doctoral defense at the Institute of Chemistry (UNAM, 2026), I currently hold an affiliation at the Mexican Institute of Industrial Property (IMPI) while continuing my scientific trajectory in dynamic materials, reproducible computational/AI workflows, student mentoring, and public science communication."
        ],
        educationTitle: "Academic Training",
        education: [
          {
            period: "2022 - 2026",
            degree: "Ph.D. in Chemical Sciences (Honors)",
            place: "Institute of Chemistry, UNAM",
            note: "Thesis: Molecular and Macroscopic Motion in Organic Crystals and Metal-Organic Frameworks. Advisor: Prof. Dr. Braulio Rodríguez-Molina."
          },
          {
            period: "2020 - 2022",
            degree: "M.Sc. in Chemical Sciences",
            place: "Institute of Chemistry, UNAM",
            note: "Thesis: Rotational Dynamic Changes in an Amphidynamic Metal-Organic Framework Postsynthetically Modified."
          },
          {
            period: "2015 - 2020",
            degree: "B.S. in Chemistry",
            place: "Faculty of Chemistry, UNAM",
            note: "Thesis: Synthesis of tetracarboxylated carbazole rotors and their evaluation in the formation of Metal-Organic Frameworks.",
            linkLabel: "UNAM Repository",
            linkKey: "unamThesisBs"
          }
        ]
      },
      research: {
        kicker: "Research Classification",
        title: "Four scales of dynamic materials chemistry",
        intro: "Organized from molecular frameworks and crystal mechanics to photophysics and multiscale methodology. Select a classification to filter related publications.",
        appLabel: "Applied horizon",
        filterCta: "See papers in this area"
      },
      publications: {
        kicker: "Published Archive (14 - 1)",
        title: "Peer-reviewed publications & Graphical Abstracts",
        intro: "Numbered in reverse chronological order (14 to 1), each paired with its verified DOI and published Graphical Abstract or Cover artwork. Click any figure to inspect in full view.",
        searchPlaceholder: "Search title, journal, author, or year...",
        firstAuthorOnly: "First author only",
        reset: "Reset",
        showing: "Showing",
        of: "of",
        firstAuthor: "First Author",
        cover: "Front Cover",
        openDoi: "DOI",
        zoomFig: "Inspect figure",
        empty: "No publications match the current filters.",
        categories: [
          { id: "all", label: "All (14)" },
          { id: "mofs", label: "MOFs & Rotors" },
          { id: "mechanics", label: "Crystal Mechanics" },
          { id: "photophysics", label: "Photophysics & Light" },
          { id: "reviews", label: "Reviews & Previews" },
          { id: "synthesis", label: "Synthesis & Supramolecular" }
        ]
      },
      mentorship: {
        kicker: "Mentorship & Teaching",
        title: "Students co-directed & co-advised",
        intro: "Mentoring young chemists is central to how I understand science. I have co-directed 4 undergraduate theses and supervised short research stays spanning organic synthesis, MOFs, crystal dynamics, and luminescence.",
        thesesTitle: "Bachelor's Theses Co-Directed (4)",
        staysTitle: "Short Research Stays Co-Advised (2022 - 2025)"
      },
      awards: {
        kicker: "Honors, Awards & Funding",
        title: "Recognition & competitive support",
        intro: "Academic distinctions, international conference awards, supercomputing allocations, and national graduate fellowships."
      },
      outreach: {
        kicker: "Beyond Research",
        title: "Science communication, visual chemistry & public engagement",
        intro: "Sharing chemistry outside journals through visual storytelling, high-school talks, extended-reality workshops, and media consultation.",
        items: [
          {
            year: "2025",
            tag: "AR / VR & AI Workshop",
            title: "Visualizing molecules with AR, VR, and AI",
            venue: "Día del Químico 2025 - FES Cuautitlán, UNAM",
            text: "Outreach speaker demonstrating interactive molecular visualizers and AI-assisted learning tools."
          },
          {
            year: "2024 - 2025",
            tag: "Public Lectures",
            title: "From Pyramid Construction to Nano-Buildings",
            venue: "ENP 8 (UNAM) & Colegio de Bachilleres Plantel 7",
            text: "High-school talks introducing molecular architecture, porous crystals, and atomic-scale engineering."
          },
          {
            year: "2022",
            tag: "Popular Science",
            title: "What if I told you that crystals can be dynamic?",
            venue: "Boletín del Instituto de Química, UNAM (Vol. 19, pp. 16-17)",
            text: "Co-authored outreach essay explaining molecular rotors and solid-state dynamics to general readers."
          },
          {
            year: "2022 - Present",
            tag: "Digital & Press",
            title: "Molecular Architect (@dazaetgb) & UNAM Global",
            venue: "Instagram / X (#RealTimeChem) & UNAM Global media consultation (2022)",
            text: "3D molecular rendering, everyday solid-state chemistry outreach, and scientific consulting for university journalism."
          }
        ],
        personalSlot: ""
      },
      future: {
        kicker: "Future Horizon",
        title: "Building an independent materials research program",
        quote: "My long-term goal is to build an independent research program that bridges fundamental dynamic materials chemistry with applied challenges in energy storage and conversion, environmental remediation, and biomedical applications.",
        pillars: [
          {
            title: "Programmable Matter",
            text: "Translating molecular rotors, switches, and responsive crystals into engineered actuators, membranes, and photonic platforms."
          },
          {
            title: "Experiment + AI Synergy",
            text: "Pairing precision synthesis and solid-state spectroscopy with reproducible Python pipelines, DFT modeling, and agentic research tools."
          },
          {
            title: "Mentorship & Collaboration",
            text: "Open to collaborations across organic synthesis, crystallography, solid-state NMR, photophysics, and computational materials chemistry."
          }
        ]
      },
      contact: {
        kicker: "Contact",
        title: "Open to collaborations, talks & new scientific dialogues",
        intro: "Feel free to reach out regarding materials chemistry, solid-state NMR, crystal engineering, outreach talks, or future research opportunities.",
        copy: "Copy",
        copied: "Copied"
      }
    },

    es: {
      nav: {
        about: "Perfil",
        research: "Investigación",
        publications: "Publicaciones",
        mentorship: "Mentoría",
        awards: "Premios",
        outreach: "Divulgación",
        future: "Futuro",
        contact: "Contacto"
      },
      hero: {
        role: "Doctor en Ciencias Químicas (Mención Honorífica, UNAM) - Ciudad de México",
        affiliation: "Afiliación actual: Instituto Mexicano de la Propiedad Industrial (IMPI)",
        name: "Dazaet Galicia-Badillo",
        statement: "Diseño materiales cristalinos orgánicos y redes metal-orgánicas donde el movimiento molecular a escala nanométrica impulsa mecánica y función óptica macroscópicas.",
        ctaPubs: "Ver 14 publicaciones",
        ctaResearch: "Áreas de investigación",
        stats: [
          { value: "14", label: "Artículos arbitrados" },
          { value: "5", label: "Como primer autor" },
          { value: "14", label: "Estudiantes mentorados" },
          { value: "24", label: "Ponencias y carteles" }
        ]
      },
      sim: {
        label: "Banco Interactivo de Cristal 3D",
        dragHint: "Arrastra para rotar la red 3D - elige un estímulo",
        modes: [
          {
            id: "rotor",
            label: "Rotor Anfidinámico",
            title: "Dinámica Rotacional Nanométrica",
            caption: "Un rotor de fenileno gira libremente dentro de una caja rígida de Zr6-MOF conservando el orden cristalino de largo alcance."
          },
          {
            id: "photo",
            label: "Fotointerruptor UV",
            title: "Fotoisomerización y Emisión AIE",
            caption: "La excitación a 365-405 nm conmuta cromóforos embebidos, desplazando la fluorescencia y modulando el movimiento vecino."
          },
          {
            id: "salient",
            label: "Saliente y Elástico",
            title: "Flexión Macroscópica y Salto Térmico",
            caption: "La expansión anisótropa acumula tensión elástica entre planos moleculares hasta doblar el cristal o disparar un salto."
          }
        ]
      },
      about: {
        kicker: "Semblanza y Presente",
        title: "Los cristales están lejos de ser estáticos.",
        lead: "Formado en Licenciatura, Maestría y Doctorado (Mención Honorífica) en Ciencias Químicas en la UNAM, investigo cómo conviven el orden y el movimiento dentro de la materia sólida.",
        body: [
          "Al combinar síntesis orgánica, ensamblaje de redes metal-orgánicas, RMN de estado sólido a temperatura variable (2H y 13C), difracción de rayos X, fotofísica y cálculos DFT, trazo el puente entre el movimiento molecular y el comportamiento macroscópico de los cristales.",
          "Tras concluir el doctorado en el Instituto de Química de la UNAM (2026), actualmente colaboro en el Instituto Mexicano de la Propiedad Industrial (IMPI), mientras continúo mi trayectoria en materiales dinámicos, flujos computacionales asistidos por IA, mentoría de estudiantes y divulgación científica."
        ],
        educationTitle: "Formación Académica",
        education: [
          {
            period: "2022 - 2026",
            degree: "Doctorado en Ciencias Químicas (Mención Honorífica)",
            place: "Instituto de Química, UNAM",
            note: "Tesis: Movimiento a escala molecular y macroscópica en cristales orgánicos y redes metal-orgánicas. Tutor: Dr. Braulio Rodríguez-Molina."
          },
          {
            period: "2020 - 2022",
            degree: "Maestría en Ciencias Químicas",
            place: "Instituto de Química, UNAM",
            note: "Tesis: Cambios en la dinámica rotacional en una estructura metal-orgánica anfidinámica modificada postsintéticamente."
          },
          {
            period: "2015 - 2020",
            degree: "Licenciatura en Química",
            place: "Facultad de Química, UNAM",
            note: "Tesis: Síntesis de rotores de carbazol tetracarboxilados y su evaluación en la formación de estructuras metal-orgánicas.",
            linkLabel: "Repositorio UNAM",
            linkKey: "unamThesisBs"
          }
        ]
      },
      research: {
        kicker: "Clasificación de Investigación",
        title: "Cuatro escalas de la química de materiales dinámicos",
        intro: "Organizadas desde redes porosas y mecánica cristalina hasta fotofísica y metodología multiescala. Selecciona una clasificación para filtrar los artículos relacionados.",
        appLabel: "Horizonte aplicado",
        filterCta: "Ver artículos de esta área"
      },
      publications: {
        kicker: "Archivo Publicado (14 - 1)",
        title: "Publicaciones arbitradas y Graphical Abstracts",
        intro: "Numeradas en orden cronológico inverso (14 a 1), cada una con su DOI verificado y su Graphical Abstract o portada publicada. Haz clic en cualquier figura para ampliarla.",
        searchPlaceholder: "Buscar título, revista, autor o año...",
        firstAuthorOnly: "Solo primer autor",
        reset: "Restablecer",
        showing: "Mostrando",
        of: "de",
        firstAuthor: "Primer autor",
        cover: "Portada",
        openDoi: "DOI",
        zoomFig: "Ampliar figura",
        empty: "No hay publicaciones con esos filtros.",
        categories: [
          { id: "all", label: "Todos (14)" },
          { id: "mofs", label: "MOFs y Rotores" },
          { id: "mechanics", label: "Mecánica Cristalina" },
          { id: "photophysics", label: "Fotofísica y Luz" },
          { id: "reviews", label: "Revisiones y Perspectivas" },
          { id: "synthesis", label: "Síntesis y Supramolecular" }
        ]
      },
      mentorship: {
        kicker: "Mentoría y Docencia",
        title: "Personas co-tuteladas y asesoradas",
        intro: "Formar a jóvenes químicos es parte esencial de cómo entiendo la investigación. He codirigido 4 tesis de licenciatura y asesorado estancias de investigación en síntesis orgánica, MOFs, dinámica cristalina y luminiscencia.",
        thesesTitle: "Tesis de Licenciatura Codirigidas (4)",
        staysTitle: "Estancias Cortas de Investigación Asesoradas (2022 - 2025)"
      },
      awards: {
        kicker: "Premios, Distinciones y Financiamiento",
        title: "Reconocimientos y apoyos competitivos",
        intro: "Distinciones académicas, premios internacionales en congresos, asignaciones de supercómputo y becas nacionales de posgrado."
      },
      outreach: {
        kicker: "Fuera de la Investigación",
        title: "Divulgación científica, química visual y comunidad",
        intro: "Llevar la química más allá de las revistas especializadas mediante narrativa visual, charlas en bachillerato, talleres con realidad extendida y colaboración en medios.",
        items: [
          {
            year: "2025",
            tag: "Taller RA / RV e IA",
            title: "Visualización molecular con realidad aumentada, virtual e IA",
            venue: "Día del Químico 2025 - FES Cuautitlán, UNAM",
            text: "Ponente y divulgador empleando visualizadores moleculares interactivos y herramientas de inteligencia artificial."
          },
          {
            year: "2024 - 2025",
            tag: "Charlas Públicas",
            title: "De la construcción de pirámides a nanoedificios",
            venue: "ENP 8 (UNAM) y Colegio de Bachilleres Plantel 7",
            text: "Conferencias para bachillerato sobre arquitectura molecular, cristales porosos e ingeniería a escala atómica."
          },
          {
            year: "2022",
            tag: "Divulgación Escrita",
            title: "¿Qué pensarías si te dijera que los cristales pueden ser dinámicos?",
            venue: "Boletín del Instituto de Química, UNAM (Vol. 19, pp. 16-17)",
            text: "Artículo de divulgación junto con Braulio Rodríguez-Molina sobre rotores moleculares y dinámica en estado sólido."
          },
          {
            year: "2022 - Hoy",
            tag: "Digital y Prensa",
            title: "Arquitecto molecular (@dazaetgb) y UNAM Global",
            venue: "Instagram / X (#RealTimeChem) y consulta científica para UNAM Global (2022)",
            text: "Visualización 3D de moléculas, divulgación cotidiana de química del estado sólido y asesoría para periodismo universitario."
          }
        ],
        personalSlot: ""
      },
      future: {
        kicker: "Horizonte",
        title: "Construir un programa independiente de química de materiales",
        quote: "Mi meta a largo plazo es desarrollar un programa de investigación independiente que conecte la química fundamental de materiales dinámicos con retos aplicados en almacenamiento y conversión de energía, remediación ambiental y aplicaciones biomédicas.",
        pillars: [
          {
            title: "Materia Programable",
            text: "Traducir rotores moleculares, interruptores y cristales responsivos en actuadores, membranas y plataformas fotónicas reales."
          },
          {
            title: "Sinergia Experimento + IA",
            text: "Unir síntesis de precisión y espectroscopía de estado sólido con flujos reproducibles en Python, modelado DFT y herramientas agénticas."
          },
          {
            title: "Mentoría y Colaboración",
            text: "Abierto a colaboraciones en síntesis orgánica, cristalografía, RMN de estado sólido, fotofísica y química computacional de materiales."
          }
        ]
      },
      contact: {
        kicker: "Contacto",
        title: "Abierto a colaboraciones, charlas y nuevos diálogos científicos",
        intro: "Escríbeme si deseas conversar sobre química de materiales, RMN de estado sólido, ingeniería cristalina, divulgación o futuras oportunidades de investigación.",
        copy: "Copiar",
        copied: "Copiado"
      }
    }
  }
};
