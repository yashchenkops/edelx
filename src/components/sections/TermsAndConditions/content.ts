export type TermsBlock =
  | { type: 'title'; text: string }
  | { type: 'subtitle'; text: string }
  | { type: 'text'; text: string }
  | { type: 'definition'; term: string; text: string }
  | { type: 'list'; items: string[]; nested?: boolean }

export type TermsDocument = {
  title: string
  blocks: TermsBlock[]
}

export const documents: TermsDocument[] = [
  {
    title: "terms & Condition's",
    blocks: [
      { type: 'title', text: 'SECTION 1: Introduction' },
      {
        type: 'text',
        text: '1.1. These Terms and Conditions (“Terms”) govern your access to and use of the website, mobile applications, and all online services (collectively, the “Service”) provided by Djooky Finance Limited, a company incorporated under the laws of British Columbia, Canada (Incorporation Number: BC1535602), with its registered office at: 2-1130 Hachey Ave, Coquitlam, BC V3K 2H4, CANADA.',
      },
      {
        type: 'text',
        text: '1.2. Djooky Finance Limited is registered with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a Money Services Business (MSB) under registration number C100000967. The Company operates under the brand name Tokenum.',
      },
      {
        type: 'text',
        text: '1.3. By accessing, registering for, or using the Service, you acknowledge that you have read, understood, and agree to be legally bound by these Terms, as well as any additional terms, policies, or notices expressly incorporated herein by reference, including the Privacy Policy, Risk Disclosure, and AML/CTF Policy. If you do not agree to these Terms in their entirety, you must not access or use the Service.',
      },
      {
        type: 'text',
        text: '1.4. Djooky Finance Limited is committed to operating in full compliance with all applicable Canadian laws and regulations, including but not limited to:',
      },
      {
        type: 'list',
        items: [
          'The Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA);',
          'Regulations and guidance issued by FINTRAC;',
          'Applicable provincial laws and consumer protection regulations of British Columbia.',
        ],
      },
      {
        type: 'text',
        text: '1.5. The Service is intended exclusively for individual clients (natural persons). The Company provides services related to the exchange of fiat currency for digital assets and vice versa, as well as the transfer of digital assets. Djooky Finance Limited does not provide investment advice, tax advice, or discretionary portfolio management.',
      },
      {
        type: 'text',
        text: '1.6. The Company prohibits the use of the Service by residents or citizens of jurisdictions subject to international sanctions, as well as by any individuals or entities appearing on applicable global sanctions lists. These restricted categories include, but are not limited to, parties identified on the Consolidated Canadian Autonomous Sanctions List administered by Global Affairs Canada, the OSFI Consolidated List, the United Nations Security Council Consolidated Sanctions List, and the U.S. OFAC Specially Designated Nationals (SDN) List and other U.S. sanctions lists. Furthermore, prohibitions extend to parties on the UK Sanctions List maintained by the Office of Financial Sanctions Implementation (OFSI), the European Union Consolidated Financial Sanctions List, and any individuals, entities, or jurisdictions designated as high-risk or non-cooperative by the Financial Action Task Force (FATF). The Company reserves the right to immediately deny or terminate access to the Service for any user matching these criteria or based on internal risk assessments and compliance policies.',
      },
      {
        type: 'text',
        text: '1.7. Registration with FINTRAC as an MSB does not constitute an endorsement or a license from a securities regulator. Use of the Service carries significant risk, and you should only use funds that you can afford to lose.',
      },

      { type: 'title', text: 'SECTION 2: Acceptance of Terms' },
      {
        type: 'text',
        text: '2.1. By clicking “Create Account,” “Register,” or any similar button, or by otherwise accessing or using the Service, you expressly acknowledge and agree to be bound by these Terms and all policies incorporated by reference, including but not limited to the Privacy Policy, Risk Disclosure, and AML/CTF/Sanctions Policy.',
      },
      {
        type: 'text',
        text: '2.2. If you do not understand or accept these Terms in their entirety, you must not register for an account or use the Service. Your use of the Service constitutes a legally binding agreement between you and Djooky Finance Limited.',
      },

      { type: 'title', text: 'SECTION 3: Amendments' },
      {
        type: 'text',
        text: '3.1. Djooky Finance Limited reserves the right to amend, modify, or update these Terms at any time, in its sole discretion. Any changes will become effective upon posting on the Company’s website or upon notification to you by email.',
      },
      {
        type: 'text',
        text: '3.2. Your continued use of the Service after such changes constitutes your express acceptance of the revised Terms. It is your responsibility to review these Terms regularly to ensure you are aware of any updates.',
      },
      {
        type: 'text',
        text: '3.3. The Company will generally notify users of material changes to the Terms via the Platform interface or via the email address associated with your Account.',
      },

      { type: 'title', text: 'SECTION 4: Key Definitions' },
      {
        type: 'text',
        text: 'For the purposes of these Terms, the following capitalized terms shall have the meanings set forth below:',
      },
      {
        type: 'definition',
        term: 'Account',
        text: 'means a unique user account registered with Djooky Finance Limited for the purpose of accessing and using the Service.',
      },
      {
        type: 'definition',
        term: 'Agreement',
        text: 'means these Terms & Conditions, including all policies and documents incorporated by reference.',
      },
      {
        type: 'definition',
        term: 'AML/CTF Laws',
        text: 'means the Canadian Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA) and its associated Regulations, and any other applicable Canadian anti-money laundering and anti-terrorist financing laws.',
      },
      {
        type: 'definition',
        term: 'Applicable Law',
        text: 'means all laws, regulations, and rules applicable to Djooky Finance Limited in Canada, including federal law and the laws of the Province of British Columbia.',
      },
      {
        type: 'definition',
        term: 'Business Day',
        text: 'means any day (other than a Saturday, Sunday, or statutory holiday) on which chartered banks are open for business in Vancouver, British Columbia, Canada.',
      },
      {
        type: 'definition',
        term: 'Client / User',
        text: 'means any natural person who registers for or uses the Service.',
      },
      {
        type: 'definition',
        term: 'Digital Asset (Cryptocurrency)',
        text: 'means any digital representation of value that can be transferred or traded, supported by the Service (e.g., BTC, ETH).',
      },
      {
        type: 'definition',
        term: 'External Account',
        text: 'means any financial account, payment service, or digital asset wallet owned or controlled by the Client that is maintained by a third-party institution.',
      },
      {
        type: 'definition',
        term: 'Fiat Currency',
        text: 'means government-issued currency, such as CAD, USD, or EUR.',
      },
      {
        type: 'definition',
        term: 'FINTRAC',
        text: 'means the Financial Transactions and Reports Analysis Centre of Canada.',
      },
      {
        type: 'definition',
        term: 'Force Majeure Event',
        text: 'means any event beyond the reasonable control of the Company, including but not limited to natural disasters, acts of war, civil unrest, government action, or large-scale technical failures of the internet or blockchain networks.',
      },
      {
        type: 'definition',
        term: 'KYC',
        text: 'means “Know Your Customer”, the mandatory process of verifying the identity of clients and assessing their risk profile in accordance with AML/CTF Laws.',
      },
      {
        type: 'definition',
        term: 'MSB',
        text: 'means Money Services Business, as defined under Canadian law.',
      },
      {
        type: 'definition',
        term: 'OSFI',
        text: 'means the Office of the Superintendent of Financial Institutions (Canada).',
      },
      {
        type: 'definition',
        term: 'PEP',
        text: 'means a Politically Exposed Person (Domestic or Foreign), as defined by FINTRAC and PCMLTFA.',
      },
      {
        type: 'definition',
        term: 'PIPEDA',
        text: 'means the Personal Information Protection and Electronic Documents Act (Canada).',
      },
      {
        type: 'definition',
        term: 'Sanctions',
        text: 'means economic or financial sanctions administered or enforced by the Government of Canada (including OSFI), the UN Security Council, or other relevant authorities.',
      },
      {
        type: 'definition',
        term: 'Service',
        text: 'means the online platform operated under the brand Tokenum providing fiat-to-crypto and crypto-to-fiat exchange services.',
      },

      { type: 'title', text: 'SECTION 5: Eligibility' },
      {
        type: 'text',
        text: '5.1. The Service provided by Djooky Finance Limited is available exclusively to natural persons who are at least eighteen (18) years of age, possess full legal capacity, and are not otherwise prohibited from using the Service under applicable Canadian law, these Terms, or any internal risk or compliance policy of the Company.',
      },
      {
        type: 'text',
        text: '5.2. By registering for or using the Service, you represent and warrant that you:',
      },
      {
        type: 'list',
        items: [
          '(a) are at least eighteen (18) years old and have the full legal capacity to enter into a binding contract;',
          '(b) are not a citizen or resident of, nor are you located in, any jurisdiction subject to sanctions or restrictions under the laws of Canada, the United Nations, or other applicable international laws;',
          '(c) are acting solely on your own behalf and not for the benefit of any third party, legal entity, or corporate client;',
          '(d) have not previously been suspended or removed from the Service for any breach of these Terms or applicable regulations;',
          '(e) are not included on any government or international list of prohibited or restricted parties, including but not limited to:',
        ],
      },
      {
        type: 'list',
        nested: true,
        items: [
          '(i) the Consolidated Canadian Autonomous Sanctions List (Global Affairs Canada);',
          '(ii) the OSFI Consolidated List (Canada);',
          '(iii) the United Nations Security Council Consolidated Sanctions List;',
          '(iv) the U.S. OFAC Specially Designated Nationals (SDN) List and other U.S. sanctions lists;',
          '(v) the UK Sanctions List (Office of Financial Sanctions Implementation – OFSI);',
          '(vi) the European Union Consolidated Financial Sanctions List;',
          '(vii) any individuals, entities, or jurisdictions identified as high-risk or non-cooperative by the Financial Action Task Force (FATF).',
        ],
      },
      {
        type: 'text',
        text: '5.3. If you are a Politically Exposed Person (PEP), a head of an international organization (HIO), or a family member or close associate of such persons, you must disclose this status during the KYC process. You acknowledge that such status will subject your account to Enhanced Due Diligence (EDD) measures as required by FINTRAC.',
      },
      {
        type: 'text',
        text: '5.4. Djooky Finance Limited reserves the right to refuse, suspend, or terminate access to the Service to any person at its sole discretion, including but not limited to cases where the client fails to meet eligibility criteria or where the client’s use of the Service would expose the Company to legal, regulatory, or reputational risk.',
      },
      {
        type: 'text',
        text: '5.5. You are solely responsible for ensuring that your use of the Service is in compliance with all applicable laws and regulations in your jurisdiction.',
      },

      { type: 'title', text: 'SECTION 6: General obligations and restrictions' },
      {
        type: 'text',
        text: '6.1. By accessing or using the Service, you agree to comply with these Terms, all applicable Canadian laws and regulations, and all policies and procedures established by Djooky Finance Limited, including the AML/CTF/Sanctions Policy and Privacy Policy.',
      },
      {
        type: 'text',
        text: '6.2. You may only register and maintain one (1) account with Tokenum per individual. Multiple accounts for the same individual are strictly prohibited unless expressly authorized in writing by the Company.',
      },
      {
        type: 'text',
        text: '6.3. You agree to provide accurate, current, and complete information during the registration process and to update such information promptly if it changes. You are solely responsible for maintaining the confidentiality and security of your account credentials, including your password and any two-factor authentication (2FA) devices.',
      },
      {
        type: 'text',
        text: '6.4. You must immediately notify Djooky Finance Limited at support@tokenum.com if you become aware of any unauthorized use of your account, security breach, or any other suspicious activity. You are responsible for all activities that occur under your account, whether authorized by you or not.',
      },
      {
        type: 'text',
        text: '6.5. You may only use the Service for your own personal purposes and not on behalf of or for the benefit of any third party. You may not transfer, assign, or permit any other person to use your account.',
      },
      {
        type: 'text',
        text: '6.6. You agree not to use the Service for any unlawful, fraudulent, or prohibited purpose, including:',
      },
      {
        type: 'list',
        items: [
          '(a) engaging in money laundering, terrorist financing, or any other financial crime;',
          '(b) violating any applicable sanctions, export controls, or embargoes;',
          '(c) providing false, inaccurate, or misleading information to the Company;',
          '(d) interfering with or disrupting the operation of the Service;',
          '(e) attempting to gain unauthorized access to any account or network related to the Service;',
          '(f) using automated means (bots, scrapers) to access the Service without express written permission.',
        ],
      },
      {
        type: 'text',
        text: '6.7. The Company may employ geolocation, IP-intelligence, and device-fingerprinting technologies to detect and restrict access from sanctioned or high-risk jurisdictions. The use of VPNs, proxy servers, Tor, or any other anonymization tools intended to disguise your location or identity is strictly prohibited.',
      },
      {
        type: 'text',
        text: '6.8. Users are prohibited from using the Service in connection with blockchain “mixers,” “tumblers,” or similar mechanisms primarily designed to conceal the origin or ownership of digital assets. The Company may reject or freeze any transaction involving such activity and report it to FINTRAC as required by law.',
      },
      {
        type: 'text',
        text: '6.9. You consent to receive all communications, notices, and disclosures from the Company electronically. You are responsible for maintaining a valid email address and regularly checking your account and email for communications.',
      },
      {
        type: 'text',
        text: '6.10. You are solely responsible for determining and fulfilling any tax obligations arising from your use of the Service. Djooky Finance Limited does not provide tax advice.',
      },
      {
        type: 'text',
        text: '6.11. Client funds are strictly segregated from the Company’s operational funds. However, assets held in your account are not protected by the Canadian Deposit Insurance Corporation (CDIC) or the Canadian Investor Protection Fund (CIPF).',
      },

      { type: 'title', text: 'SECTION 7: Exchange terms' },
      { type: 'subtitle', text: '7.1. Nature of Service' },
      {
        type: 'text',
        text: 'Djooky Finance Limited provides an online platform under the brand Tokenum for the exchange of fiat currency and supported digital assets for individual clients. All operations are conducted in accordance with Canadian MSB regulations and these Terms.',
      },
      { type: 'subtitle', text: '7.2. Submitting Orders' },
      {
        type: 'text',
        text: 'By submitting an order, you authorize the Company to execute the transaction on a spot basis and to charge all applicable fees. You represent that all information provided for the order is accurate and complete.',
      },
      { type: 'subtitle', text: '7.3. Transaction Execution and Settlement' },
      {
        type: 'text',
        text: 'The Company will use commercially reasonable efforts to execute transactions at or near the prevailing Market Exchange Rate. You acknowledge that the Actual Exchange Rate may differ due to market volatility or liquidity factors. Djooky Finance Limited is not liable for slippage between the Market Rate and the Actual Rate.',
      },
      { type: 'subtitle', text: '7.4. Transaction Limits' },
      {
        type: 'text',
        text: 'The Company may, at its sole discretion, impose limits on the size, frequency, or type of transactions, or refuse to process any order for reasons including compliance, risk management, or suspected fraud.',
      },
      { type: 'subtitle', text: '7.5. Payment Methods' },
      {
        type: 'text',
        text: 'Only approved payment methods may be used. You must be the beneficial owner of any External Account used for deposits or withdrawals. All External Accounts must be verified in accordance with the Company’s KYC/AML procedures. The Company is not responsible for losses or fees resulting from rejected or delayed bank transfers by third-party providers.',
      },
      { type: 'subtitle', text: '7.6. Transaction Fees' },
      {
        type: 'text',
        text: 'You agree to pay all applicable fees for exchanges and withdrawals. Fees are set at the Company’s discretion and are disclosed prior to transaction execution. In addition to our fees, your bank or payment provider may impose separate charges for which you are solely responsible.',
      },
      { type: 'subtitle', text: '7.7. Finality of Transactions' },
      {
        type: 'text',
        text: 'Once the execution process has started, the order is final and cannot be changed or cancelled. The Company does not provide refunds for completed exchange operations except as required by law.',
      },
      { type: 'subtitle', text: '7.8. Errors and Disruptions' },
      {
        type: 'text',
        text: 'The Company reserves the right to correct errors in order confirmations or processing and to revise transactions accordingly. In the event of market disruption or a Force Majeure Event, the Company may suspend the Service or delay transaction execution.',
      },
      { type: 'subtitle', text: '7.9. Transfers of Digital Assets' },
      {
        type: 'text',
        text: 'You are solely responsible for verifying all transaction information, including wallet addresses, prior to submitting instructions. Djooky Finance Limited is not liable for losses resulting from incorrect wallet addresses or network congestion.',
      },

      { type: 'title', text: 'SECTION 8: KYC and reversal transaction policy' },
      { type: 'subtitle', text: '8.1. KYC Requirement' },
      {
        type: 'text',
        text: 'Completion of a successful Know Your Customer (“KYC”) procedure is a mandatory condition for using the Service. Djooky Finance Limited is committed to full compliance with the Canadian Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA), FINTRAC regulations, and all applicable Canadian laws. The KYC process is designed to verify your identity, assess your risk profile, and ensure compliance with sanctions and anti-money laundering requirements.',
      },
      { type: 'subtitle', text: '8.2. KYC Process and Documentation' },
      {
        type: 'text',
        text: 'To complete the KYC process, you may be required to provide the following information and documentation:',
      },
      {
        type: 'list',
        items: [
          '(a) A valid government-issued photo identification document (e.g., Canadian driver’s license, passport, or permanent resident card).',
          '(b) Proof of residential address (e.g., utility bill or bank statement issued within the last three months).',
          '(c) Live identity verification, which may include a selfie, video call, or biometric liveness check.',
          '(d) Detailed information regarding the nature and purpose of your transactions and business relationship with the Company.',
          '(e) Documentation evidencing the source of funds or source of wealth for high-volume transactions or as required by your risk profile.',
          '(f) Disclosure of Politically Exposed Person (PEP) or Head of International Organization (HIO) status.',
        ],
      },
      { type: 'subtitle', text: '8.3. Ongoing Due Diligence' },
      {
        type: 'text',
        text: 'In accordance with FINTRAC requirements, the Company performs ongoing monitoring of the business relationship. We may require you to update or re-submit KYC documentation periodically or upon reaching certain transaction thresholds. Failure to provide updated information may result in the suspension or termination of your account.',
      },
      { type: 'subtitle', text: '8.4. Refusal to Complete KYC or AML Policy Refusal' },
      {
        type: 'text',
        text: 'If you refuse to complete the KYC process or if the Company determines you are ineligible to use the Service due to AML policy, sanctions risk, or other compliance concerns, the Company will initiate a reversal of any pending transaction. Your funds will be returned to the original source account within five (5) business days, subject to applicable fees and legal requirements.',
      },
      { type: 'subtitle', text: '8.5. Data Protection and Privacy' },
      {
        type: 'text',
        text: 'All personal data submitted during the KYC process will be handled in accordance with the Digital Privacy Act, PIPEDA (Personal Information Protection and Electronic Documents Act), and the Company’s Privacy Policy. Data is used solely for identity verification, risk assessment, and compliance with statutory obligations.',
      },
      { type: 'subtitle', text: '8.6. Travel Rule Compliance' },
      {
        type: 'text',
        text: 'For digital asset transfers, the Company complies with the “Travel Rule” as required by FINTRAC. This involves collecting, verifying, and transmitting required information regarding the originator and beneficiary of a transfer to relevant financial institutions and authorities.',
      },
      { type: 'subtitle', text: '8.7. Ongoing Sanctions and Watchlist Screening' },
      {
        type: 'text',
        text: 'The Company continuously screens all clients against sanctions lists issued by the Government of Canada (OSFI), the United Nations Security Council (UNSC), and other relevant international authorities. Accounts identified as potential matches may be restricted or terminated without prior notice.',
      },
      { type: 'subtitle', text: '8.8. Reporting to Competent Authorities' },
      {
        type: 'text',
        text: 'If Djooky Finance Limited knows or suspects that any transaction or attempted transaction is related to the commission of a money laundering offence or a terrorist activity financing offence, the Company will file a Suspicious Transaction Report (STR) with FINTRAC. In such cases, the Company is prohibited by law from “tipping off” the client regarding the filing of the report.',
      },

      { type: 'title', text: 'SECTION 9: Risk disclosure statement' },
      { type: 'subtitle', text: '9.1. General Risk Acknowledgement' },
      {
        type: 'text',
        text: 'By using the Service, you acknowledge that the exchange of fiat and digital assets involves significant risks. Digital assets are not legal tender in Canada and are not backed by any government. You expressly assume all risks associated with your use of the Service.',
      },
      { type: 'subtitle', text: '9.2. Market Volatility' },
      {
        type: 'text',
        text: 'Digital assets are subject to extreme price fluctuations. The value of your assets can increase or decrease rapidly and unpredictably. You should not exchange funds that you cannot afford to lose.',
      },
      { type: 'subtitle', text: '9.3. No Insurance Protection' },
      {
        type: 'text',
        text: 'Unlike traditional bank accounts, digital assets and fiat funds held in your Account are NOT insured by the Canadian Deposit Insurance Corporation (CDIC) or the Canadian Investor Protection Fund (CIPF).',
      },
      { type: 'subtitle', text: '9.4. Regulatory and Legal Risk' },
      {
        type: 'text',
        text: 'The regulatory environment for digital assets is evolving. Changes in Canadian federal or provincial laws, or FINTRAC regulations, may adversely affect the use, transfer, or value of your digital assets.',
      },
      { type: 'subtitle', text: '9.5. Technological and Security Risk' },
      {
        type: 'text',
        text: 'Transactions on the blockchain are irreversible. If you provide an incorrect wallet address or if your account credentials are compromised, your assets may be permanently lost. While the Company implements robust security measures, we cannot guarantee absolute security against cyberattacks or technical failures.',
      },
      { type: 'subtitle', text: '9.6. No Investment Advice' },
      {
        type: 'text',
        text: 'Djooky Finance Limited does not provide financial, investment, legal, or tax advice. All information provided is for informational purposes only. You are responsible for making your own independent decisions.',
      },

      { type: 'title', text: 'SECTION 10: Intellectual property' },
      { type: 'subtitle', text: '10.1. Ownership of Intellectual Property' },
      {
        type: 'text',
        text: 'All content, materials, software, trademarks, logos, designs, text, graphics, images, data, and other intellectual property (collectively, “Intellectual Property”) displayed on or accessible through the Service are the exclusive property of Djooky Finance Limited or its licensors, and are protected by Canadian and international copyright, trademark, and other intellectual property laws. Tokenum is a brand name and trademark owned and operated by Djooky Finance Limited.',
      },
      { type: 'subtitle', text: '10.2. Limited License' },
      {
        type: 'text',
        text: 'Djooky Finance Limited grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service and its Intellectual Property for your personal, non-commercial use, subject to these Terms. This license does not permit you to:',
      },
      {
        type: 'list',
        items: [
          '(a) copy, reproduce, modify, distribute, display, perform, publish, transmit, or create derivative works from any part of the Service;',
          '(b) use any trademarks, logos, or other proprietary marks of the Company without prior written consent;',
          '(c) use the Service or its Intellectual Property for any commercial purpose or in any manner that infringes the rights of the Company or any third party.',
        ],
      },
      { type: 'subtitle', text: '10.3. User Content and Feedback' },
      {
        type: 'text',
        text: 'By submitting any suggestions, ideas, feedback, or other content to the Company, you grant Djooky Finance Limited a worldwide, perpetual, irrevocable, royalty-free, and transferable license to use, reproduce, modify, adapt, and display such content in any media or format, for any purpose, without compensation or acknowledgment to you.',
      },
      { type: 'subtitle', text: '10.4. Infringement and Indemnification' },
      {
        type: 'text',
        text: 'You agree to indemnify and hold harmless Djooky Finance Limited from and against any claims, damages, losses, or expenses arising out of your infringement of any Intellectual Property rights or your unauthorized use of the Service or its content.',
      },

      { type: 'title', text: 'SECTION 11: Third-party content' },
      { type: 'subtitle', text: '11.1. Third-Party Content and Links' },
      {
        type: 'text',
        text: 'While using the Service, you may encounter content, information, or links to websites and services provided by third parties (“Third-Party Content”). Such content is provided solely for your convenience.',
      },
      { type: 'subtitle', text: '11.2. No Control or Endorsement' },
      {
        type: 'text',
        text: 'Djooky Finance Limited does not control, endorse, or assume any responsibility for any Third-Party Content, including but not limited to its accuracy, completeness, legality, or quality. Your interaction with Third-Party Content is at your own risk.',
      },
      { type: 'subtitle', text: '11.3. Third-Party Terms and Policies' },
      {
        type: 'text',
        text: 'Your use of Third-Party Content may be subject to separate terms and conditions and privacy policies imposed by the third party. It is your responsibility to review and comply with all applicable third-party terms.',
      },

      { type: 'title', text: 'SECTION 12: Customer complaints procedure' },
      { type: 'subtitle', text: '12.1. Commitment to Customer Satisfaction' },
      {
        type: 'text',
        text: 'Djooky Finance Limited is committed to providing high-quality service. We value your feedback and strive to address any concerns or disputes in a fair and timely manner.',
      },
      { type: 'subtitle', text: '12.2. How to Submit a Complaint' },
      {
        type: 'text',
        text: 'If you are dissatisfied with the Service, you may submit a formal complaint by:',
      },
      {
        type: 'list',
        items: [
          '(a) Emailing support@tokenum.com with “Complaint” in the subject line; or',
          '(b) Sending a written complaint to the Company’s registered office address in Coquitlam.',
        ],
      },
      { type: 'subtitle', text: '12.3. Information to Include' },
      {
        type: 'text',
        text: 'To facilitate a prompt response, please include your full name, account email, a detailed description of the issue, and any relevant transaction identifiers or supporting documentation.',
      },
      { type: 'subtitle', text: '12.4. Complaint Handling Process' },
      {
        type: 'text',
        text: 'Upon receipt of your complaint, the Company will:',
      },
      {
        type: 'list',
        items: [
          '(a) Acknowledge receipt within five (5) Business Days;',
          '(b) Investigate the matter and provide a formal written response within fourteen (14) Business Days. If additional time is required due to complexity, you will be notified of the delay and the expected resolution date.',
        ],
      },
      { type: 'subtitle', text: '12.5. Record-Keeping and Confidentiality' },
      {
        type: 'text',
        text: 'All complaints and related correspondence will be recorded and retained in accordance with Canadian legal requirements. The Company will treat all personal information with strict confidentiality according to its Privacy Policy and PIPEDA.',
      },

      { type: 'title', text: 'SECTION 13: Discontinuance of service, suspension and termination' },
      { type: 'subtitle', text: '13.1. Right to Discontinue or Suspend Service' },
      {
        type: 'text',
        text: 'Djooky Finance Limited reserves the right, at its sole discretion and without prior notice or liability to you, to discontinue, temporarily or permanently, any aspect of the Service, or to suspend or terminate your access to the Service, your account, or any transaction, for reasons including but not limited to:',
      },
      {
        type: 'list',
        items: [
          '(a) breach of these Terms or any incorporated policy;',
          '(b) violation of applicable Canadian law, regulation, or FINTRAC guidance;',
          '(c) suspected or actual involvement in money laundering, terrorist financing, fraud, or other unlawful activity;',
          '(d) failure to provide required KYC or other compliance documentation;',
          '(e) providing false, incomplete, or misleading information;',
          '(f) technical, operational, or security reasons, including system maintenance or upgrades;',
          '(g) Force Majeure Events or other circumstances beyond the Company’s reasonable control.',
        ],
      },
      { type: 'subtitle', text: '13.2. Account Deactivation' },
      {
        type: 'text',
        text: 'In the event of suspension or termination, the Company may deactivate your account and retain information as required by Canadian federal and provincial record-keeping laws. We will make reasonable efforts to notify you of such actions unless prohibited by law or regulatory guidance (e.g., “anti-tipping off” rules under AML laws).',
      },
      { type: 'subtitle', text: '13.3. Return of Funds' },
      {
        type: 'text',
        text: 'Upon termination of your account, the Company will attempt to return any remaining funds to your designated External Account or wallet, after deducting applicable fees and any amounts owed to the Company. If the Company is unable to return funds due to legal or regulatory restrictions (e.g., a freeze order from a government authority), such funds will be held or remitted in accordance with applicable Canadian law.',
      },
      { type: 'subtitle', text: '13.4. Sanctions and Compliance Enforcement' },
      {
        type: 'text',
        text: 'The Company may immediately freeze or block funds, reverse transactions, and terminate service if there is a reasonable suspicion of a sanctions breach or AML/CTF violation. We fully cooperate with law enforcement and financial intelligence units (FINTRAC) in Canada and relevant international agencies.',
      },

      { type: 'title', text: 'SECTION 14: Limitation of liability, disclaimer of warranties' },
      { type: 'subtitle', text: '14.1. No Warranty' },
      {
        type: 'text',
        text: 'The Service is provided on an “as is” and “as available” basis, without any representations or warranties of any kind, express or implied. Djooky Finance Limited does not warrant that the Service will be uninterrupted, error-free, timely, or free from viruses or other harmful components. Use of the Service is at your own risk.',
      },
      { type: 'subtitle', text: '14.2. Limitation of Liability' },
      {
        type: 'text',
        text: 'To the maximum extent permitted by applicable Canadian law, Djooky Finance Limited, its directors, officers, employees, and agents shall not be liable for any direct, indirect, incidental, consequential, or special damages, including but not limited to loss of profits, data, or digital assets, arising out of:',
      },
      {
        type: 'list',
        items: [
          '(a) your use of, or inability to use, the Service;',
          '(b) any transaction or attempted transaction;',
          '(c) unauthorized access to your account or data;',
          '(d) any conduct or content of any third party;',
          '(e) market volatility or systemic failures of blockchain networks.',
        ],
      },
      { type: 'subtitle', text: '14.3. Indemnification' },
      {
        type: 'text',
        text: 'You agree to defend, indemnify, and hold harmless Djooky Finance Limited from and against any claims, losses, liabilities, and expenses (including legal fees) arising out of your use of the Service, your violation of these Terms, or your infringement of any rights of a third party.',
      },

      { type: 'title', text: 'SECTION 15: Applicable law, arbitration' },
      { type: 'subtitle', text: '15.1. Governing Law' },
      {
        type: 'text',
        text: 'These Terms and any dispute arising out of or in connection with them shall be governed by and construed in accordance with the federal laws of Canada and the laws of the Province of British Columbia, without regard to conflict of law principles.',
      },
      { type: 'subtitle', text: '15.2. Jurisdiction' },
      {
        type: 'text',
        text: 'You agree that the courts of British Columbia located in Vancouver shall have jurisdiction to settle any dispute or claim arising out of these Terms. Notwithstanding this, the Company reserves the right to bring proceedings against you in any other court of competent jurisdiction to protect its interests.',
      },
      { type: 'subtitle', text: '15.3. Amicable Resolution' },
      {
        type: 'text',
        text: 'The parties shall use reasonable efforts to resolve any dispute amicably and in good faith. If a dispute cannot be resolved through informal negotiations within thirty (30) days, either party may initiate formal procedures.',
      },
      { type: 'subtitle', text: '15.4. Arbitration' },
      {
        type: 'text',
        text: 'Any dispute that cannot be resolved amicably may, at the Company’s election, be referred to and finally resolved by arbitration in Vancouver, British Columbia, in accordance with the domestic arbitration rules then in effect in British Columbia. The language of the arbitration shall be English.',
      },
      { type: 'subtitle', text: '15.5. Consumer Rights' },
      {
        type: 'text',
        text: 'Nothing in this section shall limit or exclude any mandatory rights you may have as a consumer under applicable Canadian provincial consumer protection laws.',
      },

      { type: 'title', text: 'SECTION 16: Miscellaneous' },
      { type: 'subtitle', text: '16.1. Entire Agreement' },
      {
        type: 'text',
        text: 'These Terms, together with the Privacy Policy, Risk Disclosure, and all documents incorporated by reference, constitute the entire agreement between you and Djooky Finance Limited regarding the Service, and supersede all prior understandings or agreements.',
      },
      { type: 'subtitle', text: '16.2. Amendments' },
      {
        type: 'text',
        text: 'Djooky Finance Limited reserves the right to update these Terms at any time. Changes become effective upon publication on the platform. Your continued use of the Service after updates constitutes acceptance of the revised Terms.',
      },
      { type: 'subtitle', text: '16.3. Waiver' },
      {
        type: 'text',
        text: 'No failure or delay by the Company in exercising any right under these Terms shall operate as a waiver of that right.',
      },
      { type: 'subtitle', text: '16.4. Severability' },
      {
        type: 'text',
        text: 'If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.',
      },
      { type: 'subtitle', text: '16.5. Assignment' },
      {
        type: 'text',
        text: 'You may not assign or transfer any rights or obligations under these Terms without prior written consent from the Company. Djooky Finance Limited may assign its rights and obligations to any affiliate or successor without your consent.',
      },
      { type: 'subtitle', text: '16.6. Survival' },
      {
        type: 'text',
        text: 'Provisions that by their nature should survive termination, including those relating to liability, intellectual property, and governing law, shall remain in effect after your account is closed.',
      },
      { type: 'subtitle', text: '16.7. Notices' },
      {
        type: 'text',
        text: 'All notices to the Company must be sent to support@tokenum.com or to our registered office in Vancouver. Notices to you will be sent to the email address associated with your account.',
      },
      { type: 'subtitle', text: '16.8. Language' },
      {
        type: 'text',
        text: 'These Terms are drafted in English. In the event of any discrepancy between the English version and any translation, the English version shall prevail.',
      },

      { type: 'title', text: 'SECTION 17: Prohibited businesses' },
      { type: 'subtitle', text: '17.1. General Prohibition' },
      {
        type: 'text',
        text: 'Djooky Finance Limited is committed to full compliance with the PCMLTFA and FINTRAC standards. The Company strictly prohibits the use of its Service for any business or activity that is illegal or poses an unacceptable risk.',
      },
      { type: 'subtitle', text: '17.2. Prohibited Business Activities' },
      {
        type: 'text',
        text: 'The following categories of activities are expressly prohibited:',
      },
      {
        type: 'list',
        items: [
          '(a) Unlicensed Financial Services: Any unlicensed money transmission, payment processing, or unregulated investment schemes.',
          '(b) Illegal Goods and Services: Sale of narcotics, counterfeit goods, stolen property, or illegal weapons.',
          '(c) Unregulated Gambling: Unlicensed online casinos, sports betting, or illegal lotteries.',
          '(d) Violence and Hate: Promoting or facilitating violence, discrimination, or exploitation.',
          '(e) Fraud and Extortion: Ransomware payments, blackmail, or Ponzi schemes.',
          '(f) Human Trafficking: Any activity involving forced labor or human exploitation.',
          '(g) Intellectual Property Infringement: Pirated software or goods that violate trademarks and copyrights.',
          '(h) Anonymizing Services: Activities involving mixers, tumblers, or privacy coins designed to obfuscate transaction history.',
        ],
      },
      { type: 'subtitle', text: '17.3. Monitoring and Enforcement' },
      {
        type: 'text',
        text: 'The Company monitors all transactions. Any account suspected of involvement in prohibited activities will be suspended immediately and reported to FINTRAC and law enforcement as required by law.',
      },

      { type: 'title', text: 'SECTION 18: Prohibited users' },
      { type: 'subtitle', text: '18.1. General Prohibition' },
      {
        type: 'text',
        text: 'The Company prohibits the use of its Service by any person subject to legal, regulatory, or internal restrictions.',
      },
      { type: 'subtitle', text: '18.2. Prohibited User Categories' },
      {
        type: 'text',
        text: 'The following are prohibited from using the Service:',
      },
      {
        type: 'list',
        items: [
          '(a) Sanctioned Individuals: Persons on the OSFI (Canada), UN, or OFAC sanctions lists.',
          '(b) Minors: Individuals under the age of eighteen (18).',
          '(c) Corporate Clients: The Service is for individuals only. Legal entities and trusts are prohibited unless specifically authorized.',
          '(d) Residents of High-Risk Jurisdictions: Persons located in jurisdictions subject to comprehensive sanctions (e.g., North Korea, Iran, Syria) or designated as high-risk by FINTRAC/FATF.',
          '(e) Anonymous Users: Persons providing false ID or using VPN/anonymizers to conceal their location.',
        ],
      },

      { type: 'title', text: 'SECTION 19: Commission levels' },
      { type: 'subtitle', text: '19.1. Fee Structure' },
      {
        type: 'text',
        text: 'All fees, including exchange and withdrawal commissions, are set at the Company’s discretion and are subject to change.',
      },
      { type: 'subtitle', text: '19.2. Disclosure and Consent' },
      {
        type: 'text',
        text: 'Fees will be clearly disclosed to you before the execution of any transaction. By proceeding, you agree to pay the disclosed commissions.',
      },
      { type: 'subtitle', text: '19.3. No Refunds' },
      {
        type: 'text',
        text: 'Commission fees are non-refundable except as required by Canadian law.',
      },

      { type: 'title', text: 'SECTION 20: Data protection and privacy' },
      { type: 'subtitle', text: '20.1. Data Collection' },
      {
        type: 'text',
        text: 'Djooky Finance Limited collects and processes personal data in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and our Privacy Policy.',
      },
      { type: 'subtitle', text: '20.2. Purpose' },
      {
        type: 'text',
        text: 'Data is used for identity verification (KYC), fraud prevention, and compliance with the PCMLTFA.',
      },
      { type: 'subtitle', text: '20.3. Data Retention' },
      {
        type: 'text',
        text: 'In accordance with FINTRAC regulations, the Company retains records of your identity and transactions for at least five (5) years after the end of the business relationship.',
      },
      {
        type: 'text',
        text: 'By using Tokenum services, you confirm that you have read, understood, and agreed to this Terms & Conditions.',
      },
    ],
  },
  {
    title: 'AML/CTF Policy',
    blocks: [
      { type: 'title', text: 'Overview and Regulatory Commitment' },
      {
        type: 'text',
        text: 'Tokenum (operated by Djooky Finance Limited) is committed to maintaining the highest standards of financial integrity and security. To prevent the misuse of our platform for money laundering, terrorist financing, or the evasion of international sanctions, we operate under a comprehensive Compliance Program based on a Risk-Based Approach (RBA). Our internal controls are designed to identify and mitigate risks associated with financial crime, ensuring that our services are used only for legitimate purposes.',
      },

      { type: 'title', text: 'Customer Identification and Verification (KYC)' },
      {
        type: 'text',
        text: 'In accordance with international standards, every user must undergo a mandatory identity verification process before any transaction can be initiated. This procedure includes the collection of verified personal information, such as full name, date of birth, and residential address, coupled with biometric liveness checks and the verification of government-issued identification.',
      },
      {
        type: 'text',
        text: 'Tokenum cross-references all customer data against global sanctions lists, databases of Politically Exposed Persons (PEPs), and adverse media records to ensure that we do not facilitate services for high-risk individuals. We only provide services to individual customers who have reached the age of 18 and are acting on their own behalf.',
      },

      { type: 'title', text: 'Prohibited Jurisdictions and Ineligible Customers' },
      {
        type: 'text',
        text: 'To comply with global regulatory requirements and our internal risk appetite, Tokenum maintains strict eligibility criteria. We do not provide services to:',
      },
      {
        type: 'list',
        items: [
          'US Persons (including citizens and residents);',
          'Individuals located in prohibited or high-risk jurisdictions;',
          'Individuals subject to international sanctions;',
          'Politically Exposed Persons (PEPs), Heads of International Organizations (HIOs), or their close family members and associates;',
          'Corporate entities, trusts, or intermediaries.',
        ],
      },
      {
        type: 'text',
        text: 'This ensures that all activity on the platform is conducted by verified individuals for their personal benefit.',
      },

      { type: 'title', text: 'Payment and Transaction Discipline' },
      {
        type: 'text',
        text: 'Our fiat-to-virtual currency conversion service operates on a strict non-custodial model with rigorous payment controls. We accept fiat funds exclusively via bank transfers (such as SWIFT or SEPA) that originate from a bank account held in the verified customer’s own name.',
      },
      {
        type: 'text',
        text: 'Tokenum does not accept payments from third parties, nor do we support cash, credit cards, cheques, or anonymous electronic payment methods. Any attempt to use mismatched accounts or unapproved payment rails will result in a transaction rejection and potential relationship termination.',
      },

      { type: 'title', text: 'Digital Asset Integrity and Wallet Screening' },
      {
        type: 'text',
        text: 'The integrity of the digital assets processed through our platform is maintained using advanced blockchain analytics and monitoring tools. Before any transaction is executed, destination wallet addresses are screened for exposure to illicit activity.',
      },
      {
        type: 'text',
        text: 'Tokenum prohibits any interaction with privacy coins, mixers, tumblers, or any tools designed to obfuscate transaction history. We do not process transactions involving wallets connected to darknet markets, ransomware, fraud, or sanctioned services. This ensures that the digital assets delivered to our customers are free from high-risk associations.',
      },

      { type: 'title', text: 'Monitoring, Reporting and Recordkeeping' },
      {
        type: 'text',
        text: 'Tokenum conducts ongoing transaction monitoring to detect patterns that may indicate suspicious activity, fraud, or financial crime. As a regulated entity, we fulfill our reporting obligations by filing necessary documentation, including Suspicious Transaction Reports (STRs), with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) and other relevant authorities where required by law.',
      },
      {
        type: 'text',
        text: 'To support these efforts and comply with regulatory standards, all customer data, identification records, and transaction history are securely archived for a minimum period of five years. This data is protected under strict confidentiality protocols and is only accessible to authorized compliance personnel.',
      },
    ],
  },
  {
    title: 'Privacy Policy',
    blocks: [
      { type: 'title', text: '1. Scope and Introduction' },
      {
        type: 'text',
        text: 'This Privacy Policy (“Policy”) is a legally binding document that governs how Djooky Finance Limited (“Company”, “we”, “us”, or “our”), a company incorporated in British Columbia, Canada (Incorporation Number: BC1535602), operating under the brand name Tokenum, processes information.',
      },
      {
        type: 'text',
        text: 'As a Canadian entity registered with FINTRAC (registration number C100000967), we are committed to the highest standards of data protection. This Policy is designed to comply with the federal Personal Information Protection and Electronic Documents Act (PIPEDA), the Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA), and British Columbia’s Personal Information Protection Act (PIPA).',
      },
      {
        type: 'text',
        text: 'This Policy applies to:',
      },
      {
        type: 'list',
        items: [
          'Users and Visitors: any individual who accesses or uses the Tokenum website, mobile applications, or any other digital platforms operated by the Company;',
          'Applicants: any individual who applies to open an account, regardless of whether the onboarding process is successfully completed;',
          'Beneficial Owners and Representatives: individuals who exercise ultimate control over a transaction or an account, or on whose behalf a transaction is conducted (in accordance with PCMLTFA requirements regarding “Beneficial Ownership”);',
          'Other Counterparties: any individual who provides personal information to the Company in the course of our business operations, including authorized representatives or third parties involved in transaction monitoring.',
        ],
      },

      { type: 'title', text: '2. Key Definitions' },
      {
        type: 'text',
        text: 'To ensure transparency, the following terms are used in this Policy:',
      },
      {
        type: 'definition',
        term: 'Personal Information',
        text: 'Information about an identifiable individual, including any factual or subjective information about that individual, but does not include business contact information used for business communication.',
      },
      {
        type: 'definition',
        term: 'Processing',
        text: 'Any operation performed on personal data, such as collection, recording, organization, storage, consultation, use, disclosure, or destruction.',
      },
      {
        type: 'definition',
        term: 'PIPEDA',
        text: 'The Canadian federal law that sets out rules for how private-sector organizations must handle personal information in the course of commercial activity.',
      },
      {
        type: 'definition',
        term: 'FINTRAC',
        text: 'The Financial Transactions and Reports Analysis Centre of Canada, our primary AML/CTF regulator.',
      },

      { type: 'title', text: '3. Categories of Information We Collect' },
      { type: 'subtitle', text: '3.1. Identity and Verification Data (KYC)' },
      {
        type: 'text',
        text: 'For compliance with PCMLTFA, we collect data that establishes your identity beyond doubt:',
      },
      {
        type: 'list',
        items: [
          'Full Legal Name: including any aliases or former names.',
          'Date of Birth: to verify age of majority in your province/country.',
          'Nationality and Residency: to determine geographical risk factors.',
          'Government Identifiers: high-resolution scans (front and back) of a valid Passport, National ID card, or Driver’s License. We collect the document number, expiry date, and issuing authority.',
          'Visual/Biometric Data: photographs and/or video recordings of the user (e.g., “liveness checks” or “selfie with ID”) to prevent impersonation fraud.',
        ],
      },
      { type: 'subtitle', text: '3.2. Contact and Residential Data' },
      {
        type: 'list',
        items: [
          'Primary Contact details: email address and verified mobile phone number.',
          'Residential Address: full physical address (P.O. Boxes are generally not accepted).',
          'Proof of Residency: scans of utility bills, bank statements, or government correspondence issued within the last 3–6 months.',
        ],
      },
      { type: 'subtitle', text: '3.3. Financial and Economic Profile' },
      {
        type: 'list',
        items: [
          'Wealth/Funds Information: data regarding the source of wealth and source of funds (e.g., salary, investment income, sale of assets).',
          'Banking Data: bank account numbers (IBAN), SWIFT codes, and institutional names for fiat-to-crypto operations.',
          'Digital Asset Data: public wallet addresses, transaction hashes, and metadata associated with your cryptocurrency transfers.',
          'Employment Data: occupation, job title, and employer’s name to comply with “Know Your Customer’s Business” requirements.',
        ],
      },
      { type: 'subtitle', text: '3.4. Technical and Behavioral Data (Automatic)' },
      {
        type: 'text',
        text: 'As you interact with Tokenum, we automatically log:',
      },
      {
        type: 'list',
        items: [
          'Network Identifiers: IP addresses (including static/dynamic), MAC addresses, and proxy/VPN detection data.',
          'Device Metadata: device type, OS version, browser version, screen resolution, and time zone settings.',
          'Interaction Logs: clickstream data, pages viewed, time stamps of sessions, and referral URLs.',
        ],
      },

      { type: 'title', text: '4. Legal Basis for Processing' },
      {
        type: 'text',
        text: 'In accordance with PIPEDA, Djooky Finance Limited (Tokenum) processes your personal information only when we have a valid legal basis to do so. These bases include:',
      },
      {
        type: 'list',
        items: [
          'Consent: where you have given clear and informed consent for us to process your data for a specific purpose (e.g., marketing).',
          'Contractual Necessity: where processing is required to perform the services outlined in our Terms of Service.',
          'Legal Obligation: where we are mandated by Canadian federal or provincial laws (specifically AML/CTF statutes) to collect and report data.',
          'Legitimate Interests: where processing is necessary for our legitimate business interests, such as preventing fraud, ensuring network security, and improving our platform, provided these interests do not override your fundamental privacy rights.',
        ],
      },

      { type: 'title', text: '5. Detailed Purposes of Processing' },
      { type: 'subtitle', text: '5.1. Compliance with Canadian AML/CTF Regulations' },
      {
        type: 'text',
        text: 'As a registered MSB, our primary purpose is to maintain the integrity of the Canadian financial system. We use your Identity, Residential, and Financial Data to:',
      },
      {
        type: 'list',
        items: [
          'Perform mandatory identity verification (KYC) prior to onboarding;',
          'Conduct sanctions screening against applicable lists, including Canadian sanctions administered by OSFI and Global Affairs Canada, the UK Financial Sanctions List (OFSI), U.S. sanctions lists administered by OFAC, the United Nations (UN) Security Council Sanctions List, and high-risk / non-cooperative jurisdictions identified by the Financial Action Task Force (FATF);',
          'Identify Politically Exposed Persons (PEPs), their family members, and Heads of International Organizations (HIOs);',
          'Monitor transactions on an ongoing basis to detect and report Suspicious Transaction Reports (STRs) to FINTRAC;',
          'Verify the Source of Funds (SOF) and, where required, Source of Wealth (SOW) for large or unusual transactions to prevent money laundering and terrorist financing.',
        ],
      },
      { type: 'subtitle', text: '5.2. Provision and Management of Services' },
      {
        type: 'text',
        text: 'We use your Contact, Financial, and Technical Data to:',
      },
      {
        type: 'list',
        items: [
          'Facilitate the purchase, sale, and exchange of digital assets;',
          'Process fiat deposits and withdrawals via secondary banking partners;',
          'Send critical account notifications, such as transaction confirmations, multi-factor authentication (2FA) verification codes, and security-related alerts (e.g., login notifications from unrecognized devices);',
          'Provide customer support and resolve technical or financial disputes.',
        ],
      },
      { type: 'subtitle', text: '5.3. Fraud Prevention and Platform Security' },
      {
        type: 'text',
        text: 'To protect our users and our infrastructure, we process Behavioral and Technical Data to:',
      },
      {
        type: 'list',
        items: [
          'Detect and block unauthorized access, hacking attempts, account takeovers, and other security threats;',
          'Evaluate device fingerprinting, IP intelligence, and behavioral patterns to identify botnets, automated abuse, or malicious actors;',
          'Perform blockchain analytics and transaction monitoring to assess wallet risk and ensure that funds do not originate from, or are not destined for, illicit or high-risk sources, including but not limited to:',
        ],
      },
      {
        type: 'list',
        nested: true,
        items: [
          'Darknet markets and illegal marketplaces;',
          'Anonymizing services such as mixers, tumblers, and privacy-enhancing technologies;',
          'Stolen funds, compromised wallets, or ransomware-related addresses;',
          'Unregulated or high-risk gambling and betting platforms;',
          'Unlicensed or non-compliant virtual asset service providers (VASPs) and high-risk peer-to-peer platforms;',
          'Sanctioned individuals, entities, or restricted jurisdictions;',
          'Fraud schemes, scams, or other forms of financial crime.',
        ],
      },
      { type: 'subtitle', text: '5.4. Personalization and Service Improvement' },
      {
        type: 'text',
        text: 'Based on your Interaction Logs and Usage Data, we aim to:',
      },
      {
        type: 'list',
        items: [
          'Optimize the user interface (UI) and user experience (UX) of the Tokenum platform;',
          'Troubleshoot software bugs and hardware compatibility issues;',
          'Perform internal research and statistical analysis on market trends (using anonymized or aggregated data where possible).',
        ],
      },
      { type: 'subtitle', text: '5.5. Marketing and Communications' },
      {
        type: 'text',
        text: 'If you have provided explicit opt-in consent, we may use your Contact Data to:',
      },
      {
        type: 'list',
        items: [
          'Send newsletters, promotional offers, and updates about new features or listed assets;',
          'Conduct surveys or market research to improve our value proposition.',
        ],
      },
      {
        type: 'text',
        text: 'Note: You may revoke this consent at any time without affecting your access to the core services.',
      },

      { type: 'title', text: '6. Automated Decision-Making and Profiling' },
      {
        type: 'text',
        text: 'Tokenum may use automated systems to monitor transactions and assess risk profiles (e.g., scoring a transaction as “high risk” based on its destination or patterns).',
      },
      {
        type: 'text',
        text: 'If an automated decision results in the suspension of your account, you have the right to request a manual review by our compliance team.',
      },
      {
        type: 'text',
        text: 'We do not use automated decision-making for purposes that have a significant legal effect on you, unless such processing is authorized by law or is necessary to ensure compliance with our platform’s rules and security standards.',
      },
      {
        type: 'text',
        text: 'Specifically, we reserve the right to apply automated restrictions to prevent fraud, address suspicious activity, or mitigate breaches of these Terms and Conditions.',
      },

      { type: 'title', text: '7. Disclosure of Personal Information' },
      {
        type: 'text',
        text: 'Djooky Finance Limited (Tokenum) does not sell, rent, or trade your Personal Information to third parties for their marketing purposes. We disclose your data only to the following categories of recipients, strictly for the purposes below.',
      },
      { type: 'subtitle', text: '7.1. Identification and Verification Providers' },
      {
        type: 'text',
        text: 'We share your Identity and Biometric data with specialized third-party service providers (e.g., identity verification platforms) to perform automated KYC checks, “liveness” tests, and database screening against global sanctions lists. These providers are contractually obligated to use the data only for the purpose of verification and must adhere to strict security protocols.',
      },
      { type: 'subtitle', text: '7.2. Banking, Payment Partners and Service Providers' },
      {
        type: 'text',
        text: 'To facilitate fiat-to-crypto operations (CAD/USD/EUR deposits and withdrawals), we may disclose your Identity and Financial Data to our banking partners, credit card processors, and payment gateways. In addition, we may share relevant information with trusted service providers, including payment facilitators (e.g., on/off-ramp providers), technical infrastructure providers, and compliance vendors, as well as with external auditors, consultants, and professional advisers, where reasonably necessary and justified. These parties may perform their own independent compliance checks as required by applicable laws and regulations.',
      },
      { type: 'subtitle', text: '7.3. Blockchain Analytics and Security Firms' },
      {
        type: 'text',
        text: 'We may provide your public wallet addresses and related transaction metadata to specialized blockchain analytics and forensic service providers. This is necessary to assess transaction risk and ensure that funds interacting with the Tokenum platform are not associated with money laundering, terrorist financing, fraud, sanctions violations, or other illicit or high-risk activities.',
      },
      { type: 'subtitle', text: '7.4. Regulatory and Law Enforcement Authorities' },
      {
        type: 'text',
        text: 'As a registered MSB, we have a mandatory legal obligation to disclose information to:',
      },
      {
        type: 'list',
        items: [
          'FINTRAC: for Large Cash Transaction Reports (LCTRs) and Suspicious Transaction Reports (STRs);',
          'Law Enforcement Agencies: in response to valid warrants, subpoenas, or court orders issued by Canadian or authorized international courts;',
          'Tax Authorities (e.g., Canada Revenue Agency): where we are legally mandated to report specific financial activities.',
        ],
      },
      { type: 'subtitle', text: '7.5. Internal Professional Advisers' },
      {
        type: 'text',
        text: 'We may share limited data with our legal counsel, auditors, and professional insurers to protect the Company’s legal rights, ensure financial transparency, and mitigate operational risks.',
      },

      { type: 'title', text: '8. International Data Transfers' },
      {
        type: 'text',
        text: 'Personal Information collected by Tokenum may be stored and processed in Canada or any other country where our service providers maintain facilities (e.g., cloud hosting in the USA or EU).',
      },
      { type: 'subtitle', text: '8.1. Safeguards for Cross-Border Transfers' },
      {
        type: 'text',
        text: 'When your data is transferred outside of Canada, we ensure a comparable level of protection through:',
      },
      {
        type: 'list',
        items: [
          'Standard Contractual Clauses: mandatory privacy and security requirements in agreements with non-Canadian vendors;',
          'Accountability: we remain responsible for the protection of your data regardless of its location;',
          'Legal Jurisdiction: when data is stored in a foreign jurisdiction, it may be subject to the laws of that country, including the right of foreign governments, courts, or law enforcement to obtain disclosure under local regulations.',
        ],
      },

      { type: 'title', text: '9. Business Transfers' },
      {
        type: 'text',
        text: 'In the event that Djooky Finance Limited undergoes a corporate reorganization, merger, sale, or acquisition, your Personal Information may be transferred as part of the business assets. In such a scenario, the successor entity will be bound by this Privacy Policy or will be required to provide a new policy with a comparable level of protection.',
      },

      { type: 'title', text: '10. Data Retention Policy' },
      {
        type: 'text',
        text: 'Djooky Finance Limited (Tokenum) does not store your Personal Information longer than is necessary for the purposes for which it was collected, or as required by law.',
      },
      { type: 'subtitle', text: '10.1. Regulatory Retention (FINTRAC/AML)' },
      {
        type: 'text',
        text: 'In accordance with the Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA), we are legally mandated to retain specific records for a minimum period of five (5) years. This includes:',
      },
      {
        type: 'list',
        items: [
          'Identification Records: copies of ID documents and verification results, starting from the date the account is closed;',
          'Transaction Records: details of all fiat and cryptocurrency transfers, starting from the date the transaction was completed;',
          'Reporting Records: copies of any reports submitted to FINTRAC (STRs, LCTRs).',
        ],
      },
      { type: 'subtitle', text: '10.2. General Retention' },
      {
        type: 'text',
        text: 'Information that is not subject to AML retention (e.g., marketing preferences or general inquiries) is retained only as long as the account is active or as needed to provide support, after which it is deleted or permanently anonymized.',
      },

      { type: 'title', text: '11. Data Security and Protection' },
      {
        type: 'text',
        text: 'We employ advanced technical and organizational measures to safeguard your Personal Information against loss, theft, unauthorized access, or modification.',
      },
      { type: 'subtitle', text: '11.1. Technical Safeguards' },
      {
        type: 'list',
        items: [
          'Encryption: use of Transport Layer Security (TLS) and Advanced Encryption Standard (AES-256) for data at rest and in transit;',
          'Access Control: strict “need-to-know” access policies for employees, protected by Multi-Factor Authentication (MFA);',
          'Network Security: use of firewalls, Intrusion Detection Systems (IDS), and regular penetration testing.',
        ],
      },
      { type: 'subtitle', text: '11.2. Organizational Safeguards' },
      {
        type: 'list',
        items: [
          'Employee Training: mandatory privacy and security training for all staff handling user data;',
          'Confidentiality Agreements: all employees and contractors must sign non-disclosure agreements (NDAs) as a condition of their engagement.',
        ],
      },

      { type: 'title', text: '12. Your Rights Under PIPEDA' },
      {
        type: 'text',
        text: 'As a resident of Canada (or as a user of a Canadian platform), you have specific rights regarding your Personal Information:',
      },
      { type: 'subtitle', text: '12.1. Right to Access' },
      {
        type: 'text',
        text: 'You have the right to request a copy of the Personal Information we hold about you. We will provide this information in a structured, commonly used format within 30 days of receiving your request. In complex cases, we may extend this period by another 30 days with prior notice.',
      },
      { type: 'subtitle', text: '12.2. Right to Correction (Accuracy)' },
      {
        type: 'text',
        text: 'We rely on you to keep your information up to date. You have the right to challenge the accuracy and completeness of your data and have it amended as appropriate.',
      },
      { type: 'subtitle', text: '12.3. Right to Withdraw Consent' },
      {
        type: 'text',
        text: 'You may withdraw your consent for data processing at any time (e.g., opting out of marketing). Please note that withdrawing consent for KYC/AML processing will require the Company to terminate its services to you and close your account.',
      },
      { type: 'subtitle', text: '12.4. Right to Information' },
      {
        type: 'text',
        text: 'You have the right to be informed about how your data is used, who has access to it, and how we protect it. This Privacy Policy serves as the primary tool for this transparency.',
      },
      { type: 'subtitle', text: '12.5. Right to File a Complaint' },
      {
        type: 'text',
        text: 'If you believe that we have not complied with this Policy or our obligations under PIPEDA, you are encouraged to contact our Privacy Officer. If you remain unsatisfied, you have the right to contact the Office of the Privacy Commissioner of Canada (OPC).',
      },

      { type: 'title', text: '13. Verifying Your Identity for Requests' },
      {
        type: 'text',
        text: 'To protect your privacy, when you exercise your rights (e.g., requesting access to data), we may require you to provide additional information to verify your identity. We will not process requests that we cannot authenticate.',
      },

      { type: 'title', text: '14. Cookies and Web Tracking Technologies' },
      {
        type: 'text',
        text: 'Djooky Finance Limited (Tokenum) uses cookies, web beacons, and similar technologies to enhance your experience, maintain security, and analyze platform performance.',
      },
      { type: 'subtitle', text: '14.1. Types of Cookies We Use' },
      {
        type: 'list',
        items: [
          'Essential Cookies: required for the operation of the platform. They enable core functions like secure login, session management, and load balancing. The platform cannot function correctly without these.',
          'Analytical/Performance Cookies: these allow us to recognize and count the number of visitors and see how they move around the platform. This helps us optimize navigation and fix technical issues.',
          'Functionality Cookies: used to recognize you when you return to the platform, allowing us to greet you by name and remember your preferences (e.g., language or currency choice).',
        ],
      },
      { type: 'subtitle', text: '14.2. Managing Cookies' },
      {
        type: 'text',
        text: 'You can block or delete cookies through your browser settings. However, please be aware that disabling essential cookies may prevent you from accessing secure areas of the Tokenum platform or completing transactions.',
      },

      { type: 'title', text: '15. Mandatory Data Breach Notification' },
      {
        type: 'text',
        text: 'In accordance with the Digital Privacy Act (amendments to PIPEDA), we have strict protocols for handling security incidents involving personal information.',
      },
      { type: 'subtitle', text: '15.1. Assessment of Risk' },
      {
        type: 'text',
        text: 'In the event of an unauthorized access, loss, or disclosure of data, we will immediately conduct an assessment to determine if the breach poses a “Real Risk of Significant Harm” (RROSH) to any individual. Significant harm includes identity theft, financial loss, damage to reputation, or fraud.',
      },
      { type: 'subtitle', text: '15.2. Notification Process' },
      {
        type: 'text',
        text: 'If a RROSH is identified, the Company will:',
      },
      {
        type: 'list',
        items: [
          'Report to the Privacy Commissioner: notify the Office of the Privacy Commissioner of Canada (OPC) as soon as feasible;',
          'Notify Affected Individuals: inform you directly (via email or platform notification) without undue delay. The notice will include the nature of the breach, the data involved, steps we are taking, and actions you should take to protect yourself;',
          'Record Keeping: maintain a record of all data breaches for a minimum of 24 months, regardless of whether they met the RROSH threshold.',
        ],
      },

      { type: 'title', text: '16. Protection of Minors' },
      {
        type: 'text',
        text: 'Tokenum does not knowingly collect personal information from individuals under the age of 18 (or the age of majority in their respective Canadian province). If we become aware that a child has provided us with personal information, we will delete it immediately and terminate any associated accounts.',
      },

      { type: 'title', text: '17. Links to Third-Party Websites' },
      {
        type: 'text',
        text: 'Our platform may contain links to third-party websites (e.g., news articles or partner services). This Privacy Policy applies only to Tokenum. We are not responsible for the privacy practices or content of external sites, and we encourage you to read their policies before providing any data.',
      },

      { type: 'title', text: '18. Updates to This Privacy Policy' },
      {
        type: 'text',
        text: 'We may revise this Policy periodically to reflect changes in our practices or Canadian law.',
      },
      {
        type: 'list',
        items: [
          'The “Effective Date” at the top of this document will indicate the date of the latest update.',
          'If we make material changes, we will notify you through a prominent notice on the platform or via the email address associated with your account.',
          'Continued use of the platform after an update constitutes acceptance of the revised Policy.',
        ],
      },

      { type: 'title', text: '19. Contacting our Privacy Officer' },
      {
        type: 'text',
        text: 'If you have questions, wish to exercise your rights, or have a concern about how your data is handled, please reach out to our dedicated compliance department:',
      },
      {
        type: 'list',
        items: [
          'Djooky Finance Limited (Tokenum)',
          'Attn: Privacy Officer (Compliance Unit)',
          'Email: support@tokenum.com',
          'Mailing Address: 2-1130 Hachey Ave, Coquitlam, BC V3K 2H4, CANADA',
        ],
      },
      {
        type: 'text',
        text: 'By using Tokenum services, you confirm that you have read, understood, and agreed to this Privacy Policy.',
      },
    ],
  },
  {
    title: 'Complaints Procedure',
    blocks: [
      { type: 'title', text: '1. General Provisions' },
      {
        type: 'text',
        text: '1.1. This Complaints Procedure (“Procedure”) sets out the process for submitting, handling, and resolving complaints related to services provided under the Tokenum brand by Djooky Finance Limited, a company incorporated in British Columbia, Canada (Incorporation Number: BC1535602), with its registered office at 2-1130 Hachey Ave, Coquitlam, BC V3K 2H4, CANADA (the “Company”).',
      },
      {
        type: 'text',
        text: '1.2. Djooky Finance Limited is registered with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a Money Services Business (MSB) under registration number C100000967.',
      },
      {
        type: 'text',
        text: '1.3. The Company is committed to handling complaints fairly, efficiently, and in accordance with applicable Canadian laws and regulations, including anti-money laundering obligations and the Personal Information Protection and Electronic Documents Act (PIPEDA).',
      },
      {
        type: 'text',
        text: '1.4. This Procedure applies to all users of Tokenum services and covers complaints related to account activity, transactions, compliance decisions, and customer support.',
      },

      { type: 'title', text: '2. Submitting a Complaint' },
      {
        type: 'text',
        text: '2.1. Complaints may be submitted through the following channels:',
      },
      {
        type: 'list',
        items: [
          'Email: support@tokenum.com',
          'Postal mail: 2-1130 Hachey Ave, Coquitlam, BC V3K 2H4, CANADA',
          'Through any official communication channel made available on the Tokenum platform',
        ],
      },
      {
        type: 'text',
        text: '2.2. Complaints should be submitted in English. The Company may accept other languages at its discretion.',
      },
      {
        type: 'text',
        text: '2.3. To ensure efficient handling, users are encouraged to provide:',
      },
      {
        type: 'list',
        items: [
          'Full name',
          'Contact details',
          'Account ID (if applicable)',
          'Detailed description of the issue',
          'Relevant dates and transaction IDs',
          'Supporting documents (screenshots, records, correspondence)',
        ],
      },
      {
        type: 'text',
        text: '2.4. The Company may request additional information where necessary.',
      },

      { type: 'title', text: '3. Complaint Handling Process' },
      {
        type: 'text',
        text: '3.1. Upon receipt of a complaint, the Company will:',
      },
      {
        type: 'list',
        items: [
          'Acknowledge receipt within 5 business days',
          'Assign the complaint for internal review',
        ],
      },
      {
        type: 'text',
        text: '3.2. The review process may include:',
      },
      {
        type: 'list',
        items: [
          'Examination of transaction data and logs',
          'Review of compliance and AML records',
          'Consultation with internal teams or third-party providers',
        ],
      },
      {
        type: 'text',
        text: '3.3. The Company will provide a written response within 30 working days. If additional time is required, the user will be informed.',
      },
      {
        type: 'text',
        text: '3.4. Where legally permitted, the Company will provide details of its findings. However, disclosure may be limited where required under AML/FINTRAC obligations.',
      },

      { type: 'title', text: '4. Possible Outcomes' },
      {
        type: 'text',
        text: '4.1. Following review, the Company may:',
      },
      {
        type: 'list',
        items: [
          'Accept the complaint and propose a resolution',
          'Reject the complaint with explanation',
          'Request additional information',
        ],
      },
      {
        type: 'text',
        text: '4.2. Resolutions may include corrective measures, account adjustments, or other appropriate actions.',
      },

      { type: 'title', text: '5. Escalation Process' },
      {
        type: 'text',
        text: '5.1. If the user is not satisfied, they may submit an appeal within 14 days of receiving the response.',
      },
      {
        type: 'text',
        text: '5.2. The appeal will be reviewed by a senior representative, and a final decision will be issued within 30 working days.',
      },
      {
        type: 'text',
        text: '5.3. If the matter remains unresolved, users may seek independent legal advice or refer the matter to the appropriate regulatory bodies in Canada.',
      },

      { type: 'title', text: '6. Confidentiality and Data Protection' },
      {
        type: 'text',
        text: '6.1. All complaints are handled confidentially. Personal data is processed in accordance with PIPEDA and the Company’s Privacy Policy.',
      },
      {
        type: 'text',
        text: '6.2. Complaint records may be retained for a minimum of five (5) years in accordance with AML and regulatory requirements.',
      },

      { type: 'title', text: '7. Final Provisions' },
      {
        type: 'text',
        text: '7.1. This Procedure may be updated to reflect changes in legal or regulatory requirements.',
      },
      {
        type: 'text',
        text: '7.2. The latest version will be available via Tokenum’s official channels.',
      },
      {
        type: 'text',
        text: '7.3. By using Tokenum services, you acknowledge and agree to this Complaints Procedure.',
      },
      {
        type: 'text',
        text: 'By using Tokenum services, you confirm that you have read, understood, and agreed to this Complaints Procedure Policy.',
      },
    ],
  },
  {
    title: 'Refund & Cancellation Policy',
    blocks: [
      { type: 'title', text: '1. Overview' },
      {
        type: 'text',
        text: 'This Refund and Cancellation Policy (“Policy”) applies to all users of services provided under the Tokenum brand by Djooky Finance Limited, a company incorporated in British Columbia, Canada (Incorporation Number: BC1535602), with its registered office at 2-1130 Hachey Ave, Coquitlam, BC V3K 2H4, CANADA (the “Company”).',
      },
      {
        type: 'text',
        text: 'Djooky Finance Limited is registered with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a Money Services Business (MSB) under registration number C100000967.',
      },
      {
        type: 'text',
        text: 'By using Tokenum services, you acknowledge and agree to the terms of this Policy.',
      },

      { type: 'title', text: '2. Non-Refundable Transactions' },
      {
        type: 'text',
        text: '2.1. Once a digital asset transaction or currency conversion has been executed and the funds have been transferred to the designated recipient (including external wallets), such transactions are final and irreversible.',
      },
      {
        type: 'text',
        text: '2.2. Due to the nature of blockchain technology, completed transactions cannot be canceled, reversed, or refunded, except where required by applicable law.',
      },

      { type: 'title', text: '3. Refunds for Funds Under Company Control' },
      {
        type: 'text',
        text: '3.1. A refund may be considered only in cases where the funds remain under the control of Djooky Finance Limited and have not been processed or transferred.',
      },
      {
        type: 'text',
        text: '3.2. Any refund decision is made at the sole discretion of the Company and in accordance with applicable laws and regulatory obligations, including AML requirements.',
      },
      {
        type: 'text',
        text: '3.3. The Company reserves the right to deduct the following prior to issuing any refund:',
      },
      {
        type: 'list',
        items: [
          'Service fees',
          'Network or blockchain fees',
          'Payment processing fees',
          'Any third-party charges',
        ],
      },
      {
        type: 'text',
        text: '3.4. Refunds may be delayed or refused if the transaction is subject to compliance review, investigation, or regulatory restrictions.',
      },

      { type: 'title', text: '4. User Responsibility' },
      {
        type: 'text',
        text: '4.1. Users are solely responsible for verifying all transaction details prior to confirmation, including:',
      },
      {
        type: 'list',
        items: [
          'Wallet addresses',
          'Amounts',
          'Selected assets and networks',
        ],
      },
      {
        type: 'text',
        text: '4.2. The Company is not responsible for losses resulting from user errors, including incorrect wallet addresses or incompatible networks.',
      },

      { type: 'title', text: '5. Fees and Charges' },
      {
        type: 'text',
        text: '5.1. All fees associated with transactions, including blockchain fees and third-party processing costs, are non-refundable, even where a refund is issued.',
      },

      { type: 'title', text: '6. Fraud, Compliance, and Legal Obligations' },
      {
        type: 'text',
        text: '6.1. The Company reserves the right to delay, suspend, or refuse transactions or refunds where required to comply with:',
      },
      {
        type: 'list',
        items: [
          'Canadian AML/CTF laws',
          'FINTRAC reporting obligations',
          'Sanctions regulations',
          'Law enforcement requests',
        ],
      },
      {
        type: 'text',
        text: '6.2. In cases of suspected fraud, unauthorized activity, or illegal conduct, the Company may:',
      },
      {
        type: 'list',
        items: [
          'Freeze funds',
          'Restrict account access',
          'Report the activity to relevant authorities',
        ],
      },
      {
        type: 'text',
        text: '6.3. The Company may be legally restricted from disclosing certain information related to such actions.',
      },

      { type: 'title', text: '7. Contact Information' },
      {
        type: 'text',
        text: 'For questions regarding this Policy:',
      },
      {
        type: 'list',
        items: [
          'Email: support@tokenum.com',
          'Address: 2-1130 Hachey Ave, Coquitlam, BC V3K 2H4, CANADA',
        ],
      },

      { type: 'title', text: '8. Acknowledgment' },
      {
        type: 'text',
        text: 'By using Tokenum services, you confirm that you have read, understood, and agreed to this Refund and Cancellation Policy.',
      },
    ],
  },
  {
    title: 'Risk Disclosure',
    blocks: [
      { type: 'title', text: '1. Limitation of Liability' },
      {
        type: 'text',
        text: 'Tokenum is a brand name operated by Djooky Finance Limited, a company incorporated in British Columbia, Canada (Incorporation Number: BC1535602), with its registered office at 2-1130 Hachey Ave, Coquitlam, BC V3K 2H4, CANADA.',
      },
      {
        type: 'text',
        text: 'Djooky Finance Limited is registered with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a Money Services Business (MSB) under registration number C100000967. Please be advised that registration with FINTRAC does not indicate an endorsement or licensing of the business by the federal government; it signifies that the Company fulfills its legal requirements under Canada’s PCMLTFA.',
      },
      {
        type: 'text',
        text: 'By using Tokenum services, you acknowledge and accept that all services are provided on an “as-is” and “as-available” basis. To the maximum extent permitted by applicable law, Djooky Finance Limited shall not be liable for any direct, indirect, incidental, or consequential losses, including loss of profits or data, arising from your use of the platform.',
      },

      { type: 'title', text: '2. Risk Disclosure' },
      {
        type: 'subtitle',
        text: '2.1. Voluntary Use',
      },
      {
        type: 'text',
        text: 'You acknowledge that you use Tokenum’s services solely at your own discretion and risk. Transactions involving digital assets carry significant risks and may result in the total loss of your funds.',
      },
      {
        type: 'subtitle',
        text: '2.2. No Deposit Insurance',
      },
      {
        type: 'text',
        text: 'Digital assets held in your Tokenum account are not legal tender and are not covered by the Canada Deposit Insurance Corporation (CDIC), the Canadian Investor Protection Fund (CIPF), or any other public or private deposit insurance scheme.',
      },
      {
        type: 'subtitle',
        text: '2.3. Price Volatility',
      },
      {
        type: 'text',
        text: 'Cryptocurrency markets are highly volatile. Prices can fluctuate significantly in very short periods due to changes in user confidence, regulatory environments, technological updates, and global political events. No central authority can intervene to stabilize the value of digital assets.',
      },
      {
        type: 'subtitle',
        text: '2.4. Irreversibility',
      },
      {
        type: 'text',
        text: 'Blockchain transactions are permanent. If you send digital assets to a wrong address or lose your security credentials (passwords, 2FA keys), your assets may be irreversibly lost. Djooky Finance Limited cannot recover assets sent to incorrect external addresses.',
      },
      {
        type: 'subtitle',
        text: '2.5. Regulatory Risk',
      },
      {
        type: 'text',
        text: 'The legal and regulatory status of digital assets in Canada and internationally is subject to change. New laws or regulations may affect your ability to hold, transfer, or exchange digital assets on the Tokenum platform.',
      },
      {
        type: 'subtitle',
        text: '2.6. Custody & Third-Party Risk',
      },
      {
        type: 'text',
        text: 'Djooky Finance Limited may engage third-party custodians or liquidity providers. You may be exposed to risks associated with these third parties, including potential insolvency or operational failures.',
      },
      {
        type: 'subtitle',
        text: '2.7. Banking Disclaimer',
      },
      {
        type: 'text',
        text: 'Tokenum partners with payment service providers to facilitate fiat transactions. However, the financial institutions involved in these processes do not engage in the exchange, transfer, or custody of your digital assets.',
      },

      { type: 'title', text: '3. Specific Risks of Digital Assets' },
      {
        type: 'list',
        items: [
          '(a) Market Risk: the value of your investment may drop to zero.',
          '(b) Liquidity Risk: it may be difficult to sell certain assets during periods of low market activity.',
          '(c) Cybersecurity Risk: digital assets are targets for hacking and fraud. While Tokenum implements security measures, you are responsible for maintaining the security of your own account credentials.',
          '(d) Operational Risk: system outages, maintenance, or technical errors may temporarily restrict your access to services.',
          '(e) Tax Risk: you are solely responsible for determining and paying any taxes applicable to your transactions under Canadian or international law.',
        ],
      },

      { type: 'title', text: '4. No Financial Advice' },
      {
        type: 'text',
        text: '4.1. Djooky Finance Limited (Tokenum) does not provide financial, investment, legal, or tax advice. Any information provided through the platform or our communication channels is for informational purposes only.',
      },
      {
        type: 'text',
        text: '4.2. By initiating a transaction, you confirm that you possess sufficient knowledge to understand the risks involved and have sought independent professional advice if necessary.',
      },

      { type: 'title', text: '5. Market Disruptions' },
      {
        type: 'text',
        text: '5.1. In the event of extreme market volatility, technical failure, or force majeure, Tokenum reserves the right to suspend or restrict services.',
      },
      {
        type: 'text',
        text: '5.2. Upon resumption of services, market prices may differ substantially from the prices available prior to the disruption. Tokenum is not liable for any losses resulting from price changes during service suspensions.',
      },

      { type: 'title', text: '6. Acknowledgment' },
      {
        type: 'text',
        text: 'By using the Tokenum platform (operated by Djooky Finance Limited), you confirm that you have read, understood, and accepted this Risk Disclosure in its entirety.',
      },
    ],
  },
  {
    title: 'Termination Policy',
    blocks: [
      { type: 'title', text: '1. General Provisions' },
      {
        type: 'text',
        text: '1.1. This Termination Policy (“Policy”) governs the suspension and termination of user accounts on the Tokenum platform, operated by Djooky Finance Limited, a company incorporated in British Columbia, Canada (Incorporation Number: BC1535602), with its registered office at 2-1130 Hachey Ave, Coquitlam, BC V3K 2H4, CANADA (the “Company”).',
      },
      {
        type: 'text',
        text: '1.2. Djooky Finance Limited is registered with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a Money Services Business (MSB) under registration number C100000967. This Policy reflects the Company’s obligations under applicable Canadian laws, including anti-money laundering and counter-terrorist financing requirements.',
      },
      {
        type: 'text',
        text: '1.3. This Policy outlines the circumstances under which access to the Tokenum platform may be restricted, suspended, or terminated.',
      },

      { type: 'title', text: '2. Grounds for Termination or Suspension' },
      {
        type: 'text',
        text: '2.1. The Company may suspend, restrict, or terminate access to the services at its sole discretion in the following cases:',
      },
      {
        type: 'list',
        items: [
          'Violation of the Terms of Use, Privacy Policy, or any applicable policies',
          'Failure to comply with KYC, AML, or identity verification requirements',
          'Involvement in fraud, money laundering, terrorist financing, sanctioned operations, or other unlawful activities',
          'Providing false, misleading, or incomplete information',
          'Unauthorized access or use of another user’s account',
          'Attempts to gain unauthorized access to systems, data, or infrastructure',
          'Use of bots, scripts, or automated tools without authorization',
          'Activities compromising platform security or integrity',
          'Failure to respond to compliance requests within a reasonable timeframe',
          'Use of high-risk wallets or blockchain addresses flagged by risk monitoring tools',
          'Transactions involving sanctioned or restricted jurisdictions',
          'Suspected market manipulation or abusive trading practices',
          'Prolonged account inactivity (as defined internally)',
          'Any activity that may expose the Company to legal, regulatory, or reputational risk',
          'Any reason required to comply with applicable laws, regulations, or directives from regulatory authorities',
        ],
      },

      { type: 'title', text: '3. Effects of Termination' },
      {
        type: 'text',
        text: '3.1. Upon termination, access to the Tokenum platform and all associated services will be revoked.',
      },
      {
        type: 'text',
        text: '3.2. The Company may freeze or restrict access to funds or digital assets where required to comply with legal, regulatory, or investigative obligations, including obligations under Canadian AML legislation.',
      },
      {
        type: 'text',
        text: '3.3. Withdrawals and transactions may be delayed, restricted, or cancelled during investigations or compliance reviews.',
      },
      {
        type: 'text',
        text: '3.4. The Company shall not be liable for any losses resulting from account suspension or termination, except as required by applicable law.',
      },

      { type: 'title', text: '4. User-Initiated Termination' },
      {
        type: 'text',
        text: '4.1. Users may request account closure by contacting: support@tokenum.com',
      },
      {
        type: 'text',
        text: '4.2. Users are expected to withdraw all funds prior to closure, unless restricted due to compliance, legal, or investigative reasons.',
      },
      {
        type: 'text',
        text: '4.3. The Company may require identity verification before processing account closure.',
      },
      {
        type: 'text',
        text: '4.4. User data will be retained and processed in accordance with applicable Canadian laws (including PIPEDA) and the Company’s Privacy Policy.',
      },

      { type: 'title', text: '5. Suspension and Investigation' },
      {
        type: 'text',
        text: '5.1. The Company may suspend accounts without prior notice if suspicious or potentially illegal activity is detected.',
      },
      {
        type: 'text',
        text: '5.2. During investigations, access to funds and services may be restricted.',
      },
      {
        type: 'text',
        text: '5.3. Users may be required to provide additional documentation or explanations.',
      },
      {
        type: 'text',
        text: '5.4. Where legally permitted, the Company will notify users of actions taken. However, disclosure may be restricted in cases involving AML/FINTRAC obligations (e.g., suspicious transaction reporting).',
      },

      { type: 'title', text: '6. Right to Appeal' },
      {
        type: 'text',
        text: '6.1. Users may submit an appeal within 30 days of notification by contacting the Company via email.',
      },
      {
        type: 'text',
        text: '6.2. The Company will review the appeal and respond within a reasonable timeframe.',
      },
      {
        type: 'text',
        text: '6.3. The Company’s decision following the appeal shall be final, unless otherwise required by law.',
      },

      { type: 'title', text: '7. Contact Information' },
      {
        type: 'text',
        text: 'For all inquiries related to this Policy:',
      },
      {
        type: 'list',
        items: [
          'Email: support@tokenum.com',
          'Address: 2-1130 Hachey Ave, Coquitlam, BC V3K 2H4, CANADA',
        ],
      },

      { type: 'title', text: '8. Acknowledgment' },
      {
        type: 'text',
        text: 'By using Tokenum, you acknowledge that you have read, understood, and agreed to this Termination Policy.',
      },
    ],
  },
]
