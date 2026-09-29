// Game Data with all decks and their card systems
const decks = {
    unsung: {
        name: "Unsung Emotions",
        chapter: "Unsung Emotions",
        subtitle: "Engaging Conversation Starters to Build Trust & Deep Connections",
        icon: "fa-users",
        colors: {
            primary: "#0E1E5F",
            primaryRgb: "14, 30, 95",
            secondary: "#FFFFFF",
            accent: "#0E1E5F",
            backBg: "#0E1E5F",
            backText: "#FFFFFF",
            backBorder: "#0E1E5F",
            backClass: "unsung-original-back",
            icon: "#0E1E5F",
            lightBg: "rgba(14, 30, 95, 0.1)",
            darkBg: "rgba(14, 30, 95, 0.9)",
            shadow: "rgba(14, 30, 95, 0.2)",
            bodyLightBg: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
        },
        cards: {
            blue: [
                "Kailan ka huling umiyak, at bakit?",
                "Ano ang naghahold back sayo para makamit ang pangarap mo?",
                "Sino ang pinakamamahal mo sa iyong buhay at bakit?",
                "Ano ang last biggest realization mo sa iyong sarili?",
                "Ano ang pinakamahirap na desisyon na ginawa mo?",
                "Ano ang pinakamasakit at pinakamasayang ala-ala ang hindi mo malilimutan?",
                "Ano ang pinakamahirap na pinagdadaanan mo ang walang nakakaalam?",
                "Kung may babaguhin ka sa sarili mo, ano ito at bakit?",
                "Anong ang expectations sayo ng mga taong nasa paligid mo?",
                "Kailan mo huling naramdaman na parang hindi ka naiintindihan ng mga taong nasa paligid mo?",
                "Ano ang best decision na ginawa mo?",
                "Ano ang pagsubok na kinakaharap mo sa ngayon?",
                "Ano ang ipinaparamdam sayo nung childhood days mo na hindi mo ipaparamdam sa magiging future kids mo?",
                "Are you being true to yourself, or are you trying to fit someone else's expectation?",
                "Ano ang pinakamasakit na salitang narinig mo mula sa taong mahal mo?",
                "Ano ang greatest \"What if\" mo?",
                "Ano ang bagay na madali para sa iba, pero mahirap sayo?",
                "Ano ang lesson na natutunan mo in a hard way?",
                "Ano ang pangarap na gini-give up mo? At ano ang dahilan?",
                "Ano ang kailangan mong tanggapin at i-let go para makausad ka?",
                "Kung hihingi ka ng kapatawaran sa sarili mo, ano ito at bakit?",
                "Kung magkikita kayo ng dating ikaw, ano sa tingin mo ang sasabihin niya sayo?",
                "Kung magsasama sama lahat ng ex mo, ano ang hindi magandang bagay tungkol sayo ang pagsasang-ayunan nila?",
                "Paano mo pinatawad ang taong nakasakit sayo nang hindi man lang humingi ng kapatawaran?",
                "Kung may isang pagkakamali ka sa nakaraan na gusto mong i-tama, ano ito at bakit?",
                "Kailan mo huling naramdaman na mag-isa ka?",
                "Ano ang bagay na ipagpapatuloy mong gawin kahit hindi ka huhusgahan ng mga nasa paligid mo?",
                "What's something you wish your parents knew about you?"
            ],
            white: [
                "Kung may isang bagay kang gustong baguhin sa mundo, ano ito at bakit?",
                "Alin ang mas dapat sundin, puso o isip?",
                "I-rank mo from 1 to 5 kung ano ang pinakamahalaga sayo: love, career, family, friendship, self.",
                "Ano ang biggest lesson na natutunan mo sa iyong past relationship?",
                "Ano ang iyong biggest insecurity?",
                "Kung may isang bagay kang pwedeng makuha kapalit ng buhay mo, ano ito at bakit?",
                "Ano ang pipiliin mo: maraming oras pero walang pera, o maraming pera pero wala kang oras?",
                "On a scale of 1–10, gaano ka kasaya ngayon?",
                "5 to 10 years from now, ano ang nakikita mo sa sarili mo?",
                "Ano ang isang bagay na proud ka sa sarili mo?",
                "Ano ang pipiliin mo: maraming mahal sa buhay pero kailangang mamatay o kailangang mamatay ang taong mahal mo?",
                "Kung may isang tao kang gustong pasalamatan, sino ito? At bakit?",
                "Para sayo, ano ang pinakamahalagang katangian ng isang kaibigan?",
                "Naniniwala ka ba sa second chance? Bakit?",
                "Ano ang definition mo ng LOVE?",
                "Kung huling araw mo na bukas, anong gagawin mo ngayon?",
                "Ano ang pinakaayaw mong ginawa o ginagawa sayo ng iba?",
                "In one word, describe how you feel right now.",
                "Tama lang ba na i-cut off ang kaibigan kapag nadodown mo na sila?",
                "Ano ang worst trait mo?",
                "Ano ang iyong biggest regret? At paano ka natuto dito?"
            ]
        },
        rules: {
            blue: "Only the player who draws this answers",
            white: "Everyone answers this question"
        },
        cardTypes: {
            blue: "unsung-blue-card",
            white: "unsung-white-card"
        }
    },

    unsungplus: {
        name: "Unsung Emotions Plus",
        chapter: "Unsung Emotions Plus",
        subtitle: "Enhanced Edition with Grateful, Truth & Impact Cards",
        icon: "fa-users-plus",
        colors: {
            primary: "#0E1E5F",
            primaryRgb: "14, 30, 95",
            secondary: "#FFFFFF",
            accent: "#0E1E5F",
            backBg: "#FFFFFF",
            backText: "#0E1E5F",
            backBorder: "#0E1E5F",
            backClass: "unsungplus-back",
            icon: "#0E1E5F",
            lightBg: "rgba(14, 30, 95, 0.1)",
            darkBg: "rgba(14, 30, 95, 0.9)",
            shadow: "rgba(14, 30, 95, 0.2)",
            bodyLightBg: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
        },
        cards: {
            blue: [
                "What's something you wish someone would ask you?",
                "If you will die tomorrow, ano ang iiwan mong mensahe?",
                "Kung pagagalitan mo ang sarili mo, ano ang sasabihin mo?",
                "Anong memory o araw ng buhay mo ang gusto mong burahin?",
                "Sino ang pinaka-nakasakit sayo? Ano ang gusto mong sabihin sa kanila?",
                "What's something you're still secretly hoping for?",
                "Ano ang pinakamasakit na bagay na kailangan mong tanggapin?",
                "What's something na sana mas maunawaan pa ng mga tao tungkol sayo?",
                "Kailan mo huling naramdaman na totoong masaya ka?",
                "What's something you're still healing from?",
                "What's something about yourself na pinagaaralan mo pang tanggapin?",
                "What's a childhood dream you still think about?",
                "What's a promise you made to yourself that you broke?"
            ],
            white: [
                "Kung may itatanong ka kay God ngayon, ano yun?",
                "Ano ang isang bagay na akala mo magpapasaya sayo?",
                "Kung ngayon na ang huling araw mo sa mundo, ano ang pinaka-pagsisisihan mo?",
                "Ano ang bagay na sana nalaman mo ng mas maaga?",
                "Kung bibigyan mong payo ang sarili mo, ano ang sasabihin mo?",
                "Anong desisyon ang ipinagpapasalamat mong hindi mo ginawa?",
                "Ano ang isang bagay na hinding hindi mo na ulit gagawin?",
                "Kung may isang bagay kang pwedeng baguhin sa paraan ng pagpapalaki sayo, ano ito at bakit?",
                "Kung bibigyan ka ng pagkakataong bumalik sa nakaraan at baguhin ang isang desisyon, ano ito at bakit?",
                "Kung meron kang chance na malaman ang totoong sagot sa isang tanong, ano ang itatanong mo?",
                "Kung may isang taon ng iyong buhay ang gusto mong ulitin, ano iyon?"
            ],
            grateful: [
                "Ano ang pinaka-naaappreciate nyo sa akin?"
            ],
            truth: [
                "Ask me something personal.",
                "Ano sa tingin nyo ang biggest strength and weakness ko?",
                "Anong opinyon nyo tungkol sa mga desisyon ko sa buhay?"
            ],
            impact: [
                "Kapag wala na ako, ano ang mami-miss nyo sa akin?",
                "Ano ang biggest impact ko sa buhay nyo?",
                "Anong parte ng pagkatao ko ang nag-iinspire sa inyo?"
            ]
        },
        rules: {
            blue: "Only the player who draws this answers",
            white: "Everyone answers this question",
            grateful: "The group answers about the drawer",
            truth: "The group shares truths about the drawer",
            impact: "The group shares the drawer's impact"
        },
        cardTypes: {
            blue: "blue-card",
            white: "white-card",
            grateful: "grateful-card",
            truth: "truth-card",
            impact: "impact-card"
        }
    },

    love: {
        name: "Love Unfiltered",
        chapter: "Love Unfiltered",
        subtitle: "Engaging Conversation Starters on Love & Relationship Matters",
        icon: "fa-heart",
        colors: {
            primary: "#7A160F",
            primaryRgb: "122, 22, 15",
            secondary: "#FFFFFF",
            accent: "#7A160F",
            backBg: "#7A160F",
            backText: "#FFFFFF",
            backBorder: "#7A160F",
            backClass: "love-back",
            icon: "#7A160F",
            lightBg: "rgba(122, 22, 15, 0.1)",
            darkBg: "rgba(122, 22, 15, 0.9)",
            shadow: "rgba(122, 22, 15, 0.2)",
            bodyLightBg: "linear-gradient(135deg, #f5f7fa 0%, #e8c4c2 100%)"
        },
        cards: {
            red: [
                "Ano ang kailangan mo pang i-workout sa sarili mo para sa current or future relationships?",
                "What's the hardest part about dating you?",
                "Ano ang nakatulong sayo para mag heal from past heartbreak? Bukod sa time at paghahanap ng iba?",
                "Paano mo masasabing kailangan na tapusin ang isang relasyon?",
                "Ano ang biggest regret mo sa iyong past relationship?",
                "I-describe mo ang iyong worst heartbreak. Ano ang tinuro nito sayo?",
                "May trauma kaba? Paano ito naka-apekto sa iyong past or current relationship?",
                "Ano ang worst relationship advice na natanggap mo?",
                "Anong relationship traits ng parents mo ang ayaw at gusto mong i-apply sa current/future relationship mo?",
                "Ano ang bagay na hindi mo na uulitin sa iyong next relationship?",
                "Ano ang dahilan ng hiwalayan nyo ng huli mong karelasyon?",
                "What's something about love na sana natutunan mo ng mas maaga?",
                "Is there a time na pinagsisihan mo kung paano mo trinato ang iyong partner?",
                "Nagka-gusto kanaba sa isang tao kahit alam mong hindi ito mabuti para sayo?",
                "Paano mo nalalaman na handa ka nang magmahal muli?",
                "Ano ang love language na gusto mong matanggap pero nahihirapan kang i-express?",
                "Paano nagbago ang definition mo ng love mula noong bata ka hanggang ngayon?",
                "Ano ang isang bagay na natutunan mo sa sarili mo habang nasa isang relasyon?",
                "Kailan mo naramdaman na \"this is different\" sa current/past relationship mo?"
            ],
            white: [
                "Ano ang red flag na pinaka-hindi dapat i-ignore?",
                "Okay lang ba na ma-attract sa iba kahit nasa isang relasyon ka?",
                "Posible ba na mainlove ka sa dalawang tao at the same time?",
                "Willing kaba mag bigay ng second chance sa partner na nag-cheat?",
                "Paano mo masasabing mahal mo na ang isang tao?",
                "Para sa partner mo, dapat mo bang baguhin ang totoong ikaw?",
                "Naniniwala ka pa ba sa konsepto ng panliligaw?",
                "Naniniwala ka ba sa right person, wrong time?",
                "Dapat lang ba na mag-bigayan ng social media accounts at phones ang mag partner?",
                "Sino ang mas prone sa cheating, babae o lalaki?",
                "Ano ang pipiliin mo? Magkaanak ng maaga at magstruggle? or mabigyan sila ng magandang buhay ngunit sa napakaiksing panahon?",
                "I-Rank mo from 1-5 ang pinakamahalagang love language mo: Acts of Service, Words of affirmation, Quality time, Physical Touch, Receiving gifts.",
                "Ano ang best traits na hinahanap mo sa isang partner. Give three.",
                "Gusto nyo ang isa't isa pero ayaw ng mga magulang nyo, sino ang pipiliin mo?",
                "Kailan mo masasabing pwede kana bumuo ng sarili mong pamilya?",
                "Alin ang mas dapat mauna, live in o kasal?",
                "Ano ang pipiliin mo, mamuhay ng mahirap kasama ang taong mahal mo, o mabuhay ng masagana pero magisa?",
                "Mas mahirap bang magmahal o tanggapin na minamahal ka?",
                "Dapat bang may expiration ang paghihintay sa isang tao?",
                "Dapat bang ishare ng magpartner ang lahat ng secrets nila sa isa't isa?",
                "Gaano kahalaga ang physical attraction sa isang relasyon?",
                "Mas pipiliin mo bang mag-isa kesa sa maging masaya sa maling tao?"
            ],
            love: [
                "Ano sa tingin nyo ang red flag ko pagdating sa relationship?",
                "Everyone, say 3 things you love about me.",
                "Ano sa tingin nyo ang best jowable trait ko?",
                "+4"
            ]
        },
        rules: {
            red: "Only the drawer answers",
            white: "Everyone answers this question",
            love: "The group answers about the drawer"
        },
        cardTypes: {
            red: "love-red-card",
            white: "love-white-card",
            love: "love-card"
        }
    },

    between: {
        name: "Between Us",
        chapter: "Between Us",
        subtitle: "A Conversation Starter Card Game for Couples",
        icon: "fa-home",
        colors: {
            primary: "#6D213C",
            primaryRgb: "109, 33, 60",
            secondary: "#C0C0C0",
            accent: "#1A1A2E",
            backBg: "linear-gradient(135deg, #6D213C 0%, #1A1A2E 100%)",
            backText: "#C0C0C0",
            backBorder: "#C0C0C0",
            backClass: "between-back",
            icon: "#6D213C",
            lightBg: "rgba(109, 33, 60, 0.1)",
            darkBg: "rgba(26, 26, 46, 0.9)",
            shadow: "rgba(109, 33, 60, 0.2)",
            bodyLightBg: "linear-gradient(135deg, #f8f1f4 0%, #e8dae0 100%)"
        },
        cards: {
            bronze: [
                "Sino ang celebrity crush mo? Kung gusto ka rin niya, ipagpapalit mo ba ako sa kanya? Bakit?",
                "Kailan mo na-realize na mahal mo na ako?",
                "Ask anything about me.",
                "Kailan yung huling time na na-touch ka sakin? Bakit?",
                "Kung maghihiwalay tayo, ano sa tingin mo ang magiging dahilan?",
                "Sa lahat ng physical traits ko, saan ka pinaka-naaattract?",
                "Kung hindi tayo nagkakilala, sa tingin mo, nasan tayo ngayon?",
                "Kung malaman mong may sakit ka at kaunti na lang ang natitirang oras mo, ano ang mga huling salitang gusto mong manatili sa puso't isip ko magpakailanman?",
                "Ano ang isang bagay na sana ay nagawa o nasabi ko nang mas maayos?",
                "Sa lahat ng ginawa mo sa akin, ano ang pinaka-pinagsisisihan mo?",
                "Alin sa mga alaala natin ang gusto mong balikan at maranasan muli?",
                "Bakit mo ako mahal?",
                "Imagine we're on our deathbeds. Looking back at our life together, ano ang pinaka-pagsisisihan mong sana'y mas ginawa pa natin? At ano ang magpapangiti sayo dahil naranasan natin itong magkasama?",
                "Kung may isang bagay kang gustong baguhin sa akin, ano ito at bakit?",
                "Ano ang favorite mo about our relationship?",
                "Kailan mo naramdaman na sure ka na sa akin?",
                "Ano ang isang bagay na natutunan mo mula sa akin?",
                "Kung may isang wish kang igrant about our relationship, ano iyon?",
                "Ano ang pinakamahirap na challenge na nalampasan natin bilang magpartner?",
                "Ano ang bagay na gusto mong gawin natin na hindi pa natin nagagawa?",
                "Kailan mo huling naramdaman na proud ka sa akin?",
                "Ano ang isang bagay na gusto mong malaman ko tungkol sa iyo?",
                "Ano ang bagay na hinahangaan mo sa akin?",
                "Kailan mo naramdaman na talagang naiintindihan kita?",
                "Paano mo malalaman na galit ako sa iyo?",
                "Ano ang love language na gusto mong matanggap mula sa akin?",
                "Ano ang favorite mong quality ko?",
                "Ano ang bagay na nagpapalakas sa ating relasyon?"
            ]
        },
        rules: {
            bronze: "Ask your partner OR both answer together"
        },
        cardTypes: {
            bronze: "between-card"
        }
    },

    loveplus: {
        name: "Love Unfiltered Plus",
        chapter: "Love Unfiltered Plus",
        subtitle: "Advanced Edition with Special Role Cards",
        icon: "fa-seedling",
        colors: {
            primary: "#47100D",
            primaryRgb: "71, 16, 13",
            secondary: "#ECF0F1",
            accent: "#47100D",
            backBg: "#47100D",
            backText: "#ECF0F1",
            backBorder: "#47100D",
            backClass: "loveplus-back",
            icon: "#47100D",
            lightBg: "rgba(71, 16, 13, 0.1)",
            darkBg: "rgba(71, 16, 13, 0.9)",
            shadow: "rgba(71, 16, 13, 0.2)",
            bodyLightBg: "linear-gradient(135deg, #f9f2f2 0%, #e8d6d5 100%)"
        },
        cards: {
            red: [
                "On a scale of 1-10, gaano ka kahirap mahalin?",
                "Ano ang gusto mong sabihin sa ex mo?",
                "Ano ang pinakamasakit mong \"almost\"?",
                "Sino ang TOTGA mo? (The One That Got Away) Ano ang nangyari sa inyo?",
                "Ano ang pinakamalaking sakripisyong ginawa mo para sa pagibig?",
                "May naging relasyon ka bang gusto mong buuin muli? Bakit o bakit hindi?",
                "Paano mo malalaman na healed ka na from a past relationship?"
            ],
            white: [
                "Sa isang relasyon, ano ang mas mahirap, maging babae o lalaki?",
                "Naniniwala ka ba sa soulmate, o tayo ang namimili ng mamahalin natin?",
                "Would you rather have someone love you deeply but leave, or stay but never love you fully?",
                "Mahal mo? O mahal ka?",
                "Okay lang ba sayo na jowain ng kaibigan mo ang ex mo?",
                "Parang kayo na, pero wala kayong label, okay lang ba magdemand ng loyalty?",
                "For 10 million papayag kaba makipag one night stand ang partner mo sa iba?",
                "Kaya pa bang ma-fully rebuilt ang trust after ng betrayal?",
                "Sino ang mas mabilis ma-fall, babae o lalaki?",
                "Paano mo masasabing siya na ang \"The One\"?",
                "Kaya ba talaga mag work ng \"Long Distance Relationship\" in the long run?"
            ],
            love: [
                "Ano sa tingin nyo ang kailangan ko pang i-workout sa sarili ko para sa future/current relationship?",
                "Ano sa tingin nyo ang compliment na madalas kong ma-receive?",
                "I-describe kung ano sa tingin nyo ang type ko.",
                "Ano sa tingin nyo ang red flag ko pagdating sa relationship?"
            ],
            pass: [
                "Ano ang pinaka-masakit na naranasan mo sa ngalan ng pagibig?",
                "Willing ka ba bigyan ng second chance ang ex mo? Bakit?",
                "Sino ang isang tao na pinagsisisihan mong mahalin? Bakit?",
                "Kailan mo naramdaman na tama ang desisyon mong maghiwalay?"
            ],
            takens: [
                "Itong current relationship mo na ba ang dream relationship mo? Bakit?",
                "Handa mo bang iwan ang jowa mo para sa iyong celebrity crush?",
                "Kailan ka huling pinaiyak ng partner mo? Bakit?"
            ],
            boys: [
                "Ano ang bagay na ginagawa ng babae ang mahirap i-resist?",
                "Anong traits ang dapat hanapin ng mga babae sa isang lalaki?",
                "Anong bagay tungkol sa mga lalaki ang sana mas maintindihan pa ng mga babae?",
                "Ano ang pinakamalaking misconception ng mga babae tungkol sa mga lalaki?"
            ],
            girls: [
                "Anong traits ang dapat hanapin ng mga lalaki sa isang babae?",
                "Anong bagay tungkol sa mga babae ang sana mas maintindihan pa ng mga lalaki?",
                "Ano ang bagay na ginagawa ng lalaki ang mahirap i-resist?",
                "Ano ang pinakamalaking misconception ng mga lalaki tungkol sa mga babae?"
            ]
        },
        rules: {
            red: "Only the drawer answers",
            white: "Everyone answers this question",
            love: "The group answers about the drawer",
            pass: "Drawer chooses anyone to answer",
            takens: "Only players in a relationship answer",
            boys: "Only boys/men answer this question",
            girls: "Only girls/women answer this question"
        },
        cardTypes: {
            red: "plus-red-card",
            white: "plus-white-card",
            love: "plus-love-card",
            pass: "plus-pass-card",
            takens: "plus-takens-card",
            boys: "plus-boys-card",
            girls: "plus-girls-card"
        }
    },

    wild: {
        name: "Wild Ones",
        chapter: "Wild Ones",
        subtitle: "A Bold & Off-Limits Conversation Card Game for Adults & Friends",
        icon: "fa-star",
        colors: {
            primary: "#000000",
            primaryRgb: "0, 0, 0",
            secondary: "#FFFFFF",
            accent: "#FF0000",
            backBg: "#000000",
            backText: "#FFFFFF",
            backBorder: "#FF0000",
            backClass: "wild-back",
            icon: "#000000",
            lightBg: "rgba(0, 0, 0, 0.1)",
            darkBg: "rgba(0, 0, 0, 0.9)",
            shadow: "rgba(255, 0, 0, 0.2)",
            bodyLightBg: "linear-gradient(135deg, #f0f0f0 0%, #d9d9d9 100%)"
        },
        cards: {
            black: [
                "Everyone! Ano ang inyong wildest fantasy?",
                "Lahat ay sasagot ng Yes or No. May napagpantasyahan ka na ba sa group na to? Name drop = No Shot No name drop = 2 Shots!",
                "Sa circle na to, who's the closest to your type?",
                "Kung may aagawin kang jowa mula sa circle na to, kaninong jowa 'yon?",
                "Kung nasa PBB kayo, sino ang papatawan mo ng force eviction at bakit? Shot kayo parehas.",
                "Sabihin kung sino sa grupo ang \"jojowain\" at \"totropahin\". Isa-isahin!",
                "Sa grupo, sino ang pinaka-malibog? Prove it with a story.",
                "Kung may isang tao sa grupo na pwede mong i-kiss ngayon, sino iyon?",
                "Lahat! Ano ang pinaka-weird na naging fantasy nyo?",
                "Kung forced kayong magpakasal sa isa sa grupo, kanino at bakit?",
                "Kung may isang bagay kang pwedeng gawin ngayon na walang consequences, ano iyon?",
                "Sino sa grupo ang pinaka-adventurous sa relationship?"
            ],
            white: [
                "Shot lahat ng hindi pa naka-try makipag-ano sa public place! Safe sa shot ang mga naka-try pag may place reveal + name drop!",
                "Lahat! Shot kung nasubukan mo na makipag-ano sa mas bata o mas matanda sayo ng limang taon o higit pa.",
                "Send \"hi\" to a random IG follower na mapipili ng grupo.",
                "Toss a coin! Heads = Kiss everyone Tails = Everyone will kiss you (Anywhere on the face)",
                "Give a lap dance to the 4th man/woman on your left.",
                "Let the group dare you anything. Pag nagawa mo, shot silang lahat.",
                "Text your ex \"I miss you\" right now.",
                "Remove one clothing item.",
                "Post an embarrassing story on your social media.",
                "Kiss the person to your right for 10 seconds.",
                "Let the group search your phone gallery for 1 minute.",
                "Share your browser history for the past week.",
                "Whisper something dirty to the person across you.",
                "Let someone draw anything on your face.",
                "Sing a love song while staring at someone in the group.",
                "Share your most recent text conversation.",
                "Do 20 squats while making eye contact with someone.",
                "Send a flirty message to the last person you texted.",
                "Let someone feed you while blindfolded."
            ],
            escape: [
                "Black Escape Card: Save this card. Pwede mong gamitin 'to para umiwas at ipasa ang tanong sa iba.",
                "White Escape Card: Save this card. Pwede mong gamitin 'to para ipasa sa iba ang susunod mong dare."
            ]
        },
        rules: {
            black: "Spill the truth or take a shot",
            white: "Do the dare or take a shot",
            escape: "Use this card to escape a question or dare"
        },
        specialRules: {
            escapeCards: 2
        },
        cardTypes: {
            black: "wild-black-card",
            white: "wild-white-card",
            escape: "escape-card-1"
        }
    },

    whiskey: {
        name: "Life Over Whiskey",
        chapter: "Life Over Whiskey",
        subtitle: "Limited Edition • Deep Engaging Conversation Starters On Life Matters",
        icon: "fa-whiskey-glass",
        colors: {
            primary: "#000000",
            primaryRgb: "0, 0, 0",
            secondary: "#D4AF37",
            accent: "#5C4033",
            backBg: "#000000",
            backText: "#D4AF37",
            backBorder: "#5C4033",
            backClass: "whiskey-back",
            icon: "#D4AF37",
            lightBg: "rgba(212, 175, 55, 0.1)",
            darkBg: "rgba(0, 0, 0, 0.9)",
            shadow: "rgba(212, 175, 55, 0.2)",
            bodyLightBg: "linear-gradient(135deg, #f5f5f5 0%, #e6e6e6 100%)"
        },
        cards: {
            bronze: [
                "Sa tingin mo, patas ba ang buhay?",
                "Naniniwala ka ba sa tadhana, o tayo mismo ang gumagawa ng sarili nating kapalaran?",
                "Ano ang isang bagay na sana ginawa mo ng mas maaga?",
                "Ano ang bagay na sana'y wala ka nalang pakialam?",
                "Ano ang isang bagay na akala mo gusto mo, pero nang makuha mo, narealize mong hindi pala?",
                "Ano ang tinigilan mong gawin na mas nakapagpabuti ng buhay mo?",
                "Maging mahirap na puno ng pagmamahal, o mayaman ngunit mag isa?",
                "Ano ang isang bagay na sa tingin mo ay dapat gawin at maranasan natin sa ating buhay kahit isang beses lang?",
                "Kung ang buhay ay bibigyan ka ng reset button, pipindutin mo ba ito? Bakit?",
                "Ang respetuhin? o ang mahalin?",
                "Paano mo masasabing successful kana?",
                "Ano ang bagay na gusto mong maranasan bago ka mamatay?",
                "Ano ang pinakamalaking kalaban mo sa buhay?",
                "Kung may isang taon ng iyong buhay ang gusto mong burahin, ano iyon?",
                "Ano ang bagay na hindi mo kayang ipagpalit sa kahit ano?",
                "Ano ang pinakamalaking pagbabago sa sarili mo na nakita mo sa nakaraang 5 taon?",
                "Paano mo ilalarawan ang iyong relasyon sa sarili mo?",
                "Ano ang bagay na dapat malaman ng lahat ng magulang?",
                "Paano mo malalaman na tama ang iyong mga desisyon sa buhay?",
                "Ano ang bagay na gusto mong sabihin sa iyong 16-year-old self?",
                "Ano ang bagay na dapat mong patawarin sa sarili mo?",
                "Ano ang bagay na gustong-gusto mong gawin pero natatakot kang subukan?",
                "Kung may isang regalo kang gustong ibigay sa sarili mo, ano iyon?",
                "Paano mo itatayo ang sarili mo pagkatapos kang bumagsak?",
                "Ano ang bagay na magpapasaya sa iyo sa susunod na 10 taon?"
            ]
        },
        rules: {
            bronze: "After reading aloud, the drawer takes a shot. They answer first, then the group may share."
        },
        cardTypes: {
            bronze: "whiskey-front"
        }
    }
};

// ================================================
// IMPORTANT: UPDATED FUNCTION TO CHANGE "GRATEFUL CARD" TO "GRATITUDE CARD"
// ================================================

// Set card style and rules based on type
function setCardType(type) {
    const deck = decks[gameState.currentDeck];
    
    // Set card type display text
    let typeText = type + ' card';
    
    if (gameState.currentDeck === 'wild') {
        if (type === 'escape') {
            typeText = 'Escape Card';
        } else if (type === 'black') {
            typeText = 'Wild Card';
        } else if (type === 'white') {
            typeText = 'Wild Card';
        }
    } else if (gameState.currentDeck === 'between') {
        typeText = 'Between Us';
    } else if (gameState.currentDeck === 'whiskey') {
        typeText = 'Life Over Whiskey';
    } else if (gameState.currentDeck === 'loveplus') {
        // Format for Love Unfiltered Plus
        if (type === 'takens') typeText = "taken's card";
        else if (type === 'boys') typeText = "boy's card";
        else if (type === 'girls') typeText = "girl's card";
        else typeText = type + ' card';
    } else if (gameState.currentDeck === 'unsungplus') {
        if (type === 'grateful') typeText = 'Gratitude Card';
        else if (type === 'truth') typeText = 'Truth Card';
        else if (type === 'impact') typeText = 'Impact Card';
        else typeText = type + ' card';
    }
    
    cardTypeDisplay.textContent = typeText;
    cardTypeDisplay.className = "card-type font-card-type";
    
    // Set card style class
    if (deck.cardTypes && deck.cardTypes[type]) {
        cardFront.className = 'card-face card-front ' + deck.cardTypes[type];
    } else {
        // Fallback for decks without specific cardTypes
        cardFront.className = 'card-face card-front ' + type + '-card';
    }
    
    // Set the rule text
    if (deck.rules[type]) {
        answerRule.textContent = deck.rules[type];
        
        // Special cases
        if (gameState.currentDeck === 'whiskey') {
            answerRule.textContent = deck.rules.bronze;
        } else if (gameState.currentDeck === 'wild') {
            if (type === 'escape') {
                answerRule.textContent = "Use this card to escape a question or dare";
                const escapeCardsLeft = deck.specialRules.escapeCards - gameState.wildEscapeCardsUsed;
                if (escapeCardsLeft <= 0) {
                    answerRule.textContent = "No escape cards left! Use normal rules.";
                }
            }
        }
    }
}

// Game State
let gameState = {
    currentDeck: 'unsung',
    usedCards: {},
    cardHistory: [],
    currentCardIndex: -1,
    currentCardType: null,
    currentCardText: "",
    cardCount: 0,
    isFlipped: false,
    soundEnabled: true,
    previousCard: null,
    previousCardType: null,
    previousCardText: "",
    wildEscapeCardsUsed: 0,
    whiskeyShotTaken: false,
    isFirstDraw: true
};

// Variables for deck change
let pendingDeckChange = null;

// DOM Elements
const landingPage = document.getElementById('landingPage');
const gamePage = document.getElementById('gamePage');
const cardElement = document.getElementById('card');
const cardBack = document.getElementById('cardBack');
const cardFront = document.getElementById('cardFront');
const cardPrompt = document.getElementById('cardPrompt');
const cardNumber = document.getElementById('cardNumber');
const totalCards = document.getElementById('totalCards');
const cardDeckName = document.getElementById('cardDeckName');
const chapterDisplay = document.getElementById('chapterDisplay');
const currentGameDeck = document.getElementById('currentGameDeck');
const previousCardContent = document.getElementById('previousCardContent');
const deckChangeModal = document.getElementById('deckChangeModal');
const currentDeckName = document.getElementById('currentDeckName');
const newDeckName = document.getElementById('newDeckName');
const drawButton = document.getElementById('drawButton');
const shuffleContainer = document.getElementById('shuffleContainer');
const answerRule = document.getElementById('answerRule');
const cardTypeDisplay = document.getElementById('cardTypeDisplay');

// Update landing page stacked card colors
function updateLandingPageCardColors() {
    const deck = decks[gameState.currentDeck];
    const colors = deck.colors;
    
    // Update landing page specific CSS variables
    document.documentElement.style.setProperty('--landing-primary', colors.primary);
    document.documentElement.style.setProperty('--landing-secondary', colors.secondary);
    document.documentElement.style.setProperty('--landing-accent', colors.accent);
    document.documentElement.style.setProperty('--landing-back-bg', colors.backBg);
    document.documentElement.style.setProperty('--landing-back-text', colors.backText);
    document.documentElement.style.setProperty('--landing-back-border', colors.backBorder);
    document.documentElement.style.setProperty('--landing-shadow', colors.shadow);
    
    // Also update the main deck colors for consistency
    document.documentElement.style.setProperty('--deck-primary', colors.primary);
    document.documentElement.style.setProperty('--deck-secondary', colors.secondary);
    document.documentElement.style.setProperty('--deck-accent', colors.accent);
    document.documentElement.style.setProperty('--deck-back-bg', colors.backBg);
    document.documentElement.style.setProperty('--deck-back-text', colors.backText);
    document.documentElement.style.setProperty('--deck-back-border', colors.backBorder);
    document.documentElement.style.setProperty('--deck-icon', colors.icon);
    document.documentElement.style.setProperty('--deck-light-bg', colors.lightBg);
    document.documentElement.style.setProperty('--deck-dark-bg', colors.darkBg);
    document.documentElement.style.setProperty('--deck-shadow', colors.shadow);
}

// Update UI colors based on current deck
function updateDeckColors() {
    const deck = decks[gameState.currentDeck];
    const colors = deck.colors;
    
    // Update CSS variables
    document.documentElement.style.setProperty('--deck-primary', colors.primary);
    document.documentElement.style.setProperty('--deck-secondary', colors.secondary);
    document.documentElement.style.setProperty('--deck-accent', colors.accent);
    document.documentElement.style.setProperty('--deck-back-bg', colors.backBg);
    document.documentElement.style.setProperty('--deck-back-text', colors.backText);
    document.documentElement.style.setProperty('--deck-back-border', colors.backBorder);
    document.documentElement.style.setProperty('--deck-icon', colors.icon);
    document.documentElement.style.setProperty('--deck-light-bg', colors.lightBg);
    document.documentElement.style.setProperty('--deck-dark-bg', colors.darkBg);
    document.documentElement.style.setProperty('--deck-shadow', colors.shadow);
    
    // Also update landing page colors for consistency
    document.documentElement.style.setProperty('--landing-primary', colors.primary);
    document.documentElement.style.setProperty('--landing-secondary', colors.secondary);
    document.documentElement.style.setProperty('--landing-accent', colors.accent);
    document.documentElement.style.setProperty('--landing-back-bg', colors.backBg);
    document.documentElement.style.setProperty('--landing-back-text', colors.backText);
    document.documentElement.style.setProperty('--landing-back-border', colors.backBorder);
    document.documentElement.style.setProperty('--landing-shadow', colors.shadow);
    
    // Update body background based on deck and dark mode
    if (document.body.classList.contains('dark-mode')) {
        document.body.style.background = `linear-gradient(135deg, ${colors.darkBg} 0%, ${colors.primary} 100%)`;
    } else {
        document.body.style.background = colors.bodyLightBg || "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)";
    }
    
    // Update card back class
    if (gameState.currentDeck === 'wild') {
        cardBack.className = 'card-face card-back wild-back';
    } else if (gameState.currentDeck === 'whiskey') {
        cardBack.className = 'card-face card-back whiskey-back';
    } else {
        cardBack.className = 'card-face card-back ' + colors.backClass;
    }
    
    // Update body class for specific deck modes
    const deckClasses = ['unsung-mode', 'love-mode', 'between-mode', 'loveplus-mode', 'wild-mode', 'whiskey-mode'];
    deckClasses.forEach(cls => document.body.classList.remove(cls));
    
    if (gameState.currentDeck === 'unsung' || gameState.currentDeck === 'unsungplus') {
        document.body.classList.add('unsung-mode');
    } else if (gameState.currentDeck === 'love') {
        document.body.classList.add('love-mode');
    } else if (gameState.currentDeck === 'between') {
        document.body.classList.add('between-mode');
    } else if (gameState.currentDeck === 'loveplus') {
        document.body.classList.add('loveplus-mode');
    } else if (gameState.currentDeck === 'wild') {
        document.body.classList.add('wild-mode');
    } else if (gameState.currentDeck === 'whiskey') {
        document.body.classList.add('whiskey-mode');
    }
}

// Initialize game state for current deck
function initDeckState() {
    const deck = decks[gameState.currentDeck];
    gameState.usedCards = {};
    gameState.cardCount = 0;
    gameState.currentCardIndex = -1;
    gameState.currentCardType = null;
    gameState.currentCardText = "";
    gameState.previousCard = null;
    gameState.previousCardType = null;
    gameState.previousCardText = "";
    gameState.wildEscapeCardsUsed = 0;
    gameState.whiskeyShotTaken = false;
    gameState.isFirstDraw = true;
    gameState.isFlipped = false;
    
    // Update UI colors
    updateDeckColors();
    
    // Initialize used cards sets for each card type
    for (const cardType in deck.cards) {
        gameState.usedCards[cardType] = new Set();
    }
    
    // Calculate total cards
    let total = 0;
    for (const cardType in deck.cards) {
        if (gameState.currentDeck === 'wild' && cardType === 'escape') {
            total += deck.specialRules.escapeCards;
        } else {
            total += deck.cards[cardType].length;
        }
    }
    totalCards.textContent = total;
    cardNumber.textContent = gameState.cardCount;
    
    // Reset card to back face
    cardElement.classList.remove('flipped');
    cardElement.classList.remove('flipping-fast');
    
    // Show "How to Play" instructions instead of blank card
    showHowToPlayInstructions();
    
    // Update draw button
    updateDrawButton();
    
    // Clear previous card display
    previousCardContent.innerHTML = '<span class="no-previous">No previous card yet</span>';
    
    // Update deck display
    updateDeckDisplay();
}

// Show "How to Play" instructions
function showHowToPlayInstructions() {
    const deck = decks[gameState.currentDeck];
    const total = totalCards.textContent;
    const colors = deck.colors;
    
    // Determine appropriate color based on deck
    let cardColorClass = 'white-card';
    let textColor = colors.primary;
    
    if (gameState.currentDeck === 'unsung' || gameState.currentDeck === 'unsungplus') {
        cardColorClass = 'blue-card';
        textColor = '#FFFFFF';
    } else if (gameState.currentDeck === 'love' || gameState.currentDeck === 'loveplus') {
        cardColorClass = 'plus-red-card';
        textColor = '#ECF0F1';
    } else if (gameState.currentDeck === 'between') {
        cardColorClass = 'between-card';
        textColor = '#C0C0C0';
    } else if (gameState.currentDeck === 'whiskey') {
        cardColorClass = 'whiskey-front';
        textColor = '#D4AF37';
    } else if (gameState.currentDeck === 'wild') {
        cardColorClass = 'wild-black-card';
        textColor = '#FFFFFF';
    }
    
    // Update card front with instructions (without h2 heading)
    cardPrompt.innerHTML = `
        <div style="text-align: center; padding: 10px;">
            <div style="font-size: 16px; line-height: 1.5; margin-bottom: 20px; color: ${textColor};">
                <p style="margin-bottom: 10px;"><strong>1.</strong> Click <strong>DRAW NEW CARD</strong> to draw and reveal a question</p>
                <p style="margin-bottom: 10px;"><strong>2.</strong> Answer according to the rule at the bottom</p>
                <p style="margin-bottom: 10px;"><strong>3.</strong> Click <strong>DRAW NEW CARD</strong> again for the next question</p>
                <p style="margin-bottom: 10px;"><strong>4.</strong> Use the settings menu to toggle dark mode or sound</p>
            </div>
        </div>
    `;
    
    // Set card type and style
    cardTypeDisplay.textContent = "How to Play";
    cardTypeDisplay.className = "card-type font-card-type";
    cardFront.className = 'card-face card-front ' + cardColorClass;
    answerRule.textContent = "Click DRAW NEW CARD to start";
    
    // Make sure card is flipped to show instructions
    if (!gameState.isFlipped) {
        cardElement.classList.add('flipped');
        gameState.isFlipped = true;
    }
    
    // Update button text for first draw
    drawButton.innerHTML = '<i class="fas fa-play"></i> START FIRST DRAW';
}

// Update draw button state
function updateDrawButton() {
    // Draw button is always enabled now (no need to flip first)
    drawButton.disabled = false;
    drawButton.style.opacity = "1";
    drawButton.style.cursor = "pointer";
    
    // Update button text based on whether it's first draw or not
    if (gameState.isFirstDraw) {
        drawButton.innerHTML = '<i class="fas fa-play"></i> START FIRST DRAW';
    } else {
        drawButton.innerHTML = '<i class="fas fa-plus"></i> DRAW NEW CARD';
    }
}

// Start game from landing page
function startGame() {
    landingPage.classList.add('hidden');
    gamePage.classList.add('active');
    initDeckState();
    
    // Setup event listeners
    document.getElementById('darkModeToggle').addEventListener('change', toggleDarkMode);
    document.getElementById('soundToggle').addEventListener('change', (e) => {
        gameState.soundEnabled = e.target.checked;
    });
    
    // Load dark mode preference
    const darkModePref = localStorage.getItem('untoldsDarkMode');
    if (darkModePref === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
        // Update background for dark mode
        updateDeckColors();
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });
}

// Enhanced selectDeck function
function selectDeck(deckId) {
    gameState.currentDeck = deckId;
    
    // Update landing page colors
    updateLandingPageCardColors();
    
    // Find and click the corresponding hidden deck card
    const deckCard = document.getElementById(`deck-${deckId}`);
    if (deckCard) {
        deckCard.click();
    }
    
    // Update UI
    updateStackedCard(deckId);
    
    // Play sound if enabled
    if (gameState.soundEnabled) {
        playSound('flip');
    }
}

// Update stacked card display when deck changes
function updateStackedCard(deckId) {
    const deck = decks[deckId];
    
    // Update landing page colors
    updateLandingPageCardColors();
    
    // Update stack card text
    const chapterDisplay = document.querySelector('.stack-chapter-display');
    const description = document.querySelector('.stack-description');
    
    if (chapterDisplay) {
        chapterDisplay.textContent = deck.chapter;
    }
    
    if (description) {
        description.textContent = deck.subtitle;
    }
    
    // Update deck dots
    updateDeckDots(deckId);
}

// Update deck dots indicator
function updateDeckDots(activeDeckId) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.dataset.deck === activeDeckId) {
            dot.classList.add('active');
        }
    });
}

// Draw a new card - NOW AUTO-FLIPS THE CARD
function drawCard() {
    const deck = decks[gameState.currentDeck];
    
    // SPECIAL CASE: If we're showing instructions (first draw)
    if (gameState.currentCardIndex === -1) {
        // First draw - clear instructions and proceed normally
        gameState.currentCardIndex = 0;
        gameState.isFirstDraw = false;
        
        // Disable draw button during animation
        drawButton.disabled = true;
        
        // Check if deck is exhausted
        if (isDeckExhausted()) {
            if (confirm("You've used all cards in this deck! Reset and shuffle?")) {
                resetGame();
            }
            return;
        }
        
        // First, flip the card to back (if currently showing front)
        if (gameState.isFlipped) {
            cardElement.classList.add('flipping-fast');
            flipCard();
            
            // Create shuffle cards
            createShuffleCards();
            
            // Start shuffle animation
            setTimeout(() => {
                shuffleContainer.classList.add('active');
                
                const shuffleCards = document.querySelectorAll('.shuffle-card');
                shuffleCards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.animation = `shuffle 0.5s ease ${index * 0.05}s forwards`;
                });
                
                // After shuffle, select new card AND auto-flip to reveal
                setTimeout(() => {
                    shuffleContainer.classList.remove('active');
                    selectNewCard(true); // Auto-flip
                    
                    setTimeout(() => {
                        shuffleContainer.innerHTML = '';
                        cardElement.classList.remove('flipping-fast');
                    }, 300);
                }, 800);
            }, 200);
        } else {
            showShufflingAnimation().then(() => {
                selectNewCard(true); // Auto-flip
            });
        }
        return;
    }
    
    // NORMAL CASE: We already have a real card showing
    // No need to check if flipped - draw button always works now
    
    // Check if deck is exhausted
    if (isDeckExhausted()) {
        if (confirm("You've used all cards in this deck! Reset and shuffle?")) {
            resetGame();
        }
        return;
    }
    
    // Disable draw button during animation
    drawButton.disabled = true;
    
    // Store current card as previous (only if it was revealed)
    if (gameState.currentCardText && gameState.isFlipped) {
        gameState.previousCard = gameState.currentCardText;
        gameState.previousCardType = gameState.currentCardType;
        updatePreviousCardDisplay();
    }
    
    // Play sound if enabled
    if (gameState.soundEnabled) {
        playSound('draw');
    }
    
    // Special reset for whiskey shot tracking
    if (gameState.currentDeck === 'whiskey') {
        gameState.whiskeyShotTaken = false;
    }
    
    // First, flip the card to back (if currently showing front)
    if (gameState.isFlipped) {
        cardElement.classList.add('flipping-fast');
        flipCard();
        
        // Create shuffle cards
        createShuffleCards();
        
        // Start shuffle animation
        setTimeout(() => {
            shuffleContainer.classList.add('active');
            
            const shuffleCards = document.querySelectorAll('.shuffle-card');
            shuffleCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.animation = `shuffle 0.5s ease ${index * 0.05}s forwards`;
            });
            
            // After shuffle, select new card AND auto-flip to reveal
            setTimeout(() => {
                shuffleContainer.classList.remove('active');
                selectNewCard(true); // Auto-flip
                
                setTimeout(() => {
                    shuffleContainer.innerHTML = '';
                    cardElement.classList.remove('flipping-fast');
                }, 300);
            }, 800);
        }, 200);
    } else {
        showShufflingAnimation().then(() => {
            selectNewCard(true); // Auto-flip
        });
    }
}

// Select a new random card - autoFlip parameter added
function selectNewCard(autoFlip = false) {
    const deck = decks[gameState.currentDeck];
    const cardTypes = Object.keys(deck.cards);
    
    // Special handling for Wild Ones escape cards
    if (gameState.currentDeck === 'wild' && gameState.wildEscapeCardsUsed >= 2) {
        // Remove escape from available types if both used
        cardTypes.splice(cardTypes.indexOf('escape'), 1);
    }
    
    // Keep trying until we find an available card
    let selectedType, selectedIndex, cardText;
    let attempts = 0;
    const maxAttempts = 50;
    
    do {
        // Randomly select card type
        selectedType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        const cardArray = deck.cards[selectedType];
        
        // Special handling for Wild Ones escape cards
        if (gameState.currentDeck === 'wild' && selectedType === 'escape') {
            if (gameState.wildEscapeCardsUsed < 2) {
                selectedIndex = Math.floor(Math.random() * 2);
                if (!gameState.usedCards[selectedType].has(selectedIndex)) {
                    cardText = cardArray[selectedIndex];
                    break;
                }
            }
        } else {
            // Normal card selection
            selectedIndex = Math.floor(Math.random() * cardArray.length);
            if (!gameState.usedCards[selectedType].has(selectedIndex)) {
                cardText = cardArray[selectedIndex];
                break;
            }
        }
        
        attempts++;
    } while (attempts < maxAttempts);
    
    if (attempts >= maxAttempts || !cardText) {
        alert("Error selecting card. Resetting deck.");
        resetGame();
        return;
    }
    
    // Mark card as used
    gameState.usedCards[selectedType].add(selectedIndex);
    
    // Update game state
    gameState.currentCardType = selectedType;
    gameState.currentCardText = cardText;
    gameState.currentCardIndex = selectedIndex;
    gameState.cardCount++;
    
    // Special tracking
    if (gameState.currentDeck === 'wild' && selectedType === 'escape') {
        gameState.wildEscapeCardsUsed++;
    }
    
    // Update UI
    cardPrompt.innerHTML = cardText;
    cardPrompt.className = 'question';
    cardNumber.textContent = gameState.cardCount;
    setCardType(selectedType);
    
    // Add to history
    gameState.cardHistory.push({
        text: cardText,
        type: selectedType,
        deck: gameState.currentDeck
    });
    
    // AUTO-FLIP: If autoFlip is true, flip the card to reveal
    if (autoFlip) {
        // Small delay to let the shuffle animation finish
        setTimeout(() => {
            // Make sure card is showing back first
            if (gameState.isFlipped) {
                // Card is currently flipped (showing front), need to reset to back first
                cardElement.classList.remove('flipped');
                gameState.isFlipped = false;
                
                // Then flip to front after a brief moment
                setTimeout(() => {
                    flipCard();
                    updateDrawButton();
                    
                    // Play flip sound
                    if (gameState.soundEnabled) {
                        playSound('flip');
                    }
                }, 150);
            } else {
                // Card is already showing back, just flip it
                flipCard();
                updateDrawButton();
                
                // Play flip sound
                if (gameState.soundEnabled) {
                    playSound('flip');
                }
            }
        }, 100);
    } else {
        // Still update the draw button
        updateDrawButton();
    }
}

// Check if deck is exhausted
function isDeckExhausted() {
    const deck = decks[gameState.currentDeck];
    
    // Special handling for Wild Ones
    if (gameState.currentDeck === 'wild') {
        let totalAvailable = 0;
        for (const type in deck.cards) {
            if (type === 'escape') {
                totalAvailable += deck.specialRules.escapeCards - gameState.wildEscapeCardsUsed;
            } else {
                totalAvailable += deck.cards[type].length - gameState.usedCards[type].size;
            }
        }
        return totalAvailable <= 0;
    }
    
    // Normal decks
    for (const type in deck.cards) {
        if (gameState.usedCards[type].size < deck.cards[type].length) {
            return false;
        }
    }
    return true;
}

// Create shuffle cards with current deck's back design
// NOW MATCHES THE MAIN CARD BACK STYLING EXACTLY
function createShuffleCards() {
    shuffleContainer.innerHTML = '';
    const deck = decks[gameState.currentDeck];
    const colors = deck.colors;
    const nextCardNumber = gameState.cardCount + 1;
    
    // Calculate total cards
    let totalCardsCount = 0;
    for (const type in deck.cards) {
        if (gameState.currentDeck === 'wild' && type === 'escape') {
            totalCardsCount += deck.specialRules.escapeCards;
        } else {
            totalCardsCount += deck.cards[type].length;
        }
    }
    
    // Get the current card back class for consistency
    let backClass = colors.backClass;
    if (gameState.currentDeck === 'wild') backClass = 'wild-back';
    else if (gameState.currentDeck === 'whiskey') backClass = 'whiskey-back';
    
    // Create 5 shuffle cards - using the same structure as main card back
    for (let i = 0; i < 5; i++) {
        const shuffleCard = document.createElement('div');
        
        // Use the same class as main card back for consistent styling
        shuffleCard.className = 'shuffle-card ' + backClass;
        
        // Position each card consistently for stacking
        switch(i) {
            case 0: shuffleCard.style.transform = 'translateY(-12px) rotateZ(-3deg)'; break;
            case 1: shuffleCard.style.transform = 'translateY(-6px) rotateZ(2deg)'; break;
            case 2: shuffleCard.style.transform = 'translateY(0) rotateZ(-1deg)'; break;
            case 3: shuffleCard.style.transform = 'translateY(6px) rotateZ(3deg)'; break;
            case 4: shuffleCard.style.transform = 'translateY(12px) rotateZ(-2deg)'; break;
        }
        
        // Use the EXACT SAME structure as the main card back
        shuffleCard.innerHTML = `
            <div class="card-back-content">
                <div class="untolds-text">UNTOLDS</div>
                <div class="chapter-display font-chapter">${deck.chapter}</div>
                <div class="card-number-display">Card ${nextCardNumber}/${totalCardsCount}</div>
            </div>
        `;
        
        shuffleContainer.appendChild(shuffleCard);
    }
}

// Show shuffling animation
function showShufflingAnimation() {
    return new Promise((resolve) => {
        createShuffleCards();
        const shuffleCards = document.querySelectorAll('.shuffle-card');
        
        shuffleContainer.classList.add('active');
        
        shuffleCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.animation = `shuffle 0.5s ease ${index * 0.05}s forwards`;
        });
        
        setTimeout(() => {
            shuffleContainer.classList.remove('active');
            setTimeout(() => {
                shuffleContainer.innerHTML = '';
                resolve();
            }, 300);
        }, 800);
    });
}

// Handle card click - still works for manual flipping
function handleCardClick() {
    // Don't flip if we're showing instructions
    if (gameState.currentCardIndex === -1) {
        return;
    }
    
    // Only flip if card is not already flipped
    // (prevents accidental double-flip if user clicks card after auto-flip)
    if (!gameState.isFlipped) {
        flipCard();
        updateDrawButton();
    }
    
    // Whiskey shot sound
    if (gameState.currentDeck === 'whiskey' && gameState.soundEnabled && !gameState.whiskeyShotTaken && gameState.isFlipped) {
        gameState.whiskeyShotTaken = true;
        playSound('whiskey');
    }
}

// Flip card
function flipCard() {
    if (gameState.soundEnabled) {
        playSound('flip');
    }
    
    cardElement.classList.toggle('flipped');
    gameState.isFlipped = !gameState.isFlipped;
}

// Update previous card display
function updatePreviousCardDisplay() {
    if (gameState.previousCard) {
        previousCardContent.innerHTML = gameState.previousCard;
        previousCardContent.classList.remove('no-previous');
    } else {
        previousCardContent.innerHTML = '<span class="no-previous">No previous card yet</span>';
    }
}

// Update deck display
function updateDeckDisplay() {
    const deck = decks[gameState.currentDeck];
    cardDeckName.textContent = deck.subtitle;
    chapterDisplay.textContent = deck.chapter;
    chapterDisplay.className = "chapter-display font-chapter";
    currentGameDeck.textContent = deck.name;
    
    // Calculate total cards
    let total = 0;
    for (const cardType in deck.cards) {
        if (gameState.currentDeck === 'wild' && cardType === 'escape') {
            total += deck.specialRules.escapeCards;
        } else {
            total += deck.cards[cardType].length;
        }
    }
    totalCards.textContent = total;
}

// Change deck from dropdown
function changeDeck(deckId) {
    if (deckId === gameState.currentDeck) {
        closeAllDropdowns();
        return;
    }
    
    pendingDeckChange = deckId;
    currentDeckName.textContent = decks[gameState.currentDeck].name;
    newDeckName.textContent = decks[deckId].name;
    deckChangeModal.classList.add('active');
    closeAllDropdowns();
}

// Continue with new deck
function continueWithNewDeck() {
    gameState.currentDeck = pendingDeckChange;
    initDeckState();
    deckChangeModal.classList.remove('active');
    pendingDeckChange = null;
}

// Reset with new deck
function resetWithNewDeck() {
    gameState.currentDeck = pendingDeckChange;
    resetGame();
    deckChangeModal.classList.remove('active');
    pendingDeckChange = null;
}

// Reset game
function resetGame() {
    if (gameState.cardCount > 0 && !confirm("Are you sure you want to reset the game? All progress will be lost.")) {
        return;
    }
    
    initDeckState();
    
    if (gameState.soundEnabled) {
        playSound('reset');
    }
}

// Toggle dropdown
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const isActive = dropdown.classList.contains('active');
    
    closeAllDropdowns();
    
    if (!isActive) {
        dropdown.classList.add('active');
    }
}

// Close all dropdowns
function closeAllDropdowns() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
    });
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('untoldsDarkMode', document.body.classList.contains('dark-mode'));
    
    // Re-apply deck-specific colors
    updateDeckColors();
    updateLandingPageCardColors();
}

// Sound effects
function playSound(type) {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        if (type === 'draw') {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(300 + (i * 50), audioContext.currentTime);
                    
                    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                    
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.1);
                }, i * 80);
            }
            
        } else if (type === 'flip') {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(392, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(523.25, audioContext.currentTime + 0.2);
            
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.type = 'sine';
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.3);
            
        } else if (type === 'reset') {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(392, audioContext.currentTime + 0.3);
            
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
            
            oscillator.type = 'sawtooth';
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.4);
            
        } else if (type === 'whiskey') {
            // Whiskey glass clink sound
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(440 + (i * 20), audioContext.currentTime);
                    
                    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
                    
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.1);
                }, i * 50);
            }
        }
    } catch (e) {
        // Audio not supported
    }
}

// Go back to landing page with confirmation
function goToLandingPage() {
    if (gameState.cardCount > 0) {
        if (confirm("Are you sure you want to go back to the menu? This will reset your current game.")) {
            resetGame();
            landingPage.classList.remove('hidden');
            gamePage.classList.remove('active');
            // Reset deck selection
            document.querySelectorAll('.deck-card').forEach(card => {
                card.style.borderColor = 'transparent';
            });
        }
    } else {
        landingPage.classList.remove('hidden');
        gamePage.classList.remove('active');
        // Reset deck selection
        document.querySelectorAll('.deck-card').forEach(card => {
            card.style.borderColor = 'transparent';
        });
    }
}

// ================================================
// NEW FUNCTIONS FOR REDESIGNED LANDING PAGE
// ================================================

// Enhanced deck selection for dot navigation
function setupDotNavigation() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const deckId = this.dataset.deck;
            selectDeck(deckId);
            updateStackedCard(deckId);
        });
    });
    
    // Also make the stacked card clickable for deck cycling
    const stackedCards = document.querySelector('.stacked-cards');
    if (stackedCards) {
        stackedCards.addEventListener('click', function(e) {
            if (!e.target.closest('.dot')) {
                cycleThroughDecks();
            }
        });
    }
}

// Cycle through decks when clicking stacked cards
function cycleThroughDecks() {
    const deckIds = ['unsung', 'unsungplus', 'love', 'loveplus', 'between', 'wild', 'whiskey'];
    const currentIndex = deckIds.indexOf(gameState.currentDeck);
    const nextIndex = (currentIndex + 1) % deckIds.length;
    const nextDeck = deckIds[nextIndex];
    
    selectDeck(nextDeck);
    updateStackedCard(nextDeck);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (!gamePage.classList.contains('active')) return;
    
    switch(e.key) {
        case ' ':
        case 'Enter':
            e.preventDefault();
            handleCardClick();
            break;
        case 'd':
        case 'D':
            e.preventDefault();
            drawCard();
            break;
        case 'f':
        case 'F':
            e.preventDefault();
            if (gameState.currentCardIndex !== -1) {
                flipCard();
                updateDrawButton();
            }
            break;
        case 'r':
        case 'R':
            e.preventDefault();
            resetGame();
            break;
        case 'Escape':
            closeAllDropdowns();
            deckChangeModal.classList.remove('active');
            break;
    }
});

// Modal functions
function showHowToPlay() {
    closeAllDropdowns();
    document.getElementById('howToPlayModal').classList.add('active');
}

function showAbout() {
    closeAllDropdowns();
    document.getElementById('aboutModal').classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    // Set initial deck
    const initialDeck = 'unsung';
    selectDeck(initialDeck);
    updateStackedCard(initialDeck);
    
    // Setup dot navigation
    setupDotNavigation();
    
    // Update initial colors
    updateDeckColors();
    updateLandingPageCardColors();
    
    // Add click event to game title to go back to landing page
    const currentGameDeck = document.getElementById('currentGameDeck');
    if (currentGameDeck) {
        currentGameDeck.addEventListener('click', goToLandingPage);
    }
});

// Add to game.js - iOS Touch Support
document.addEventListener('DOMContentLoaded', function() {
    // Fix: iOS doesn't have hover states
    document.body.classList.add('ios-device');
    
    // Fix: Prevent zoom on double-tap
    document.addEventListener('dblclick', function(e) {
        e.preventDefault();
    }, { passive: false });
    
    // Fix: Better touch handling for cards
    const cards = document.querySelectorAll('.card-container, .stack-card, .deck-card');
    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        });
        card.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        });
    });
});