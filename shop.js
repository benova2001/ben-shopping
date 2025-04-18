document.addEventListener('DOMContentLoaded', () => {
    const arButton = document.getElementById('ar-preview-button');
    const arPreviewSection = document.getElementById('arPreviewSection');

    if (arButton) {
        arButton.addEventListener('click', () =>{
            arPreviewSection.style.display = 'block';
            arButton.style.display = 'none' //Hide the AR button after click

            marker = document.querySelector("my-marker");
            if (marker) {
                marker.addEventListener("markerFound", () => {
                    console.log("Marker found!");
                });
            } else {
                console.error("Marker not found in DOM.");
            }

            var THREE = window.THREE

            console.log(THREE);

            AFRAME.scenes[0].addEventListener("loaded", () => {
                //Safe to run AR code now
            });
        });
    }
});



function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    chatbox.classList.toggle('show');
  }

  function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    const messages = document.getElementById('chatMessages');

    if (message) {
      const userDiv = document.createElement('div');
      userDiv.textContent = "You: " + message;
      messages.appendChild(userDiv);

      const aiDiv = document.createElement('div');
      aiDiv.textContent = "Ben AI: I received your message - '" + message + "'";
      messages.appendChild(aiDiv);

      input.value = "";
      messages.scrollTop = messages.scrollHeight;
    }
  }

  document.addEventListener("DOMContentLoaded", function() {

    window.replaceProduct = function (modelGLB,modelUSDZ) {
        const viewer = document.getElementById('modelViewer');
        viewer.setAttribute('src', modelGLB);
        viewer.setAttribute('ios-src', modelUSDZ);
    };
   });




  document.addEventListener('DOMContentLoaded',function() {
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');

const responses = {
    en: {
        payment:"You can pay using PayPal, M-Pesa, Airtel Money,Halo Pesa and Tigo Pesa or mix by Yas. Remember all the transaction are done from these method it is very fast and safe payment method.",
        wishlist:"Click to'add to wishlist' button to save your favorite products that are categorised in web store. Enjoy this site and explore more with most shocking features.",
        ar:"Tap on 'preview in AR' to view the product in augmented reality.",
        how_to_buy:"Browser products,add to wishlist,and use one of the payment methods to complete your purchase. Also feel free ask more details about payment method.",
        shipping:"We currently offer shipping within Tanzania and worldwide and we will deliver your product on time and fast.Don't get me wrong but try yourself and see magic of this website I know you will never regret using our shopping site",
        contact:"Feel free to contact us via our 'Contact' page for any inquiries.",
        product_inquiry:"Click on  a product to see more details and add it to your cart or wishlist.",
        return_policy:"We accept returns within 30 days of purchase.Ensure the product is in its original condition.Feel free to explore our shopping and more unique feature in this site.",
        stores_hours:"Our stores are available everyday no need to worry about our dear customers.",
        discount:"You can find discounts and offers in the promotions section on our website.We care about in helping to grow your business I'll bet you will archieve your goal in becoming wealth.",
        website:"Firstly i wanna welcome you to our shopping site with very intelligent feature. Also this website helps the local sellers in selling their products through our site and enable the local sellers and businessmen to incline their economic status and becoming wealth.Chosing this site. I am sure you not regret it because it is very fast,easy,powerful that you have never seen it before. I BEN CHATGPT ASSISTANT, I wont say much just try it and you will see the results.",
           default:"I'm not sure I understand. Can you try asking in a different way?.",
    },

    sw: {
        payment:"Unaweza kulipa kwa kutumia PayPal, M-Pesa, Airtel Money,HaloPesa, Tigo Pesa au mix by Yas.kwataarifa zaidi tucheki kupitia WhatsApp au email yetu asante kwa kuchagua ben shopping.",
        wishlist:"Bonyeza kitufe cha kuongeza kwenye orodha za bidhaa zako(Add To Wishlist ) ya mapendeleo ili kuhifadhi bidhaa unazozipenda.",
        ar:"Gusa kitufe kilichoandikwa 'View AR Preview' ili kuona bidhaa kwa hali halisi yaani kuichunguza kwanza kama inaweza kukidhi hitaji lako kabla ya kuinunua bidhaa hiyo.",
        how_to_buy:"Chagua bidhaa, ongeza kwenye orodha ya mapendeleo, na tumia njia ya malipo ili kukamilisha ununuzi wako. kama bado unahitaji taarifa zaidi wasiliana nasi kupitia mtandao wa kijamii WhatsApp au tupige kwenye namba ambayo iko kwenye kurasa zetu. Jivinjari ukiwa na ben shopping ambayo ina vitu adimu kwaajili yenu wateja 'KARIBU SANA'",
        contact :"Kwa mawasiliano zaidi tutafute kupitia WhatApp au nambari ya simu hapo tajwa kwenye ukurasa wetu 'ASANTE SANA' ",
        shipping :"Tunatoa huduma za usafirishaji ndani Tanzania pia dunia kwa ujumla na bidhaa yako itafika kwa wakati bila shida yoyote",
        product_inquiry:"Angalia bidhaa mbalimbali kamavile Mavazi, Chakula, Sanaa na vifaa vya kielektronia. Tumia vichujio(search) ili kukutafutia unachohitaji kwenye ukurasa wetu wa masoko.",
        website:"kwanza nipende kuwakaribisha kwenye ukurasa wetu wa masoko. Tunauza bidhaa kwa kupitia mitandaoni, Pia na Tunatangaza biashara ya makampuni,taasisi na wafanyabiashara wadogowadogo ili kuwainua kiuchumi na kuifanya ipige hatua maradufu zaidi ya hapo awali na inaposti bidhaa zako duniani kufanya upate jina kubwa ya biashara yako unapotumia ben shopping vitu vilivyowekwa kwenye kurasa haijawahi kutokea MIMI BEN CHATGPT ASSISTANT nakuhimiza endelea kuwa nasi na uone matunda yake kamwe hautojutia.'KARIBU KWENYE UKURASA WETU'",
        "default":"Samahani,sielewi unachohitaji. Tafadhali uliza kwa njia nyingine."

    }

};



const keywordMap = {
     
        payment:["payment","pay","payment method","bill", "malipo","kulipia","lipa","muamala"  ],
        wishlist:["wishlist","favorite","save item","pendwa","mapendeleo","hifadhi bidhaa","kipenzi"],
        ar:["ar","view in ar","augmented","mtazamo wa ar","mtazamo halisi","angalia kwa ar"],
        how_to_buy:["how_to_buy","buy","purchase","buying","order","ununuzi","nunua","agiza","nitanunua vipi"],
        shipping:["shipping","deliver","delivery","usafirishaji","peleka","kukufikia","tuma bidhaa","kuipata bidhaa"],
        website:["website","ukurasa"],
        contact:["contact","find us","chat","call","support","help","assist","mawasiliano","wasiliana","msaada","mteja huduma"],
        product_inquiry:["product","products","catalog","category","categories","tafuta","bidhaa", "kucheki","angalia", "tafuta bidhaa","katalog","orodha ya bidhaa","mipangilio wa bidhaa"],
    
  };

 

     function detectLang(input) {
        const swWords = ["kulipa","nunua","bidhaa","msaada","wasiliana","orodha","sanaa","matamanio","ukurasa"];
        const swDetected = swWords.some(word => input.includes(word));
        return swDetected ? "sw" : "en";
     }



     function matchedKeyword(input) {
        const cleanInput = input.toLowerCase().trim();

        console.log("Cleaned Input:", cleanInput)
             for(const key in keywordMap) {
            if(Array.isArray(keywordMap[key])) {
               
            if( keywordMap[key].some(keyword => cleanInput.includes(keyword))) {

                 console.log(`Matched:${key}`); //Debugging: log matched keyword
                return key;
            }
        }
    }
        return "default";
     }






  function sendMessage() {
    const userInput = chatInput.value.trim();
    if(!userInput) return;
    appendMessage(userInput, 'user');
    chatInput.value='';
    getAIResponse(userInput);
}


function appendMessage(message, type,lang = 'en') {
    const msg =document.createElement('div');
    msg.className = type;
    msg.textContent = message;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;



    if (type === 'bot') {
        speakMessage(message,lang);

    }
}

        
        function speakMessage(message,lang) {
            const synth = window.speechSynthesis;
            const utter = new SpeechSynthesisUtterance(message);
            utter.lang = lang === 'sw' ? 'sw-TZ':'en-US';
            utter.pitch = 1.1;
            utter.rate = 0.95;
            utter.volume = 1;


            const voices = synth.getVoices();
            const preferredVoice = voices.find(voice => lang === 'sw' ? voice.lang.includes('sw') || 
        voice.name.toLowerCase().includes('google'): voice.lang.includes('en-GB') ||
    voice.name.toLowerCase().includes('google')
);


if(preferredVoice) utter.voice = preferredVoice;
  synth.speak(utter);
        }


     


function getAIResponse(userInput) {
    const input = userInput.toLowerCase();
    const lang = detectLang(input);
    const key = matchedKeyword(input);
    const response = responses[lang][key] || responses[lang].default;
    appendMessage(response,'bot',lang);
     
    }


   window.speechSynthesis.onvoiceschanged = () => {};


   sendButton.addEventListener("click", sendMessage);


// Firebase Configuration example not real upto to type the inputs  needed

const firebaseConfig = {
    apiKey: "AIzaSyAgh4VOSjGo0iv_Q2YfNtPhLQEEBK02rFE",
    authDomain:"ben-shopping-6a990.firebaseapp.com",
    projectId:"ben-shopping-6a990",
    storageBucket:"ben-shopping-6a990.firebasestorage.app",
    messagingSenderId:"979120174620",
    appid:"1:979120174620:web:cf22b5d5da449d37f951d9"
};


const app = firebase.initializeApp(firebaseConfig);
const database = firebaseConfig.database();

function fetchProductData(productId) {
    const productRef = database.ref('products/' + productId);
    productRef.get().then((snapshot) => {
        if(snapshot.exists()) {
            const product = snapshot.val();
            const basePrice = product.basePrice;
            const productName = product.name;

            document.getElementById('productName').innerText = productName;

            updatePrice(basePrice);
        } else {
            console.log("No data available");
        }

    }).catch((error) => {
        console.error("Error fetching data", error);
    });
}


function getDynamicPrice(basePrice) {
    const hour = new Date().getHours();
    let multiplier =1;


    if ((hour >= 7 && hour <= 9) || (hour >= 18 && hour <= 20)) {
        multiplier = 1.5;

        document.getElementById('surgeNote').innerText = "Surge pricing active due to high demand!";
    } else {
        document.getElementById('surgeNote').innerText = "";
    }


    return basePrice * multiplier;

}

    function updatePrice(basePrice) {
        const dynamicPrice = getDynamicPrice(basePrice);
        document.getElementById('price').innerText = dynamicPrice.toLocaleString() + "TZS";
    }

    document.getElementById('productName').textContent= data.name;
    document.getElementById('productPrice').textContent= data.basePrice +'TZS';
    document.getElementById('modelViewer').setAttribute('src',data.modelUrlGLB);
    document.getElementById('modelViewer').setAttribute('ios-src',data.modelUrlUSDZ);


  fetchProductData(1); // it is still an example
 

});