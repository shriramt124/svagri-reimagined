
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        agriSolutions: "Agri Solutions",
        engineeringSolutions: "Engineering Solutions",
        ingredientSolutions: "Ingredient Solutions",
        about: "About Us",
        insights: "Insights",
        getQuote: "Get Quote",
        contact: "Contact"
      },
      hero: {
        premiumSeeds: "Premium Seeds",
        yearRoundQuality: "Year-Round Quality Potatoes",
        directFromNetherlands: "Direct from Netherlands to Your Farm",
        seedsDescription: "Get 40% higher yields with Carisma potato seeds. Trusted by 500+ farmers across India.",
        exploreSeeds: "Explore Seeds",
        talkToExpert: "Talk to Expert",
        engineeringExcellence: "Engineering Excellence",
        completeFoodProcessing: "Complete Food Processing Lines",
        fromChipsToSnacks: "From Chips to Snacks - We Build It All",
        engineeringDescription: "State-of-the-art machinery for chips, french fries, and snacks. Turnkey solutions with 24/7 support.",
        viewSolutions: "View Solutions",
        requestDemo: "Request Demo",
        qualityIngredients: "Quality Ingredients",
        premiumProcessing: "Premium Processing Ingredients",
        bestQuality: "Best Quality for Your Production",
        ingredientsDescription: "Consistent supply of process-grade potatoes and ingredients. Direct partnerships ensuring better prices.",
        browseIngredients: "Browse Ingredients",
        getPricing: "Get Pricing"
      },
      trust: {
        isoCertified: "ISO Certified",
        farmers: "Farmers",
        betterYield: "Better Yield",
        qualityAssured: "Quality Assured"
      },
      footer: {
        companyName: "siddhi vinayank agro M. private limited",
        description: "Leading provider of premium potato seeds, food processing solutions, and engineering services. Committed to excellence in agriculture and food technology.",
        quickLinks: "Quick Links",
        services: "Services",
        seedsSupplyChain: "Potato Seeds & Supply Chain",
        foodProcessing: "Food Processing Lines",
        engineeringSolutions: "Engineering Solutions",
        advisoryTraining: "Advisory & Training",
        allRightsReserved: "All rights reserved.",
        privacyPolicy: "Privacy Policy",
        terms: "Terms of Service"
      },
      contact: {
        phone: "Phone",
        email: "Email",
        tagline: "Premium Potato Seeds | Engineering Solutions | Year-round Supply"
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: "होम",
        agriSolutions: "कृषि समाधान",
        engineeringSolutions: "इंजीनियरिंग समाधान",
        ingredientSolutions: "सामग्री समाधान",
        about: "हमारे बारे में",
        insights: "जानकारी",
        getQuote: "कोटेशन प्राप्त करें",
        contact: "संपर्क करें"
      },
      hero: {
        premiumSeeds: "प्रीमियम बीज",
        yearRoundQuality: "साल भर गुणवत्तापूर्ण आलू",
        directFromNetherlands: "नीदरलैंड से सीधे आपके खेत तक",
        seedsDescription: "करिश्मा आलू के बीज से 40% अधिक उपज प्राप्त करें। भारत भर में 500+ किसानों द्वारा विश्वसनीय।",
        exploreSeeds: "बीज देखें",
        talkToExpert: "विशेषज्ञ से बात करें",
        engineeringExcellence: "इंजीनियरिंग उत्कृष्टता",
        completeFoodProcessing: "संपूर्ण फूड प्रोसेसिंग लाइन",
        fromChipsToSnacks: "चिप्स से स्नैक्स तक - हम सब बनाते हैं",
        engineeringDescription: "चिप्स, फ्रेंच फ्राइज़ और स्नैक्स के लिए अत्याधुनिक मशीनरी। 24/7 सपोर्ट के साथ टर्नकी समाधान।",
        viewSolutions: "समाधान देखें",
        requestDemo: "डेमो का अनुरोध करें",
        qualityIngredients: "गुणवत्ता सामग्री",
        premiumProcessing: "प्रीमियम प्रोसेसिंग सामग्री",
        bestQuality: "आपके उत्पादन के लिए सर्वोत्तम गुणवत्ता",
        ingredientsDescription: "प्रोसेस-ग्रेड आलू और सामग्री की निरंतर आपूर्ति। बेहतर कीमतों को सुनिश्चित करने वाली प्रत्यक्ष साझेदारी।",
        browseIngredients: "सामग्री ब्राउज़ करें",
        getPricing: "मूल्य प्राप्त करें"
      },
      trust: {
        isoCertified: "आईएसओ प्रमाणित",
        farmers: "किसान",
        betterYield: "बेहतर उपज",
        qualityAssured: "गुणवत्ता आश्वासित"
      },
      footer: {
        companyName: "सिद्धि विनायक एग्रो एम. प्राइवेट लिमिटेड",
        description: "प्रीमियम आलू के बीज, खाद्य प्रसंस्करण समाधान और इंजीनियरिंग सेवाओं के अग्रणी प्रदाता। कृषि और खाद्य प्रौद्योगिकी में उत्कृष्टता के प्रति प्रतिबद्ध।",
        quickLinks: "त्वरित लिंक",
        services: "सेवाएं",
        seedsSupplyChain: "आलू के बीज और आपूर्ति श्रृंखला",
        foodProcessing: "खाद्य प्रसंस्करण लाइनें",
        engineeringSolutions: "इंजीनियरिंग समाधान",
        advisoryTraining: "सलाहकार और प्रशिक्षण",
        allRightsReserved: "सर्वाधिकार सुरक्षित।",
        privacyPolicy: "गोपनीयता नीति",
        terms: "सेवा की शर्तें"
      },
      contact: {
        phone: "फोन",
        email: "ईमेल",
        tagline: "प्रीमियम आलू के बीज | इंजीनियरिंग समाधान | साल भर आपूर्ति"
      }
    }
  },
  mr: {
    translation: {
      nav: {
        home: "मुख्यपृष्ठ",
        agriSolutions: "कृषी उपाय",
        engineeringSolutions: "अभियांत्रिकी उपाय",
        ingredientSolutions: "घटक उपाय",
        about: "आमच्याबद्दल",
        insights: "माहिती",
        getQuote: "कोटेशन मिळवा",
        contact: "संपर्क"
      },
      hero: {
        premiumSeeds: "प्रीमियम बियाणे",
        yearRoundQuality: "वर्षभर दर्जेदार बटाटे",
        directFromNetherlands: "नेदरलँड्स पासून थेट तुमच्या शेतापर्यंत",
        seedsDescription: "करिस्मा बटाट्याच्या बियाण्यांसह 40% जास्त उत्पन्न मिळवा. भारतातील 500+ शेतकऱ्यांचा विश्वास.",
        exploreSeeds: "बियाणे पहा",
        talkToExpert: "तज्ञांशी बोला",
        engineeringExcellence: "अभियांत्रिकी उत्कृष्टता",
        completeFoodProcessing: "संपूर्ण अन्न प्रक्रिया ओळी",
        fromChipsToSnacks: "चिप्स ते स्नॅक्स - आम्ही सर्व बनवतो",
        engineeringDescription: "चिप्स, फ्रेंच फ्राईज आणि स्नॅक्ससाठी अत्याधुनिक यंत्रसामग्री. 24/7 समर्थनासह टर्नकी उपाय.",
        viewSolutions: "उपाय पहा",
        requestDemo: "डेमोची विनंती करा",
        qualityIngredients: "गुणवत्ता घटक",
        premiumProcessing: "प्रीमियम प्रक्रिया घटक",
        bestQuality: "तुमच्या उत्पादनासाठी सर्वोत्तम गुणवत्ता",
        ingredientsDescription: "प्रक्रिया-दर्जाच्या बटाट्यांचा आणि घटकांचा सातत्यपूर्ण पुरवठा. चांगल्या किमती सुनिश्चित करणारी थेट भागीदारी.",
        browseIngredients: "घटक ब्राउझ करा",
        getPricing: "किंमत मिळवा"
      },
      trust: {
        isoCertified: "आयएसओ प्रमाणित",
        farmers: "शेतकरी",
        betterYield: "चांगले उत्पन्न",
        qualityAssured: "गुणवत्ता खात्रीशीर"
      },
      footer: {
        companyName: "सिद्धी विनायक अॅग्रो एम. प्रायव्हेट लिमिटेड",
        description: "प्रीमियम बटाटा बियाणे, अन्न प्रक्रिया उपाय आणि अभियांत्रिकी सेवांचे आघाडीचे प्रदाते. कृषी आणि अन्न तंत्रज्ञानामध्ये उत्कृष्टतेसाठी वचनबद्ध.",
        quickLinks: "द्रुत दुवे",
        services: "सेवा",
        seedsSupplyChain: "बटाटा बियाणे आणि पुरवठा साखळी",
        foodProcessing: "अन्न प्रक्रिया ओळी",
        engineeringSolutions: "अभियांत्रिकी उपाय",
        advisoryTraining: "सल्लागार आणि प्रशिक्षण",
        allRightsReserved: "सर्व हक्क राखीव.",
        privacyPolicy: "गोपनीयता धोरण",
        terms: "सेवा अटी"
      },
      contact: {
        phone: "फोन",
        email: "ईमेल",
        tagline: "प्रीमियम बटाटा बियाणे | अभियांत्रिकी उपाय | वर्षभर पुरवठा"
      }
    }
  },
  gu: {
    translation: {
      nav: {
        home: "હોમ",
        agriSolutions: "કૃષિ ઉકેલો",
        engineeringSolutions: "એન્જિનિયરિંગ ઉકેલો",
        ingredientSolutions: "ઘટક ઉકેલો",
        about: "અમારા વિશે",
        insights: "માહિતી",
        getQuote: "કોટેશન મેળવો",
        contact: "સંપર્ક"
      },
      hero: {
        premiumSeeds: "પ્રીમિયમ બીજ",
        yearRoundQuality: "વર્ષભર ગુણવત્તાયુક્ત બટાકા",
        directFromNetherlands: "નેધરલેન્ડ્સથી સીધા તમારા ખેતર સુધી",
        seedsDescription: "કરિશ્મા બટાકાના બીજ સાથે 40% વધુ ઉપજ મેળવો. ભારતભરના 500+ ખેડૂતો દ્વારા વિશ્વસનીય.",
        exploreSeeds: "બીજ જુઓ",
        talkToExpert: "નિષ્ણાત સાથે વાત કરો",
        engineeringExcellence: "એન્જિનિયરિંગ શ્રેષ્ઠતા",
        completeFoodProcessing: "સંપૂર્ણ ફૂડ પ્રોસેસિંગ લાઇન",
        fromChipsToSnacks: "ચિપ્સથી સ્નેક્સ સુધી - અમે બધું બનાવીએ છીએ",
        engineeringDescription: "ચિપ્સ, ફ્રેન્ચ ફ્રાઈસ અને સ્નેક્સ માટે અત્યાધુનિક મશીનરી. 24/7 સપોર્ટ સાથે ટર્નકી ઉકેલો.",
        viewSolutions: "ઉકેલો જુઓ",
        requestDemo: "ડેમોની વિનંતી કરો",
        qualityIngredients: "ગુણવત્તા ઘટકો",
        premiumProcessing: "પ્રીમિયમ પ્રોસેસિંગ ઘટકો",
        bestQuality: "તમારા ઉત્પાદન માટે શ્રેષ્ઠ ગુણવત્તા",
        ingredientsDescription: "પ્રોસેસ-ગ્રેડ બટાકા અને ઘટકોનો સતત પુરવઠો. વધુ સારી કિંમતો સુનિશ્ચિત કરતી સીધી ભાગીદારી.",
        browseIngredients: "ઘટકો બ્રાઉઝ કરો",
        getPricing: "કિંમત મેળવો"
      },
      trust: {
        isoCertified: "ISO પ્રમાણિત",
        farmers: "ખેડૂતો",
        betterYield: "વધુ સારી ઉપજ",
        qualityAssured: "ગુણવત્તા ખાતરી"
      },
      footer: {
        companyName: "સિદ્ધિ વિનાયક એગ્રો એમ. પ્રાઇવેટ લિમિટેડ",
        description: "પ્રીમિયમ બટાકાના બીજ, ફૂડ પ્રોસેસિંગ ઉકેલો અને એન્જિનિયરિંગ સેવાઓના અગ્રણી પ્રદાતા. કૃષિ અને ખાદ્ય તકનીકમાં શ્રેષ્ઠતા માટે પ્રતિબદ્ધ.",
        quickLinks: "ઝડપી લિંક્સ",
        services: "સેવાઓ",
        seedsSupplyChain: "બટાકાના બીજ અને સપ્લાય ચેઇન",
        foodProcessing: "ફૂડ પ્રોસેસિંગ લાઇન્સ",
        engineeringSolutions: "એન્જિનિયરિંગ ઉકેલો",
        advisoryTraining: "સલાહકાર અને તાલીમ",
        allRightsReserved: "બધા હક્કો અનામત.",
        privacyPolicy: "ગોપનીયતા નીતિ",
        terms: "સેવાની શરતો"
      },
      contact: {
        phone: "ફોન",
        email: "ઇમેઇલ",
        tagline: "પ્રીમિયમ બટાકાના બીજ | એન્જિનિયરિંગ ઉકેલો | વર્ષભર પુરવઠો"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
