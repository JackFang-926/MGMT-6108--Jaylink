export const VARIANT = "A";

export const VIEW_DETAILS_TEXT = "[PLACEHOLDER: replace with the wording of the real View Details panel]";

export const CONSENT_COPY = {
  title: "Class Prototype Notice",
  message: "This is a class prototype. No real sign-up, no payment, no personal data.",
  buttonLabel: "Continue",
};

export const getDebriefCopy = (variant = "A") => ({
  title: "Study Debrief",
  message: `No sign-up was made. This was a class prototype of a fictional brand, JAYLINK. All plans, prices, discounts and contract terms shown were simulated for a class study, and nothing was recorded. You saw Variant ${variant}.`,
  buttonLabel: "Back to start",
});

export const DEBRIEF_COPY = getDebriefCopy("A");

export const HEADER_COPY = {
  brand: {
    prefix: "JAY",
    suffix: "LINK",
  },
  navLinks: ["Promotions", "Plans", "Services & Add-ons", "Support"],
  activeNav: "Plans",
  langPill: "简体中文",
  payPill: "Pay",
  getSimBtn: "Get SIM →",
};

export const TABS_COPY = {
  simOnly: "SIM-only Plans",
  contract: "Contract Plans",
};

export const BANNER_COPY = {
  heading: "Long-term plans with more entitlements",
  body: "Enjoy all the perks like cross-border data and free IDD minutes that come with your SIM-only plans and say hi to more data, talktime and SMS when you commit to a minimum usage period!",
};

export const PLANS_DATA = [
  {
    id: "plan-720gb",
    duration: "12 months",
    badge: "5G",
    title: "720GB",
    price: "$15.0",
    period: "/month",
    promo: [
      "[Non ST Port-in] 50% off 6 Mths",
      "[New] 50% off 6 Mths",
    ],
    benefits: [
      "Free 5G+ Access",
      "5GB roaming data for use in mainland China and Hong Kong SAR",
      "31GB APAC 12 roaming data for use in Australia, China (including Hong Kong, Macau and Taiwan), Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and Vietnam",
      "1TB shared roaming data for use in Indonesia, Malaysia and Thailand for 365 days (for new sign-ups only)",
      "60GB International Roaming data for use in 210 destinations for 365 days (for new and port-in only)",
      "650 mins local calls",
      "100 local SMS",
      "500 mins from SG to 16 destinations (Local outgoing mins will also be deducted)",
      "Free Caller ID & local incoming calls",
    ],
    groupedBenefits: {
      local: ["Free 5G+ Access"],
      roaming: [
        "5GB roaming data for use in mainland China and Hong Kong SAR",
        "31GB APAC 12 roaming data for use in Australia, China (including Hong Kong, Macau and Taiwan), Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and Vietnam",
        "1TB shared roaming data for use in Indonesia, Malaysia and Thailand for 365 days (for new sign-ups only)",
        "60GB International Roaming data for use in 210 destinations for 365 days (for new and port-in only)",
      ],
      callsAndSms: [
        "650 mins local calls",
        "100 local SMS",
        "500 mins from SG to 16 destinations (Local outgoing mins will also be deducted)",
        "Free Caller ID & local incoming calls",
      ],
    },
    afterContractTitle: "After contract period,",
    afterContract: [
      "720GB will change to 700GB",
      "31GB APAC 12 roaming data will change to 30GB",
      "650 mins local calls will change to 600 mins",
    ],
    officialDetails: [
      {
        section: "General & Pricing",
        items: [
          "All prices shown include GST.",
        ],
      },
      {
        section: "Promotions",
        items: [
          "Promotion until 1 November: New sign-ups will enjoy a 50% discount for 6 months. The discount will be applied on the 10th of the following month after activation, with the remaining discount applied in subsequent months thereafter.",
          "Promotion until 1 November: Successful port-ins from non-Singtel or non-Singtel MVNO prepaid/postpaid services to the $11.1 or $15 plan by 7 November will enjoy a 50% discount for 6 months. The discount will be applied in the following month after activation, with the remaining discount applied in subsequent months thereafter.",
        ],
      },
      {
        section: "Network & Local Data",
        items: [
          "Includes 5G+ service. The handset must be 5G SA compatible, and 5G+ access is limited to Singtel's 5G coverage areas.",
          "720GB local data.",
        ],
      },
      {
        section: "Roaming Data",
        items: [
          "Additional 5GB roaming data for use in mainland China and Hong Kong SAR.",
          "Additional 31GB APAC 12 roaming data for use in Australia, China (including Hong Kong, Macau and Taiwan), Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and Vietnam.",
          "Additional 1TB shared roaming data for use in Indonesia, Malaysia and Thailand, valid for 365 days. For new sign-ups only, this data will be credited on the 1st of the following month.",
          "Additional 60GB international roaming data for use in 210 destinations for 365 days, for new sign-ups and port-ins only.",
        ],
      },
      {
        section: "Calls & SMS",
        items: [
          "650 local call minutes. Excess usage is charged at $0.10 per minute.",
          "100 local SMS. Excess usage is charged at $0.10 per message.",
          "500 international call minutes from Singapore to numbers in Australia, Bangladesh, Brunei, Canada, China (including Hong Kong and Taiwan), India, Indonesia, Malaysia, New Zealand, Philippines, South Korea, Thailand, USA and Vietnam. Excess usage is charged at $0.10 per minute. Valid only when dialled using the “+” prefix. International call charges apply to calls using the “001” and “019” prefixes.",
          "Local outgoing minutes will be deducted first for all international calls made.",
          "Free Caller ID and unlimited local incoming calls.",
        ],
      },
      {
        section: "Contract Terms & Charges",
        items: [
          "12-month minimum contractual period. Plan entitlements will change after the contract period, as stated in the original plan notes.",
          "Early Termination Charge: Monthly Fee × Remaining months of the minimum subscription period, including the month in which termination occurs.",
        ],
      },
    ],
    viewDetailsLabel: "View Details",
    signUpLabel: "Sign Up Now",
  },
  {
    id: "plan-760gb",
    duration: "12 months",
    badge: "5G",
    title: "760GB",
    price: "$21.0",
    period: "/month",
    promo: null,
    benefits: [
      "Free 5G+ Access",
      "65GB roaming data for use in mainland China and Hong Kong SAR",
      "33GB APAC 10 roaming data for use in Australia, China Macau, China Taiwan, Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and Vietnam",
      "600GB shared roaming data across Indonesia, Malaysia and Thailand valid for 365 days (for new sign-ups only)",
      "60GB International Roaming data for use in 210 destinations for 365 days (for new and port-in only)",
      "900 mins local calls",
      "500 Local SMS",
      "500 mins from SG to 16 destinations (Local outgoing mins will also be deducted)",
      "Free Caller ID & local incoming calls",
    ],
    groupedBenefits: {
      local: ["Free 5G+ Access"],
      roaming: [
        "65GB roaming data for use in mainland China and Hong Kong SAR",
        "33GB APAC 10 roaming data for use in Australia, China Macau, China Taiwan, Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and Vietnam",
        "600GB shared roaming data across Indonesia, Malaysia and Thailand valid for 365 days (for new sign-ups only)",
        "60GB International Roaming data for use in 210 destinations for 365 days (for new and port-in only)",
      ],
      callsAndSms: [
        "900 mins local calls",
        "500 Local SMS",
        "500 mins from SG to 16 destinations (Local outgoing mins will also be deducted)",
        "Free Caller ID & local incoming calls",
      ],
    },
    afterContractTitle: "After contract period,",
    afterContract: [
      "760GB will change to 750GB",
      "65GB CN/HK data will change to 60GB",
      "33GB APAC 10 roaming data will change to 32GB",
      "900 mins local calls will change to 800 mins",
      "500 Local SMS will change to 300",
    ],
    officialDetails: [
      {
        section: "General & Pricing",
        items: [
          "All prices shown include GST.",
        ],
      },
      {
        section: "Network & Local Data",
        items: [
          "Includes 5G+ service. The handset must be 5G SA compatible, and 5G+ access is limited to Singtel's 5G coverage areas.",
          "760GB local data.",
        ],
      },
      {
        section: "Roaming Data",
        items: [
          "Additional 65GB roaming data for use in mainland China and Hong Kong SAR.",
          "Additional 33GB APAC 10 roaming data for use in Australia, China Macau, China Taiwan, Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and Vietnam.",
          "Additional 600GB shared roaming data across Indonesia, Malaysia and Thailand, valid for 365 days. For new sign-ups only, this data will be credited on the 1st of the following month.",
          "Additional 60GB international roaming data for use in 210 destinations for 365 days, for new sign-ups and port-ins only.",
        ],
      },
      {
        section: "Calls & SMS",
        items: [
          "900 local call minutes. Excess usage is charged at $0.10 per minute.",
          "500 local SMS. Excess usage is charged at $0.10 per message.",
          "500 international call minutes from Singapore to numbers in Australia, Bangladesh, Brunei, Canada, China (including Hong Kong and Taiwan), India, Indonesia, Malaysia, New Zealand, Philippines, South Korea, Thailand, USA and Vietnam. Excess usage is charged at $0.10 per minute. Valid only when dialled using the “+” prefix. International call charges apply to calls using the “001” and “019” prefixes.",
          "Local outgoing minutes will be deducted first for all international calls made.",
          "Free Caller ID and unlimited local incoming calls.",
        ],
      },
      {
        section: "Contract Terms & Charges",
        items: [
          "12-month minimum contractual period. Plan entitlements will change after the contract period, as stated in the original plan notes.",
          "Early Termination Charge: Monthly Fee × Remaining months of the minimum subscription period, including the month in which termination occurs.",
        ],
      },
    ],
    viewDetailsLabel: "View Details",
    signUpLabel: "Sign Up Now",
  },
  {
    id: "plan-unlimited",
    duration: "12 months",
    badge: "5G",
    title: "Unlimited^",
    price: "$31.1",
    period: "/month",
    promo: null,
    benefits: [
      "Free 5G+ Access",
      "^Data limit cap at 800GB, speed managed at 512kbps thereafter",
      "85GB roaming data for use in mainland China and Hong Kong SAR",
      "35GB APAC 10 roaming data for use in Australia, China Macau, China Taiwan, Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and Vietnam",
      "600GB shared roaming data across Indonesia, Malaysia and Thailand valid for 365 days (for new sign-ups only)",
      "60GB International Roaming data for use in 210 destinations for 365 days (for new and port-in only)",
      "1200 mins local calls",
      "800 Local SMS",
      "500 mins from SG to 16 destinations (Local outgoing mins will also be deducted)",
      "Free Caller ID & local incoming calls",
    ],
    groupedBenefits: {
      local: [
        "Free 5G+ Access",
        "^Data limit cap at 800GB, speed managed at 512kbps thereafter",
      ],
      roaming: [
        "85GB roaming data for use in mainland China and Hong Kong SAR",
        "35GB APAC 10 roaming data for use in Australia, China Macau, China Taiwan, Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and Vietnam",
        "600GB shared roaming data across Indonesia, Malaysia and Thailand valid for 365 days (for new sign-ups only)",
        "60GB International Roaming data for use in 210 destinations for 365 days (for new and port-in only)",
      ],
      callsAndSms: [
        "1200 mins local calls",
        "800 Local SMS",
        "500 mins from SG to 16 destinations (Local outgoing mins will also be deducted)",
        "Free Caller ID & local incoming calls",
      ],
    },
    afterContractTitle: "After contract period,",
    afterContract: [
      "85GB CN/HK data will change to 80GB",
      "35GB APAC 10 roaming data will change to 34GB",
      "1200 mins local calls will change to 1000 mins",
      "800 local SMS will change to 500",
    ],
    officialDetails: [
      {
        section: "General & Pricing",
        items: [
          "All prices shown include GST.",
        ],
      },
      {
        section: "Network & Local Data",
        items: [
          "Includes 5G+ service. The handset must be 5G SA compatible, and 5G+ access is limited to Singtel's 5G coverage areas.",
          "760GB local data, as specified in the provided official details. Do not replace this with unlimited high-speed local data.",
        ],
      },
      {
        section: "Roaming Data",
        items: [
          "Additional 65GB roaming data for use in mainland China and Hong Kong SAR.",
          "Additional 33GB APAC 10 roaming data for use in Australia, China Macau, China Taiwan, Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and Vietnam.",
          "Additional 600GB shared roaming data across Indonesia, Malaysia and Thailand, valid for 365 days. For new sign-ups only, this data will be credited on the 1st of the following month.",
          "Additional 60GB international roaming data for use in 210 destinations for 365 days, for new sign-ups and port-ins only.",
        ],
      },
      {
        section: "Calls & SMS",
        items: [
          "900 local call minutes. Excess usage is charged at $0.10 per minute.",
          "500 local SMS. Excess usage is charged at $0.10 per message.",
          "500 international call minutes from Singapore to numbers in Australia, Bangladesh, Brunei, Canada, China (including Hong Kong and Taiwan), India, Indonesia, Malaysia, New Zealand, Philippines, South Korea, Thailand, USA and Vietnam. Excess usage is charged at $0.10 per minute. Valid only when dialled using the “+” prefix. International call charges apply to calls using the “001” and “019” prefixes.",
          "Local outgoing minutes will be deducted first for all international calls made.",
          "Free Caller ID and unlimited local incoming calls.",
        ],
      },
      {
        section: "Contract Terms & Charges",
        items: [
          "12-month minimum contractual period. Plan entitlements will change after the contract period, as stated in the original plan notes.",
          "Early Termination Charge: Monthly Fee × Remaining months of the minimum subscription period, including the month in which termination occurs.",
        ],
      },
    ],
    viewDetailsLabel: "View Details",
    signUpLabel: "Sign Up Now",
  },
];

export const VARIANT_B_PLAN_DATA = {
  "plan-720gb": {
    title: "720GB",
    largePrice: "S$135 / 12 months",
    subPrice: "S$7.50/month for months 1–6, then S$15.00/month for months 7–12. You save S$45.",
    changesAfterContract: [
      "Data: 720GB → 700GB",
      "APAC 12 roaming: 31GB → 30GB",
      "Local calls: 650 min → 600 min",
    ],
  },
  "plan-760gb": {
    title: "760GB",
    largePrice: "S$252 / 12 months",
    subPrice: "S$21.0/month",
    changesAfterContract: [
      "Data: 760GB → 750GB",
      "CN/HK data: 65GB → 60GB",
      "APAC 10 roaming: 33GB → 32GB",
      "Local calls: 900 min → 800 min",
      "Local SMS: 500 → 300",
    ],
  },
  "plan-unlimited": {
    title: "800GB Max",
    largePrice: "S$373.20 / 12 months",
    subPrice: "S$31.1/month",
    changesAfterContract: [
      "CN/HK data: 85GB → 80GB",
      "APAC 10 roaming: 35GB → 34GB",
      "Local calls: 1200 min → 1000 min",
      "Local SMS: 800 → 500",
    ],
  },
};

export const ADDONS_COPY = {
  heading: "Get Add-Ons",
  leftCard: {
    line1Part1: "Not enough ",
    line1Part2Red: "local data?",
    line2Part1Blue: "Affordable add-ons offers",
    line2Part2: " for your immediate needs",
    description: "Continue browsing social media and stream videos worry-free",
    buttonLabel: "Add Now",
  },
  rightCard: {
    line1Part1Lime: "Stay connected with",
    line1Part2Blue: " our roaming add-ons",
    line1Part3: " while traveling abroad",
    description: "Choose what you need at affordable rates",
    buttonLabel: "Add Now",
  },
};

export const SERVICES_COPY = {
  leftCardTitle: "Unique JAYLINK Services",
  rightCardTitle: "1-Card-Multi-Number",
  rightCardRows: [
    "Link your mainland China/Hong Kong number, to receive voice calls and SMS seamlessly.",
    "Apply for a new mainland China/Hong Kong number while in Singapore.",
  ],
  rightCardLink: "View details >",
};

export const EMAIL_BLOCK_COPY = {
  heading: "Still deciding on which plan? No worries.",
  subtitle: "Stay in touch to receive our latest offers",
  placeholder: "Enter your Email Address now!",
  buttonLabel: "Submit",
};

export const FOOTER_COPY = {
  text: "JAYLINK Singapore (fictional brand for a class project)",
};
