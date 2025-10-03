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
      },
      stats: {
        yearsExperience: "Years Experience",
        happyFarmers: "Happy Farmers",
        potatoVarieties: "Potato Varieties",
        countries: "Countries Served"
      },
      cta: {
        searchEnds: "Your search for food processing solutions ends here",
        getStarted: "Get Started Today"
      },
      home: {
        aboutTitle: "Comprehensive Agri and Engineering Solutions for the Food Industry",
        aboutDescription1: "siddhi vinayank agro M. private limited, founded in 2008, has transformed the potato industry with its dual focus on agriculture and engineering. Its Agri Business Division provides year-round process-grade potatoes through advanced storage solutions and a nationwide delivery network.",
        aboutDescription2: "The Food Engineering Business Division specializes in innovative snack solutions and future foods, leveraging cutting-edge technology for products like potato chips, roasted nuts, and various puffed snacks.",
        downloadBrochure: "Download Brochure",
        transformingAgriculture: "Transforming Agriculture",
        since2008: "Since 2008",
        watchOurStory: "Watch Our Story",
        farmToFork: "From Farm to Fork: Our Journey",
        videoDescription: "Watch how we're revolutionizing potato farming in India with our premium Carisma seeds from Netherlands. See our farms, meet our farmers, and understand our quality process.",
        learnMore: "Learn More About Us",
        ourFounder: "Our Founder",
        founderTitle: "Meet the Visionary Behind siddhi vinayank agro M. private limited",
        founderDescription1: "Mr. kuldeep singh rathore, Founder & CEO, started his journey in 2008 with a vision to transform Indian agriculture. With over 15 years of experience in agri-business and a deep understanding of farmer challenges, he built siddhi vinayank agro M. private limited to bridge the gap between quality seeds and farmers.",
        founderQuote: "Every farmer deserves access to world-class seeds and fair market prices. That's why we brought Carisma potatoes from Netherlands to India and created a complete ecosystem from farm to market.",
        founderName: "kuldeep singh rathore, Founder",
        successStories: "Success Stories",
        whatFarmersSay: "What Farmers Say About Us",
        whatWeDo: "What We Do",
        agriBusinessOffering: "Agri Business Offering",
        services: {
          carismaSeeds: {
            title: "Carisma Potato Seeds",
            description: "High quality potato seeds from Netherlands, now available in India for superior yields."
          },
          supplyChain: {
            title: "Supply Chain Solution",
            description: "Partnered with the best buyers ensuring better commercial returns to producers."
          },
          engineering: {
            title: "Food Engineering Lines",
            description: "Complete processing lines for chips, snacks, french fries, and more."
          },
          advisory: {
            title: "Advisory & Training",
            description: "Expert guidance for farmers, processors and value chain stakeholders."
          }
        },
        testimonials: {
          testimonial1: {
            name: "Ramesh Patil",
            location: "Maharashtra",
            text: "The Carisma potato seeds increased my yield by 40%. The quality is excellent and the support team helped me throughout the season."
          },
          testimonial2: {
            name: "Suresh Kumar",
            location: "Gujarat",
            text: "Best decision I made was partnering with SV Agri. They not only provide quality seeds but also ensure good buyers for my produce."
          },
          testimonial3: {
            name: "Manjunath Reddy",
            location: "Karnataka",
            text: "The advisory services are invaluable. They taught me modern farming techniques that doubled my profits."
          }
        },
        certifications: {
          iso: "ISO 9001:2015 Certified",
          fssai: "FSSAI Licensed",
          organic: "Organic Certified",
          export: "Export Quality"
        }
      },
      about: {
        title: "About Us",
        subtitle: "Transforming the food industry since 2008 with innovative solutions and unmatched expertise",
        ourStory: "Our Story",
        ourJourney: "Our Journey",
        meetTheTeam: "Meet the Team",
        leadershipSubtitle: "Leadership driving innovation and excellence"
      },
      agriSolutions: {
        title: "Agri Solutions",
        subtitle: "Find Potatoes All Through the Year",
        ourServices: "Our Services",
        comprehensiveSolutions: "Comprehensive Agricultural Solutions",
        servicesDescription: "We provide end-to-end agricultural solutions from premium quality seeds to supply chain management and expert training."
      },
      engineeringSolutions: {
        title: "Engineering Solutions",
        subtitle: "The Best Food Engineering Solutions",
        processLines: "Food Engineering Process Lines & Solutions",
        processLinesDescription: "State-of-the-art food processing equipment and complete production lines for the modern food industry.",
        cuttingEdgeTech: "Cutting-Edge Technology",
        cuttingEdgeTechDesc: "Latest innovations in food processing",
        completeSolutions: "Complete Solutions",
        completeSolutionsDesc: "End-to-end processing lines",
        expertSupport: "Expert Support",
        expertSupportDesc: "Dedicated technical assistance"
      },
      ingredientSolutions: {
        title: "Ingredient Solutions",
        subtitle: "Best Ingredients Solutions for your Food Processing",
        premiumQuality: "Premium Quality",
        potatoSolutions: "Potato & Ingredient Solutions",
        solutionsDescription: "High-quality ingredients for all your food processing needs",
        additionalIngredients: "Additional Ingredients",
        qualityAssured: "Quality Assured",
        potatoVarieties: "Potato Varieties",
        availability: "Availability"
      },
      insights: {
        title: "Insights",
        subtitle: "Stay updated with the latest industry insights, trends, and best practices"
      },
      companyName: "siddhi vinayank agro M. private limited",
      About: "About"
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
      },
      stats: {
        yearsExperience: "वर्षों का अनुभव",
        happyFarmers: "खुश किसान",
        potatoVarieties: "आलू की किस्में",
        countries: "देश सेवित"
      },
      cta: {
        searchEnds: "खाद्य प्रसंस्करण समाधान की आपकी खोज यहीं समाप्त होती है",
        getStarted: "आज ही शुरू करें"
      },
      home: {
        aboutTitle: "खाद्य उद्योग के लिए व्यापक कृषि और इंजीनियरिंग समाधान",
        aboutDescription1: "सिद्धि विनायक एग्रो एम. प्राइवेट लिमिटेड, 2008 में स्थापित, कृषि और इंजीनियरिंग पर दोहरे ध्यान के साथ आलू उद्योग को बदल दिया है। इसका कृषि व्यवसाय प्रभाग उन्नत भंडारण समाधान और राष्ट्रव्यापी वितरण नेटवर्क के माध्यम से साल भर प्रोसेस-ग्रेड आलू प्रदान करता है।",
        aboutDescription2: "खाद्य इंजीनियरिंग व्यवसाय प्रभाग आलू के चिप्स, भुने हुए नट्स और विभिन्न पफ्ड स्नैक्स जैसे उत्पादों के लिए अत्याधुनिक तकनीक का लाभ उठाते हुए नवीन स्नैक समाधान और भविष्य के खाद्य पदार्थों में विशेषज्ञता रखता है।",
        downloadBrochure: "ब्रोशर डाउनलोड करें",
        transformingAgriculture: "कृषि का रूपांतरण",
        since2008: "2008 से",
        watchOurStory: "हमारी कहानी देखें",
        farmToFork: "खेत से कांटे तक: हमारी यात्रा",
        videoDescription: "देखें कि हम नीदरलैंड से अपने प्रीमियम करिश्मा बीजों के साथ भारत में आलू की खेती में क्रांति कैसे ला रहे हैं। हमारे खेतों को देखें, हमारे किसानों से मिलें और हमारी गुणवत्ता प्रक्रिया को समझें।",
        learnMore: "हमारे बारे में और जानें",
        ourFounder: "हमारे संस्थापक",
        founderTitle: "सिद्धि विनायक एग्रो एम. प्राइवेट लिमिटेड के पीछे दूरदर्शी से मिलें",
        founderDescription1: "श्री कुलदीप सिंह राठौर, संस्थापक और सीईओ, ने भारतीय कृषि को बदलने के दृष्टिकोण के साथ 2008 में अपनी यात्रा शुरू की। कृषि-व्यवसाय में 15 से अधिक वर्षों के अनुभव और किसानों की चुनौतियों की गहरी समझ के साथ, उन्होंने गुणवत्ता वाले बीज और किसानों के बीच की खाई को पाटने के लिए सिद्धि विनायक एग्रो एम. प्राइवेट लिमिटेड का निर्माण किया।",
        founderQuote: "हर किसान विश्व स्तरीय बीजों और उचित बाजार मूल्यों तक पहुंच का हकदार है। इसलिए हम नीदरलैंड से करिश्मा आलू भारत लाए और खेत से बाजार तक एक संपूर्ण पारिस्थितिकी तंत्र बनाया।",
        founderName: "कुलदीप सिंह राठौर, संस्थापक",
        successStories: "सफलता की कहानियां",
        whatFarmersSay: "किसान हमारे बारे में क्या कहते हैं",
        whatWeDo: "हम क्या करते हैं",
        agriBusinessOffering: "कृषि व्यवसाय पेशकश",
        services: {
          carismaSeeds: {
            title: "करिश्मा आलू के बीज",
            description: "नीदरलैंड से उच्च गुणवत्ता वाले आलू के बीज, अब बेहतर उपज के लिए भारत में उपलब्ध हैं।"
          },
          supplyChain: {
            title: "आपूर्ति श्रृंखला समाधान",
            description: "उत्पादकों को बेहतर वाणिज्यिक रिटर्न सुनिश्चित करने के लिए सर्वश्रेष्ठ खरीदारों के साथ साझेदारी।"
          },
          engineering: {
            title: "खाद्य इंजीनियरिंग लाइनें",
            description: "चिप्स, स्नैक्स, फ्रेंच फ्राइज़ और अधिक के लिए संपूर्ण प्रसंस्करण लाइनें।"
          },
          advisory: {
            title: "सलाहकार और प्रशिक्षण",
            description: "किसानों, प्रोसेसरों और मूल्य श्रृंखला हितधारकों के लिए विशेषज्ञ मार्गदर्शन।"
          }
        },
        testimonials: {
          testimonial1: {
            name: "रमेश पाटिल",
            location: "महाराष्ट्र",
            text: "करिश्मा आलू के बीज ने मेरी उपज 40% बढ़ा दी। गुणवत्ता उत्कृष्ट है और सपोर्ट टीम ने पूरे सीजन मेरी मदद की।"
          },
          testimonial2: {
            name: "सुरेश कुमार",
            location: "गुजरात",
            text: "एसवी एग्री के साथ साझेदारी करना मेरा सबसे अच्छा निर्णय था। वे न केवल गुणवत्ता वाले बीज प्रदान करते हैं बल्कि मेरी उपज के लिए अच्छे खरीदार भी सुनिश्चित करते हैं।"
          },
          testimonial3: {
            name: "मंजूनाथ रेड्डी",
            location: "कर्नाटक",
            text: "सलाहकार सेवाएं अमूल्य हैं। उन्होंने मुझे आधुनिक कृषि तकनीकें सिखाईं जिससे मेरा लाभ दोगुना हो गया।"
          }
        },
        certifications: {
          iso: "आईएसओ 9001:2015 प्रमाणित",
          fssai: "एफएसएसएआई लाइसेंस प्राप्त",
          organic: "जैविक प्रमाणित",
          export: "निर्यात गुणवत्ता"
        }
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
        engineeringDescription: "चिप्स, फ्रेंच फ्राईज आणि स्नैक्ससाठी अत्याधुनिक यंत्रसामग्री. 24/7 समर्थनासह टर्नकी उपाय.",
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
      },
      stats: {
        yearsExperience: "वर्षांचा अनुभव",
        happyFarmers: "आनंदी शेतकरी",
        potatoVarieties: "बटाटा वाण",
        countries: "देश सेवा"
      },
      cta: {
        searchEnds: "अन्न प्रक्रिया उपायांचा तुमचा शोध येथे संपतो",
        getStarted: "आजच सुरू करा"
      },
      home: {
        aboutTitle: "अन्न उद्योगासाठी सर्वसमावेशक कृषी आणि अभियांत्रिकी उपाय",
        aboutDescription1: "सिद्धी विनायक अॅग्रो एम. प्रायव्हेट लिमिटेड, 2008 मध्ये स्थापित, कृषी आणि अभियांत्रिकीवर दुहेरी लक्ष केंद्रित करून बटाटा उद्योगात क्रांती घडवून आणली आहे. त्याचा कृषी व्यवसाय विभाग प्रगत साठवण उपाय आणि देशव्यापी वितरण नेटवर्कद्वारे वर्षभर प्रक्रिया-दर्जाचे बटाटे पुरवतो.",
        aboutDescription2: "अन्न अभियांत्रिकी व्यवसाय विभाग बटाट्याच्या चिप्स, भाजलेल्या काजू आणि विविध पफ्ड स्नॅक्स यासारख्या उत्पादनांसाठी अत्याधुनिक तंत्रज्ञानाचा वापर करून नाविन्यपूर्ण स्नॅक उपाय आणि भविष्यातील अन्नपदार्थांमध्ये विशेषज्ञ आहे.",
        downloadBrochure: "माहितीपत्रक डाउनलोड करा",
        transformingAgriculture: "कृषीचे रूपांतर",
        since2008: "2008 पासून",
        watchOurStory: "आमची कथा पहा",
        farmToFork: "शेतापासून काट्यापर्यंत: आमचा प्रवास",
        videoDescription: "पहा आम्ही नेदरलँड्समधील आमच्या प्रीमियम करिस्मा बियाण्यांसह भारतात बटाट्याच्या शेतीमध्ये कशी क्रांती घडवून आणत आहोत. आमची शेते पहा, आमच्या शेतकऱ्यांना भेटा आणि आमची गुणवत्ता प्रक्रिया समजून घ्या.",
        learnMore: "आमच्याबद्दल अधिक जाणून घ्या",
        ourFounder: "आमचे संस्थापक",
        founderTitle: "सिद्धी विनायक अॅग्रो एम. प्रायव्हेट लिमिटेड मागील दूरदर्शी व्यक्तीला भेटा",
        founderDescription1: "श्री. कुलदीप सिंह राठोड, संस्थापक आणि सीईओ, यांनी भारतीय शेतीचे रूपांतर करण्याच्या दृष्टीकोनाने 2008 मध्ये त्यांचा प्रवास सुरू केला. कृषी-व्यवसायात 15 वर्षांहून अधिक अनुभव आणि शेतकऱ्यांच्या आव्हानांची सखोल माहिती असलेल्या त्यांनी गुणवत्तेची बियाणे आणि शेतकरी यांच्यातील अंतर भरून काढण्यासाठी सिद्धी विनायक अॅग्रो एम. प्रायव्हेट लिमिटेडची स्थापना केली.",
        founderQuote: "प्रत्येक शेतकऱ्याला जागतिक दर्जाच्या बियाण्यांचा आणि योग्य बाजार किमतींचा प्रवेश मिळण्याचा हक्क आहे. म्हणूनच आम्ही नेदरलँड्समधून करिस्मा बटाटे भारतात आणले आणि शेतापासून बाजारापर्यंत एक संपूर्ण परिसंस्था तयार केली.",
        founderName: "कुलदीप सिंह राठोड, संस्थापक",
        successStories: "यशाच्या गोष्टी",
        whatFarmersSay: "शेतकरी आमच्याबद्दल काय म्हणतात",
        whatWeDo: "आम्ही काय करतो",
        agriBusinessOffering: "कृषी व्यवसाय ऑफर",
        services: {
          carismaSeeds: {
            title: "करिस्मा बटाट्याचे बियाणे",
            description: "नेदरलँड्सचे उच्च दर्जाचे बटाट्याचे बियाणे, आता उत्कृष्ट उत्पादनासाठी भारतात उपलब्ध."
          },
          supplyChain: {
            title: "पुरवठा साखळी उपाय",
            description: "उत्पादकांना चांगले व्यावसायिक परतावा सुनिश्चित करण्यासाठी सर्वोत्तम खरेदीदारांसह भागीदारी."
          },
          engineering: {
            title: "अन्न अभियांत्रिकी ओळी",
            description: "चिप्स, स्नॅक्स, फ्रेंच फ्राईज आणि अधिकसाठी संपूर्ण प्रक्रिया ओळी."
          },
          advisory: {
            title: "सल्लागार आणि प्रशिक्षण",
            description: "शेतकरी, प्रोसेसर आणि मूल्य साखळी भागधारकांसाठी तज्ञ मार्गदर्शन."
          }
        },
        testimonials: {
          testimonial1: {
            name: "रमेश पाटील",
            location: "महाराष्ट्र",
            text: "करिस्मा बटाट्याच्या बियाण्यांनी माझे उत्पादन 40% वाढवले. गुणवत्ता उत्कृष्ट आहे आणि समर्थन संघाने संपूर्ण हंगामात मला मदत केली."
          },
          testimonial2: {
            name: "सुरेश कुमार",
            location: "गुजरात",
            text: "एसवी अॅग्रीसोबत भागीदारी करणे हा माझा सर्वोत्तम निर्णय होता. ते केवळ गुणवत्तेचे बियाणे पुरवत नाहीत तर माझ्या उत्पादनासाठी चांगले खरेदीदार देखील सुनिश्चित करतात."
          },
          testimonial3: {
            name: "मंजूनाथ रेड्डी",
            location: "कर्नाटक",
            text: "सल्लागार सेवा अमूल्य आहेत. त्यांनी मला आधुनिक शेती तंत्र शिकवले ज्यामुळे माझा नफा दुप्पट झाला."
          }
        },
        certifications: {
          iso: "आयएसओ 9001:2015 प्रमाणित",
          fssai: "एफएसएसएआय परवानाधारक",
          organic: "सेंद्रिय प्रमाणित",
          export: "निर्यात गुणवत्ता"
        }
      },
      about: {
        title: "आमच्याबद्दल",
        subtitle: "2008 पासून नाविन्यपूर्ण उपाय आणि अतुलनीय कौशल्याने अन्न उद्योगात बदल",
        ourStory: "आमची कथा",
        ourJourney: "आमचा प्रवास",
        meetTheTeam: "टीमला भेटा",
        leadershipSubtitle: "नावीन्य आणि उत्कृष्टता चालविणारे नेतृत्व"
      },
      agriSolutions: {
        title: "कृषी उपाय",
        subtitle: "वर्षभर बटाटे मिळवा",
        ourServices: "आमच्या सेवा",
        comprehensiveSolutions: "सर्वसमावेशक कृषी उपाय",
        servicesDescription: "आम्ही प्रीमियम गुणवत्तेच्या बियाण्यांपासून ते पुरवठा साखळी व्यवस्थापन आणि तज्ञ प्रशिक्षणापर्यंत संपूर्ण कृषी उपाय प्रदान करतो."
      },
      engineeringSolutions: {
        title: "अभियांत्रिकी उपाय",
        subtitle: "सर्वोत्तम अन्न अभियांत्रिकी उपाय",
        processLines: "अन्न अभियांत्रिकी प्रक्रिया ओळी आणि उपाय",
        processLinesDescription: "आधुनिक अन्न उद्योगासाठी अत्याधुनिक अन्न प्रक्रिया उपकरणे आणि संपूर्ण उत्पादन ओळी.",
        cuttingEdgeTech: "अत्याधुनिक तंत्रज्ञान",
        cuttingEdgeTechDesc: "अन्न प्रक्रियेतील नवीनतम नवकल्पना",
        completeSolutions: "संपूर्ण उपाय",
        completeSolutionsDesc: "संपूर्ण प्रक्रिया ओळी",
        expertSupport: "तज्ञ समर्थन",
        expertSupportDesc: "समर्पित तांत्रिक सहाय्य"
      },
      ingredientSolutions: {
        title: "घटक उपाय",
        subtitle: "तुमच्या अन्न प्रक्रियेसाठी सर्वोत्तम घटक उपाय",
        premiumQuality: "प्रीमियम गुणवत्ता",
        potatoSolutions: "बटाटा आणि घटक उपाय",
        solutionsDescription: "तुमच्या सर्व अन्न प्रक्रिया गरजांसाठी उच्च-गुणवत्तेचे घटक",
        additionalIngredients: "अतिरिक्त घटक",
        qualityAssured: "गुणवत्ता खात्रीशीर",
        potatoVarieties: "बटाटा वाण",
        availability: "उपलब्धता"
      },
      insights: {
        title: "माहिती",
        subtitle: "नवीनतम उद्योग अंतर्दृष्टी, ट्रेंड आणि सर्वोत्तम पद्धतींसह अद्ययावत रहा"
      },
      companyName: "सिद्धी विनायक अॅग्रो एम. प्रायव्हेट लिमिटेड",
      About: "बद्दल"
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
      },
      stats: {
        yearsExperience: "વર્ષોનો અનુભવ",
        happyFarmers: "ખુશ ખેડૂતો",
        potatoVarieties: "બટાકાની જાતો",
        countries: "દેશો સેવા"
      },
      cta: {
        searchEnds: "ફૂડ પ્રોસેસિંગ સોલ્યુશન્સ માટેની તમારી શોધ અહીં સમાપ્ત થાય છે",
        getStarted: "આજે જ શરૂ કરો"
      },
      home: {
        aboutTitle: "ખાદ્ય ઉદ્યોગ માટે વ્યાપક કૃષિ અને એન્જિનિયરિંગ ઉકેલો",
        aboutDescription1: "સિદ્ધિ વિનાયક એગ્રો એમ. પ્રાઇવેટ લિમિટેડ, 2008માં સ્થાપિત, કૃષિ અને એન્જિનિયરિંગ પર બેવડા ધ્યાન સાથે બટાકા ઉદ્યોગમાં પરિવર્તન લાવ્યું છે. તેનો કૃષિ વ્યવસાય વિભાગ અદ્યતન સંગ્રહ ઉકેલો અને રાષ્ટ્રવ્યાપી વિતરણ નેટવર્ક દ્વારા વર્ષભર પ્રોસેસ-ગ્રેડ બટાકા પૂરા પાડે છે.",
        aboutDescription2: "ફૂડ એન્જિનિયરિંગ બિઝનેસ ડિવિઝન બટાકાની ચિપ્સ, શેકેલા બદામ અને વિવિધ પફ્ડ સ્નેક્સ જેવા ઉત્પાદનો માટે અત્યાધુનિક ટેકનોલોજીનો લાભ લઈને નવીન સ્નેક ઉકેલો અને ભવિષ્યના ખાદ્ય પદાર્થોમાં વિશેષતા ધરાવે છે.",
        downloadBrochure: "બ્રોશર ડાઉનલોડ કરો",
        transformingAgriculture: "કૃષિનું પરિવર્તન",
        since2008: "2008 થી",
        watchOurStory: "અમારી વાર્તા જુઓ",
        farmToFork: "ખેતરથી કાંટા સુધી: અમારી યાત્રા",
        videoDescription: "જુઓ કે અમે નેધરલેન્ડ્સના અમારા પ્રીમિયમ કરિશ્મા બીજ સાથે ભારતમાં બટાકાની ખેતીમાં કેવી રીતે ક્રાંતિ લાવી રહ્યા છીએ. અમારા ખેતરો જુઓ, અમારા ખેડૂતોને મળો અને અમારી ગુણવત્તા પ્રક્રિયા સમજો.",
        learnMore: "અમારા વિશે વધુ જાણો",
        ourFounder: "અમારા સ્થાપક",
        founderTitle: "સિદ્ધિ વિનાયક એગ્રો એમ. પ્રાઇવેટ લિમિટેડ પાછળના દૂરદર્શીને મળો",
        founderDescription1: "શ્રી કુલદીપ સિંહ રાઠોડ, સ્થાપક અને સીઈઓ, 2008માં ભારતીય કૃષિને પરિવર્તિત કરવાના દ્રષ્ટિકોણ સાથે તેમની યાત્રા શરૂ કરી. કૃષિ-વ્યવસાયમાં 15 વર્ષથી વધુ અનુભવ અને ખેડૂતોના પડકારોની ઊંડી સમજણ સાથે, તેમણે ગુણવત્તાયુક્ત બીજ અને ખેડૂતો વચ્ચેની ખાઈને પાટવા માટે સિદ્ધિ વિનાયક એગ્રો એમ. પ્રાઇવેટ લિમિટેડ બનાવ્યું.",
        founderQuote: "દરેક ખેડૂત વિશ્વ-સ્તરીય બીજ અને ન્યાયી બજાર કિંમતો સુધી પહોંચને પાત્ર છે. તેથી જ અમે નેધરલેન્ડ્સથી કરિશ્મા બટાકા ભારતમાં લાવ્યા અને ખેતરથી બજાર સુધી સંપૂર્ણ ઇકોસિસ્ટમ બનાવી.",
        founderName: "કુલદીપ સિંહ રાઠોડ, સ્થાપક",
        successStories: "સફળતાની વાર્તાઓ",
        whatFarmersSay: "ખેડૂતો અમારા વિશે શું કહે છે",
        whatWeDo: "અમે શું કરીએ છીએ",
        agriBusinessOffering: "કૃષિ વ્યવસાય ઓફર",
        services: {
          carismaSeeds: {
            title: "કરિશ્મા બટાકાના બીજ",
            description: "નેધરલેન્ડ્સથી ઉચ્ચ ગુણવત્તાના બટાકાના બીજ, હવે શ્રેષ્ઠ ઉપજ માટે ભારતમાં ઉપલબ્ધ છે."
          },
          supplyChain: {
            title: "સપ્લાય ચેઇન સોલ્યુશન",
            description: "ઉત્પાદકોને વધુ સારા વ્યાપારી વળતર સુનિશ્ચિત કરવા શ્રેષ્ઠ ખરીદદારો સાથે ભાગીદારી."
          },
          engineering: {
            title: "ફૂડ એન્જિનિયરિંગ લાઇન્સ",
            description: "ચિપ્સ, સ્નેક્સ, ફ્રેન્ચ ફ્રાઈસ અને વધુ માટે સંપૂર્ણ પ્રોસેસિંગ લાઇન્સ."
          },
          advisory: {
            title: "સલાહકાર અને તાલીમ",
            description: "ખેડૂતો, પ્રોસેસર્સ અને વેલ્યુ ચેઇન હિતધારકો માટે નિષ્ણાત માર્ગદર્શન."
          }
        },
        testimonials: {
          testimonial1: {
            name: "રમેશ પાટીલ",
            location: "મહારાષ્ટ્ર",
            text: "કરિશ્મા બટાકાના બીજે મારી ઉપજ 40% વધારી. ગુણવત્તા ઉત્કૃષ્ટ છે અને સપોર્ટ ટીમે સમગ્ર સીઝન દરમિયાન મને મદદ કરી."
          },
          testimonial2: {
            name: "સુરેશ કુમાર",
            location: "ગુજરાત",
            text: "એસવી એગ્રી સાથે ભાગીદારી કરવી એ મારો શ્રેષ્ઠ નિર્ણય હતો. તેઓ માત્ર ગુણવત્તાયુક્ત બીજ પૂરા પાડતા નથી પરંતુ મારા ઉત્પાદન માટે સારા ખરીદદારોની પણ ખાતરી કરે છે."
          },
          testimonial3: {
            name: "મંજૂનાથ રેડ્ડી",
            location: "કર્ણાટક",
            text: "સલાહકાર સેવાઓ અમૂલ્ય છે. તેઓએ મને આધુનિક ખેતી તકનીકો શીખવી જેણે મારો નફો બમણો કર્યો."
          }
        },
        certifications: {
          iso: "ISO 9001:2015 પ્રમાણિત",
          fssai: "FSSAI લાઇસન્સ પ્રાપ્ત",
          organic: "ઓર્ગેનિક પ્રમાણિત",
          export: "નિકાસ ગુણવત્તા"
        }
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