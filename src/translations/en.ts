export const translations = {
  header: {
    nav: {
      services: "Services",
      security: "Security",
      features: "Features",
      contact: "Contact",
    },
    language: "עברית",
  },
  hero: {
    title: "Secured AI Infrastructure for Businesses",
    subtitle: "Secure, domain-specific AI built for teams that need control",
    description: "Tikanify delivers an enterprise-grade platform that gives businesses private, compliant AI infrastructure. We add secure RAG and search to keep knowledge close, plus agentic AI that makes every team move faster.",
    cta: "",
    ctaSecondary: "",
  },
  security: {
    title: "What 'Secure AI' Means for Your Business",
    subtitle: "Security and governance built for regulated, data-sensitive teams",
    description: "This is not the same as using ChatGPT carefully. We provide enterprise-grade secure infrastructure designed for organizations that need tight control, auditability, and privacy.",
    guarantees: [
      {
        title: "Zero Data Leakage",
        description: "Client data never leaks to public models or other customers",
      },
      {
        title: "No Data Training",
        description: "No training on your data - ever. Your data remains completely private.",
      },
      {
        title: "Full Auditability",
        description: "Complete visibility into who asked what, when, and why",
      },
      {
        title: "Privilege-Aware Access",
        description: "Case-level isolation with granular access controls",
      },
      {
        title: "Full Compliance",
        description: "Compliant with GDPR, Israeli Privacy Protection Law, and Bar Association ethics requirements",
      },
      {
        title: "Deployment Where You Need It",
        description: "Run in your VPC or on-prem with encrypted isolation and key management under your control",
      },
    ],
  },
  supportedModels: {
    title: "Connect to Leading AI Models",
    subtitle: "Access the best AI models securely through our infrastructure",
    description: "We provide secure, private access to all major AI models. Your data stays protected while you leverage the power of leading AI technology.",
    securedConnection: "Secured Connection",
  },
  services: {
    title: "Our Services",
    subtitle: "Complete AI infrastructure for modern businesses",
    items: [
      {
        title: "Private LLM Access",
        description: "Secure, private access to leading language models—enterprise controls without sending data to public endpoints",
      },
      {
        title: "Observability & Governance",
        description: "Visibility and guardrails for how teams use AI—track cost, usage, and data with auditable controls",
      },
      {
        title: "Private RAG System",
        description: "Intelligent document search that keeps knowledge private while delivering contextual, accurate answers",
      },
      {
        title: "Custom Agent Development",
        description: "Build proprietary AI agents tailored to your specific workflows—from ops automation to customer interactions",
      },
      {
        title: "Deep Document Research",
        description: "Advanced AI-powered analysis on your proprietary documents to extract insights, patterns, and recommendations",
      },
      {
        title: "Litigation Recommendations",
        description: "Scenario and risk modeling that uses your historical data to forecast outcomes and guide decisions",
      },
      {
        title: "Proprietary Tools",
        description: "Custom-built tools including summarization, email preparation, contract analysis, and more",
      },
      {
        title: "Local Law Integration",
        description: "Connected to local regulation and policy sources so your AI understands relevant context and requirements",
      },
      {
        title: "Data Connectors",
        description: "Secure connectors to your data sources—Google Drive, Confluence, OneDrive, Dropbox, and more",
      },
    ],
    details: {
      privateLLM: {
        title: "Private LLM Access",
        subtitle: "Secure access to advanced AI models",
        overview: "Access cutting-edge language models like ChatGPT, Claude, and Gemini through a fully secure, private infrastructure designed for businesses that need control. Unlike public AI services, our private LLM layer keeps sensitive data inside your environment with encryption, auditability, and isolation.",
        detailedDescription: "Private LLM Access gives organizations enterprise-grade use of leading language models without exposing data to public endpoints. Deployed inside your network or a dedicated tenant, every interaction is encrypted end-to-end, logged for audit, and isolated from other customers. You get the full power of modern AI while meeting the security and compliance standards your business requires.",
        useCases: [
          {
            title: "Customer Communication",
            description: "Draft professional emails and responses without exposing sensitive customer information to public AI services. Keep brand tone consistent while ensuring names, account details, and confidential data stay private.",
          },
          {
            title: "Document Analysis",
            description: "Analyze contracts, policies, financial reports, or support logs while maintaining complete data privacy. Get instant highlights of key terms, risks, and action items without data ever leaving your secure environment.",
          },
          {
            title: "Research Assistance",
            description: "Get AI-powered research for product, market, regulatory, or technical topics. Ask complex questions in natural language and receive detailed, cited responses while keeping queries and context private.",
          },
          {
            title: "Drafting & Templates",
            description: "Generate first drafts of documents and templates based on your standards. Keep generated content inside your controlled environment for fast, compliant team productivity.",
          },
        ],
        benefits: [
          "Zero data leakage to public models—data stays in your environment",
          "Granular permissions and usage controls",
          "Enterprise security with end-to-end encryption and audit logs",
          "Access to multiple leading models (ChatGPT, Claude, Gemini) in one platform",
          "Configurable guardrails and policies for your specific needs",
        ],
        howItWorks: "Private LLM is deployed in your secure network or a dedicated cloud tenant with strict access controls. All requests run through encrypted, isolated compute, never stored on public provider servers, and never used to train public models. Every interaction is logged for audit, giving you full visibility into AI usage across your organization.",
      },
      observability: {
        title: "Observability & Governance",
        subtitle: "Complete visibility and control",
        overview: "Monitor and manage AI usage across your organization with detailed analytics, cost tracking, and governance controls. See who is using AI, what data is accessed, and how much it costs—all in one place.",
        detailedDescription: "Effective AI governance requires complete visibility into how AI tools are used. Observability & Governance provides real-time monitoring, cost controls, policy enforcement, and detailed audit trails. Role-based access controls and configurable policies ensure AI is used appropriately and efficiently across your business.",
        useCases: [
          {
            title: "Usage Analytics",
            description: "Track which teams use AI, when, and for what purposes with real-time dashboards by department, project, or user. Identify high-value use cases and spot inefficiencies.",
          },
          {
            title: "Cost Management",
            description: "Monitor AI spend in real time, set budgets, and break down costs by model, department, or use case. Get alerts to prevent overspend and forecast future costs.",
          },
          {
            title: "Compliance Auditing",
            description: "Maintain detailed audit logs of all AI interactions for compliance reporting and risk management. Every query, document access, and response is timestamped and traceable.",
          },
          {
            title: "Policy Enforcement",
            description: "Enforce AI usage policies with automated controls and alerts. Set rules by model, data type, or workflow and require approvals for high-risk operations.",
          },
        ],
        benefits: [
          "Real-time usage monitoring with customizable dashboards and alerts",
          "Detailed cost breakdowns and forecasting tools for budget planning",
          "Compliance-ready audit trails with exportable logs in standard formats",
          "Role-based access controls and customizable usage policies",
          "Automatic anomaly detection to identify unusual or suspicious activity",
          "Integration with existing compliance and risk management systems",
          "Historical analytics to track trends and measure AI adoption over time",
        ],
        howItWorks: "Observability collects data from AI interactions across your organization—usage metrics, cost information, queries, and user details—secured and analyzed in real time. Configure alerts, export audit logs, and enforce policies from one place, all within your controlled environment.",
      },
      privateRAG: {
        title: "Private RAG System",
        subtitle: "Intelligent document search and retrieval",
        overview: "Search across your entire document library with AI-powered semantic search that understands context, terminology, and relationships. Private RAG transforms how teams find and use information from your knowledge base with secure connectors to Google Drive, Confluence, OneDrive, Dropbox, and more.",
        detailedDescription: "Private RAG creates intelligent indexes of your repositories, understanding concepts and relationships—not just keywords. Connect safely to content sources like Google Drive, Confluence, OneDrive, and Dropbox, then ask a question and get the most relevant passages in seconds, synthesized into contextual answers with source citations. Access respects your existing permissions so teams only see what they're allowed to view.",
        useCases: [
          {
            title: "Project Knowledge Search",
            description: "Find relevant project docs, decisions, and learnings by asking natural language questions. Get instant access to summaries, outcomes, and key context without digging through folders.",
          },
          {
            title: "Template Discovery",
            description: "Locate templates, playbooks, and approved snippets that match current requirements to keep deliverables consistent and fast.",
          },
          {
            title: "Account History",
            description: "Review past communications, contracts, and decisions for any account to prepare for meetings with complete context.",
          },
          {
            title: "Policy & Compliance Search",
            description: "Find references to policies, regulations, or requirements across all documents to speed audits and compliance reviews.",
          },
        ],
        benefits: [
          "Semantic search understands context and terminology, not just keywords",
          "Searches across all documents securely with encrypted indexing",
          "Returns contextualized, relevant results ranked by relevance and recency",
          "Respects document access permissions and security classifications",
          "Supports multiple document formats including PDFs, Word, emails, and case management systems",
          "Continuously learns from your document corpus to improve search relevance",
          "Provides source citations so you can verify and reference original documents",
        ],
        howItWorks: "Private RAG uses embedding models to index documents by meaning. Queries are matched to relevant passages with similarity search, then routed to a language model that generates an answer with citations. Everything runs inside your secure environment and respects existing access controls.",
      },
      customAgents: {
        title: "Custom Agent Development",
        subtitle: "Build proprietary AI agents for your business",
        overview: "Create custom AI agents tailored to your workflows—from support triage to finance ops. Agents automate repetitive work, handle routine processes, and augment your team while running inside your secure environment.",
        detailedDescription: "Custom agents are specialized systems built for your processes, terminology, and requirements. They automate complex workflows, make context-aware decisions, and connect to your existing systems. We help you identify the right opportunities, design agents that fit, and deploy them securely so teams move faster with the right guardrails.",
        useCases: [
          {
            title: "Workflow Automation",
            description: "Deploy agents that organize work, track deadlines, and send reminders across teams. Automate filing, data extraction, and status updates in the right systems.",
          },
          {
            title: "Customer Onboarding",
            description: "Guide new customers through intake, collect required info and documents, and schedule next steps. Generate summaries for teams automatically.",
          },
          {
            title: "Document Classification",
            description: "Automatically categorize and route incoming documents to the right teams based on content and context—reduce manual triage time.",
          },
          {
            title: "Policy & Contract Review",
            description: "Automate first-pass reviews to flag unusual terms, risks, and deviations from your standards so experts can focus on the important parts.",
          },
        ],
        benefits: [
          "Tailored to your specific needs and workflows",
          "Integrates seamlessly with existing systems and tools",
          "Improves efficiency by automating repetitive, time-consuming tasks",
          "Continuously learns and improves from usage patterns and feedback",
          "Maintains complete security and compliance within your controlled environment",
          "Scalable architecture that can handle growing workloads",
          "Customizable to adapt as your processes evolve",
        ],
        howItWorks: "Custom Agent Development starts by mapping workflows and identifying automation opportunities. Agents combine AI models, business logic, and integrations with your systems. They are tested in your environment, respect access controls, and can require human approval for critical decisions while automating routine operations.",
      },
      deepResearch: {
        title: "Deep Document Research",
        subtitle: "Advanced AI-powered document analysis",
        overview: "Extract insights, patterns, and recommendations from your proprietary legal documents using advanced AI analysis techniques. Our Deep Document Research service goes beyond simple search to provide comprehensive analysis of your entire document corpus. Discover hidden patterns, identify trends, and gain strategic insights that would take months of manual analysis to uncover.",
        detailedDescription: "Deep Document Research uses sophisticated AI algorithms to analyze your entire document library, identifying patterns, trends, and insights that aren't apparent from individual document review. The system can process thousands of documents simultaneously, extracting structured information, comparing documents, identifying anomalies, and generating comprehensive reports. This enables strategic analysis at scale, helping you understand your firm's historical practices, identify optimization opportunities, and make data-driven decisions about legal strategy, pricing, and resource allocation.",
        useCases: [
          {
            title: "Contract Analysis",
            description: "Analyze hundreds of contracts to identify common clauses, risk patterns, and negotiation trends across your portfolio. The system can identify which contract terms are most frequently negotiated, which clauses lead to disputes, and how contract structures vary across different deal types. This analysis helps you standardize successful contract patterns, identify problematic clauses, and improve your contract negotiation strategies based on historical data.",
          },
          {
            title: "Legal Strategy Insights",
            description: "Review historical case outcomes to identify successful legal strategies and approaches used by your firm. Analyze which arguments, approaches, and strategies have been most effective in different types of cases. Understand how case characteristics correlate with outcomes, helping you make better decisions about case strategy, settlement timing, and resource allocation. This data-driven approach to strategy development leverages your firm's accumulated expertise.",
          },
          {
            title: "Regulatory Change Impact",
            description: "Assess how regulatory changes affect existing contracts and legal documents in your knowledge base. When new regulations are introduced, the system can scan all your contracts and documents to identify which ones are impacted, how they're affected, and what changes may be required. This proactive approach helps you stay ahead of compliance requirements and avoid potential issues before they arise.",
          },
          {
            title: "Client Relationship Analysis",
            description: "Analyze client communication patterns, contract terms, and case outcomes to understand client relationships and preferences. Identify which clients have the most complex needs, which relationships are most profitable, and how client characteristics correlate with case types and outcomes. This analysis helps inform client acquisition strategies, relationship management, and resource planning.",
          },
        ],
        benefits: [
          "Processes thousands of documents quickly, completing in hours what would take months manually",
          "Identifies patterns and correlations that humans might miss across large datasets",
          "Generates actionable insights and recommendations with supporting evidence",
          "Maintains complete document privacy with all processing within your secure environment",
          "Provides comprehensive reports with visualizations and detailed findings",
          "Supports multiple analysis types including statistical analysis, pattern recognition, and trend identification",
          "Can be customized for specific research questions and analysis objectives",
        ],
        howItWorks: "Deep Document Research uses advanced natural language processing and machine learning to analyze your document corpus. Documents are processed to extract structured information, identify entities and relationships, and create searchable indexes. The system then applies various analysis techniques including statistical analysis, clustering, and pattern recognition to identify trends and insights. Analysis can be customized for specific research questions, and results are presented in comprehensive reports with visualizations and supporting evidence. All processing happens within your secure environment, ensuring complete privacy and compliance.",
      },
      litigation: {
        title: "Litigation Recommendations",
        subtitle: "AI-driven litigation strategy and analysis",
        overview: "Get data-driven recommendations for litigation strategy, risk assessment, and case outcome predictions based on your firm's historical data. Our Litigation Recommendations service leverages your firm's accumulated case experience to provide strategic insights that help you make better decisions about case strategy, settlement negotiations, and resource allocation. Learn from your past successes and challenges to improve future outcomes.",
        detailedDescription: "Litigation Recommendations uses machine learning to analyze your firm's historical case data, identifying patterns and correlations between case characteristics, strategies, and outcomes. The system can predict likely outcomes, recommend effective strategies, and assess risks based on similarities to past cases. This data-driven approach complements your legal expertise, providing evidence-based recommendations that help you make informed decisions about case strategy, settlement negotiations, and trial preparation. All analysis is based on your firm's own data, ensuring recommendations are relevant to your practice areas and client base.",
        useCases: [
          {
            title: "Case Strategy Development",
            description: "Analyze similar past cases to recommend effective legal strategies and approaches for new litigation matters. Input case characteristics, and the system identifies similar past cases, analyzes which strategies were most effective, and recommends approaches that have worked well in comparable situations. This helps you develop strategies based on proven approaches while adapting them to the specific circumstances of the current case.",
          },
          {
            title: "Risk Assessment",
            description: "Evaluate case strengths, weaknesses, and likely outcomes to inform settlement decisions and trial strategy. The system analyzes case characteristics, compares them to historical data, and provides risk-adjusted assessments of likely outcomes. Understand the probability of success, potential settlement ranges, and factors that influence case outcomes. This quantitative risk assessment complements your qualitative judgment, providing a more complete picture for strategic decision-making.",
          },
          {
            title: "Precedent Analysis",
            description: "Identify and analyze relevant case precedents from your firm's experience to strengthen legal arguments. The system searches through your case history to find relevant precedents, analyzes how similar arguments were used, and identifies which precedents were most persuasive. This helps you build stronger legal arguments by leveraging your firm's successful past cases and understanding what has worked in similar situations.",
          },
          {
            title: "Settlement Timing and Valuation",
            description: "Analyze historical settlement patterns to inform decisions about when to settle and what settlement values are reasonable. The system identifies patterns in settlement timing, analyzes factors that influence settlement amounts, and provides data-driven recommendations about optimal settlement timing and valuation. This helps you make more informed decisions about when to pursue settlement versus trial.",
          },
        ],
        benefits: [
          "Data-driven decision making based on your firm's historical experience",
          "Learn from past case outcomes to improve future strategies",
          "Improved settlement and trial strategies with evidence-based recommendations",
          "Risk-adjusted case evaluation with quantitative assessments",
          "Identifies successful strategies and patterns from your case history",
          "Supports strategic resource allocation and case prioritization",
          "Provides objective analysis to complement expert legal judgment",
        ],
        howItWorks: "Litigation Recommendations uses machine learning models trained on your firm's historical case data. Cases are analyzed to extract structured information including case type, facts, parties, strategies used, and outcomes. Machine learning algorithms identify patterns and correlations between these factors, enabling the system to make predictions and recommendations for new cases. When you input a new case, the system finds similar past cases, analyzes what strategies were successful, and provides recommendations based on historical patterns. All analysis uses only your firm's data, ensuring recommendations are relevant and private to your organization.",
      },
      proprietaryTools: {
        title: "Proprietary Tools",
        subtitle: "Custom-built legal productivity tools",
        overview: "Access a suite of specialized AI tools designed specifically for legal professionals, from document summarization to contract analysis. Our Proprietary Tools are purpose-built for legal work, understanding legal terminology, document structures, and professional requirements. These tools integrate seamlessly into your workflow, saving time and improving consistency while maintaining the high standards expected in legal practice.",
        detailedDescription: "Proprietary Tools is a comprehensive suite of AI-powered tools designed specifically for legal professionals. Unlike general-purpose AI tools, these tools understand legal document structures, terminology, and professional requirements. They're designed to integrate into existing workflows, working with your document management systems, email clients, and case management tools. Each tool is optimized for specific legal tasks, from drafting to analysis to communication, helping you work more efficiently while maintaining professional standards.",
        useCases: [
          {
            title: "Document Summarization",
            description: "Automatically generate concise summaries of lengthy legal documents, contracts, and case files to save review time. The summarization tool understands legal document structures and can extract key information, identify important clauses, and create executive summaries that highlight critical points. Summaries can be customized for different audiences - from brief client summaries to detailed attorney briefings. This dramatically reduces the time needed to review lengthy documents while ensuring nothing important is missed.",
          },
          {
            title: "Email Preparation",
            description: "Draft professional legal emails with AI assistance, ensuring proper tone and legal accuracy. The tool helps you compose clear, professional correspondence to clients, opposing counsel, and other parties. It can suggest appropriate language, ensure professional tone, check for completeness, and even identify potential issues before sending. Templates can be customized for different types of communications, and the tool learns from your firm's communication patterns to improve suggestions over time.",
          },
          {
            title: "Contract Analysis",
            description: "Analyze contracts for key terms, potential risks, and compliance issues with automated AI scanning. The contract analysis tool can quickly review contracts to identify important terms, flag unusual clauses, highlight potential risks, and check for compliance with standard requirements. It compares contracts against your firm's templates and standards, identifying deviations and potential issues. Analysis reports can be customized to focus on specific areas of concern, and the tool can learn from your review patterns to improve its ability to identify issues relevant to your practice.",
          },
          {
            title: "Legal Brief Drafting Assistance",
            description: "Get AI assistance in drafting legal briefs, memos, and other legal documents. The tool can help structure arguments, suggest relevant case citations, check for logical consistency, and ensure proper formatting and citation style. It understands legal argumentation structures and can help you build stronger, more persuasive briefs while maintaining your unique voice and style. The tool works as an assistant, suggesting improvements and identifying potential weaknesses in arguments.",
          },
        ],
        benefits: [
          "Saves hours of manual work by automating routine tasks",
          "Consistent, professional output that meets legal standards",
          "Reduces errors and oversights through automated checking",
          "Designed specifically for legal professionals and their workflows",
          "Integrates with existing tools and systems",
          "Customizable to match your firm's style and requirements",
          "Learns from usage to improve recommendations over time",
        ],
        howItWorks: "Proprietary Tools use specialized AI models trained on legal documents and understanding legal terminology and structures. Each tool is designed for specific tasks, using task-appropriate AI models and techniques. Tools integrate with your existing systems through APIs and interfaces, working within your secure environment. They can be customized to match your firm's style, templates, and requirements, and learn from usage patterns to improve suggestions. All tools maintain complete privacy, with processing happening within your controlled environment and no data shared with external services.",
      },
      localLaw: {
        title: "Local Law Integration",
        subtitle: "Israeli law and regulation integration",
        overview: "Access AI that understands Israeli legal context, regulations, and requirements, ensuring accurate advice for local matters. Our Local Law Integration ensures that all AI services understand Israeli law, regulations, and legal practice requirements. The system is continuously updated with the latest legal developments, regulatory changes, and Bar Association guidance, ensuring that AI recommendations are accurate and compliant with Israeli legal standards.",
        detailedDescription: "Local Law Integration provides AI systems with deep knowledge of Israeli legal frameworks, including statutes, regulations, case law, and regulatory guidance. The system understands Israeli legal terminology, procedural requirements, and professional standards. It's continuously updated with new legislation, regulatory changes, and Bar Association guidance, ensuring that AI recommendations and analysis are current and accurate. This localization is essential for Israeli law firms, as general-purpose AI systems often lack understanding of Israeli legal context and requirements.",
        useCases: [
          {
            title: "Regulatory Compliance",
            description: "Check compliance with Israeli regulations, from data protection laws to industry-specific requirements. The system understands Israeli regulatory frameworks including the Privacy Protection Law, consumer protection regulations, employment law requirements, and industry-specific regulations. It can analyze documents, contracts, and practices to identify compliance issues and recommend corrective actions. The system stays current with regulatory changes, helping you maintain compliance as regulations evolve.",
          },
          {
            title: "Legal Research",
            description: "Research Israeli case law, statutes, and regulatory guidance with AI that understands local legal context. Ask questions in Hebrew or English, and get accurate answers based on Israeli legal sources. The system understands Israeli legal terminology, case law structure, and how Israeli courts interpret and apply laws. Research results cite relevant Israeli cases, statutes, and regulatory guidance, with links to source materials when available.",
          },
          {
            title: "Bar Association Requirements",
            description: "Ensure all legal work meets Israeli Bar Association ethics standards and professional requirements. The system understands Bar Association rules of professional conduct, ethics requirements, and professional standards. It can check documents and practices for compliance with these requirements, flagging potential ethics issues and recommending best practices. This helps maintain high professional standards and avoid ethics violations.",
          },
          {
            title: "Contract Localization",
            description: "Ensure contracts and legal documents comply with Israeli law and use appropriate Israeli legal terminology. The system can review contracts to identify clauses that may need adjustment for Israeli law, suggest appropriate Israeli legal language, and check for compliance with Israeli contract law requirements. This is especially valuable for international contracts being adapted for Israeli use or contracts involving Israeli parties.",
          },
        ],
        benefits: [
          "Deep understanding of Israeli legal context, terminology, and frameworks",
          "Up-to-date regulatory information with continuous updates",
          "Bar Association compliance with understanding of ethics and professional standards",
          "Localized legal advice accuracy with Israeli law knowledge",
          "Support for Hebrew and English queries with accurate Israeli law responses",
          "Integration with Israeli legal databases and resources",
          "Understanding of Israeli legal practice and procedural requirements",
        ],
        howItWorks: "Local Law Integration maintains a comprehensive knowledge base of Israeli law, continuously updated with new legislation, regulations, case law, and Bar Association guidance. This knowledge base is integrated into all AI services, ensuring that recommendations, analysis, and answers are informed by Israeli legal context. The system understands Israeli legal terminology in both Hebrew and English, can interpret Israeli legal sources, and provides recommendations that comply with Israeli legal requirements. Updates are incorporated regularly, ensuring the system stays current with legal developments.",
      },
      dataConnectors: {
        title: "Data Connectors",
        subtitle: "Secure ingestion from your systems",
        overview: "Connect securely to Google Drive, Confluence, OneDrive, Dropbox, and other sources to keep knowledge fresh without copying data around.",
        detailedDescription: "Data Connectors let you plug your storage and knowledge tools directly into the platform with least-privilege access. Content is synced securely, permission-aware, and stays within your controlled environment—no public data sharing. Configure connectors once, keep indexes fresh, and govern what data is available to AI.",
        useCases: [
          {
            title: "Unified Knowledge Access",
            description: "Search across Drive, Confluence, OneDrive, and Dropbox in one place with permission-aware results.",
          },
          {
            title: "RAG Pipelines",
            description: "Keep retrieval-augmented generation pipelines updated automatically with the latest docs from your sources.",
          },
          {
            title: "Secure Sharing",
            description: "Expose only the folders, spaces, or sites you approve, with audit trails and role-based access.",
          },
        ],
        benefits: [
          "Least-privilege connectors to major content platforms",
          "Permission-aware indexing and responses",
          "Configurable sync schedules and scoping",
          "No data sent to public endpoints",
          "Auditability across all ingested sources",
        ],
        howItWorks: "Enable connectors per source, authorize with scoped credentials, and select the drives, spaces, or folders to index. Data is fetched over encrypted channels, stored and processed within your secure environment, and indexed with respect to existing permissions. Syncs run on schedules you control, and all access is logged.",
      },
    },
    detailPage: {
      backToServices: "Back to Services",
      useCases: "Use Cases",
      keyBenefits: "Key Benefits",
      howItWorks: "How It Works",
      readyToStart: "Ready to Get Started?",
      contactDescription: "Contact us to learn more about how this service can benefit your business.",
    },
  },
  metrics: {
    title: "Trusted by Leading Law Firms",
    items: [
      {
        value: "50+",
        label: "Law Firms",
      },
      {
        value: "500+",
        label: "Legal Professionals",
      },
      {
        value: "99.9%",
        label: "Uptime SLA",
      },
      {
        value: "24/7",
        label: "Support",
      },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    items: [
      {
        quote: "This platform has transformed how we handle document analysis and research. The security features give us confidence that our clients' data is truly protected.",
        author: "David Cohen",
        role: "Managing Partner",
        firm: "Cohen & Partners Law Firm",
      },
      {
        quote: "Finally, an AI solution that understands the unique compliance requirements of Israeli law firms. It's not just secure—it's built for our specific needs.",
        author: "Sarah Levy",
        role: "General Counsel",
        firm: "TechLegal Israel",
      },
      {
        quote: "The observability features let us track exactly how our team uses AI, giving us the governance we need while enabling productivity gains we never thought possible.",
        author: "Michael Rosen",
        role: "IT Director",
        firm: "Rosen & Associates",
      },
    ],
  },
  features: {
    title: "Why Choose Our Platform",
    items: [
      {
        title: "Israeli Compliance",
        description: "Fully compliant with Israeli Privacy Protection Law and Bar Association ethics standards",
      },
      {
        title: "Enterprise Security",
        description: "Military-grade security measures to protect sensitive client information",
      },
      {
        title: "Scalable Infrastructure",
        description: "Grows with your firm - from solo practitioners to large legal organizations",
      },
    ],
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Ready to secure your business's AI infrastructure?",
    description: "Contact us to learn more about our secure AI solutions for businesses",
    button: "Contact Us",
    email: "kourgeorge@gmail.com",
    phone: "(+972)-052-5808010",
    form: {
      nameLabel: "Full Name",
      namePlaceholder: "Jane Doe",
      emailLabel: "Work Email",
      emailPlaceholder: "you@company.com",
      companyLabel: "Company",
      companyPlaceholder: "Your organization",
      messageLabel: "How can we help?",
      messagePlaceholder: "Share a short note about your needs or questions",
      submit: "Send Message",
      success: "Thanks! We’ll get back to you shortly.",
      error: "Please complete all required fields with a valid email.",
    },
  },
  legal: {
    title: "Legal & Compliance",
    subtitle: "Plain-language summaries of our Terms of Service and privacy practices.",
    lastUpdated: "Last updated: March 2025",
    cards: [
      {
        id: "terms",
        tag: "Terms of Service",
        title: "How you can use the platform",
        description: "Guidelines for customers running Tikanify in production environments.",
        points: [
          {
            title: "Authorized use",
            description: "Access is for your organization and approved users; keep credentials protected and follow applicable laws.",
          },
          {
            title: "Customer data ownership",
            description: "You own your content. We process it only to deliver the service and never train public models on your data.",
          },
          {
            title: "Security & uptime",
            description: "We apply encryption in transit and at rest, enforce role-based access, and log activity. Maintenance windows are communicated in advance.",
          },
          {
            title: "Prohibited activity",
            description: "No attempts to breach security, disrupt service, or upload unlawful or infringing content.",
          },
          {
            title: "Support & changes",
            description: "We provide reasonable support and may update the service; material changes to these terms will be communicated.",
          },
        ],
        note: "Need tailored terms for a regulated deployment? Contact us and we'll align on your requirements.",
      },
      {
        id: "privacy",
        tag: "Privacy",
        title: "How we handle data",
        description: "Snapshot of our privacy practices for AI infrastructure projects.",
        points: [
          {
            title: "Data isolation",
            description: "Customer environments stay isolated; data remains within your chosen boundary (dedicated VPC or on-prem).",
          },
          {
            title: "Retention",
            description: "Operational data is retained only as long as needed for the service, with deletion available on request or contract end.",
          },
          {
            title: "Access controls",
            description: "Least-privilege access, background-checked personnel, and logged administrative actions.",
          },
          {
            title: "Subprocessors",
            description: "We maintain a vetted list of subprocessors and will notify you before adding new ones where required.",
          },
          {
            title: "Incident response",
            description: "We follow an escalation and notification process for security events affecting your data.",
          },
        ],
        note: "For the full Privacy Policy and Data Processing Agreement, reach out to our security team.",
      },
    ],
  },
  footer: {
    description: "Tikanify delivers secure AI infrastructure for modern businesses in Israel",
    links: {
      services: "Services",
      security: "Security",
      features: "Features",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    copyright: "© 2025. All rights reserved.",
  },
};
