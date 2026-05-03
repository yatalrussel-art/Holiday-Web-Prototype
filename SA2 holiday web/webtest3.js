/* --- Mobile Menu Logic --- */

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');


// Open or close the menu when clicking the menu icon
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the menu automatically when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// If the screen is resized to desktop size, hide the mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        navLinks.classList.remove('active');
    }
});

/* --- Language and Translation Logic --- */

// Remember the user's language choice even after refreshing
const languageSelector = document.getElementById('languageSelector');
const savedLang = localStorage.getItem('selectedLanguage') || 'en';
languageSelector.value = savedLang;

// List of all text translations for English, Spanish, French, and German
const translations = {
    en: {
        'hero-title': 'Your Perfect Holiday Awaits',
        'hero-subtitle': 'Affordable luxury trips to amazing destinations',
        'view-packages-btn': 'View Packages',
        'packages-title': 'Holiday Packages',
        'card1-title': 'Summer Escape',
        'card1-location': 'Bali, Indonesia',
        'view-details-btn': 'View Details',
        'offer1-title': 'Summer Escape',
        'offer1-location': 'Bali, Indonesia',
        'offer1-btn': 'View Details',
        'offer2-title': 'Mountain Hike',
        'offer2-location': 'Swiss Alps',
        'offer2-btn': 'View Details',
        'offer3-title': 'Ocean Cruise',
        'offer3-location': 'Caribbean Sea',
        'offer3-btn': 'View Details',
        'offer4-title': 'Beach Paradise',
        'offer4-location': 'Maldives',
        'offer4-btn': 'View Details',
        'offer5-title': 'Winter Ski',
        'offer5-location': 'Japan',
        'offer5-btn': 'View Details',
        'offer6-title': 'Luxury Hotel Stay',
        'offer6-location': 'Paris, France',
        'offer6-btn': 'View Details',
        'transport-flights-title': 'Flights',
        'transport-flights-desc': 'Book flights to destinations worldwide with competitive prices',
        'transport-trains-title': 'Trains',
        'transport-trains-desc': 'Scenic train journeys across Europe and beyond',
        'transport-buses-title': 'Buses',
        'transport-buses-desc': 'Affordable bus travel for budget-conscious travelers',
        'transport-taxi-title': 'Taxi',
        'transport-taxi-desc': 'Quick and convenient taxi rides for your local travel needs',
        'nav-why': 'Why Us',
        'nav-book': 'Book',
        'nav-transportations': 'Transportations',
        'signin-text': 'Sign In',
        'why-title': 'Why Choose Holiday Shores?',
        'why-best-prices': '💰 Best Prices Guaranteed',
        'why-best-prices-desc': 'We offer luxury holidays at unbeatable prices. Our price match guarantee ensures you always get the best deal.',
        'why-book-anywhere': '📱 Book Anywhere, Anytime',
        'why-book-anywhere-desc': 'Our mobile-friendly platform lets you browse and book your perfect vacation from any device - phone, tablet, or computer.',
        'why-all-inclusive': '✈️ All-Inclusive Packages',
        'why-all-inclusive-desc': 'Everything is included in one price: flights, hotels, meals, and activities. No hidden fees, no surprises.',
        'why-trusted': '🛡️ Trusted by Thousands',
        'why-trusted-desc': 'Over 50,000 happy customers have booked their dream vacations with us. Join the Holiday Shores family today!',
        'why-support': '🌟 24/7 Customer Support',
        'why-support-desc': 'Our dedicated support team is available around the clock to assist you with any questions or concerns.',
        'why-secure': '🔒 Secure Booking',
        'why-secure-desc': 'Your personal information and payments are protected with industry-leading security measures.',
        'back-link': '← Back to Home',
        'book-title': 'Book Your Dream Vacation',
        'promo-text': '🎉 Use code HOLIDAY15 for 15% off!',
        'label-name': 'Full Name',
        'label-email': 'Email Address',
        'label-phone': 'Phone Number',
        'label-destination': 'Select Destination',
        'label-date': 'Preferred Travel Date',
        'label-guests': 'Number of Guests',
        'label-promo': 'Promo Code (Optional)',
        'label-notes': 'Special Requests (Optional)',
        'confirm-booking': 'Confirm Booking',
        'transportations-title': 'Choose Your Transportation',
        'back-link': '← Back to Packages',
        'package-detail-title': 'Bali Summer Escape',
        'package-detail-subtitle': '7 nights in paradise with beachfront resort stays, guided tours, and breakfast included.',
        'meta-duration': '7 nights',
        'meta-location': 'Bali, Indonesia',
        'meta-type': 'All-Inclusive',
        'package-summary-title': 'Package Summary',
        'package-summary-desc': 'Experience Bali\'s best in one getaway: beachfront luxury, local culture, and guided excursions. This package includes resort accommodations, breakfast each morning, airport transfers, and a choice of adventure activities.',
        'included-title': 'What\'s Included',
        'label-duration': 'Duration',
        'value-duration': '7 nights',
        'label-flights': 'Flights',
        'value-flights': 'Return economy flights included',
        'label-accommodation': 'Accommodation',
        'value-accommodation': 'Luxury beachfront resort',
        'label-transfers': 'Transfers',
        'value-transfers': 'Airport pickup and departure transfer',
        'highlights-title': 'Highlights',
        'highlight1': 'Sunrise beach yoga session',
        'highlight2': 'Guided Ubud culture tour',
        'highlight3': 'Welcome dinner with local cuisine',
        'book-package-btn': 'Book This Package',
        'itinerary-title': 'Sample Itinerary',
        'day1': 'Day 1: Arrival and welcome dinner.',
        'day2': 'Day 2: Beach relaxation with optional water sports.',
        'day3': 'Day 3: Ubud rice terrace and temple tour.',
        'day4': 'Day 4: Cultural village visit and local market shopping.',
        'day5': 'Day 5: Island tour and sunset dinner.',
        'day6': 'Day 6: Free day for spa or beach time.',
        'day7': 'Day 7: Departure with transfer included.'
    },

    es: {
        'hero-title': 'Tu Vacación Perfecta Te Espera',
        'hero-subtitle': 'Viajes de lujo asequibles a destinos increíbles',
        'view-packages-btn': 'Ver Paquetes',
        'packages-title': 'Paquetes de Vacaciones',
        'card1-title': 'Escape de Verano',
        'card1-location': 'Bali, Indonesia',
        'view-details-btn': 'Ver Detalles',
        'offer1-title': 'Escape de Verano',
        'offer1-location': 'Bali, Indonesia',
        'offer1-btn': 'Ver Detalles',
        'offer2-title': 'Caminata en la Montaña',
        'offer2-location': 'Alpes Suizos',
        'offer2-btn': 'Ver Detalles',
        'offer3-title': 'Crucero Oceánico',
        'offer3-location': 'Mar Caribe',
        'offer3-btn': 'Ver Detalles',
        'offer4-title': 'Paraíso de Playa',
        'offer4-location': 'Maldivas',
        'offer4-btn': 'Ver Detalles',
        'offer5-title': 'Esquí de Invierno',
        'offer5-location': 'Japón',
        'offer5-btn': 'Ver Detalles',
        'offer6-title': 'Estancia en Hotel de Lujo',
        'offer6-location': 'París, Francia',
        'offer6-btn': 'Ver Detalles',
        'transport-flights-title': 'Vuelos',
        'transport-flights-desc': 'Reserva vuelos a destinos en todo el mundo con precios competitivos',
        'transport-trains-title': 'Trenes',
        'transport-trains-desc': 'Viajes en tren escénicos por Europa y más allá',
        'transport-buses-title': 'Autobuses',
        'transport-buses-desc': 'Viajes en autobús asequibles para viajeros con presupuesto limitado',
        'transport-taxi-title': 'Taxi',
        'transport-taxi-desc': 'Viajes rápidos y convenientes en taxi para tus necesidades locales',
        'nav-why': 'Por Qué Nosotros',
        'nav-book': 'Reservar',
        'nav-transportations': 'Transportes',
        'signin-text': 'Iniciar Sesión',
        'why-title': '¿Por Qué Elegir Holiday Shores?',
        'why-best-prices': '💰 Mejores Precios Garantizados',
        'why-best-prices-desc': 'Ofrecemos vacaciones de lujo a precios imbatibles. Nuestra garantía de precio asegura que siempre obtengas la mejor oferta.',
        'why-book-anywhere': '📱 Reserva en Cualquier Lugar, en Cualquier Momento',
        'why-book-anywhere-desc': 'Nuestra plataforma móvil amigable te permite navegar y reservar tu vacación perfecta desde cualquier dispositivo - teléfono, tableta o computadora.',
        'why-all-inclusive': '✈️ Paquetes Todo Incluido',
        'why-all-inclusive-desc': 'Todo está incluido en un precio: vuelos, hoteles, comidas y actividades. Sin tarifas ocultas, sin sorpresas.',
        'why-trusted': '🛡️ Confiado por Miles',
        'why-trusted-desc': 'Más de 50,000 clientes felices han reservado sus vacaciones soñadas con nosotros. Únete a la familia Holiday Shores hoy!',
        'why-support': '🌟 Soporte al Cliente 24/7',
        'why-support-desc': 'Nuestro equipo de soporte dedicado está disponible las 24 horas para ayudarte con cualquier pregunta o preocupación.',
        'why-secure': '🔒 Reserva Segura',
        'why-secure-desc': 'Tu información personal y pagos están protegidos con medidas de seguridad líderes en la industria.',
        'back-link': '← Volver al Inicio',
        'book-title': 'Reserva Tu Vacación Soñada',
        'promo-text': '🎉 ¡Usa el código HOLIDAY15 para 15% de descuento!',
        'label-name': 'Nombre Completo',
        'label-email': 'Dirección de Correo Electrónico',
        'label-phone': 'Número de Teléfono',
        'label-destination': 'Seleccionar Destino',
        'label-date': 'Fecha de Viaje Preferida',
        'label-guests': 'Número de Invitados',
        'label-promo': 'Código Promocional (Opcional)',
        'label-notes': 'Solicitudes Especiales (Opcional)',
        'confirm-booking': 'Confirmar Reserva',
        'transportations-title': 'Elige Tu Transporte',
        'back-link': '← Volver a Paquetes',
        'package-detail-title': 'Escape de Verano en Bali',
        'package-detail-subtitle': '7 noches en el paraíso con resort frente al mar y tours guiados.',
        'meta-duration': '7 noches',
        'meta-location': 'Bali, Indonesia',
        'meta-type': 'Todo Incluido',
        'package-summary-title': 'Resumen del Paquete',
        'package-summary-desc': 'Disfruta lo mejor de Bali en un solo viaje: lujo frente al mar, cultura local y excursiones guiadas. Este paquete incluye alojamiento en resort, desayuno cada mañana, traslados al aeropuerto y una selección de actividades de aventura.',
        'included-title': 'Qué Incluye',
        'label-duration': 'Duración',
        'value-duration': '7 noches',
        'label-flights': 'Vuelos',
        'value-flights': 'Vuelos de ida y vuelta en clase económica incluidos',
        'label-accommodation': 'Alojamiento',
        'value-accommodation': 'Resort de lujo frente al mar',
        'label-transfers': 'Traslados',
        'value-transfers': 'Traslado de llegada y salida al aeropuerto',
         'highlights-title': 'Destacados',
        'highlight1': 'Sesión de yoga al amanecer en la playa',
        'highlight2': 'Tour cultural guiado en Ubud',
        'highlight3': 'Cena de bienvenida con cocina local',
        'book-package-btn': 'Reservar Este Paquete',
        'itinerary-title': 'Itinerario de Muestra',
        'day1': 'Día 1: Llegada y cena de bienvenida.',
        'day2': 'Día 2: Relajación en la playa con deportes acuáticos opcionales.',
        'day3': 'Día 3: Tour de terrazas de arroz y templos en Ubud.',
        'day4': 'Día 4: Visita a la aldea cultural y compras en el mercado local.',
        'day5': 'Día 5: Tour por la isla y cena al atardecer.',
        'day6': 'Día 6: Día libre para spa o tiempo en la playa.',
        'day7': 'Día 7: Salida con traslado incluido.'
    },

    fr: {
        'hero-title': 'Vos Vacances Parfaites Vous Attendent',
        'hero-subtitle': 'Voyages de luxe abordables vers des destinations étonnantes',
        'view-packages-btn': 'Voir les Forfaits',
        'packages-title': 'Forfaits de Vacances',
        'card1-title': 'Évasion Estivale',
        'card1-location': 'Bali, Indonésie',
        'view-details-btn': 'Voir les Détails',
        'offer1-title': 'Évasion Estivale',
        'offer1-location': 'Bali, Indonésie',
        'offer1-btn': 'Voir les Détails',
        'offer2-title': 'Randonnée en Montagne',
        'offer2-location': 'Alpes Suisses',
        'offer2-btn': 'Voir les Détails',
        'offer3-title': 'Croisière Océan',
        'offer3-location': 'Mer des Caraïbes',
        'offer3-btn': 'Voir les Détails',
        'offer4-title': 'Paradis Plage',
        'offer4-location': 'Maldives',
        'offer4-btn': 'Voir les Détails',
        'offer5-title': 'Ski d’Hiver',
        'offer5-location': 'Japon',
        'offer5-btn': 'Voir les Détails',
        'offer6-title': 'Séjour Hôtel de Luxe',
        'offer6-location': 'Paris, France',
        'offer6-btn': 'Voir les Détails',
        'transport-flights-title': 'Vols',
        'transport-flights-desc': 'Réservez des vols vers des destinations du monde entier à des prix compétitifs',
        'transport-trains-title': 'Trains',
        'transport-trains-desc': 'Voyages en train pittoresques à travers l’Europe et au-delà',
        'transport-buses-title': 'Bus',
        'transport-buses-desc': 'Voyages en bus abordables pour les voyageurs économiques',
        'transport-taxi-title': 'Taxi',
        'transport-taxi-desc': 'Trajets rapides et pratiques en taxi pour vos besoins locaux',
        'nav-why': 'Pourquoi Nous',
        'nav-book': 'Réserver',
        'nav-transportations': 'Transports',
        'signin-text': 'Se Connecter',
        'why-title': 'Pourquoi Choisir Holiday Shores?',
        'why-best-prices': '💰 Meilleurs Prix Garantis',
        'why-best-prices-desc': 'Nous offrons des vacances de luxe à des prix imbattables. Notre garantie de prix assure que vous obtenez toujours la meilleure offre.',
        'why-book-anywhere': '📱 Réservez N\'importe Où, N\'importe Quand',
        'why-book-anywhere-desc': 'Notre plateforme mobile conviviale vous permet de naviguer et de réserver vos vacances parfaites depuis n\'importe quel appareil - téléphone, tablette ou ordinateur.',
        'why-all-inclusive': '✈️ Forfaits Tout Compris',
        'why-all-inclusive-desc': 'Tout est inclus dans un prix : vols, hôtels, repas et activités. Pas de frais cachés, pas de surprises.',
        'why-trusted': '🛡️ Approuvé par des Milliers',
        'why-trusted-desc': 'Plus de 50 000 clients satisfaits ont réservé leurs vacances de rêve avec nous. Rejoignez la famille Holiday Shores aujourd\'hui !',
        'why-support': '🌟 Support Client 24/7',
        'why-support-desc': 'Notre équipe de support dédiée est disponible 24h/24 pour vous aider avec toutes vos questions ou préoccupations.',
        'why-secure': '🔒 Réservation Sécurisée',
        'why-secure-desc': 'Vos informations personnelles et paiements sont protégés par des mesures de sécurité leaders dans l\'industrie.',
        'back-link': '← Retour à l\'Accueil',
        'book-title': 'Réservez Vos Vacances de Rêve',
        'promo-text': '🎉 Utilisez le code HOLIDAY15 pour 15% de réduction !',
        'label-name': 'Nom Complet',
        'label-email': 'Adresse Email',
        'label-phone': 'Numéro de Téléphone',
        'label-destination': 'Sélectionner une Destination',
        'label-date': 'Date de Voyage Préférée',
        'label-guests': 'Nombre d\'Invités',
        'label-promo': 'Code Promo (Optionnel)',
        'label-notes': 'Demandes Spéciales (Optionnel)',
        'confirm-booking': 'Confirmer la Réservation',
        'transportations-title': 'Choisissez Votre Transport',
        'back-link': '← Retour aux Forfaits',
        'package-detail-title': 'Évasion Estivale à Bali',
        'package-detail-subtitle': '7 nuits au paradis avec des séjours en resort en bord de mer et des tours guidés.',
        'meta-duration': '7 nuits',
        'meta-location': 'Bali, Indonésie',
        'meta-type': 'Tout Compris',
        'package-summary-title': 'Résumé du Forfait',
        'package-summary-desc': 'Découvrez le meilleur de Bali en une seule escapade : luxe en bord de mer, culture locale et excursions guidées. Ce forfait comprend l\'hébergement en resort, le petit-déjeuner chaque matin, les transferts aéroport et une sélection d\'activités d\'aventure.',
        'included-title': 'Ce Qui Est Inclus',
        'label-duration': 'Durée',
        'value-duration': '7 nuits',
        'label-flights': 'Vols',
        'value-flights': 'Vols aller-retour en classe économique inclus',
        'label-accommodation': 'Hébergement',
        'value-accommodation': 'Resort de luxe en bord de mer',
        'label-transfers': 'Transferts',
        'value-transfers': 'Transfert d\'arrivée et de départ à l\'aéroport',
        'highlights-title': 'Points Forts',
        'highlight1': 'Session de yoga au lever du soleil sur la plage',
        'highlight2': 'Tour culturel guidé à Ubud',
        'highlight3': 'Dîner de bienvenue avec cuisine locale',
        'book-package-btn': 'Réservez Ce Forfait',
        'itinerary-title': 'Itinéraire Exemple',
        'day1': 'Jour 1 : Arrivée et dîner de bienvenue.',
        'day2': 'Jour 2 : Détente à la plage avec sports nautiques en option.',
        'day3': 'Jour 3 : Tour des rizières et temples à Ubud.',
        'day4': 'Jour 4 : Visite du village culturel et shopping au marché local.',
        'day5': 'Jour 5 : Tour de l\'île et dîner au coucher du soleil.',
        'day6': 'Jour 6 : Journée libre pour spa ou temps à la plage.',
        'day7': 'Jour 7 : Départ avec transfert inclus.'
    },

    de: {
        'hero-title': 'Ihr Perfekter Urlaub Wartet',
        'hero-subtitle': 'Erschwingliche Luxusreisen zu erstaunlichen Zielen',
        'view-packages-btn': 'Pakete Ansehen',
        'packages-title': 'Urlaubspakete',
        'card1-title': 'Sommerflucht',
        'card1-location': 'Bali, Indonesien',
        'view-details-btn': 'Details Ansehen',
        'offer1-title': 'Sommerflucht',
        'offer1-location': 'Bali, Indonesien',
        'offer1-btn': 'Details Ansehen',
        'offer2-title': 'Bergwanderung',
        'offer2-location': 'Schweizer Alpen',
        'offer2-btn': 'Details Ansehen',
        'offer3-title': 'Ozeankreuzfahrt',
        'offer3-location': 'Karibisches Meer',
        'offer3-btn': 'Details Ansehen',
        'offer4-title': 'Strandparadies',
        'offer4-location': 'Malediven',
        'offer4-btn': 'Details Ansehen',
        'offer5-title': 'Winterski',
        'offer5-location': 'Japan',
        'offer5-btn': 'Details Ansehen',
        'offer6-title': 'Luxushotelaufenthalt',
        'offer6-location': 'Paris, Frankreich',
        'offer6-btn': 'Details Ansehen',
        'transport-flights-title': 'Flüge',
        'transport-flights-desc': 'Buchen Sie Flüge zu Zielen weltweit zu wettbewerbsfähigen Preisen',
        'transport-trains-title': 'Züge',
        'transport-trains-desc': 'Malersche Zugreisen durch Europa und darüber hinaus',
        'transport-buses-title': 'Busse',
        'transport-buses-desc': 'Erschwingliche Busreisen für reisefreudige Sparfüchse',
        'transport-taxi-title': 'Taxi',
        'transport-taxi-desc': 'Schnelle und bequeme Taxifahrten für Ihre lokalen Reisebedürfnisse',
        'nav-why': 'Warum Wir',
        'nav-book': 'Buchen',
        'nav-transportations': 'Transporte',
        'signin-text': 'Anmelden',
        'why-title': 'Warum Holiday Shores Wählen?',
        'why-best-prices': '💰 Beste Preise Garantiert',
        'why-best-prices-desc': 'Wir bieten Luxusurlaub zu unschlagbaren Preisen. Unsere Preisgarantie stellt sicher, dass Sie immer das beste Angebot erhalten.',
        'why-book-anywhere': '📱 Überall Buchen, Jederzeit',
        'why-book-anywhere-desc': 'Unsere mobile freundliche Plattform ermöglicht es Ihnen, von jedem Gerät aus zu stöbern und Ihren perfekten Urlaub zu buchen - Telefon, Tablet oder Computer.',
        'why-all-inclusive': '✈️ Alles-Inklusive-Pakete',
        'why-all-inclusive-desc': 'Alles ist in einem Preis enthalten: Flüge, Hotels, Mahlzeiten und Aktivitäten. Keine versteckten Gebühren, keine Überraschungen.',
        'why-trusted': '🛡️ Von Tausenden Vertraut',
        'why-trusted-desc': 'Über 50.000 zufriedene Kunden haben ihre Traumurlaube bei uns gebucht. Treten Sie der Holiday Shores-Familie heute bei!',
        'why-support': '🌟 24/7 Kundensupport',
        'why-support-desc': 'Unser engagiertes Support-Team ist rund um die Uhr verfügbar, um Ihnen bei allen Fragen oder Bedenken zu helfen.',
        'why-secure': '🔒 Sichere Buchung',
        'why-secure-desc': 'Ihre persönlichen Informationen und Zahlungen sind durch branchenführende Sicherheitsmaßnahmen geschützt.',
        'back-link': '← Zurück zur Startseite',
        'book-title': 'Buchen Sie Ihren Traumurlaub',
        'promo-text': '🎉 Verwenden Sie den Code HOLIDAY15 für 15% Rabatt!',
        'label-name': 'Vollständiger Name',
        'label-email': 'E-Mail-Adresse',
        'label-phone': 'Telefonnummer',
        'label-destination': 'Ziel Auswählen',
        'label-date': 'Bevorzugtes Reisedatum',
        'label-guests': 'Anzahl der Gäste',
        'label-promo': 'Promo-Code (Optional)',
        'label-notes': 'Spezielle Anfragen (Optional)',
        'confirm-booking': 'Buchung Bestätigen',
        'transportations-title': 'Wählen Sie Ihre Transportart',
        'back-link': '← Zurück zu Paketen',
        'package-detail-title': 'Bali Sommerflucht',
        'package-detail-subtitle': '7 Nächte im Paradies mit Strandresort-Aufenthalten, geführten Touren und Frühstück inklusive.',
        'meta-duration': '7 Nächte',
        'meta-location': 'Bali, Indonesien',
        'meta-type': 'Alles Inklusive',
        'package-summary-title': 'Paketübersicht',
        'package-summary-desc': 'Erleben Sie das Beste von Bali in einem Urlaub: Luxus am Strand, lokale Kultur und geführte Ausflüge. Dieses Paket beinhaltet Resort-Unterkünfte, Frühstück jeden Morgen, Flughafentransfers und eine Auswahl an Abenteueraktivitäten.',
        'included-title': 'Was Inbegriffen Ist',
        'label-duration': 'Dauer',
        'value-duration': '7 Nächte',
        'label-flights': 'Flüge',
        'value-flights': 'Hin- und Rückflüge in Economy Class inklusive',
        'label-accommodation': 'Unterkunft',
        'value-accommodation': 'Luxus-Strandresort',
        'label-transfers': 'Transfers',
        'value-transfers': 'Flughafentransfer bei Ankunft und Abreise',
        'highlights-title': 'Highlights',
        'highlight1': 'Sonnenaufgangs-Yoga am Strand',
        'highlight2': 'Geführte Kultur-Tour in Ubud',
        'highlight3': 'Willkommensdinner mit lokaler Küche',
        'book-package-btn': 'Dieses Paket Buchen',
        'itinerary-title': 'Beispielreiseplan',
        'day1': 'Tag 1: Ankunft und Willkommensdinner.',
        'day2': 'Tag 2: Entspannung am Strand mit optionalen Wassersportarten.',
        'day3': 'Tag 3: Tour zu den Reisterrassen und Tempeln in Ubud.',
        'day4': 'Tag 4: Besuch eines Kulturdorfes und Einkauf auf dem lokalen Markt.',
        'day5': 'Tag 5: Inselrundfahrt und Abendessen bei Sonnenuntergang.',
        'day6': 'Tag 6: Freier Tag für Spa oder Strandzeit.',
        'day7': 'Tag 7: Abreise mit inkludiertem Transfer.'
    }
};

// Function to swap out text based on the selected language
function changeLanguage(lang) {
    const navLinks = document.querySelectorAll('nav.nav-links a');
    
    // Manual translation for the navigation bar items
    navLinks[0].textContent = lang === 'en' ? 'Why Us' : lang === 'es' ? 'Por Qué Nosotros' : lang === 'fr' ? 'Pourquoi Nous' : 'Warum Wir';
    navLinks[1].textContent = lang === 'en' ? 'Book' : lang === 'es' ? 'Reservar' : lang === 'fr' ? 'Réserver' : 'Buchen';
    navLinks[2].textContent = lang === 'en' ? 'Transportations' : lang === 'es' ? 'Transportes' : lang === 'fr' ? 'Transports' : 'Transporte';
    
    // Automatically find and replace text for every ID listed in the translations object
    for (const [key, value] of Object.entries(translations[lang])) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = value;
        }
    }

    // Save the selection so the site stays in the chosen language
    localStorage.setItem('selectedLanguage', lang);
}

// When the page finishes loading, apply the saved language and setup the selector
window.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('languageSelector');
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';

    if (languageSelector) {
        languageSelector.value = savedLanguage;
        changeLanguage(savedLanguage);

        // Update the language whenever the user picks a new one from the dropdown
        languageSelector.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
});

/* --- Transport Dropdown Menu Logic --- */

const transportTrigger = document.querySelector('.transport-trigger');
const transportOptions = document.querySelectorAll('.transport-option');

// When a transport option is clicked, highlight it and update the main button text
transportOptions.forEach(option => {
    option.addEventListener('click', () => {
        transportOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        const transportType = option.textContent.trim();
        transportTrigger.textContent = transportType + ' ▼';
    });
});

