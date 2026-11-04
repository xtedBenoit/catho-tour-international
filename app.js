/* ==========================================================================
   CATHO TOUR INTERNATIONAL — PORTFOLIO VITRINE OFFICIEL (V1 PRODUCTION)
   White Luminous Editorial • Mobile-First • 100% Vector SVG Icons (Zero Emojis)
   ========================================================================== */

(function () {
  const MEDIA = window.CATHO_MEDIA || {};

  function getImg(key, fallbackFile) {
    return MEDIA[key] || ('assets/' + fallbackFile);
  }

  // --------------------------------------------------------------------------
  // VECTOR SVG ICON & OFFICIAL FLAG LIBRARY (ZERO EMOJIS)
  // --------------------------------------------------------------------------
  const ICONS = {
    church: `<svg class="w-5 h-5 inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21V9l-6-4-6 4v12"/><path d="M12 2v3M10 3h4"/><path d="M2 21h20"/><path d="M10 21v-5a2 2 0 0 1 4 0v5"/></svg>`,
    leaf: `<svg class="w-5 h-5 inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    trees: `<svg class="w-5 h-5 inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"/></svg>`,
    star: `<svg class="w-5 h-5 inline-block shrink-0" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    landmark: `<svg class="w-5 h-5 inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`,
    shoppingBag: `<svg class="w-5 h-5 inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    globe: `<svg class="w-4 h-4 inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    mapPin: `<svg class="w-3.5 h-3.5 inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    award: `<svg class="w-4 h-4 inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    check: `<svg class="w-4 h-4 inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    diamond: `<svg class="w-3 h-3 inline-block shrink-0" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 22 12 12 22 2 12 12 2"/></svg>`,
    zoomIn: `<svg class="w-3.5 h-3.5 inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
    heartHandshake: `<svg class="w-5 h-5 inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/></svg>`,
    shield: `<svg class="w-5 h-5 inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    utensils: `<svg class="w-5 h-5 inline-block shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`
  };

  const FLAGS = {
    benin: `<svg class="w-5 h-3.5 inline-block rounded-[2px] shadow-sm shrink-0" viewBox="0 0 36 24"><rect width="36" height="12" fill="#FCD116"/><rect y="12" width="36" height="12" fill="#E8112D"/><rect width="14" height="24" fill="#008751"/></svg>`,
    ghana: `<svg class="w-5 h-3.5 inline-block rounded-[2px] shadow-sm shrink-0" viewBox="0 0 36 24"><rect width="36" height="8" fill="#CE1126"/><rect y="8" width="36" height="8" fill="#FCD116"/><rect y="16" width="36" height="8" fill="#006B3F"/><polygon points="18,8.5 19,11.3 22,11.3 19.5,13 20.5,15.8 18,14.1 15.5,15.8 16.5,13 14,11.3 17,11.3" fill="#000000"/></svg>`,
    civ: `<svg class="w-5 h-3.5 inline-block rounded-[2px] shadow-sm shrink-0" viewBox="0 0 36 24"><rect width="12" height="24" fill="#F77F00"/><rect x="12" width="12" height="24" fill="#FFFFFF"/><rect x="24" width="12" height="24" fill="#009E60"/></svg>`,
    senegal: `<svg class="w-5 h-3.5 inline-block rounded-[2px] shadow-sm shrink-0" viewBox="0 0 36 24"><rect width="12" height="24" fill="#00853F"/><rect x="12" width="12" height="24" fill="#FDEF42"/><rect x="24" width="12" height="24" fill="#E31B23"/><polygon points="18,8.5 19,11.3 22,11.3 19.5,13 20.5,15.8 18,14.1 15.5,15.8 16.5,13 14,11.3 17,11.3" fill="#00853F"/></svg>`,
    togo: `<svg class="w-5 h-3.5 inline-block rounded-[2px] shadow-sm shrink-0" viewBox="0 0 36 24"><rect width="36" height="24" fill="#006A4E"/><rect y="4.8" width="36" height="4.8" fill="#FFCE00"/><rect y="14.4" width="36" height="4.8" fill="#FFCE00"/><rect width="14.4" height="14.4" fill="#D21034"/><polygon points="7.2,3.2 8.2,6.2 11.2,6.2 8.8,8 9.7,11 7.2,9.2 4.7,11 5.6,8 3.2,6.2 6.2,6.2" fill="#FFFFFF"/></svg>`
  };

  // --------------------------------------------------------------------------
  // 1. CHRONOLOGIE DES 4 ÉDITIONS
  // --------------------------------------------------------------------------
  const EDITIONS = [
    {
      id: 'benin',
      edition: '1ère Édition',
      year: '2024',
      country: 'Bénin',
      flagSvg: FLAGS.benin,
      title: 'La Genèse — « Catho Tour »',
      subtitle: 'Paroisse Sainte-Thérèse de l’Enfant Jésus de Kégué (Togo)',
      highlights: [
        'Initiative fondatrice du Révérend Père Alain KODJOAKOU',
        'Voyage éducatif, culturel et spirituel pour la jeunesse togolaise',
        'Ouverture aux jeunes catholiques comme aux jeunes d’autres confessions',
        'Espace de découverte, de dialogue et de fraternité interculturelle'
      ],
      description:
        "L'aventure a commencé sous le nom de Catho Tour, avec une première édition organisée au Bénin en 2024. L'objectif initial était de permettre aux jeunes Togolais de découvrir d'autres horizons à travers un voyage éducatif, culturel et spirituel."
    },
    {
      id: 'ghana',
      edition: '2ème Édition (Portfolio)',
      year: '2024 / 2025',
      country: 'Ghana',
      flagSvg: FLAGS.ghana,
      title: 'L’Essor — « Catho Tour for Peace »',
      subtitle: 'Naissance officielle de Catho Tour International',
      active: true,
      highlights: [
        'Rencontre de participants issus de plus de 7 pays',
        'Devient officiellement « Catho Tour International »',
        'Participation aux Journées Ouest-Africaines de la Jeunesse (JRJ)',
        'Grand Séminaire St-Paul, Aburi, Black Star Square, Kakum & Cape Coast'
      ],
      description:
        "Placée sous le thème « Catho Tour for Peace », cette édition au Ghana a rassemblé des jeunes venus de plus de sept pays pour promouvoir la paix, la fraternité et le vivre-ensemble au-delà des frontières."
    },
    {
      id: 'civ',
      edition: '3ème Édition',
      year: '2025 / 2026',
      country: 'Côte d’Ivoire',
      flagSvg: FLAGS.civ,
      title: 'Un Nouveau Chapitre',
      subtitle: 'Consolidation sous-régionale et internationale',
      highlights: [
        'Ouverture d’un nouveau chapitre dans l’histoire du mouvement',
        'Renforcement des échanges culturels et du partage spirituel',
        'Élargissement continu du réseau d’ambassadeurs de paix'
      ],
      description:
        "Dans cette dynamique d'expansion, la troisième édition s'est tenue en Côte d'Ivoire, ouvrant un nouveau chapitre dans l'histoire de Catho Tour International et consolidant les liens fraternels."
    },
    {
      id: 'senegal',
      edition: '4ème Édition — Prochain Cap',
      year: '2027',
      country: 'Sénégal',
      flagSvg: FLAGS.senegal,
      title: 'Cap sur le Sénégal 2027',
      subtitle: '15 Pays présents sur 3 Continents (Afrique, Europe, Amérique du Nord)',
      future: true,
      highlights: [
        'Présence active dans 15 pays sur 3 continents',
        'À la découverte du pays de la Teranga, de son histoire et de ses traditions',
        'Voyager autrement : découvrir, échanger, prier et grandir ensemble',
        'Mobilisation des délégations et partenaires pour 2027'
      ],
      description:
        "Aujourd'hui présent dans 15 pays sur 3 continents, Catho Tour International prépare sa quatrième édition au Sénégal en 2027 pour écrire ensemble une nouvelle page mémorable."
    }
  ];

  // --------------------------------------------------------------------------
  // 2. LES 6 ÉTAPES EMBLÉMATIQUES DU PARCOURS AU GHANA (AFFICHAGE ÉDITORIAL COMPLET)
  // --------------------------------------------------------------------------
  const GHANA_STOPS = [
    {
      id: 'seminaire',
      stepNumber: '01',
      name: 'Grand Séminaire Saint-Paul d’Accra',
      category: 'Spiritualité, Vocation & Culture',
      region: 'Accra (Sowutuom)',
      iconSvg: ICONS.church,
      imageKey: 'delegationFlags',
      imageFallback: 'delegation-flags-aburi.jpg',
      tagline: 'À la découverte de la formation sacerdotale et de la richesse culturelle ghanéenne',
      keyFigure: 'Guidés par le Révérend Père Joseph OKINE-QUARTEY, Recteur du Séminaire',
      leadText:
        "La visite du Grand Séminaire Saint-Paul d’Accra a constitué l’un des moments marquants du séjour de la délégation au Ghana. Accueillis chaleureusement par le Révérend Père Joseph OKINE-QUARTEY, recteur de l'établissement, nous avons découvert un lieu consacré à la formation des futurs prêtres tout en approfondissant notre compréhension de la vocation sacerdotale et de la mission de l’Église.",
      fullNarrative: [
        "À travers les explications du Recteur et les échanges qui ont accompagné cette visite, nous avons pu mieux comprendre les exigences de la formation sacerdotale, fondée sur quatre dimensions essentielles : la formation humaine, spirituelle, intellectuelle et pastorale. Ces quatre piliers préparent les futurs prêtres à leur mission au service de Dieu, de l’Église et des communautés chrétiennes.",
        "Au-delà de cette découverte spirituelle et éducative, notre passage au séminaire a également été marqué par un moment de convivialité et de partage autour de plats locaux ghanéens, qui nous ont permis de savourer quelques-unes des richesses culinaires du pays. Ce moment de fraternité a renforcé l’esprit de rencontre et d’ouverture culturelle qui caractérise Catho Tour International."
      ],
      pillars: [
        { title: '1. Formation Humaine', desc: 'Maturité, écoute et équilibre au service du prochain.' },
        { title: '2. Formation Spirituelle', desc: 'Prière, discernement et intimité avec Dieu.' },
        { title: '3. Formation Intellectuelle', desc: 'Philosophie, théologie et compréhension du monde.' },
        { title: '4. Formation Pastorale', desc: 'Engagement concret auprès des communautés chrétiennes.' }
      ]
    },
    {
      id: 'aburi',
      stepNumber: '02',
      name: 'Aburi Botanical Gardens (Fondé en 1890)',
      category: 'Patrimoine Naturel & Fraternité',
      region: 'Région de l’Est (Hauteurs d’Aburi)',
      iconSvg: ICONS.leaf,
      imageKey: 'iLoveCatho',
      imageFallback: 'i-love-catho-tours.jpg',
      tagline: 'Un sanctuaire botanique centenaire au cœur des montagnes verdoyantes de l’Est',
      keyFigure: 'Fondé en 1890 • Biodiversité issue de plusieurs continents',
      leadText:
        "Notre découverte dans la région de l’Est du Ghana a débuté avec la visite des Aburi Botanical Gardens, un remarquable espace naturel fondé en 1890 sur les hauteurs d’Aburi.",
      fullNarrative: [
        "Ce jardin botanique offre un cadre paisible et verdoyant, abritant une grande diversité d’espèces végétales provenant de différents continents. La promenade au cœur de cet espace nous a permis d’apprécier la richesse de la biodiversité tout en découvrant l’histoire particulière de ce lieu.",
        "Cette étape a été l’occasion de nous ressourcer, de partager des moments de convivialité et de créer ensemble de précieux souvenirs immortalisés par toute la délégation."
      ],
      highlights: [
        'Allée royale de palmiers centenaires et espèces botaniques intercontinentales',
        'Cadre privilégié de ressourcement, de cohésion fraternelle et de partage',
        'Photos officielles de l’union Ghana–Togo et des lettres « I LOVE CATHO TOURS »'
      ]
    },
    {
      id: 'blackstar',
      stepNumber: '03',
      name: 'Place de l’Indépendance — Black Star Square',
      category: 'Histoire, Liberté & Souveraineté',
      region: 'Accra (Front de mer)',
      iconSvg: ICONS.star,
      imageKey: 'ghanaLandmarks',
      imageFallback: 'ghana-landmarks.jpg',
      tagline: 'Porte de l’Étoile Noire, Arche de l’Indépendance et Flamme Éternelle de 1957',
      keyFigure: 'Indépendance du Ghana (1957) • Mémoire Collective Africaine',
      leadText:
        "Impossible de découvrir Accra sans s’arrêter à la Place de l’Indépendance, également connue sous le nom de Black Star Square, lieu hautement symbolique de l’histoire du Ghana.",
      fullNarrative: [
        "Ce site monumental est marqué par l’Arche de l’Indépendance, la Porte de l’Étoile Noire et la Flamme éternelle de la liberté. Notre passage nous a permis de mieux comprendre l’histoire du Ghana et la portée symbolique de son indépendance obtenue en 1957.",
        "Cette étape a également été un moment de réflexion profonde sur les notions de liberté, de souveraineté, d’identité et de mémoire collective."
      ],
      highlights: [
        'L’Arche de l’Indépendance et la majestueuse Porte de l’Étoile Noire (Black Star Gate)',
        'La Flamme Éternelle de la Liberté, symbole de l’émancipation africaine de 1957',
        'Méditation citoyenne sur la souveraineté, l’identité et la responsabilité des jeunes'
      ]
    },
    {
      id: 'kakum',
      stepNumber: '04',
      name: 'Kakum National Park & Canopy Walkway',
      category: 'Forêt Tropicale & Écologie Intégrale',
      region: 'Région Centrale',
      iconSvg: ICONS.trees,
      imageKey: 'ghanaLandmarks',
      imageFallback: 'ghana-landmarks.jpg',
      tagline: 'Une immersion au cœur de la canopée tropicale et de la sauvegarde de la Création',
      keyFigure: 'Canopy Walkway • Passerelle suspendue au sommet de la forêt dense',
      leadText:
        "Situé dans la région centrale du Ghana, le parc national de Kakum est l’un des espaces naturels les plus remarquables du pays, réputé pour sa forêt tropicale dense et sa biodiversité exceptionnelle.",
      fullNarrative: [
        "L’attrait majeur du parc est sa célèbre passerelle suspendue, la Canopy Walkway. Aménagée au-dessus du sol forestier, elle permet d’observer la forêt depuis la canopée. Entre sensations fortes et contemplation, cette traversée nous a offert une expérience captivante.",
        "Au-delà de son aspect touristique, la découverte de Kakum nous a sensibilisés à l’importance de la préservation de la nature et de la biodiversité, nous invitant à porter un regard attentif sur la beauté de la création et sur notre responsabilité collective dans sa préservation."
      ],
      highlights: [
        'Traversée aérienne sur la Canopy Walkway au-dessus de la forêt primaire',
        'Sensations fortes, dépassement de soi et contemplation de l’écosystème tropical',
        'Conscience écologique : protéger et valoriser les richesses naturelles du continent'
      ]
    },
    {
      id: 'capecoast',
      stepNumber: '05',
      name: 'Cape Coast & Son Château Historique',
      category: 'Devoir de Mémoire, Dignité & Paix',
      region: 'Région Centrale (Côte Atlantique)',
      iconSvg: ICONS.landmark,
      imageKey: 'capeCoast',
      imageFallback: 'cape-coast-memorial.jpg',
      tagline: 'Sur les traces de l’histoire et de la mémoire africaine pour bâtir la réconciliation',
      keyFigure: 'Château de Cape Coast • Haut lieu de la mémoire transatlantique',
      leadText:
        "Notre passage dans la Région Centrale nous a conduits à Cape Coast, ville historique majeure connue pour son château, l’un des principaux lieux de mémoire liés à la traite transatlantique des esclaves.",
      fullNarrative: [
        "Ce patrimoine rappelle les souffrances endurées par des millions d’Africains arrachés à leur terre, séparés de leurs familles et déportés dans des conditions inhumaines. La découverte de ce lieu invite au recueillement, à la réflexion et à la défense des valeurs fondamentales de dignité humaine, de liberté, de justice et de paix.",
        "Pour la délégation de Catho Tour International, cette étape a représenté bien plus qu’une simple visite touristique : une occasion d’apprentissage et de prise de conscience de l’importance de construire un avenir fondé sur la fraternité, le respect mutuel et la réconciliation."
      ],
      highlights: [
        'Recueillement et transmission de la mémoire collective aux jeunes générations',
        'Plaidoyer vivant pour la dignité humaine, la justice, la liberté et la paix',
        'Construction d’un avenir fondé sur la fraternité et la réconciliation entre les peuples'
      ]
    },
    {
      id: 'accramall',
      stepNumber: '06',
      name: 'Accra Mall & Dynamisme Urbain',
      category: 'Modernité & Échanges',
      region: 'Accra Métropole',
      iconSvg: ICONS.shoppingBag,
      imageKey: 'delegationFlags',
      imageFallback: 'delegation-flags-aburi.jpg',
      tagline: 'Immersion dans le dynamisme économique et le quotidien urbain de la capitale',
      keyFigure: 'Principal pôle commercial et architectural moderne d’Accra',
      leadText:
        "Notre parcours nous a également conduits à Accra Mall, l’un des principaux centres commerciaux modernes de la capitale ghanéenne.",
      fullNarrative: [
        "Cette étape nous a permis de découvrir une autre facette d’Accra, à travers son dynamisme économique, son architecture moderne et la diversité des commerces et espaces de restauration qui y sont proposés.",
        "Au-delà de l’aspect commercial, cette visite nous a permis de nous immerger davantage dans le quotidien et l’environnement urbain de la capitale tout en partageant des moments fraternels."
      ],
      highlights: [
        'Découverte du visage moderne, économique et cosmopolite d’Accra',
        'Immersion dans le quotidien urbain de la capitale ghanéenne',
        'Temps de convivialité et d’échanges fraternels entre jeunes de 7+ pays'
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // 3. LES ACTIVITÉS FAITES (SECTION 4)
  // --------------------------------------------------------------------------
  const ACTIVITIES_MATRIX = [
    {
      title: 'Célébrations & Foi Vivante',
      iconSvg: ICONS.church,
      badge: 'Spiritualité',
      items: [
        'Célébrations eucharistiques et prières communautaires inter-pays',
        'Rencontre vocationnelle au Grand Séminaire Saint-Paul d’Accra',
        'Enseignements des Évêques lors des Journées Ouest-Africaines (JRJ)'
      ]
    },
    {
      title: 'Fraternité & Gastronomie',
      iconSvg: ICONS.utensils,
      badge: 'Partage Culturel',
      items: [
        'Dégustation fraternelle de plats locaux ghanéens au Séminaire',
        'Brassage culturel entre jeunes catholiques et d’autres confessions',
        'Découverte de l’hospitalité ghanéenne et de la vie urbaine d’Accra'
      ]
    },
    {
      title: 'Nature & Sauvegarde de la Création',
      iconSvg: ICONS.trees,
      badge: 'Écologie Intégrale',
      items: [
        'Traversée suspendue de la Canopy Walkway au Parc National de Kakum',
        'Promenade botanique sur les hauteurs historiques d’Aburi (1890)',
        'Sensibilisation active à la préservation de la biodiversité africaine'
      ]
    },
    {
      title: 'Mémoire, Citoyenneté & Paix',
      iconSvg: ICONS.shield,
      badge: 'Leadership',
      items: [
        'Recueillement et devoir de mémoire au Château de Cape Coast',
        'Réflexion historique sur la souveraineté à Black Star Square (1957)',
        'Engagement pour la paix quotidienne et l’évangélisation numérique'
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // 4. LES PARTENAIRES (SECTION 7)
  // --------------------------------------------------------------------------
  const PARTNER_COLLEGES = [
    {
      category: 'Autorités Ecclésiastiques & Séminaires',
      iconSvg: ICONS.church,
      role: 'Accompagnement spirituel, bénédiction pastorale et accueil des délégations',
      entities: [
        'Paroisse Sainte-Thérèse de l’Enfant Jésus de Kégué (Berceau de l’initiative au Togo)',
        'Grand Séminaire Saint-Paul d’Accra (Révérend Père Joseph OKINE-QUARTEY)',
        'Comités diocésains des Journées Ouest-Africaines de la Jeunesse (JRJ)',
        'Aumôneries et paroisses partenaires à travers nos 15 pays'
      ]
    },
    {
      category: 'Institutions Culturelles & Patrimoniales',
      iconSvg: ICONS.landmark,
      role: 'Accès éducatif, guidage historique et sensibilisation environnementale',
      entities: [
        'Sites patrimoniaux et lieux de mémoire (Château de Cape Coast, Black Star Square)',
        'Parcs nationaux et jardins historiques (Kakum National Park, Aburi Botanical Gardens)',
        'Acteurs éducatifs et culturels engagés pour l’édition Sénégal 2027'
      ]
    },
    {
      category: 'Réseau International de Jeunesse (3 Continents)',
      iconSvg: ICONS.globe,
      role: 'Mobilisation des participants, coordination locale et rayonnement mondial',
      entities: [
        'Coordinations nationales en Afrique (Togo, Bénin, Ghana, Côte d’Ivoire, Sénégal…)',
        'Antennes et ambassadeurs de la diaspora en Europe (notamment en France)',
        'Relais et membres actifs en Amérique du Nord'
      ]
    },
    {
      category: 'Partenaires Techniques, Logistiques & Financiers',
      iconSvg: ICONS.heartHandshake,
      role: 'Soutien à la mobilité des jeunes, logistique, hébergement et mécénat',
      entities: [
        'Opérateurs de transport terrestre et aérien sous-régionaux et internationaux',
        'Structures d’accueil, d’hébergement et de restauration partenaires',
        'Mécènes, institutions partenaires et parrains de l’édition Sénégal 2027'
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // 5. GALERIE PHOTOS OFFICIELLE
  // --------------------------------------------------------------------------
  const GALLERY_ITEMS = [
    {
      id: 'photo-1',
      srcKey: 'delegationFlags',
      fallback: 'delegation-flags-aburi.jpg',
      badge: 'Photo Officielle Délégation',
      title: 'Fraternité Ghana – Togo sur l’Allée Royale',
      location: 'Aburi Botanical Gardens, Ghana',
      caption:
        'La délégation de Catho Tour International (« Catho Tours for Peace ») unie derrière les drapeaux du Ghana et du Togo au cœur de la majestueuse allée de palmiers royaux.'
    },
    {
      id: 'photo-2',
      srcKey: 'iLoveCatho',
      fallback: 'i-love-catho-tours.jpg',
      badge: 'Photo Officielle Délégation',
      title: '« I LOVE CATHO TOURS » — Joie & Unité',
      location: 'Jardin Botanique d’Aburi (Fondé en 1890)',
      caption:
        'Un moment emblématique de cohésion et de joie fraternelle illustrant l’attachement de la jeunesse à la vision de Catho Tour International.'
    },
    {
      id: 'photo-3',
      srcKey: 'ghanaLandmarks',
      fallback: 'ghana-landmarks.jpg',
      badge: 'Étapes Emblématiques',
      title: 'De Black Star Square à la Canopée de Kakum',
      location: 'Accra & Région Centrale, Ghana',
      caption:
        'Entre la Porte de l’Étoile Noire (indépendance de 1957) et la célèbre passerelle suspendue de Kakum au-dessus de la forêt tropicale.'
    },
    {
      id: 'photo-4',
      srcKey: 'capeCoast',
      fallback: 'cape-coast-memorial.jpg',
      badge: 'Devoir de Mémoire',
      title: 'Château de Cape Coast — Mémoire & Dignité',
      location: 'Cape Coast, Côte Atlantique du Ghana',
      caption:
        'Haut lieu de mémoire de la traite transatlantique invitant au recueillement, à la justice et à l’engagement pour une paix durable.'
    },
    {
      id: 'photo-5',
      srcKey: 'senegal2027',
      fallback: 'senegal-2027.jpg',
      badge: 'Prochaine Destination • 2027',
      title: 'Cap sur le Sénégal 2027 — Terre de la Teranga',
      location: 'Dakar & Île de Gorée, Sénégal',
      caption:
        'En 2027, Catho Tour International posera ses valises au Sénégal pour sa 4ème édition avec un réseau désormais présent dans 15 pays sur 3 continents.'
    }
  ];

  // --------------------------------------------------------------------------
  // RENDER FUNCTIONS (WHITE LUMINOUS EDITORIAL THEME • MOBILE-FIRST)
  // --------------------------------------------------------------------------
  function renderTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    container.innerHTML = EDITIONS.map((ed, idx) => `
      <div class="reveal reveal-up delay-${(idx % 4) * 100} relative glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 flex flex-col justify-between bg-white ${
        ed.active
          ? 'ring-2 ring-amber-500/80 gold-border-glow'
          : ed.future
          ? 'ring-1 ring-emerald-500/50'
          : 'border border-slate-200/90'
      }">
        <div>
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
              ed.active
                ? 'bg-amber-50 text-amber-800 border border-amber-300'
                : ed.future
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                : 'bg-slate-100 text-slate-700 border border-slate-200'
            }">
              ${ed.flagSvg}
              <span>${ed.edition} • ${ed.year}</span>
            </span>
            <span class="text-xs font-mono text-amber-700 font-extrabold">0${idx + 1}</span>
          </div>
          <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 mb-1">${ed.country} — ${ed.title}</h3>
          <p class="text-xs text-amber-800 font-semibold mb-3">${ed.subtitle}</p>
          <p class="text-sm text-slate-600 leading-relaxed mb-4">${ed.description}</p>
        </div>
        <ul class="space-y-2 border-t border-slate-200/80 pt-4">
          ${ed.highlights.map(h => `
            <li class="text-xs text-slate-700 flex items-start gap-2">
              <span class="text-amber-600 mt-1 shrink-0">${ICONS.diamond}</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  function renderGhanaStops() {
    const container = document.getElementById('ghana-stops-grid');
    if (!container) return;

    container.innerHTML = GHANA_STOPS.map((site, idx) => {
      const imgSrc = getImg(site.imageKey, site.imageFallback);
      const isEven = idx % 2 === 1;

      const extraBlock = site.pillars
        ? `
          <div class="mt-6 bg-[#FAF8F5] border border-amber-500/25 rounded-2xl p-4 sm:p-5">
            <div class="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-3 flex items-center gap-2">
              <span class="text-amber-600">${ICONS.award}</span>
              <span>Les 4 Dimensions Essentielles de la Formation Sacerdotale</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${site.pillars.map(p => `
                <div class="bg-white border border-amber-500/20 rounded-xl p-3.5 shadow-sm">
                  <div class="font-bold text-slate-900 text-xs sm:text-sm">${p.title}</div>
                  <p class="text-xs text-slate-600 mt-1">${p.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `
        : `
          <div class="mt-6 bg-[#FAF8F5] border border-amber-500/25 rounded-2xl p-4 sm:p-5">
            <div class="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-2.5 flex items-center gap-2">
              <span class="text-amber-600">${ICONS.award}</span>
              <span>Points Forts & Enseignements de l’Étape</span>
            </div>
            <ul class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(site.highlights || []).map(h => `
                <li class="bg-white border border-slate-200/80 rounded-xl p-3 text-xs sm:text-sm text-slate-700 flex items-start gap-2 shadow-sm">
                  <span class="text-amber-600 mt-1 shrink-0">${ICONS.diamond}</span>
                  <span>${h}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        `;

      return `
        <article id="site-${site.id}" class="scroll-mt-32 reveal reveal-up glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-amber-500/30 bg-white">
          <div class="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <!-- Image Column -->
            <div class="lg:col-span-5 relative min-h-[240px] sm:min-h-[340px] bg-slate-900 overflow-hidden group ${
              isEven ? 'lg:order-2' : ''
            }">
              <img
                src="${imgSrc}"
                alt="${site.name}"
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                onclick="window.openLightbox('${imgSrc}', '${site.name.replace(/'/g, "\\'")}', '${site.tagline.replace(/'/g, "\\'")}')"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent pointer-events-none"></div>
              <div class="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-white shadow-md">
                  ÉTAPE ${site.stepNumber}
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 border border-amber-500/30 shadow-sm">
                  <span class="text-amber-600">${ICONS.mapPin}</span>
                  <span>${site.region}</span>
                </span>
              </div>
              <button
                type="button"
                onclick="window.openLightbox('${imgSrc}', '${site.name.replace(/'/g, "\\'")}', '${site.tagline.replace(/'/g, "\\'")}')"
                class="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 hover:bg-amber-500 text-slate-900 hover:text-white text-xs font-bold border border-amber-500/30 shadow-md transition-colors"
              >
                ${ICONS.zoomIn} <span>Plein écran</span>
              </button>
            </div>

            <!-- Editorial Content Column (Anti-Wall-of-Text Magazine Layout) -->
            <div class="lg:col-span-7 p-5 sm:p-8 lg:p-10 flex flex-col justify-between bg-white ${
              isEven ? 'lg:order-1' : ''
            }">
              <div>
                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    <span class="text-emerald-700">${site.iconSvg}</span>
                    <span>${site.category}</span>
                  </span>
                  <span class="text-xs text-slate-600 font-semibold">${site.keyFigure}</span>
                </div>

                <h3 class="text-xl sm:text-3xl font-black text-slate-900 leading-tight mb-1.5">
                  ${site.name}
                </h3>
                <p class="text-sm text-amber-800 font-bold mb-4">
                  ${site.tagline}
                </p>

                <!-- Accented Editorial Chapô -->
                <p class="text-sm sm:text-base border-l-4 border-amber-500 pl-4 font-medium text-slate-800 bg-amber-50/40 py-2.5 pr-3 rounded-r-xl leading-relaxed mb-5">
                  ${site.leadText}
                </p>

                <!-- 2-Column Magazine Narrative Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 text-sm text-slate-600 leading-relaxed">
                  ${site.fullNarrative.map(p => `<p>${p}</p>`).join('')}
                </div>

                ${extraBlock}
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    observeReveals();
  }

  function renderActivities() {
    const container = document.getElementById('activities-grid');
    if (!container) return;
    container.innerHTML = ACTIVITIES_MATRIX.map((act, idx) => `
      <div class="reveal reveal-up delay-${(idx % 4) * 100} glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 bg-white border border-amber-500/25">
        <div class="flex items-center justify-between mb-4">
          <span class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
            ${act.iconSvg}
          </span>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
            ${act.badge}
          </span>
        </div>
        <h3 class="text-lg font-extrabold text-slate-900 mb-3">${act.title}</h3>
        <ul class="space-y-2.5">
          ${act.items.map(it => `
            <li class="text-sm text-slate-600 flex items-start gap-2.5">
              <span class="text-emerald-600 mt-0.5 shrink-0">${ICONS.check}</span>
              <span>${it}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  function renderPartners() {
    const container = document.getElementById('partners-grid');
    if (!container) return;
    container.innerHTML = PARTNER_COLLEGES.map((col, idx) => `
      <div class="reveal reveal-up delay-${(idx % 2) * 100} glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 bg-white border border-amber-500/30 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3.5 mb-3">
            <span class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
              ${col.iconSvg}
            </span>
            <div>
              <h3 class="font-extrabold text-slate-900 text-base sm:text-lg">${col.category}</h3>
              <p class="text-xs text-amber-800 font-semibold">${col.role}</p>
            </div>
          </div>
          <ul class="space-y-2.5 mt-4 border-t border-slate-200/80 pt-4">
            ${col.entities.map(ent => `
              <li class="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                <span class="text-amber-600 mt-1 shrink-0">${ICONS.diamond}</span>
                <span>${ent}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  function renderGallery() {
    const container = document.getElementById('gallery-grid');
    if (!container) return;
    container.innerHTML = GALLERY_ITEMS.map((item, idx) => {
      const src = getImg(item.srcKey, item.fallback);
      return `
        <div class="reveal reveal-scale delay-${(idx % 3) * 100} glass-panel glass-panel-hover rounded-2xl overflow-hidden group flex flex-col justify-between bg-white border border-slate-200/90">
          <div>
            <div class="relative h-60 sm:h-64 overflow-hidden bg-slate-900">
              <img
                src="${src}"
                alt="${item.title}"
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                onclick="window.openLightbox('${src}', '${item.title.replace(/'/g, "\\'")}', '${item.caption.replace(/'/g, "\\'")}')"
              />
              <div class="absolute top-3 left-3">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 border border-amber-500/30 shadow-sm">
                  ${item.badge}
                </span>
              </div>
              <button
                type="button"
                onclick="window.openLightbox('${src}', '${item.title.replace(/'/g, "\\'")}', '${item.caption.replace(/'/g, "\\'")}')"
                class="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-slate-900 text-xs font-bold shadow-md group-hover:bg-amber-500 group-hover:text-white transition-colors"
              >
                ${ICONS.zoomIn} <span>Agrandir</span>
              </button>
            </div>
            <div class="p-5">
              <div class="inline-flex items-center gap-1.5 text-xs text-amber-800 font-bold mb-1">
                <span class="text-amber-600">${ICONS.mapPin}</span>
                <span>${item.location}</span>
              </div>
              <h4 class="font-extrabold text-slate-900 text-base sm:text-lg mb-2">${item.title}</h4>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${item.caption}</p>
            </div>
          </div>
        </div>
      `;
    }).join('');
    observeReveals();
  }

  // --------------------------------------------------------------------------
  // SCROLL-REVEAL, ANIMATED COUNTERS & SCROLL-SPY ENGINE
  // --------------------------------------------------------------------------
  let revealObserver = null;

  function observeReveals() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
      );
    }
    document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => {
      revealObserver.observe(el);
    });
  }

  function initAnimatedCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1400;
          const startTime = performance.now();

          function updateCount(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target) + suffix;
            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              el.textContent = target + suffix;
            }
          }
          requestAnimationFrame(updateCount);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(c => counterObserver.observe(c));
  }

  function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress-bar');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    const sectionIds = [
      'presentation',
      'origines',
      'parcours-ghana',
      'activites',
      'jrj',
      'galerie',
      'senegal-2027',
      'partenaires',
      'conclusion'
    ];

    window.addEventListener(
      'scroll',
      function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
        if (progressBar) {
          progressBar.style.width = pct + '%';
        }
        if (backToTopBtn) {
          if (scrollTop > 500) {
            backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
            backToTopBtn.classList.add('opacity-100', 'translate-y-0');
          } else {
            backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
          }
        }

        // Active section scroll-spy (Desktop & Mobile Nav)
        let currentSection = '';
        const offsetCheck = scrollTop + 180;
        for (let i = 0; i < sectionIds.length; i++) {
          const sec = document.getElementById(sectionIds[i]);
          if (sec && sec.offsetTop <= offsetCheck) {
            currentSection = sectionIds[i];
          }
        }
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === '#' + currentSection) {
            link.classList.add('nav-link-active');
          } else {
            link.classList.remove('nav-link-active');
          }
        });
      },
      { passive: true }
    );
  }

  // --------------------------------------------------------------------------
  // INTERACTIVE HANDLERS
  // --------------------------------------------------------------------------
  window.jumpToGhanaStop = function (stopId, btnEl) {
    document.querySelectorAll('[data-ghana-jump]').forEach(btn => {
      btn.className =
        'shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#FAF8F5] hover:bg-amber-50 text-slate-700 hover:text-amber-900 border border-slate-200/80 transition-colors';
    });
    if (btnEl) {
      btnEl.className =
        'shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-600 text-white border border-amber-600 shadow-sm transition-colors';
    }
    const targetEl = document.getElementById('site-' + stopId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  window.selectSenegalRole = function (roleValue, btnEl) {
    const roleInput = document.getElementById('reg-role');
    const submitBtn = document.getElementById('reg-submit-btn');
    if (roleInput) {
      roleInput.value = roleValue;
    }
    document.querySelectorAll('[data-senegal-role-tab]').forEach(tab => {
      tab.className =
        'flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center bg-[#FAF8F5] text-slate-700 border-slate-200 hover:border-amber-400';
    });
    if (btnEl) {
      btnEl.className =
        'flex-1 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-500/20';
    }
    if (submitBtn) {
      if (roleValue.indexOf('Paroisse') !== -1) {
        submitBtn.textContent = 'Inscrire ma Paroisse / Délégation pour 2027';
      } else if (roleValue.indexOf('Partenaire') !== -1) {
        submitBtn.textContent = 'Recevoir le Dossier Partenaire & Mécénat 2027';
      } else {
        submitBtn.textContent = 'Confirmer ma pré-inscription Participant(e) 2027';
      }
    }
  };

  window.openLightbox = function (src, title, caption) {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const ttl = document.getElementById('lightbox-title');
    const cap = document.getElementById('lightbox-caption');
    if (!modal || !img) return;
    img.src = src;
    ttl.textContent = title || '';
    cap.textContent = caption || '';
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  window.closeLightbox = function () {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  };

  window.handleSenegalForm = function (event) {
    event.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const country = document.getElementById('reg-country').value.trim();
    const role = document.getElementById('reg-role').value;
    const msg = document.getElementById('reg-message').value.trim();
    const feedback = document.getElementById('reg-feedback');

    const summaryText =
      'Bonjour Coordination Catho Tour International, je souhaite rejoindre l’édition SÉNÉGAL 2027.\n' +
      '• Nom / Structure : ' + name + '\n' +
      '• Pays / Ville : ' + country + '\n' +
      '• Profil : ' + role +
      (msg ? '\n• Message : ' + msg : '');

    const whatsappUrl = 'https://wa.me/?text=' + encodeURIComponent(summaryText);
    const mailtoUrl =
      'mailto:contact@cathotour-international.org?subject=' +
      encodeURIComponent('Pré-inscription Sénégal 2027 — ' + role + ' (' + name + ')') +
      '&body=' +
      encodeURIComponent(summaryText);

    feedback.innerHTML = `
      <div class="space-y-3">
        <p class="text-emerald-900 font-bold text-xs leading-relaxed">
          Merci ${name} (${country}) ! Votre pré-inscription en tant que « ${role} » pour l'édition SÉNÉGAL 2027 est prête. Vous pouvez la transmettre directement à la coordination en un clic :
        </p>
        <div class="flex flex-col sm:flex-row gap-2">
          <a
            href="${whatsappUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
          >
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>Envoyer via WhatsApp</span>
          </a>
          <a
            href="${mailtoUrl}"
            class="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all"
          >
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span>Envoyer par E-mail</span>
          </a>
        </div>
      </div>
    `;
    feedback.classList.remove('hidden');
  };

  document.addEventListener('keydown', function (e) {
    const lightboxModal = document.getElementById('lightbox-modal');
    if (lightboxModal && !lightboxModal.classList.contains('hidden') && e.key === 'Escape') {
      window.closeLightbox();
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const heroImg1 = document.getElementById('hero-img-main');
    const heroImg2 = document.getElementById('hero-img-secondary');
    const senegalImg = document.getElementById('senegal-2027-img');

    if (heroImg1) heroImg1.src = getImg('delegationFlags', 'delegation-flags-aburi.jpg');
    if (heroImg2) heroImg2.src = getImg('iLoveCatho', 'i-love-catho-tours.jpg');
    if (senegalImg) senegalImg.src = getImg('senegal2027', 'senegal-2027.jpg');

    renderTimeline();
    renderGhanaStops();
    renderActivities();
    renderPartners();
    renderGallery();

    observeReveals();
    initAnimatedCounters();
    initScrollProgress();
  });
})();
