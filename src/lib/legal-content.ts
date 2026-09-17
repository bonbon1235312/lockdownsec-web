export type LegalPolicy = {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: readonly { heading: string; paragraphs: readonly string[] }[];
};

export const privacyPolicy: LegalPolicy = {
  eyebrow: "Privacy notice",
  title: "Privacy designed around a real-time check.",
  description: "This notice explains how LockDown AI handles information when you use the public detector.",
  updated: "17 September 2026",
  sections: [
    { heading: "Who is responsible", paragraphs: ["LockDown AI is the controller for the limited personal information described in this notice. For privacy questions or requests, contact nicholsone140@gmail.com."] },
    { heading: "Text you submit", paragraphs: ["Submitted text is sent to the inference service for real-time inference. We do not intentionally retain submitted text as a user-content record after the response is returned.", "Do not submit confidential, sensitive, or personal information unless you have the right to do so and accept the risks of sending it to an online service."] },
    { heading: "Technical information", paragraphs: ["Our hosting, security, and network providers may process technical information needed to deliver and protect the service, such as IP address, browser/request metadata, timestamps, and security telemetry. We use this information to operate, secure, diagnose, and improve the service.", "The public site and inference service are hosted using third-party infrastructure. Those providers may apply their own operational retention periods and privacy terms."] },
    { heading: "Legal basis and retention", paragraphs: ["Where UK data-protection law applies, we process necessary technical information on the basis of our legitimate interests in operating a secure, reliable demonstration service. We retain it only for as long as reasonably necessary for those purposes or as required by law or our infrastructure providers' configured retention periods."] },
    { heading: "Automated analysis", paragraphs: ["The detector returns experimental review signals. It is not used by us to make decisions with legal or similarly significant effects about you."] },
    { heading: "Your rights", paragraphs: ["Depending on applicable law, you may have rights to request access, correction, deletion, restriction, objection, or portability of personal information. You may also complain to the UK Information Commissioner's Office. Contact us first at nicholsone140@gmail.com so we can help."] },
    { heading: "Changes", paragraphs: ["We may update this notice as the service changes. The latest version will always be published on this page with its update date."] },
  ],
};

export const termsOfUse: LegalPolicy = {
  eyebrow: "Terms of use",
  title: "A review aid, not an authorship verdict.",
  description: "These terms explain the intended use and limits of LockDown AI's public detector.",
  updated: "17 September 2026",
  sections: [
    { heading: "What the service does", paragraphs: ["LockDown AI provides experimental model signals from two independent text-analysis lanes. Output is probabilistic and context-limited; it is not proof of authorship, provenance, misconduct, or the use of any particular tool."] },
    { heading: "Use it responsibly", paragraphs: ["Do not use a result as the sole or determinative basis for academic, employment, legal, disciplinary, or other high-stakes decisions. A low result does not rule out AI involvement, and a review signal does not establish it.", "You are responsible for reviewing output alongside human judgment, relevant context, and any applicable policy or law."] },
    { heading: "Your submissions", paragraphs: ["Only submit text you are entitled to provide. Do not submit unlawful content, confidential information you are not authorised to share, or material designed to disrupt, probe, or overload the service."] },
    { heading: "Availability and changes", paragraphs: ["The service is provided as an educational and experimental demonstration. Availability, model behaviour, and features may change, be limited, or be withdrawn without notice."] },
    { heading: "Liability", paragraphs: ["To the maximum extent permitted by law, LockDown AI is not liable for decisions or outcomes based on detector output, interrupted availability, or reliance on an experimental signal. Nothing in these terms excludes liability that cannot be excluded by law."] },
    { heading: "Contact and governing law", paragraphs: ["Questions about these terms can be sent to nicholsone140@gmail.com. These terms are governed by the law of England and Wales, subject to any mandatory rights available where you live."] },
  ],
};
