import { Excursion, Vehicle, Testimonial } from '../types';

export const EXCURSIONS: Excursion[] = [
  {
    id: 'grand-tour-oasis-dunes',
    title: 'Grand Tour des Oasis & Dunes de Tozeur',
    tag: 'Expédition Phare',
    category: 'aventures',
    durationTag: '2 Jours / 1 Nuit',
    durationCategory: '2-3-days',
    price: '450 TND',
    priceNum: 450,
    currency: 'TND',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUe0MOPz6S1zLFWvyBv_hvFAMxA4lLtueK32XBnTNEkFbYJfY5wEL8EP-6sCIZ4t5hcfJmHoRQkJ5EbYvi6KbMN7Z9G9J1shLwVV_AFVm85LWZfP3SwKAsRVqKqDffY4frZNU06RfVSw0hymoyADIZfgaQ835_RskT4VTD6D41egPtOPwsEYDHRNSY3G9MAhXSWQQN_gCDLSzBkVFAwr6LyzqYXi12M0-Qc-QxabYQ10XucU22UB-W',
    description: 'Une immersion exclusive de 48 heures au cœur du Sahara tunisien, entre palmeraies millénaires, plateaux rocheux et bivouac de luxe sous les étoiles.',
    overview: 'Partez à la découverte des paysages les plus spectaculaires du Jerid. De l\'immensité hypnotique du Chott el-Djerid aux décors lunaires de Mos Espa (Star Wars) et des canyons secrets de Chebika et Tamerza, cette excursion de deux jours combine aventure authentique et prestations haut de gamme. Vous passerez une nuit inoubliable dans un campement saharien privatif au milieu des grandes dunes.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDeqWc8j035nISFgEB_0HnCjlyKiys2-0YMrRExDNNz_OfsYX_1yY_JcZNII6kDTlJik9v--e8n0CQTKxLWxs2CNmapLulTeV6j0f9meyZogry-9M8tq_uqogJajle4ywNgtsZUNkhQNgbLJgQSn7DXBGJDjgUTrV70_u13e1B1B4SPKuLbj70CCaVi-SyFPQTx-p1jwEEekifcLXzL3jtCH4Is2YZU-w0ozIC38NYSK0Yve0Mbr2F_',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD2o2dCx-1X1pDeUaTj3GpHTOLaXzz3O3HbIqmCcg8ljygQSrJAqZeX7j7XCEcbdna2E86vCVzA46McOhrVvBcl3AujxZKicjHEywfHvICoDntjdixmkBXyJuTjrU-Qq5CtXMTqvEj35oAvJkP8AD8x_bgdCBUwE4cIGYNzov1vgVWtLIfEnf9TaPr53XNNNT0pW_I3SqhYsgrnPYAvWVaT3KbOHCjpqu-ROl9V05T6P8O4K7r7X-GT',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCFEvVJqnI0HINQGjulq8Ed4rYehYYpYsaMHcrTiY20eG_Z35CzqGAUkcf5QrtDs1DWltx0LA4EiXS9wkuE8L2CEP1brCYrfqLNMSpHKNgEKANL1qfPeKKZYEcfIPRoLGRLAvdITmo1D4wgB6DkydlV3sP2BpdWbsZHej_J4CGYntQn1CpPCIp51mJxUzr4rcSzb29ziAkxYFMUpHWYT8-C0gkC7ezItiQVIKSLl8ojB8jyKn3jITb0',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCBvDNrNJVmuqzbkWZaGOMVhsJsGNbzvPOBChQU39xoTTj57H5O55mobYCb5ZJfcwi9xQy45KGH3UpyS0ZbMwO8W2XGHU-gXHvfvJ35duC5aJnjvvr-gzFRleb4BvhmC7SzDR2m8oA9akS88OukaxBggObJtL3Wmesp2P-1Kpi10GEfDtRGZ-THCB6Ewnx3y5zvMIuQjA2aXSzb3CICUswR4X_SztJhoxXS0YckRHKmMkCa8PVVQ2a'
    ],
    highlights: [
      {
        icon: 'landscape',
        title: 'Chott el-Djerid',
        description: 'Traversée du plus grand lac salé du Sahara et observation des mirages légendaires.'
      },
      {
        icon: 'nights_stay',
        title: 'Bivouac de Luxe',
        description: 'Nuit sous tente saharienne tout confort avec dîner traditionnel au feu de bois et observation des étoiles.'
      },
      {
        icon: 'terrain',
        title: 'Oasis de Montagne',
        description: 'Visite des cascades et canyons suspendus de Chebika, Tamerza et Mides.'
      },
      {
        icon: 'movie',
        title: 'Canyon de Star Wars',
        description: 'Exploration des décors mythiques de tournage au cœur des dunes de sable fin.'
      }
    ],
    itinerary: [
      {
        day: 'Jour 1',
        title: 'De Tozeur aux Oasis de Montagne et Coucher de Soleil sur les Dunes',
        description: 'Départ à 08:00 en véhicule 4x4 climatisé depuis votre hôtel ou le point de rendez-vous. Route vers les oasis de montagne spectaculaires : Chebika et sa source d\'eau vive, Tamerza et ses impressionnantes cascades, puis les gorges de Mides. Déjeuner dans un restaurant local. L\'après-midi, traversée des pistes sahariennes pour atteindre le campement au pied des grandes dunes de Ksar Ghilane ou Zmela. Ascensions d\'une dune pour admirer le coucher de soleil flamboyant. Dîner traditionnel autour du feu de camp et nuit sous tente berbère de luxe.'
      },
      {
        day: 'Jour 2',
        title: 'Chott el-Djerid, Mos Espa et Retour à Tozeur',
        description: 'Réveil matinal conseillé pour assister au lever du soleil sur le désert. Petit-déjeuner buffet au campement. Départ en 4x4 à travers les étendues mystiques du Chott el-Djerid, arrêt photos aux sculptures de sel. Continuation vers les décors de cinéma de Mos Espa perdus dans les dunes. Temps libre pour explorer le site. Déjeuner dans une palmeraie traditionnelle à Tozeur avant le retour en fin d\'après-midi vers 17:00.'
      }
    ],
    included: [
      'Transport 4x4 climatisé avec carburant',
      'Chauffeur-guide professionnel certifié',
      'Pension complète (repas locaux raffinés)',
      'Hébergement en campement saharien de luxe',
      'Assurance responsabilité civile transport'
    ],
    notIncluded: [
      'Boissons alcoolisées et personnelles',
      'Dépenses personnelles et pourboires guides',
      'Activités optionnelles (quad, dromadaire)'
    ],
    capacity: '2 à 6 personnes par 4x4 (Privatisable)',
    meetingPoint: 'Zone Touristique, Tozeur 2210 (ou prise en charge hôtel)'
  },
  {
    id: 'chebika-tamerza',
    title: 'Chebika & Tamerza',
    tag: 'Oasis & Cascades',
    category: 'oasis',
    durationTag: '1 Journée',
    durationCategory: '1-day',
    price: 'Sur Devis / 120€',
    priceNum: 120,
    currency: '€',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhjc0-DVpqcxYX3vW66fDDTu4xdCCTEH-FLmTlCBjwg8YuLXJdCo3sthDFecKEbD2ewn4dK7aZ8smNfZZznHb5k80MDv7wJA9irj9zRXAl7kqJJfHa-Dvtd_5JAtV6qtPMmJaMDJygfwbs6Zk_LK_nw8S62F_BMQZeFVTsVfhkKkAWiBdaEQ4-yX2lAdADKyPWHvQ7mWsAwpdHOWjlU-x-pkWR2QtrjPKKLo3Jlq3UZvQA4E5-1d2y',
    description: 'Explorez les oasis de montagne spectaculaires, leurs sources d\'eau cristalline et les villages abandonnés de l\'Atlas tunisien.',
    overview: 'Nées d\'une fracture géologique au pied des contreforts de l\'Atlas, les oasis de montagne de Chebika et Tamerza dévoilent des cours d\'eau cristallins bordés de palmiers luxuriants au milieu de falaises de roches ocres monumentales.',
    highlights: [
      { icon: 'water_drop', title: 'Sources Cristallines', description: 'Baignade et marche le long des cours d\'eau frais de montagne.' },
      { icon: 'history', title: 'Villages Berbères', description: 'Vestiges des vieux villages emportés par les pluies torrentielles de 1969.' },
      { icon: 'photo_camera', title: 'Panoramas Atlas', description: 'Points de vue vertigineux sur les steppes désertiques à perte de vue.' }
    ],
    itinerary: [
      { day: 'Matin', title: 'Oasis suspendue de Chebika', description: 'Visite de la source naturelle, gorge de roche ocre et village abandonné avec vue panoramique sur le Chott.' },
      { day: 'Midi', title: 'Déjeuner traditionnel à Tamerza', description: 'Dégustation de spécialités tozeuroises et détente au pied de la grande cascade.' },
      { day: 'Après-midi', title: 'Canyon et cascades de Tamerza', description: 'Marche dans les failles de pierre et découverte de la flore saharienne avant le retour à Tozeur.' }
    ],
    capacity: '2 à 6 personnes',
    meetingPoint: 'Tozeur (Départ 08:30)'
  },
  {
    id: 'canyon-mides',
    title: 'Canyon de Mides',
    tag: 'Canyon Géologique',
    category: 'oasis',
    durationTag: '1 Journée',
    durationCategory: '1-day',
    price: 'Sur Devis / 130€',
    priceNum: 130,
    currency: '€',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZF2K7s4d3cW2_BQZ4Jr-N6-ElPRAqqJpWj_6MnjDAropTlt5cSR0Ya55NZw3Bi0UVVN8tgyKqNELTYJ43DwICR2Prh0bOq_WihlvOehTigW7iP88uFHcf2gvMcmBQhHnsiPpZKZq02tmp9jvspSeTFKFnjUOuRnOabg07fIO9ZWMXYYJ_qtr6huZRNZYvd6QA7dBTjJFUW801lr00wczGsp1bm2u3r0NN-zVFNVQJzx_DNWl4DTtV',
    description: 'Marchez au fond de canyons grandioses sculptés par l\'eau à travers des falaises ocre impressionnantes près de la frontière algérienne.',
    overview: 'Le canyon de Mides est un chef-d\'œuvre naturel strié de strates sédimentaires où l\'érosion a sculpté des gorges sinueuses sur des dizaines de mètres de profondeur. Célèbre lieu de tournage du film Le Patient Anglais.',
    highlights: [
      { icon: 'landscape', title: 'Gorges Sinueuses', description: 'Falaises de calcaire ocre s\'élevant à plus de 40 mètres.' },
      { icon: 'movie', title: 'Décors de Cinéma', description: 'Lieu de tournage mythique du Patient Anglais et Fort Saganne.' }
    ],
    capacity: '2 à 6 personnes',
    meetingPoint: 'Tozeur'
  },
  {
    id: 'ong-jmel-chott',
    title: 'Ong Jmel & Chott El Jerid',
    tag: 'Désert & Cinéma',
    category: '4x4',
    durationTag: '1 Journée',
    durationCategory: '1-day',
    price: 'Sur Devis / 150€',
    priceNum: 150,
    currency: '€',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK4n5FoXXvU6XzNxpIJVANQ0g2yjLnXNppne4hu33x2yfj4joIreJ-Y0GQyMwMBVdu9X9PyJffXIejkpVTzvd3UKUVBAx3XlJbk1epxqUXHOZ6BHdmlLMx-wdbeYUCPDq_4RD5CK1pTGA6ZpNdTpoN8fW8F68fo25_42Xo5wD9iAD6TwC8arLJVDKGeqesYavcvdvuLItDVwvw6W2-ETjVwqjhwsBw-RSzz8M3nHUJilbbsY8y9pWs',
    description: 'Traversez le lac salé infini et découvrez les dunes mythiques d\'Ong Jmel et les décors de Star Wars en 4x4.',
    overview: 'Vivez le grand frisson de la glisse sur les dunes sahariennes en 4x4 jusqu\'au célèbre rocher d\'Ong Jmel (Le cou du dromadaire) et rejoignez la cité spatiale de Mos Espa.',
    highlights: [
      { icon: 'terrain', title: 'Franchissement de Dunes', description: 'Pilotage technique dans les grandes dunes de sable fin.' },
      { icon: 'movie', title: 'Village Star Wars', description: 'Maisons en coupole préservées au milieu du désert.' }
    ],
    capacity: '2 à 6 personnes',
    meetingPoint: 'Tozeur'
  },
  {
    id: 'bivouac-tembaine',
    title: 'Bivouac sous les Étoiles à Tembaine',
    tag: 'Aventures Sahariennes',
    category: 'aventures',
    durationTag: '2 Jours / 1 Nuit',
    durationCategory: '2-3-days',
    price: 'Sur devis / À partir de 350€',
    priceNum: 350,
    currency: '€',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUjQTRkbX5i1tLMJjZW94ijtKYlACvOsMAmuSJta6i_3nnznfQM1069Elfl8ANL5e7szOF_tDUFA8-I1lIqKcUStelQuJfat6EKGRMUk_lMAO24YNDOrGo2NVMgSJBuL_RFoQK74eqPw4V09FHX9RwWKVIx7l9VaNWzV_C2REuGysl52iK7fwMzi83-ZL3ILUkTUDB3VDRef49MdSdRzql8uCVqHsjRf57mg1DHygzvSrZ7XSpUClz',
    description: 'Vivez l\'expérience ultime du désert au pied de la légendaire montagne de Tembaine. Dîner traditionnel autour du feu, chants nomades et nuit inoubliable sous une voûte céleste d\'une pureté rare.',
    overview: 'Située en plein Parc National de Jebil au cœur du Grand Erg Oriental, la montagne tabulaire de Tembaine se dresse au milieu d\'un océan infini de dunes blondes.',
    highlights: [
      { icon: 'nights_stay', title: 'Nuit Nomade Étoilée', description: 'Une des plus belles voûtes célestes du monde sans pollution lumineuse.' },
      { icon: 'outdoor_grill', title: 'Pain de Sable & Dîner au Feu', description: 'Préparation artisanale du pain traditionnel cuit sous le sable chaud.' }
    ],
    capacity: '2 à 6 personnes',
    meetingPoint: 'Tozeur / Douz'
  },
  {
    id: 'ksar-ghilane',
    title: 'Ksar Ghilane & Fortifications Berbères',
    tag: 'Circuits Culturels',
    category: 'culturels',
    durationTag: '2 Jours',
    durationCategory: '2-3-days',
    price: 'Sur devis / À partir de 280€',
    priceNum: 280,
    currency: '€',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0qk3MWqShf1Dy30_OqwRj3EVQ-MUKTkA_ohV_09pJuagWpdHES5KEjzsd-sKpwFdsCd-J3aEpGDe3hgWx4skIxuFW9vcpkvdLh_hXXv2v84rQ43lzwwnbkdqM40CZe4MfDPfGGgV_J1-zCBzgdMCWkzX5hZU5xiKlBi5JPUi0N4kb9EaOvOwiv_PE_GtQdnnN8KQksThF0VfRGhL2t3uUWECIYKNR6POGJuh5RakN3nKMrJrWDJNI',
    description: 'Découverte des ksars historiques et baignade relaxante dans la source d\'eau chaude naturelle en plein milieu du désert. Immersion dans l\'histoire architecturale des tribus amazighes.',
    overview: 'Ksar Ghilane est l\'oasis la plus méridionale de Tunisie, réputée pour sa source thermale tiède bordée d\'eucalyptus et son fort romain de Tisavar situé au sommet d\'une dune.',
    highlights: [
      { icon: 'hot_tub', title: 'Source Thermale Naturelle', description: 'Baignade apaisante à 34°C en plein milieu du désert.' },
      { icon: 'fort', title: 'Fort Romain Tisavar', description: 'Sentinelle historique du Limes Tripolitanus face aux dunes.' }
    ],
    capacity: '2 à 6 personnes',
    meetingPoint: 'Tozeur'
  },
  {
    id: 'expedition-privee-grand-erg',
    title: 'Expédition Privée Grand Erg Oriental',
    tag: 'Circuits Privés',
    category: 'prives',
    durationTag: '5 Jours / 4 Nuits',
    durationCategory: '4plus',
    price: 'Sur devis sur-mesure',
    priceNum: 950,
    currency: '€',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa6VVONJSSQYdsGoFAtW922EZ_hp6KkSnDTC8IorFcH6XddB1ESSH_s89zj8m8mH6mINJL3LGe0uKakcTGLzxFQhxVe29VWHbpZUdC1EVWoQwLX4eUz7wc1j9xIcGDT7lM4rA7ZMymO2-ohc3E6ORYBirKclNhTUAXHem5bHyR50nUeZqpQ96SismTyaRZheMJ7_--g4Zd8bnPWRYCgE8UFLVWKUeskQ_DW7hXMNRfyoBInWzGRiHF',
    description: 'Un voyage cousu main, entièrement privatisé selon vos aspirations. Véhicule 4x4 dédié, chauffeur-guide expert, bivouacs de luxe et immersion exclusive dans les confins du Sahara tunisien.',
    overview: 'L\'expérience ultime du désert en totale autonomie et grand confort : traversée de l\'Erg oriental, bivouacs d\'exception dressés sur les plus hautes crêtes de sable, gastronomie saharienne et contemplation absolue.',
    highlights: [
      { icon: 'star', title: 'Prestation VIP Privative', description: 'Chauffeur privé, cuisinier de camp et itinéraire selon vos envies.' },
      { icon: 'bed', title: 'Tentes Sahariennes Luxueuses', description: 'Lits confortables, literie en lin et éclairage feutré à la lanterne.' }
    ],
    capacity: '1 à 8 personnes (Privé)',
    meetingPoint: 'Tozeur / Djerba'
  },
  {
    id: 'matmata-troglodytes',
    title: 'Matmata & Les Maisons Troglodytes',
    tag: 'Circuits Culturels',
    category: 'culturels',
    durationTag: '2 Jours',
    durationCategory: '2-3-days',
    price: 'Sur devis / À partir de 240€',
    priceNum: 240,
    currency: '€',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCej5AKkOJaOK3MNHzFFqHU1e8dSuuyS-fnBWYEDCK5QpV-mUCQU3HZkg4dTuTIxvKtWoHWDd6w-5EGTZ5y0sVcFAzE5E2Wfc7VgWmPtUf6xud_vE2m8E-cYBBTV_XQfupCNkEeCe5sH4IIcYzweliJqzKANrAUfDRfmJBjUErboecWDqmaQE5bJQCuaRa1-CEnUdhiVM8AyD_ZLyWzV_QLRwhNgQQqBQvBmAXoEZcsVrccyfPqaimq',
    description: 'Rencontrez les habitants des habitations souterraines creusées à même la roche. Découvrez un mode de vie ancestral préservé et des paysages lunaires d\'une beauté saisissante.',
    overview: 'Ce voyage culturel vous conduit dans le massif du Dahar à la rencontre de la communauté amazighe vivant dans de vastes cratères circulaires creusés pour maintenir une température constante.',
    highlights: [
      { icon: 'cottage', title: 'Architecture Troglodytique', description: 'Puits de cour intérieure taillés dans la terre ocre.' },
      { icon: 'local_cafe', title: 'Partage de Thé Berbère', description: 'Accueil chaleureux chez l\'habitant avec galette et huile d\'olive fraîche.' }
    ],
    capacity: '2 à 6 personnes',
    meetingPoint: 'Tozeur'
  }
];

export const VEHICLES: Vehicle[] = [
  {
    id: 'toyota-land-cruiser-v8',
    name: 'Toyota Land Cruiser V8',
    category: '4x4',
    categoryLabel: '4x4 & Tout-Terrain',
    badge: 'Véhicule Premium',
    badgeTag: 'Grand Erg / Désert',
    pricePerDay: 350,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPK-E9h-S0_x4sgnc-6zDGGfTyhhXZk2m3Kk5dBVNPBeHRM5IZ31V9vCg2yqHnPMIIu5gAqJgoAje6rUGNYw8i4_Lu03qFKkFVrGfnJdrYI5bbid0fUd9zQdPmDElc10MamvlqHwLwdM-8mWefnnU3BCXpwyH8aDW9VPN8kjRhm7SzFNNqCjR6IYpQ7EuLZ2A0bX3VU4N6K0Eg-rldjZPbBeRl6YuAo1Ehgo0AVVyUrHC79xFL11O5',
    description: 'Le roi incontesté du désert. Confort absolu, transmission intégrale robuste et puissance optimale pour affronter les pistes sahariennes en toute sécurité.',
    transmission: 'Automatique',
    seats: 7,
    feature3: 'Clim Bizone',
    feature3Icon: 'ac_unit'
  },
  {
    id: 'dacia-duster-4x4',
    name: 'Dacia Duster 4x4',
    category: 'suv',
    categoryLabel: 'SUV / Crossover',
    badge: 'Polyvalent',
    badgeTag: 'Pistes & Route',
    pricePerDay: 220,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWCB44XCLloJ_QgAd5275dwLl77Xn3SQvIu_tg320cDaL8PS_Ig6aHHZvb-42gw-RxSI1xTW-zOsN_04fKi2XM-FEDHsonuO8IEV3rD1dzcZD5SLXRtEX4_gCholqAI4QpmUElDPRmyNnJJI3QnnG9E4iOQu4n2Jt3CKheFxFDIWXu9b9-mY7cs-mSPM75AwzNQ97XqxrR1sPM3fcA6cPdfKtiFBPRRGfEiEfTGvTV5B024K5hxR17',
    description: 'Robuste, agile et économique. Idéal pour explorer les pistes de Tozeur, Chott el-Djerid et les décors de Star Wars sans compromis sur le confort.',
    transmission: 'Manuelle',
    seats: 5,
    feature3: 'Diesel',
    feature3Icon: 'local_gas_station'
  },
  {
    id: 'renault-clio-5',
    name: 'Renault Clio 5',
    category: 'sedan',
    categoryLabel: 'Berline Urbaine',
    badge: 'Économique',
    badgeTag: 'Urbain & Route',
    pricePerDay: 150,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkAT-OGkDEDA5XvpwtqE0BUUkGDbzC1wJEuVrLvjkQB_eRGmIEJrtkOE9ZQ1Jq6pW_UFEwKJYpuxnslH69wCgGQiAcXxT1bDc_CuKlfCdgPWD355DRcpjtgsTKNopACIS6usxzZVOGXlF0sL0j9ygzSPLrmFvjtixurHWNHvkFYg-WnknJikKCCxrDJ77RxVfGvlammyB63sjOi3rwBPq4HZ_r-Sbz-Uwx3qUy83Uwbay8Mna2rGHa',
    description: 'Parfaite pour les transferts entre l\'aéroport, les hôtels de la zone touristique et la découverte des environs goudronnés de Tozeur. Faible consommation.',
    transmission: 'Manuelle',
    seats: 5,
    feature3: 'Économique',
    feature3Icon: 'bolt'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marc Lefèvre',
    avatarLetter: 'M',
    source: 'Avis Google Vérifié',
    rating: 5,
    quote: '"Une excursion absolument magique à Chebika et Ong Jmel. Notre guide connaissait les moindres secrets du désert. Je recommande à 100% !"'
  },
  {
    id: '2',
    name: 'Sarah Hoffmann',
    avatarLetter: 'S',
    source: 'Avis Google Vérifié',
    rating: 5,
    quote: '"Location d\'un 4x4 impeccable pour notre road trip dans le Sud. Service professionnel, ponctuel et chaleureux. Merci El Jerid Travel !"'
  },
  {
    id: '3',
    name: 'Thomas Bernard',
    avatarLetter: 'T',
    source: 'Avis Google Vérifié',
    rating: 5,
    quote: '"Le coucher de soleil sur le Chott El Jerid restera gravé à jamais. Organisation parfaite et guide d\'une gentillesse remarquable."'
  }
];

export const AGENCY_INFO = {
  name: 'EL JERID TRAVEL',
  tagline: 'Curated luxury desert expeditions and high-end travel experiences in the heart of the Tunisian Sahara.',
  address: 'Zone Touristique, Tozeur 2210, Tunisia',
  phone: '+216 55 454 406',
  email: 'contact@eljeridtravel.com',
  hours: 'Monday - Sunday: 8:00 AM - 8:00 PM',
  whatsappUrl: (message?: string) => {
    const defaultMsg = 'Bonjour, je souhaite des informations sur vos expéditions sahariennes et locations de 4x4.';
    const text = encodeURIComponent(message || defaultMsg);
    return `https://wa.me/21655454406?text=${text}`;
  }
};
