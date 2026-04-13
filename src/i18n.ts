import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Welcome
      'welcome.greeting': 'Welcome {{name}},',
      'welcome.description': "Here's your performance overview where you can track your daily and monthly KPIs.",

      // Replies
      'replies.title': 'Replies',
      'replies.openInbox': 'Open inbox',

      // Performance
      'performance.title': "May's performance",
      'performance.editKpis': 'Edit KPIs',
      'performance.contactsEngaged': 'Contacts engaged',
      'performance.companiesEngaged': 'Companies engaged',
      'performance.activities': 'Activities',
      'performance.meetings': 'Meetings',
      'performance.deals': 'Deals',
      'performance.pipeline': 'Pipeline',

      // Today's Tasks
      'todayTasks.title': "Today's tasks",
      'todayTasks.overdue': 'Overdue',
      'todayTasks.pendingManual': 'Pending Manual',
      'todayTasks.pendingAuto': 'Pending Auto',
      'todayTasks.completed': 'Completed',
      'todayTasks.error': '{{count}} error',

      // Signals
      'signals.title': 'Signals',
      'signals.description': 'Never miss a single opportunity: check out your top signals from your 1st-degree LinkedIn connections.',
      'signals.noSignals': 'No signals to display',
      'signals.action': 'Action',
      'signals.complete': 'Complete',
      'signals.delete': 'Delete',

      // Onboarding
      'onboarding.title': 'Onboarding',
      'onboarding.integrationsSetup': 'Integrations setup',
      'onboarding.addNewContact': 'Add a new contact',
      'onboarding.createFirstSequence': 'Create your first sequence',
      'onboarding.addContactsToSequence': 'Add contacts to a sequence',
      'onboarding.runFirstTask': 'Run your first task',

      // Sidebar
      'sidebar.dashboard': 'Dashboard',
      'sidebar.findNew': 'Find new',
      'sidebar.lists': 'Lists',
      'sidebar.templates': 'Templates',
      'sidebar.sequences': 'Sequences',
      'sidebar.tasks': 'Tasks',
      'sidebar.inbox': 'Inbox',
      'sidebar.deals': 'Deals',
      'sidebar.analytics': 'Analytics',
      'sidebar.trialEnds': 'Trial ends in {{days}} days',
      'sidebar.upgradePlan': 'Upgrade plan 🚀',
      'sidebar.sales': 'Sales',

      // KPI Details
      'kpiDetail.periodMay': 'May 2025',
      'kpiDetail.contactsDesc': 'Total contacts engaged through all channels during this period.',
      'kpiDetail.emailContacts': 'Email contacts',
      'kpiDetail.linkedinContacts': 'LinkedIn contacts',
      'kpiDetail.phoneContacts': 'Phone contacts',
      'kpiDetail.companiesDesc': 'Companies reached out to and engaged with.',
      'kpiDetail.newCompanies': 'New companies',
      'kpiDetail.existingCompanies': 'Existing companies',
      'kpiDetail.activitiesDesc': 'All outreach activities performed including emails, calls and messages.',
      'kpiDetail.emailsSent': 'Emails sent',
      'kpiDetail.callsMade': 'Calls made',
      'kpiDetail.linkedinMessages': 'LinkedIn messages',
      'kpiDetail.meetingsDesc': 'Meetings scheduled and completed with prospects.',
      'kpiDetail.booked': 'Booked',
      'kpiDetail.attended': 'Attended',
      'kpiDetail.noShow': 'No-show',
      'kpiDetail.dealsDesc': 'Active deals in pipeline and their current status.',
      'kpiDetail.won': 'Won',
      'kpiDetail.inProgress': 'In progress',
      'kpiDetail.lost': 'Lost',
      'kpiDetail.pipelineDesc': 'Total pipeline value distributed across deal stages.',
      'kpiDetail.qualified': 'Qualified',
      'kpiDetail.proposal': 'Proposal',
      'kpiDetail.negotiation': 'Negotiation',
    },
  },
  it: {
    translation: {
      // Welcome
      'welcome.greeting': 'Benvenuto {{name}},',
      'welcome.description': 'Ecco la panoramica delle tue performance dove puoi monitorare i tuoi KPI giornalieri e mensili.',

      // Replies
      'replies.title': 'Risposte',
      'replies.openInbox': 'Apri inbox',

      // Performance
      'performance.title': 'Performance di maggio',
      'performance.editKpis': 'Modifica KPI',
      'performance.contactsEngaged': 'Contatti coinvolti',
      'performance.companiesEngaged': 'Aziende coinvolte',
      'performance.activities': 'Attività',
      'performance.meetings': 'Riunioni',
      'performance.deals': 'Trattative',
      'performance.pipeline': 'Pipeline',

      // Today's Tasks
      'todayTasks.title': 'Attività di oggi',
      'todayTasks.overdue': 'In ritardo',
      'todayTasks.pendingManual': 'In attesa manuale',
      'todayTasks.pendingAuto': 'In attesa auto',
      'todayTasks.completed': 'Completate',
      'todayTasks.error': '{{count}} errore',

      // Signals
      'signals.title': 'Segnali',
      'signals.description': 'Non perdere neanche un\'opportunità: controlla i tuoi segnali principali dalle connessioni LinkedIn di 1° grado.',
      'signals.noSignals': 'Nessun segnale da mostrare',
      'signals.action': 'Azione',
      'signals.complete': 'Completa',
      'signals.delete': 'Elimina',

      // Onboarding
      'onboarding.title': 'Onboarding',
      'onboarding.integrationsSetup': 'Configurazione integrazioni',
      'onboarding.addNewContact': 'Aggiungi un nuovo contatto',
      'onboarding.createFirstSequence': 'Crea la tua prima sequenza',
      'onboarding.addContactsToSequence': 'Aggiungi contatti a una sequenza',
      'onboarding.runFirstTask': 'Esegui la tua prima attività',

      // Sidebar
      'sidebar.dashboard': 'Dashboard',
      'sidebar.findNew': 'Trova nuovi',
      'sidebar.lists': 'Liste',
      'sidebar.templates': 'Modelli',
      'sidebar.sequences': 'Sequenze',
      'sidebar.tasks': 'Attività',
      'sidebar.inbox': 'Posta in arrivo',
      'sidebar.deals': 'Trattative',
      'sidebar.analytics': 'Analisi',
      'sidebar.trialEnds': 'La prova scade tra {{days}} giorni',
      'sidebar.upgradePlan': 'Aggiorna piano 🚀',
      'sidebar.sales': 'Vendite',

      // KPI Details
      'kpiDetail.periodMay': 'Maggio 2025',
      'kpiDetail.contactsDesc': 'Totale contatti coinvolti attraverso tutti i canali in questo periodo.',
      'kpiDetail.emailContacts': 'Contatti email',
      'kpiDetail.linkedinContacts': 'Contatti LinkedIn',
      'kpiDetail.phoneContacts': 'Contatti telefonici',
      'kpiDetail.companiesDesc': 'Aziende contattate e coinvolte.',
      'kpiDetail.newCompanies': 'Nuove aziende',
      'kpiDetail.existingCompanies': 'Aziende esistenti',
      'kpiDetail.activitiesDesc': 'Tutte le attività di outreach incluse email, chiamate e messaggi.',
      'kpiDetail.emailsSent': 'Email inviate',
      'kpiDetail.callsMade': 'Chiamate effettuate',
      'kpiDetail.linkedinMessages': 'Messaggi LinkedIn',
      'kpiDetail.meetingsDesc': 'Riunioni programmate e completate con i prospect.',
      'kpiDetail.booked': 'Prenotate',
      'kpiDetail.attended': 'Partecipate',
      'kpiDetail.noShow': 'Non presentati',
      'kpiDetail.dealsDesc': 'Trattative attive in pipeline e il loro stato attuale.',
      'kpiDetail.won': 'Vinte',
      'kpiDetail.inProgress': 'In corso',
      'kpiDetail.lost': 'Perse',
      'kpiDetail.pipelineDesc': 'Valore totale della pipeline distribuito per fasi.',
      'kpiDetail.qualified': 'Qualificati',
      'kpiDetail.proposal': 'Proposta',
      'kpiDetail.negotiation': 'Negoziazione',
    },
  },
  fr: {
    translation: {
      // Welcome
      'welcome.greeting': 'Bienvenue {{name}},',
      'welcome.description': 'Voici votre aperçu de performance où vous pouvez suivre vos KPI quotidiens et mensuels.',

      // Replies
      'replies.title': 'Réponses',
      'replies.openInbox': 'Ouvrir la boîte',

      // Performance
      'performance.title': 'Performance de mai',
      'performance.editKpis': 'Modifier KPI',
      'performance.contactsEngaged': 'Contacts engagés',
      'performance.companiesEngaged': 'Entreprises engagées',
      'performance.activities': 'Activités',
      'performance.meetings': 'Réunions',
      'performance.deals': 'Affaires',
      'performance.pipeline': 'Pipeline',

      // Today's Tasks
      'todayTasks.title': "Tâches d'aujourd'hui",
      'todayTasks.overdue': 'En retard',
      'todayTasks.pendingManual': 'En attente manuelle',
      'todayTasks.pendingAuto': 'En attente auto',
      'todayTasks.completed': 'Terminées',
      'todayTasks.error': '{{count}} erreur',

      // Signals
      'signals.title': 'Signaux',
      'signals.description': 'Ne manquez aucune opportunité : consultez vos signaux principaux de vos connexions LinkedIn de 1er degré.',
      'signals.noSignals': 'Aucun signal à afficher',
      'signals.action': 'Action',
      'signals.complete': 'Terminer',
      'signals.delete': 'Supprimer',

      // Onboarding
      'onboarding.title': 'Intégration',
      'onboarding.integrationsSetup': 'Configuration des intégrations',
      'onboarding.addNewContact': 'Ajouter un nouveau contact',
      'onboarding.createFirstSequence': 'Créer votre première séquence',
      'onboarding.addContactsToSequence': 'Ajouter des contacts à une séquence',
      'onboarding.runFirstTask': 'Exécuter votre première tâche',

      // Sidebar
      'sidebar.dashboard': 'Tableau de bord',
      'sidebar.findNew': 'Rechercher',
      'sidebar.lists': 'Listes',
      'sidebar.templates': 'Modèles',
      'sidebar.sequences': 'Séquences',
      'sidebar.tasks': 'Tâches',
      'sidebar.inbox': 'Boîte de réception',
      'sidebar.deals': 'Affaires',
      'sidebar.analytics': 'Analytique',
      'sidebar.trialEnds': "L'essai expire dans {{days}} jours",
      'sidebar.upgradePlan': 'Mettre à niveau 🚀',
      'sidebar.sales': 'Ventes',

      // KPI Details
      'kpiDetail.periodMay': 'Mai 2025',
      'kpiDetail.contactsDesc': 'Total des contacts engagés via tous les canaux pendant cette période.',
      'kpiDetail.emailContacts': 'Contacts email',
      'kpiDetail.linkedinContacts': 'Contacts LinkedIn',
      'kpiDetail.phoneContacts': 'Contacts téléphoniques',
      'kpiDetail.companiesDesc': 'Entreprises contactées et engagées.',
      'kpiDetail.newCompanies': 'Nouvelles entreprises',
      'kpiDetail.existingCompanies': 'Entreprises existantes',
      'kpiDetail.activitiesDesc': 'Toutes les activités de prospection incluant emails, appels et messages.',
      'kpiDetail.emailsSent': 'Emails envoyés',
      'kpiDetail.callsMade': 'Appels passés',
      'kpiDetail.linkedinMessages': 'Messages LinkedIn',
      'kpiDetail.meetingsDesc': 'Réunions planifiées et complétées avec les prospects.',
      'kpiDetail.booked': 'Réservées',
      'kpiDetail.attended': 'Participées',
      'kpiDetail.noShow': 'Absences',
      'kpiDetail.dealsDesc': 'Affaires actives dans le pipeline et leur statut actuel.',
      'kpiDetail.won': 'Gagnées',
      'kpiDetail.inProgress': 'En cours',
      'kpiDetail.lost': 'Perdues',
      'kpiDetail.pipelineDesc': 'Valeur totale du pipeline répartie par étapes.',
      'kpiDetail.qualified': 'Qualifiés',
      'kpiDetail.proposal': 'Proposition',
      'kpiDetail.negotiation': 'Négociation',
    },
  },
  es: {
    translation: {
      // Welcome
      'welcome.greeting': 'Bienvenido {{name}},',
      'welcome.description': 'Aquí tienes tu resumen de rendimiento donde puedes seguir tus KPI diarios y mensuales.',

      // Replies
      'replies.title': 'Respuestas',
      'replies.openInbox': 'Abrir bandeja',

      // Performance
      'performance.title': 'Rendimiento de mayo',
      'performance.editKpis': 'Editar KPI',
      'performance.contactsEngaged': 'Contactos alcanzados',
      'performance.companiesEngaged': 'Empresas alcanzadas',
      'performance.activities': 'Actividades',
      'performance.meetings': 'Reuniones',
      'performance.deals': 'Negocios',
      'performance.pipeline': 'Pipeline',

      // Today's Tasks
      'todayTasks.title': 'Tareas de hoy',
      'todayTasks.overdue': 'Atrasadas',
      'todayTasks.pendingManual': 'Pendiente manual',
      'todayTasks.pendingAuto': 'Pendiente auto',
      'todayTasks.completed': 'Completadas',
      'todayTasks.error': '{{count}} error',

      // Signals
      'signals.title': 'Señales',
      'signals.description': 'No pierdas ninguna oportunidad: revisa tus señales principales de tus conexiones de LinkedIn de 1er grado.',
      'signals.noSignals': 'No hay señales para mostrar',
      'signals.action': 'Acción',
      'signals.complete': 'Completar',
      'signals.delete': 'Eliminar',

      // Onboarding
      'onboarding.title': 'Incorporación',
      'onboarding.integrationsSetup': 'Configuración de integraciones',
      'onboarding.addNewContact': 'Añadir un nuevo contacto',
      'onboarding.createFirstSequence': 'Crear tu primera secuencia',
      'onboarding.addContactsToSequence': 'Añadir contactos a una secuencia',
      'onboarding.runFirstTask': 'Ejecutar tu primera tarea',

      // Sidebar
      'sidebar.dashboard': 'Panel',
      'sidebar.findNew': 'Buscar nuevos',
      'sidebar.lists': 'Listas',
      'sidebar.templates': 'Plantillas',
      'sidebar.sequences': 'Secuencias',
      'sidebar.tasks': 'Tareas',
      'sidebar.inbox': 'Bandeja de entrada',
      'sidebar.deals': 'Negocios',
      'sidebar.analytics': 'Analítica',
      'sidebar.trialEnds': 'La prueba termina en {{days}} días',
      'sidebar.upgradePlan': 'Mejorar plan 🚀',
      'sidebar.sales': 'Ventas',

      // KPI Details
      'kpiDetail.periodMay': 'Mayo 2025',
      'kpiDetail.contactsDesc': 'Total de contactos involucrados a través de todos los canales durante este período.',
      'kpiDetail.emailContacts': 'Contactos por email',
      'kpiDetail.linkedinContacts': 'Contactos de LinkedIn',
      'kpiDetail.phoneContacts': 'Contactos telefónicos',
      'kpiDetail.companiesDesc': 'Empresas contactadas e involucradas.',
      'kpiDetail.newCompanies': 'Nuevas empresas',
      'kpiDetail.existingCompanies': 'Empresas existentes',
      'kpiDetail.activitiesDesc': 'Todas las actividades de prospección incluyendo emails, llamadas y mensajes.',
      'kpiDetail.emailsSent': 'Emails enviados',
      'kpiDetail.callsMade': 'Llamadas realizadas',
      'kpiDetail.linkedinMessages': 'Mensajes de LinkedIn',
      'kpiDetail.meetingsDesc': 'Reuniones programadas y completadas con prospectos.',
      'kpiDetail.booked': 'Reservadas',
      'kpiDetail.attended': 'Asistidas',
      'kpiDetail.noShow': 'Ausencias',
      'kpiDetail.dealsDesc': 'Negocios activos en el pipeline y su estado actual.',
      'kpiDetail.won': 'Ganados',
      'kpiDetail.inProgress': 'En progreso',
      'kpiDetail.lost': 'Perdidos',
      'kpiDetail.pipelineDesc': 'Valor total del pipeline distribuido por etapas.',
      'kpiDetail.qualified': 'Calificados',
      'kpiDetail.proposal': 'Propuesta',
      'kpiDetail.negotiation': 'Negociación',
    },
  },
  de: {
    translation: {
      // Welcome
      'welcome.greeting': 'Willkommen {{name}},',
      'welcome.description': 'Hier ist Ihre Leistungsübersicht, in der Sie Ihre täglichen und monatlichen KPIs verfolgen können.',

      // Replies
      'replies.title': 'Antworten',
      'replies.openInbox': 'Posteingang öffnen',

      // Performance
      'performance.title': 'Leistung im Mai',
      'performance.editKpis': 'KPIs bearbeiten',
      'performance.contactsEngaged': 'Kontakte erreicht',
      'performance.companiesEngaged': 'Unternehmen erreicht',
      'performance.activities': 'Aktivitäten',
      'performance.meetings': 'Meetings',
      'performance.deals': 'Geschäfte',
      'performance.pipeline': 'Pipeline',

      // Today's Tasks
      'todayTasks.title': 'Heutige Aufgaben',
      'todayTasks.overdue': 'Überfällig',
      'todayTasks.pendingManual': 'Manuell ausstehend',
      'todayTasks.pendingAuto': 'Auto ausstehend',
      'todayTasks.completed': 'Abgeschlossen',
      'todayTasks.error': '{{count}} Fehler',

      // Signals
      'signals.title': 'Signale',
      'signals.description': 'Verpassen Sie keine Gelegenheit: Überprüfen Sie Ihre Top-Signale von Ihren LinkedIn-Kontakten 1. Grades.',
      'signals.noSignals': 'Keine Signale anzuzeigen',
      'signals.action': 'Aktion',
      'signals.complete': 'Abschließen',
      'signals.delete': 'Löschen',

      // Onboarding
      'onboarding.title': 'Einführung',
      'onboarding.integrationsSetup': 'Integrationen einrichten',
      'onboarding.addNewContact': 'Neuen Kontakt hinzufügen',
      'onboarding.createFirstSequence': 'Erste Sequenz erstellen',
      'onboarding.addContactsToSequence': 'Kontakte zu einer Sequenz hinzufügen',
      'onboarding.runFirstTask': 'Erste Aufgabe ausführen',

      // Sidebar
      'sidebar.dashboard': 'Dashboard',
      'sidebar.findNew': 'Neu suchen',
      'sidebar.lists': 'Listen',
      'sidebar.templates': 'Vorlagen',
      'sidebar.sequences': 'Sequenzen',
      'sidebar.tasks': 'Aufgaben',
      'sidebar.inbox': 'Posteingang',
      'sidebar.deals': 'Geschäfte',
      'sidebar.analytics': 'Analytik',
      'sidebar.trialEnds': 'Testphase endet in {{days}} Tagen',
      'sidebar.upgradePlan': 'Plan upgraden 🚀',
      'sidebar.sales': 'Vertrieb',

      // KPI Details
      'kpiDetail.periodMay': 'Mai 2025',
      'kpiDetail.contactsDesc': 'Gesamtzahl der über alle Kanäle kontaktierten Kontakte in diesem Zeitraum.',
      'kpiDetail.emailContacts': 'E-Mail-Kontakte',
      'kpiDetail.linkedinContacts': 'LinkedIn-Kontakte',
      'kpiDetail.phoneContacts': 'Telefonkontakte',
      'kpiDetail.companiesDesc': 'Kontaktierte und eingebundene Unternehmen.',
      'kpiDetail.newCompanies': 'Neue Unternehmen',
      'kpiDetail.existingCompanies': 'Bestehende Unternehmen',
      'kpiDetail.activitiesDesc': 'Alle Outreach-Aktivitäten einschließlich E-Mails, Anrufe und Nachrichten.',
      'kpiDetail.emailsSent': 'E-Mails gesendet',
      'kpiDetail.callsMade': 'Anrufe getätigt',
      'kpiDetail.linkedinMessages': 'LinkedIn-Nachrichten',
      'kpiDetail.meetingsDesc': 'Geplante und durchgeführte Meetings mit Interessenten.',
      'kpiDetail.booked': 'Gebucht',
      'kpiDetail.attended': 'Teilgenommen',
      'kpiDetail.noShow': 'Nicht erschienen',
      'kpiDetail.dealsDesc': 'Aktive Geschäfte in der Pipeline und ihr aktueller Status.',
      'kpiDetail.won': 'Gewonnen',
      'kpiDetail.inProgress': 'In Bearbeitung',
      'kpiDetail.lost': 'Verloren',
      'kpiDetail.pipelineDesc': 'Gesamtwert der Pipeline verteilt auf Geschäftsphasen.',
      'kpiDetail.qualified': 'Qualifiziert',
      'kpiDetail.proposal': 'Angebot',
      'kpiDetail.negotiation': 'Verhandlung',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
