export type Lang = "en" | "pt" | "es";

export const langMeta: Record<Lang, { label: string; href: string }> = {
  en: { label: "EN", href: "/" },
  pt: { label: "PT", href: "/pt/" },
  es: { label: "ES", href: "/es/" },
};

export const siteConfig = {
  name: "Fortino",
  accentColor: "#1d4ed8",
  social: {
    linkedin: "https://www.linkedin.com/in/vinicius-fortino/",
    medium: "https://medium.com/fortino-lab",
    github: "https://github.com/viniciusfortino",
  },
  content: {
    en: {
      title: "Security and identity engineering for financial institutions",
      description:
        "Software engineer focused on security — over a decade building identity and access systems (IAM/CIAM) for financial institutions.",
      intro: "I'm",
      shortBio:
        "Software engineer focused on security, with over a decade building identity and access systems for financial institutions. I led PIX authorization at Itaú Unibanco and the authentication unification across the Stone group, for 12 million users. Currently an MSc candidate in Cyber Security at the University of London.",
      aboutHeading: "About Me",
      aboutMe: [
        "I've spent over twelve years in software development, and the last five specializing in identity and access — IAM and CIAM — within Brazilian financial institutions. It's a field I learned to take seriously in a specific way: in these systems, an authentication failure isn't just a bug, it's an incident with immediate regulatory consequences.",
        "I spent time at Itaú Unibanco, where I led the authorization team of the identity platform behind the Banking-as-a-Service product — responsible for the production authorization flow of PIX, at tens of millions of requests per day. Later, at Stone, I led the consolidation of the group's authentication systems: multiple in-house solutions, one per company, unified into a single platform for 12 million users, with no incident during the migration.",
        "Along the way, I worked with OAuth 2.0, OpenID Connect, CIBA, SAML, SCIM, FIDO2 and identity modeling in multi-tenant environments — always through the lens of Brazilian data protection law, central bank regulation, and audit controls. I also enjoy the part of the job that's about solving the problem nobody documented: finding the critical dependency with no fallback, or the metric everyone was reading wrong because the baseline was contaminated.",
        "I'm currently an MSc candidate in Cyber Security at the University of London. I write here about the topics in identity and security that interest me most — usually things I learned by solving a real problem, not theory.",
        "I hold dual citizenship (Portuguese/EU) and speak Portuguese, English and Spanish.",
      ],
      skills: [
        "Identity and Access Management (IAM)",
        "OAuth 2.0",
        "OpenID Connect",
        "SAML",
        "SCIM",
        "FIDO2/WebAuthn",
        "Multi-Factor Authentication",
        "RBAC",
        "Ping Identity",
        "Keycloak",
        "Application Security",
        "DevSecOps",
        "AWS",
        "Kubernetes",
        "Java",
        "Python",
        "Multi-tenant Architecture",
        "Technical Leadership",
      ],
      experience: [
        {
          company: "Mercado Livre",
          title: "Project Leader",
          dateRange: "Jul 2025 – Aug 2026",
          bullets: [
            "Led the front-end team (7 people) for Mercado Pago's credit card acquisition platform, with multiple entry points across web and mobile, operating in Brazil, Argentina and Mexico and coordinating with teams in Colombia and Uruguay.",
            "Mapped the business unit's acquisition flows end to end, identifying an undocumented critical dependency with no fallback or contingency plan. Led the remediation plan and produced architecture documentation adopted as reference by other team leaders in the unit.",
            "Owned dependency vulnerability management for the platform, with remediation prioritized by severity through the corporate SCA pipeline and a purpose-built Slack alerting service.",
            "Designed the MCP integrations between the acquisition products and the company's conversational assistant, exposing proposal status, KYC status and registered address lookup.",
          ],
        },
        {
          company: "Stone",
          title: "Technical Lead, Identity Platform",
          dateRange: "Dec 2023 – Jul 2025",
          bullets: [
            "Technical lead for the consolidation of authentication across the Stone group (12M users), replacing multiple in-house solutions — one per group company — with a single platform on Ping Identity. Two teams under direct leadership: authentication (8) and authorization (4).",
            "Strengthened the security posture of the authentication flow: introduced PKCE, opaque tokens and token revocation, none of which existed in the previous solution. Implemented a CIBA flow for server-initiated authorization with approval on a trusted device via key pair.",
            "Designed a unified identity model separating the person's identity from the access binding, resolving CPF collisions across acquired companies' databases and across distinct roles held by the same individual.",
            "Executed the migration in three stages across 12M users — new store in shadow mode, lazy provisioning at first login, bulk backfill — completed in three months, with rollback and circuit switch available and never activated.",
            "Instrumented the platform from a baseline of none: monthly active users per group company, request volume and true failure rate. Identified that the reported failure rate was an artifact of the MFA flow, invalidating the baseline used for monitoring.",
          ],
        },
        {
          company: "Zup Innovation (Itaú Unibanco Group)",
          title: "Technical Lead",
          dateRange: "Feb 2022 – Dec 2023",
          bullets: [
            "Directly led the authorization team of the CIAM platform behind Itaú Unibanco's Banking-as-a-Service product, responsible for the production authorization flow of PIX, Brazil's instant payment system, at 29M requests per day.",
            "Designed and built the in-house CIAM platform on AWS Lambda, within a technical partnership between Itaú Unibanco and AWS on serverless authentication and authorization. Later consolidated the authentication component onto Ping Identity while keeping authorization in-house.",
            "Multi-tenant architecture with per-account isolation and RBAC combining global roles inherited by all tenants with tenant-specific roles. In production for Itaú, PIX Itaú and two external partners, compliant with LGPD.",
            "Adapted the serverless architecture to critical-path latency requirements: runtime migration to Node to reduce cold starts, elevated concurrency limits through the AWS partnership, and secrets management via AWS Secrets Manager.",
            "Integrated federated SSO (SAML 2.0) and automated provisioning (SCIM) with Active Directory, and defended the identity architecture before the bank's executive management.",
            "Technical leadership of 26 people across two multidisciplinary teams (backend, frontend, QA, SRE).",
          ],
        },
        {
          company: "Zup Innovation (Itaú Unibanco Group)",
          title: "Senior Specialist Software Engineer",
          dateRange: "Mar 2021 – Feb 2022",
          bullets: [
            "Planned and implemented the multi-tenant architecture of StackSpot (Zup–Itaú joint venture), providing a hybrid, segmented environment with per-tenant traffic and data segregation.",
            "Its authentication and authorization component went on to become the Banking-as-a-Service CIAM platform.",
          ],
        },
        {
          company: "AME Digital (Americanas Group)",
          title: "Senior Software Engineer",
          dateRange: "Nov 2019 – Mar 2021",
          bullets: [
            "Contributed to the architecture definition and implementation of the OAuth 2.0 authentication protocol.",
            "Maintained and evolved the partner integration platform using Java and WebFlux.",
          ],
        },
        {
          company: "Banco Brasil Plural",
          title: "Software Engineer",
          dateRange: "Sep 2018 – Nov 2019",
          bullets: [
            "Design and implementation of the group's service-oriented architecture (Banco Brasil Plural and Genial Investimentos), primarily in C#.",
          ],
        },
        {
          company: "EY (Ernst & Young)",
          title: "IT Risk Consultant",
          dateRange: "Sep 2015 – Mar 2018",
          bullets: [
            "IT risk engagements across financial services, agribusiness, government bodies and healthcare, presenting findings and recommendations directly to clients.",
            "Worked as a full-stack developer using C#, Java and JavaScript.",
            "Identified the absence of source control across the firm's software projects and implemented a version control system from the ground up, from initial discovery through to establishing it as company standard.",
          ],
        },
        {
          company: "Desenvolve.co",
          title: "Co-founder / Developer",
          dateRange: "Dec 2013 – Aug 2015",
          bullets: [
            "Founded and ran a software development firm, responsible for client acquisition, stakeholder negotiation and the full delivery cycle from kick-off to handover. Clients ranged from small local businesses to FIFA and Santander.",
          ],
        },
        {
          company: "RioJunior",
          title: "Management Advisor",
          dateRange: "Aug 2013 – Dec 2013",
          bullets: [
            "Federation of Junior Enterprises of the State of Rio de Janeiro. Worked in tactical-operational control, monitoring and strategic analysis, and in facilitating knowledge management.",
          ],
        },
        {
          company: "Gama Júnior",
          title: "Quality Consultant",
          dateRange: "Jan 2013 – Dec 2013",
          bullets: [
            "Multidisciplinary junior enterprise. Responsible for controlling and assuring the quality of services delivered, applying and enforcing the use of quality tools.",
          ],
        },
      ],
      education: [
        {
          school: "University of London / Royal Holloway",
          degree: "MSc Cyber Security",
          dateRange: "In progress",
          achievements: [],
        },
        {
          school: "PM3",
          degree: "Product Leadership",
          dateRange: "",
          achievements: [],
        },
      ],
      nav: { about: "About", experience: "Experience", education: "Education", articles: "Articles" },
      sections: { hello: "Hello", experience: "Experience", education: "Education", articles: "Articles", projects: "Projects" },
      footer: { rights: "All rights reserved." },
      latestArticle: "Latest Article",
      readMore: "Read on Medium →",
    },
    pt: {
      title: "Engenharia de segurança e identidade para instituições financeiras",
      description:
        "Engenheiro de software focado em segurança — mais de uma década construindo sistemas de identidade e acesso (IAM/CIAM) para instituições financeiras.",
      intro: "Sou",
      shortBio:
        "Engenheiro de software focado em segurança, com mais de uma década construindo sistemas de identidade e acesso para instituições financeiras. Liderei a autorização do PIX no Itaú Unibanco e a unificação da autenticação do grupo Stone, para 12 milhões de usuários. Atualmente mestrando em Cyber Security pela University of London.",
      aboutHeading: "Sobre Mim",
      aboutMe: [
        "São mais de doze anos em desenvolvimento de software, e os últimos cinco especializado em identidade e acesso — IAM e CIAM — dentro de instituições financeiras brasileiras. É uma área que aprendi a levar a sério de um jeito específico: nesses sistemas, uma falha de autenticação não é só um bug, é um incidente com consequência regulatória imediata.",
        "Passei pelo Itaú Unibanco, onde liderei o time de autorização da plataforma de identidade por trás do produto de Banking-as-a-Service — responsável pelo fluxo de autorização do PIX em produção, na casa das dezenas de milhões de requisições por dia. Depois, na Stone, liderei a consolidação dos sistemas de autenticação do grupo: várias soluções próprias, uma por empresa, unificadas em uma única plataforma para 12 milhões de usuários, sem incidente durante a migração.",
        "No caminho, trabalhei com OAuth 2.0, OpenID Connect, CIBA, SAML, SCIM, FIDO2 e modelagem de identidade em ambientes multi-tenant — sempre sob a ótica da LGPD, da regulação do Banco Central e de controles de auditoria. Também gosto da parte do trabalho que é resolver o problema que ninguém documentou: achar a dependência crítica sem fallback, ou a métrica que todo mundo lia errado porque a baseline estava contaminada.",
        "Atualmente sou mestrando em Cyber Security pela University of London. Escrevo aqui sobre os temas de identidade e segurança que mais me interessam — normalmente coisas que aprendi resolvendo um problema real, não teoria.",
        "Tenho dupla cidadania (portuguesa/UE) e falo português, inglês e espanhol.",
      ],
      skills: [
        "Identity and Access Management (IAM)",
        "OAuth 2.0",
        "OpenID Connect",
        "SAML",
        "SCIM",
        "FIDO2/WebAuthn",
        "Multi-Factor Authentication",
        "RBAC",
        "Ping Identity",
        "Keycloak",
        "Application Security",
        "DevSecOps",
        "AWS",
        "Kubernetes",
        "Java",
        "Python",
        "Multi-tenant Architecture",
        "Technical Leadership",
      ],
      experience: [
        {
          company: "Mercado Livre",
          title: "Project Leader",
          dateRange: "jul/2025 – ago/2026",
          bullets: [
            "Liderei o time de front-end (7 pessoas) da plataforma de aquisição de cartão de crédito do Mercado Pago, com múltiplos pontos de entrada em web e mobile, operação no Brasil, Argentina e México e coordenação com times na Colômbia e no Uruguai.",
            "Mapeei os fluxos de aquisição da unidade de negócio de ponta a ponta, identificando uma dependência crítica não documentada, sem fallback nem plano de contingência. Conduzi o plano de remediação e produzi a documentação de arquitetura adotada como referência por outros líderes da unidade.",
            "Responsável pela gestão de vulnerabilidades de dependências da plataforma, com remediação priorizada por severidade via pipeline corporativo de SCA e um serviço de alertas em Slack construído para esse fim.",
            "Desenhei as integrações MCP entre os produtos de aquisição e o assistente conversacional da empresa, expondo status de proposta, status de KYC e consulta de endereço cadastrado.",
          ],
        },
        {
          company: "Stone",
          title: "Technical Lead, Identity Platform",
          dateRange: "dez/2023 – jul/2025",
          bullets: [
            "Liderança técnica da consolidação da autenticação do grupo Stone (12M de usuários), substituindo várias soluções próprias — uma por empresa do grupo — por uma única plataforma em Ping Identity. Dois times sob liderança direta: autenticação (8) e autorização (4).",
            "Fortaleci a postura de segurança do fluxo de autenticação: introduzi PKCE, tokens opacos e revogação de token, nada disso existia na solução anterior. Implementei fluxo CIBA para autorização iniciada pelo servidor com aprovação em dispositivo confiável via par de chaves.",
            "Desenhei um modelo unificado de identidade separando a identidade da pessoa do vínculo de acesso, resolvendo colisões de CPF entre as bases das empresas adquiridas e entre papéis distintos exercidos pela mesma pessoa.",
            "Executei a migração em três etapas para 12M de usuários — nova base em shadow mode, provisionamento lazy no primeiro login e backfill em massa — concluída em três meses, com rollback e circuit switch disponíveis e nunca acionados.",
            "Instrumentei a plataforma a partir do zero: usuários ativos mensais por empresa do grupo, volume de requisições e taxa real de falha. Identifiquei que a taxa de falha reportada era um artefato do fluxo de MFA, invalidando a baseline usada no monitoramento.",
          ],
        },
        {
          company: "Zup Innovation (Grupo Itaú Unibanco)",
          title: "Technical Lead",
          dateRange: "fev/2022 – dez/2023",
          bullets: [
            "Liderei diretamente o time de autorização da plataforma CIAM por trás do produto de Banking-as-a-Service do Itaú Unibanco, responsável pelo fluxo de autorização do PIX em produção, a 29M de requisições por dia.",
            "Desenhei e construí a plataforma CIAM própria em AWS Lambda, dentro de uma parceria técnica entre Itaú Unibanco e AWS sobre autenticação e autorização serverless. Depois consolidei o componente de autenticação em Ping Identity, mantendo a autorização na plataforma própria.",
            "Arquitetura multi-tenant com isolamento por conta e RBAC combinando papéis globais herdados por todos os tenants e papéis específicos por tenant. Em produção para Itaú, PIX Itaú e dois parceiros externos, em conformidade com a LGPD.",
            "Adaptei a arquitetura serverless aos requisitos de latência do caminho crítico: migração de runtime para Node para reduzir cold starts, limites de concorrência elevados via parceria com a AWS e gestão de segredos com AWS Secrets Manager.",
            "Integrei SSO federado (SAML 2.0) e provisionamento automatizado (SCIM) com Active Directory, e defendi a arquitetura de identidade perante a diretoria executiva do banco.",
            "Liderança técnica de 26 pessoas em dois times multidisciplinares (backend, frontend, QA, SRE).",
          ],
        },
        {
          company: "Zup Innovation (Grupo Itaú Unibanco)",
          title: "Engenheiro de Software Especialista Sênior",
          dateRange: "mar/2021 – fev/2022",
          bullets: [
            "Planejei e implementei a arquitetura multi-tenant do StackSpot (joint venture Zup–Itaú), provendo um ambiente híbrido e segmentado com segregação de tráfego e dados por tenant.",
            "Seu componente de autenticação e autorização veio a se tornar a plataforma CIAM do Banking-as-a-Service.",
          ],
        },
        {
          company: "AME Digital (Grupo Americanas)",
          title: "Engenheiro de Software Sênior",
          dateRange: "nov/2019 – mar/2021",
          bullets: [
            "Contribuí para a definição da arquitetura e a implementação do protocolo de autenticação OAuth 2.0.",
            "Mantive e evoluí a plataforma de integração de parceiros usando Java e WebFlux.",
          ],
        },
        {
          company: "Banco Brasil Plural",
          title: "Engenheiro de Software",
          dateRange: "set/2018 – nov/2019",
          bullets: [
            "Desenho e implementação da arquitetura orientada a serviços do grupo (Banco Brasil Plural e Genial Investimentos), principalmente em C#.",
          ],
        },
        {
          company: "EY (Ernst & Young)",
          title: "Consultor de Risco de TI",
          dateRange: "set/2015 – mar/2018",
          bullets: [
            "Projetos de risco de TI em serviços financeiros, agronegócio, órgãos públicos e saúde, apresentando achados e recomendações diretamente aos clientes.",
            "Atuação como desenvolvedor full-stack em C#, Java e JavaScript.",
            "Identifiquei a ausência de controle de versão nos projetos de software da firma e implementei um sistema de versionamento do zero, do diagnóstico inicial até estabelecê-lo como padrão da empresa.",
          ],
        },
        {
          company: "Desenvolve.co",
          title: "Co-fundador / Desenvolvedor",
          dateRange: "dez/2013 – ago/2015",
          bullets: [
            "Fundei e toquei uma empresa de desenvolvimento de software, responsável pela captação de clientes, negociação com stakeholders e pelo ciclo completo de entrega, do kick-off ao handover. Clientes iam de pequenos negócios locais a FIFA e Santander.",
          ],
        },
        {
          company: "RioJunior",
          title: "Assessor de Gestão",
          dateRange: "ago/2013 – dez/2013",
          bullets: [
            "Federação das Empresas Juniores do Estado do Rio de Janeiro. Atuação em controle tático-operacional, monitoramento e análise estratégica, e na facilitação da gestão do conhecimento.",
          ],
        },
        {
          company: "Gama Júnior",
          title: "Consultor de Qualidade",
          dateRange: "jan/2013 – dez/2013",
          bullets: [
            "Empresa júnior multidisciplinar. Responsável por controlar e garantir a qualidade dos serviços entregues, aplicando e disseminando o uso de ferramentas da qualidade.",
          ],
        },
      ],
      education: [
        {
          school: "University of London / Royal Holloway",
          degree: "MSc Cyber Security",
          dateRange: "em andamento",
          achievements: [],
        },
        {
          school: "PM3",
          degree: "Product Leadership",
          dateRange: "",
          achievements: [],
        },
      ],
      nav: { about: "Sobre", experience: "Experiência", education: "Formação", articles: "Artigos" },
      sections: { hello: "Olá", experience: "Experiência", education: "Formação", articles: "Artigos", projects: "Projetos" },
      footer: { rights: "Todos os direitos reservados." },
      latestArticle: "Último Artigo",
      readMore: "Ler no Medium →",
    },
    es: {
      title: "Ingeniería de seguridad e identidad para instituciones financieras",
      description:
        "Ingeniero de software enfocado en seguridad — más de una década construyendo sistemas de identidad y acceso (IAM/CIAM) para instituciones financieras.",
      intro: "Soy",
      shortBio:
        "Ingeniero de software enfocado en seguridad, con más de una década construyendo sistemas de identidad y acceso para instituciones financieras. Lideré la autorización de PIX en Itaú Unibanco y la unificación de la autenticación del grupo Stone, para 12 millones de usuarios. Actualmente candidato a MSc en Cyber Security por la University of London.",
      aboutHeading: "Sobre Mí",
      aboutMe: [
        "Son más de doce años en desarrollo de software, y los últimos cinco especializado en identidad y acceso — IAM y CIAM — dentro de instituciones financieras brasileñas. Es un área que aprendí a tomar en serio de una manera específica: en estos sistemas, un fallo de autenticación no es solo un bug, es un incidente con consecuencia regulatoria inmediata.",
        "Pasé por Itaú Unibanco, donde lideré el equipo de autorización de la plataforma de identidad detrás del producto de Banking-as-a-Service — responsable del flujo de autorización de PIX en producción, en el orden de decenas de millones de solicitudes por día. Después, en Stone, lideré la consolidación de los sistemas de autenticación del grupo: varias soluciones propias, una por empresa, unificadas en una única plataforma para 12 millones de usuarios, sin incidente durante la migración.",
        "En el camino, trabajé con OAuth 2.0, OpenID Connect, CIBA, SAML, SCIM, FIDO2 y modelado de identidad en entornos multi-tenant — siempre bajo la óptica de la ley brasileña de protección de datos, la regulación del banco central y los controles de auditoría. También disfruto la parte del trabajo que consiste en resolver el problema que nadie documentó: encontrar la dependencia crítica sin fallback, o la métrica que todos leían mal porque la baseline estaba contaminada.",
        "Actualmente soy candidato a MSc en Cyber Security por la University of London. Escribo aquí sobre los temas de identidad y seguridad que más me interesan — normalmente cosas que aprendí resolviendo un problema real, no teoría.",
        "Tengo doble ciudadanía (portuguesa/UE) y hablo portugués, inglés y español.",
      ],
      skills: [
        "Identity and Access Management (IAM)",
        "OAuth 2.0",
        "OpenID Connect",
        "SAML",
        "SCIM",
        "FIDO2/WebAuthn",
        "Multi-Factor Authentication",
        "RBAC",
        "Ping Identity",
        "Keycloak",
        "Application Security",
        "DevSecOps",
        "AWS",
        "Kubernetes",
        "Java",
        "Python",
        "Multi-tenant Architecture",
        "Technical Leadership",
      ],
      experience: [
        {
          company: "Mercado Libre",
          title: "Project Leader",
          dateRange: "jul/2025 – ago/2026",
          bullets: [
            "Lideré el equipo de front-end (7 personas) de la plataforma de adquisición de tarjeta de crédito de Mercado Pago, con múltiples puntos de entrada en web y mobile, operación en Brasil, Argentina y México y coordinación con equipos en Colombia y Uruguay.",
            "Mapeé los flujos de adquisición de la unidad de negocio de extremo a extremo, identificando una dependencia crítica no documentada, sin fallback ni plan de contingencia. Conduje el plan de remediación y produje la documentación de arquitectura adoptada como referencia por otros líderes de la unidad.",
            "Responsable de la gestión de vulnerabilidades de dependencias de la plataforma, con remediación priorizada por severidad vía pipeline corporativo de SCA y un servicio de alertas en Slack construido para ese fin.",
            "Diseñé las integraciones MCP entre los productos de adquisición y el asistente conversacional de la empresa, exponiendo estado de propuesta, estado de KYC y consulta de dirección registrada.",
          ],
        },
        {
          company: "Stone",
          title: "Technical Lead, Identity Platform",
          dateRange: "dic/2023 – jul/2025",
          bullets: [
            "Liderazgo técnico de la consolidación de la autenticación del grupo Stone (12M de usuarios), reemplazando varias soluciones propias — una por empresa del grupo — por una única plataforma en Ping Identity. Dos equipos bajo liderazgo directo: autenticación (8) y autorización (4).",
            "Fortalecí la postura de seguridad del flujo de autenticación: introduje PKCE, tokens opacos y revocación de token, nada de eso existía en la solución anterior. Implementé un flujo CIBA para autorización iniciada por el servidor con aprobación en dispositivo confiable vía par de claves.",
            "Diseñé un modelo unificado de identidad separando la identidad de la persona del vínculo de acceso, resolviendo colisiones de CPF entre las bases de las empresas adquiridas y entre roles distintos ejercidos por la misma persona.",
            "Ejecuté la migración en tres etapas para 12M de usuarios — nueva base en shadow mode, provisionamiento lazy en el primer login y backfill masivo — concluida en tres meses, con rollback y circuit switch disponibles y nunca accionados.",
            "Instrumenté la plataforma desde cero: usuarios activos mensuales por empresa del grupo, volumen de solicitudes y tasa real de fallo. Identifiqué que la tasa de fallo reportada era un artefacto del flujo de MFA, invalidando la baseline usada en el monitoreo.",
          ],
        },
        {
          company: "Zup Innovation (Grupo Itaú Unibanco)",
          title: "Technical Lead",
          dateRange: "feb/2022 – dic/2023",
          bullets: [
            "Lideré directamente el equipo de autorización de la plataforma CIAM detrás del producto de Banking-as-a-Service de Itaú Unibanco, responsable del flujo de autorización de PIX en producción, a 29M de solicitudes por día.",
            "Diseñé y construí la plataforma CIAM propia en AWS Lambda, dentro de una alianza técnica entre Itaú Unibanco y AWS sobre autenticación y autorización serverless. Luego consolidé el componente de autenticación en Ping Identity, manteniendo la autorización en la plataforma propia.",
            "Arquitectura multi-tenant con aislamiento por cuenta y RBAC combinando roles globales heredados por todos los tenants y roles específicos por tenant. En producción para Itaú, PIX Itaú y dos socios externos, en conformidad con la LGPD.",
            "Adapté la arquitectura serverless a los requisitos de latencia de la ruta crítica: migración de runtime a Node para reducir cold starts, límites de concurrencia elevados vía la alianza con AWS y gestión de secretos con AWS Secrets Manager.",
            "Integré SSO federado (SAML 2.0) y provisionamiento automatizado (SCIM) con Active Directory, y defendí la arquitectura de identidad ante la dirección ejecutiva del banco.",
            "Liderazgo técnico de 26 personas en dos equipos multidisciplinarios (backend, frontend, QA, SRE).",
          ],
        },
        {
          company: "Zup Innovation (Grupo Itaú Unibanco)",
          title: "Ingeniero de Software Especialista Senior",
          dateRange: "mar/2021 – feb/2022",
          bullets: [
            "Planifiqué e implementé la arquitectura multi-tenant de StackSpot (joint venture Zup–Itaú), proveyendo un entorno híbrido y segmentado con segregación de tráfico y datos por tenant.",
            "Su componente de autenticación y autorización llegó a convertirse en la plataforma CIAM del Banking-as-a-Service.",
          ],
        },
        {
          company: "AME Digital (Grupo Americanas)",
          title: "Ingeniero de Software Senior",
          dateRange: "nov/2019 – mar/2021",
          bullets: [
            "Contribuí a la definición de la arquitectura y la implementación del protocolo de autenticación OAuth 2.0.",
            "Mantuve y evolucioné la plataforma de integración de socios usando Java y WebFlux.",
          ],
        },
        {
          company: "Banco Brasil Plural",
          title: "Ingeniero de Software",
          dateRange: "sep/2018 – nov/2019",
          bullets: [
            "Diseño e implementación de la arquitectura orientada a servicios del grupo (Banco Brasil Plural y Genial Investimentos), principalmente en C#.",
          ],
        },
        {
          company: "EY (Ernst & Young)",
          title: "Consultor de Riesgo de TI",
          dateRange: "sep/2015 – mar/2018",
          bullets: [
            "Proyectos de riesgo de TI en servicios financieros, agronegocio, organismos públicos y salud, presentando hallazgos y recomendaciones directamente a los clientes.",
            "Actuación como desarrollador full-stack en C#, Java y JavaScript.",
            "Identifiqué la ausencia de control de versiones en los proyectos de software de la firma e implementé un sistema de versionado desde cero, del diagnóstico inicial hasta establecerlo como estándar de la empresa.",
          ],
        },
        {
          company: "Desenvolve.co",
          title: "Cofundador / Desarrollador",
          dateRange: "dic/2013 – ago/2015",
          bullets: [
            "Fundé y dirigí una empresa de desarrollo de software, responsable de la captación de clientes, la negociación con stakeholders y el ciclo completo de entrega, del kick-off al handover. Los clientes iban de pequeños negocios locales a FIFA y Santander.",
          ],
        },
        {
          company: "RioJunior",
          title: "Asesor de Gestión",
          dateRange: "ago/2013 – dic/2013",
          bullets: [
            "Federación de Empresas Junior del Estado de Río de Janeiro. Actuación en control táctico-operacional, monitoreo y análisis estratégico, y en la facilitación de la gestión del conocimiento.",
          ],
        },
        {
          company: "Gama Júnior",
          title: "Consultor de Calidad",
          dateRange: "ene/2013 – dic/2013",
          bullets: [
            "Empresa junior multidisciplinaria. Responsable de controlar y asegurar la calidad de los servicios entregados, aplicando y difundiendo el uso de herramientas de calidad.",
          ],
        },
      ],
      education: [
        {
          school: "University of London / Royal Holloway",
          degree: "MSc Cyber Security",
          dateRange: "en curso",
          achievements: [],
        },
        {
          school: "PM3",
          degree: "Product Leadership",
          dateRange: "",
          achievements: [],
        },
      ],
      nav: { about: "Sobre", experience: "Experiencia", education: "Formación", articles: "Artículos" },
      sections: { hello: "Hola", experience: "Experiencia", education: "Formación", articles: "Artículos", projects: "Proyectos" },
      footer: { rights: "Todos los derechos reservados." },
      latestArticle: "Último Artículo",
      readMore: "Leer en Medium →",
    },
  },
};
